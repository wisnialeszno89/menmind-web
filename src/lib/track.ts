export async function trackEvent(
  event: string,
  data?: Record<string, any>
) {
  try {
    let sessionId = localStorage.getItem("mm_session_id");

    if (!sessionId) {
      sessionId = crypto.randomUUID();
      localStorage.setItem("mm_session_id", sessionId);
    }

    await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event,
        data,
        session_id: sessionId,
        path: window.location.pathname,
      }),
    });
  } catch (err) {
    console.error("Tracking error:", err);
  }
}