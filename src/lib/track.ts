export function trackEvent(event: string, data?: any) {
  if (typeof window === "undefined") return;

  fetch("/api/track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      event,
      data,
      path: window.location.pathname,
    }),
  }).catch(() => {});
}