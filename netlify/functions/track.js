export async function handler(event) {
  const source = event.queryStringParameters.source || "unknown";

  return {
    statusCode: 200,
    body: `Function working. Source = ${source}`
  };
}