exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: "Method Not Allowed"
      };
    }
  
    try {
      const body = JSON.parse(event.body);
      if (body.eventType === 'non_ticket.message_status') {
        console.log("✅ Status Update:", {
          messageId: body.messageId,
          status: body.status,
          timestamp: body.timestamp,
          to: body.to
        });
      } else {
        console.log("📥 Other event:", body);
      }
  
      return {
        statusCode: 200,
        body: "OK"
      };
    } catch (err) {
      console.error("❌ Webhook Error:", err);
      return {
        statusCode: 400,
        body: "Invalid JSON"
      };
    }
  };
  