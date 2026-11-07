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
  window.oaiq?.('measure', 'lead_created', { type: 'customer_action' });
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

  useEffect(() => {
    const trackContactClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest('a[href]');
      if (!(link instanceof HTMLAnchorElement)) return;

      const href = link.getAttribute('href')?.trim() ?? '';
      if (!/^tel:/i.test(href) && !/^https?:\/\/(?:wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)(?:\/|$)/i.test(href)) return;

      // The standard "contact" name is not supported. OpenAI documents lead_created for users who request contact.
      trackLeadCreated();
    };

    document.addEventListener('click', trackContactClick);
    return () => document.removeEventListener('click', trackContactClick);
  }, []);

  return null;
}
