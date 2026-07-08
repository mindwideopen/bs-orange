"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

type RoutePrefetcherProps = {
  routes: string[];
};

function scheduleIdleTask(callback: () => void) {
  if ("requestIdleCallback" in window) {
    const id = window.requestIdleCallback(callback, { timeout: 12000 });

    return () => window.cancelIdleCallback(id);
  }

  const id = globalThis.setTimeout(callback, 9000);

  return () => globalThis.clearTimeout(id);
}

export function RoutePrefetcher({ routes }: RoutePrefetcherProps) {
  const router = useRouter();

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { effectiveType?: string; saveData?: boolean } }).connection;
    const isConstrainedConnection =
      connection?.saveData || connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g";
    const isMobileViewport = window.matchMedia("(max-width: 900px)").matches;

    if (isConstrainedConnection || isMobileViewport) {
      return;
    }

    const uniqueRoutes = Array.from(new Set(routes));
    const timeoutIds: number[] = [];
    let cancelled = false;
    const cleanupTasks = uniqueRoutes.map((route, index) => {
      const prefetchRoute = () => {
        if (cancelled) {
          return;
        }

        const prefetchOptions = { kind: "full" } as Parameters<typeof router.prefetch>[1];

        router.prefetch(route, prefetchOptions);
      };

      return scheduleIdleTask(() => {
        const timeoutId = window.setTimeout(prefetchRoute, 9000 + index * 400);
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
