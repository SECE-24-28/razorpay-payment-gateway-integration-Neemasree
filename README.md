# Razorpay Payment Gateway Integration

A Next.js application demonstrating end-to-end Razorpay payment gateway integration with order creation and payment verification.

## Tech Stack

- **Framework** - Next.js 16 (App Router)
- **Language** - TypeScript
- **Styling** - Tailwind CSS
- **Payment Gateway** - Razorpay

## Features

- Create Razorpay orders via server-side API
- Launch Razorpay checkout popup on the client
- Verify payment signature on the server to confirm successful transactions

## Project Structure

```
my-app/
├── app/
│   ├── api/
│   │   ├── createOrder/
│   │   │   └── route.ts       # Creates a Razorpay order
│   │   └── verifyPayment/
│   │       └── route.ts       # Verifies payment signature
│   ├── layout.tsx
│   └── page.tsx               # Payment UI
├── .env.local                 # Environment variables (not committed)
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- A [Razorpay account](https://razorpay.com) with API keys

### 1. Clone the repository

```bash
git clone https://github.com/SECE-24-28/razorpay-payment-gateway-integration-Neemasree.git
cd razorpay-payment-gateway-integration-Neemasree
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root of the project:

```env
KEY_ID=your_razorpay_key_id
KEY_SECRET=your_razorpay_key_secret
NEXT_PUBLIC_KEY_ID=your_razorpay_key_id
```

> Get your API keys from the [Razorpay Dashboard](https://dashboard.razorpay.com/app/keys). Use test mode keys during development.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How It Works

1. User clicks **Pay Rs500** on the page
2. Frontend calls `POST /api/createOrder` → server creates an order via Razorpay API
3. Razorpay checkout popup opens with the order details
4. After payment, Razorpay returns `payment_id`, `order_id`, and `signature`
5. Frontend calls `POST /api/verifyPayment` → server validates the HMAC signature
6. User is shown success or failure alert based on verification result

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Environment Variables

| Variable | Description |
|---|---|
| `KEY_ID` | Razorpay Key ID (server-side) |
| `KEY_SECRET` | Razorpay Key Secret (server-side only) |
| `NEXT_PUBLIC_KEY_ID` | Razorpay Key ID (client-side) |

> Never expose `KEY_SECRET` to the client. It is used only in server-side API routes.
