export function trackEvent(event: string, payload?: Record<string, any>) {
  if (typeof window === "undefined") return;

  if (process.env.NODE_ENV === "development") {
    console.log("TRACK:", event, payload);
  }
}