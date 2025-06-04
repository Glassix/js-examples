const { GlassixClient } = require('glassix');

exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { apiKey, subdomain, payload } = JSON.parse(event.body);

    const client = new GlassixClient({
      accessToken: apiKey,
      baseUrl: `https://${subdomain}.glassix.com`
    });

    const result = await client.protocols.send({
      protocolType: 'WhatsApp',
      ...payload
    });

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };

  } catch (error) {
    console.error("❌ Server error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || 'Unknown error' })
    };
  }
};
