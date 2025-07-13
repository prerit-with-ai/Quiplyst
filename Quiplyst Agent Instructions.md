## **Overview:**

Quiplyst is an AI-powered, end-to-end FinanceOps platform designed to transform complex, routine financial operations into intuitive, engaging, and proactive experiences. The suite covers the entire finance ecosystem, from core dashboards and analytics to advanced automation, compliance, and futuristic innovations like metaverse collaboration and zero-UI automation. Mercury the mascot is present as onboarding greeter, dashboard notifier, error-state guide, and light/dark-mode companion. The platform is device-agnostic, supports web/mobile/AR/VR, and integrates with Clerk.dev, Supabase, Stripe, Zapier, Cloudinary/OCR-Space, OpenAI/Pinecone, Pusher, Sentry/PostHog, and Vercel/GitHub Actions.

## **1\. Mercury Mascot Component**

Implement a reusable Mercury mascot component for onboarding, dashboard, error, and notification states.

1. Design or import Mercury mascot assets (SVG, GIF, or Lottie) in both light and dark mode variants.  
2. Create a Mercury React component with props for context (onboarding, dashboard, error, notification) and mode (light/dark).  
3. Add basic animation (entrance, idle, celebrate, error) using Framer Motion or CSS.  
4. Ensure accessibility: alt text, ARIA labels, keyboard navigation.

## **2\. Onboarding Flow with Mercury**

Prototype onboarding with Mercury as greeter and guide.

1. Create onboarding route/page in Next.js.  
2. Display Mercury mascot with welcome message and step-by-step onboarding tooltips.  
3. Script onboarding copy in the Clever Catalyst tone (energetic, concise, witty).  
4. Show Mercury in a celebratory pose on onboarding completion.

## **3\. Dashboard with Mercury Notifier**

Integrate Mercury as a notifier on the main dashboard.

1. Create dashboard route/page with sample KPI widgets (e.g., cash burn, runway).  
2. Display Mercury in a fixed/floating position with a daily tip or insight.  
3. Allow Mercury to highlight urgent KPIs or trends with animation or visual cues.

## **4\. Expense Submission with Mercury**

Prototype expense submission with Mercury confirmation and error handling.

1. Create expense submission form with file upload (image, PDF).  
2. Integrate Cloudinary/OCR-Space for receipt OCR and Supabase for data storage.  
3. On successful categorization, show Mercury with a witty confirmation message.  
4. If AI cannot categorize, show Mercury with a supportive error message and manual tagging option.

## **5\. Real-Time Anomaly Detection with Mercury**

Show Mercury when an anomaly is detected in financial data.

1. Simulate anomaly detection (e.g., outlier in transaction data).  
2. Display Mercury with a supportive tip and one-click drilldown or escalation option.

## **6\. Notifications & Error States**

Integrate Mercury into notifications and error states across the app.

1. Extend notification system to support Mercury-themed pop-ups with witty copy.  
2. Display Mercury in error states with clear, supportive guidance and next steps.

## **7\. Brand & Accessibility Compliance**

Ensure all Mercury interactions follow brand and accessibility guidelines.

1. Apply color palette: Electric Teal, Indigo Night, Goldenrod, Coral Blossom, Soft Cream.  
2. Use Montserrat Bold for headlines, Open Sans Regular for body.  
3. Test Mercury in both light and dark modes.  
4. Verify accessibility: keyboard navigation, screen reader support, color contrast.

