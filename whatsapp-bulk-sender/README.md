# WhatsApp Bulk Sender

This tool provides a user-friendly, browser-based interface for sending WhatsApp messages in bulk using the Protocol Send method of the [Glassix NPM](https://github.com/Glassix/glassix-js) package. Because the tool sends non-ticket WhatsApp messages, you should familiarize yourself with [non-ticket message sending](https://docs.glassix.com/docs/send-a-non-ticket-message#/) before continuing, if you haven't already.

As this is a simply a browser-based interface for non-ticket message sending, the same [requirements](https://docs.glassix.com/docs/send-a-non-ticket-message#prerequisites) apply as when sending with the Glassix NPM package or directly through the API.

> [!IMPORTANT]
> While the provided sample tool is completely functional, please keep in mind that it is intended as an example only, and should be considered a kicking-off point or template for your own project, rather than as a complete solution. This sample does not, for example, collect or track message delivery statuses, something we would recommend be added into any production solution.

To use this tool, you must have:
- A way to make API calls and a basic understanding of the API.
- An [API access token](https://docs.glassix.com/reference/access-token) to provide in the request header.
- An active channel identifier (either a phone number or Apple Business ID) to send messages from.
- A channel with active non-ticket message sending.

In addition, the provided sample must be deployed to a web server. You will need:
- An existing web server or a basic understanding of how to spin up a server
- A basic understanding of how to work with and deploy server-side code

<br>
<br>
<p align="center">
  <img src="https://github.com/user-attachments/assets/d4b0e905-c6f1-4c21-8177-d3933ed9b4eb">
</p>
<br>
<br>

## Functionality

The sample tool in this example includes the following functionality:
- Send WhatsApp messages to large numbers of recipients at one time from your Glassix number
- Track sending status with a real-time progress bar
- Track successful and failed API calls with a built-in log
- Configure and apply a rate limit (default: 500 messages per minute)

Before deploying this tool for any type of regular use, we would recommend adding in at least the following:
- WebSockets or polling to collect, display and log [message delivery statuses](https://docs.glassix.com/docs/send-a-non-ticket-message#getting-message-status-responses)
- A retry mechanism for failed sends, based on message delivery statuses

Please keep in mind that while this tool does not track or collect message delivery statuses as-built, it can be modified to do so through use of our [non-ticket message status webhook event](https://docs.glassix.com/reference/events-overview#/non-ticket-message-status).
<br>
<br>

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Glassix/js-examples.git
cd whatsapp-bulk-sender
```
Or download the project folder directly.

### 2. Install Dependencies

Required for Glassix NPM support - run in the project directory:

```bash
npm install
```

### 3. Modify and Deploy

This is provided as an example only, and while it is fully functional, it should be modified before deployment.

To preview the tool as-is, a Netlify configuration file is included for quick deployment via the [Netlify CLI](https://docs.netlify.com/cli/get-started/#manual-deploys).
<br>
<br>

## Usage Instructions for the Sample Tool

1. Deploy the sample project and navigate to it in the browser
3. Fill in the following fields:
   - **API Access Token** - See [here](https://docs.glassix.com/reference/access-token#/) for instructions on generating an access token
   - **Glassix Subdomain** - e.g. `yourteam` from `https://yourteam.glassix.com`
   - **Sender Number** - WhatsApp number connected to Glassix
   - **WhatsApp Template Text** - Approved WhatsApp template text
   - **File URLs** - Comma separated URLs where your header media is hosted
4. Download the provided template or create a CSV file with a `to` column and recipient numbers in the following format: 12065551234
5. Upload your CSV containing recipient phone numbers
6. Click **Send Messages**
<br>

## Dependencies in this Example

- [Glassix NPM](https://github.com/Glassix/glassix-js)
- [PapaParse](https://www.papaparse.com/) for CSV parsing
- [Material Components Web](https://github.com/material-components/material-components-web)
- [Netlify Functions](https://www.netlify.com/platform/core/functions/)
<br>

## Security & Privacy

This is provided as an example only. Keep this project private and never share your Glassix API credentials with anyone.

> [!CAUTION]
> Never send API tokens directly from the frontend and use the [Glassix NPM](https://github.com/Glassix/glassix-js) package when possible.
> **Always** get consent from recipients before sending them marketing material.
<br>
<br>

## License

Licensed under the Apache License, Version 2.0. See [LICENSE](https://github.com/Glassix/js-examples/blob/whatsapp-sender/LICENSE) for details.
