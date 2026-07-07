"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

type RoutePrefetcherProps = {
  routes: string[];
};

function scheduleIdleTask(callback: () => void) {
  if ("requestIdleCallback" in window) {
    const id = window.requestIdleCallback(callback, { timeout: 2500 });

    return () => window.cancelIdleCallback(id);
  }

  const id = globalThis.setTimeout(callback, 450);

  return () => globalThis.clearTimeout(id);
}

export function RoutePrefetcher({ routes }: RoutePrefetcherProps) {
  const router = useRouter();

  useEffect(() => {
    const uniqueRoutes = Array.from(new Set(routes));
    const timeoutIds: number[] = [];
    let cancelled = false;
    const cleanupTasks = uniqueRoutes.map((route, index) => {
      const prefetchRoute = () => {
        if (cancelled) {
          return;
        }

        const prefetchOptions = { kind: "full", onInvalidate: prefetchRoute } as Parameters<typeof router.prefetch>[1];

        router.prefetch(route, prefetchOptions);
      };

      return scheduleIdleTask(() => {
        const timeoutId = window.setTimeout(prefetchRoute, index * 120);
        timeoutIds.push(timeoutId);
      });
    });

    return () => {
      cancelled = true;
      cleanupTasks.forEach((cleanup) => cleanup());
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, [router, routes]);

  return null;
}
