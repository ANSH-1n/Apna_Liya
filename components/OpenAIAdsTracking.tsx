'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

type Oaiq = (...args: unknown[]) => void;

declare global {
  interface Window {
    oaiq?: Oaiq;
  }
}

export function trackLeadCreated() {
  if (typeof window === 'undefined' || typeof window.oaiq !== 'function') return;
  window.oaiq('measure', 'lead_created', { type: 'customer_action' });
}

const pendingLeadForms = new WeakSet<HTMLFormElement>();

export function beginLeadSubmission(form: HTMLFormElement): ((successful: boolean) => void) | null {
  if (pendingLeadForms.has(form)) return null;
  pendingLeadForms.add(form);

  let completed = false;
  return (successful) => {
    if (completed) return;
    completed = true;
    pendingLeadForms.delete(form);
    if (successful) trackLeadCreated();
  };
}

export default function OpenAIAdsTracking() {
  const pathname = usePathname();
  const lastPageView = useRef<string | null>(null);

  useEffect(() => {
    if (lastPageView.current === pathname) return;
    lastPageView.current = pathname;
    window.oaiq?.('measure', 'page_viewed', {
      type: 'contents',
      contents: [{ id: pathname, name: pathname, content_type: 'page' }],
    });
  }, [pathname]);

  return null;
}
