export async function handler(event) {
  const source = event.queryStringParameters.source || "unknown";
  const campaign = event.queryStringParameters.campaign || "pickleball_tournament";

  const destination = "https://www.sportssync.asia/tournament/236";

  const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        source,
        campaign,
        destination,
        referrer: event.headers.referer || "",
        userAgent: event.headers["user-agent"] || ""
      })
    });
  } catch (error) {
    console.error("Tracking failed:", error);
  }

  return {
    statusCode: 302,
    headers: {
      Location: destination,
      "Cache-Control": "no-store"
    },
    body: ""
  };
}