# WhatsApp Bulk Sender

A browser-based tool for sending personalized WhatsApp messages in bulk using the [Glassix API](https://docs.glassix.com), styled with Material Design via [Material Components Web (MDC)](https://github.com/material-components/material-components-web).

Deployed on [Netlify](https://www.netlify.com/) with a serverless function that securely proxies requests.

---

## Functions

- Send WhatsApp messages to large numbers of recipients at one time from your Glassix number
- Track sending status with a real-time progress bar
- Track successful and failed API calls with a built-in log

## Features

- Styled with Google's Material Components Web (CSS + JS)
- Real-time progress bar
- Success/failure logging
- Rate limited to 500 messages per minute
- Secure Netlify function to proxy requests with your API key

---

## Folder Structure

```
whatsapp-bulk-sender/
├── public/
│   └── index.html           # Main frontend UI
├── functions/
│   └── proxySend.js         # Netlify serverless function (CORS-safe)
├── netlify.toml             # Netlify config
├── package.json             # For node-fetch (if needed)
└── README.md
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/whatsapp-bulk-sender.git
cd whatsapp-bulk-sender
```

### 2. Install Dependencies

Install for Netlify CLI and Glassix NPM support:

```bash
npm install
```


## Local Development (with Netlify CLI)

```bash
npm install -g netlify-cli
netlify dev
```

---

## Deploy to Netlify

```bash
netlify deploy --prod
```

> Make sure your `netlify.toml` is set to:

```toml
[build]
functions = "functions"
publish = "public"
```

---

## Usage Instructions

1. Go to your deployed app
2. Fill in the following fields:
   - API Access Token - See [here](https://docs.glassix.com/reference/access-token#/) for instructions on generating an access token
   - Glassix Subdomain - e.g. `yourteam` from `https://yourteam.glassix.com`
   - Sender Number - WhatsApp number connected to Glassix
   - WhatsApp Template Text - Approved WhatsApp template text
   - File URLs - Comma separated URLs where your header media is hosted
3. Download the provided template or create a CSV file with a `to` column and recipient numbers in the following format: 12065551234
4. Upload your CSV containing recipient phone numbers
5. Click **Send Messages**

---

## Technologies Used

- HTML + JavaScript
- [PapaParse](https://www.papaparse.com/) for CSV parsing
- [Material Components Web](https://github.com/material-components/material-components-web)
- Netlify Functions (`proxySend.js`)

---

## Security

Keep this project private or secure your deployment if used in production

- API tokens are never sent directly from the frontend
- All Glassix API calls go through a Netlify proxy function

---

## Future Improvements

- WebSocket or polling to reflect message delivery statuses
- Retry mechanism for failed sends
- CSV import with custom fields for message templating

---

## License

Licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) for details.