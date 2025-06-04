exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }

  try {
    const { apiKey, subdomain, payload } = JSON.parse(event.body);

    if (!subdomain || !/^[a-z0-9\-]+$/.test(subdomain)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid or missing subdomain" })
      };
    }

    const apiUrl = `https://${subdomain}.glassix.com/api/v1.2/protocols/send`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
        "authorization": "Bearer " + apiKey
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    return {
      statusCode: response.status,
      body: JSON.stringify(result)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error", detail: error.message })
    };
  }
};
