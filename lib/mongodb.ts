import { MongoClient } from 'mongodb'
import type { QuoteRequestDocument } from './leads'

const uri = process.env.MONGODB_URI

const options = {}

let clientPromise: Promise<MongoClient> | undefined
let indexesPromise: Promise<void> | undefined

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

function getClientPromise() {
  if (!uri) {
    throw new Error('MONGODB_URI is not configured')
  }

  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
      const client = new MongoClient(uri, options)
      global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
  } else if (!clientPromise) {
    const client = new MongoClient(uri, options)
    clientPromise = client.connect()
  }

  return clientPromise
}

export async function getQuoteRequestsCollection() {
  const connectedClient = await getClientPromise()
  const collection = connectedClient.db().collection<QuoteRequestDocument>('quote_requests')

  if (!indexesPromise) {
    indexesPromise = collection
      .createIndexes([
        { key: { email: 1 }, name: 'email_1' },
        { key: { whatsappNumber: 1 }, name: 'whatsappNumber_1' },
        { key: { serviceRequired: 1 }, name: 'serviceRequired_1' },
        { key: { status: 1 }, name: 'status_1' },
        { key: { createdAt: -1 }, name: 'createdAt_-1' },
        { key: { selectedPackage: 1 }, name: 'selectedPackage_1' },
        { key: { selectedPlan: 1 }, name: 'selectedPlan_1' },
        { key: { nextFollowUpDate: 1 }, name: 'nextFollowUpDate_1' },
        { key: { priority: 1 }, name: 'priority_1' },
      ])
      .then(() => undefined)
      .catch((error) => {
        indexesPromise = undefined
        console.error('Failed to create quote request indexes', error)
      })
  }

  await indexesPromise
  return collection
}
