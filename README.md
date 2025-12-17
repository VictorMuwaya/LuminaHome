# Lumina Home - Modern E-commerce Catalog

Lumina Home is a sophisticated boutique e-commerce catalog application designed for high-end furniture and home decor. It blends a premium shopping experience with an intelligent AI Sales Associate to bridge the gap between browsing and buying.

## 🌟 Key Features

- **Intelligent AI Assistant**: Powered by Google's `gemini-2.5-flash`, the built-in assistant understands the entire product catalog and can answer specific questions about materials, pricing, and recommendations.
- **Curated Catalog**: A visually stunning grid of products with high-quality imagery and detailed descriptions.
- **Advanced Filtering**: Real-time search and category-based filtering (Furniture, Lighting, Decor, Kitchen).
- **Direct Ordering**: Seamless "Call to Order" and "WhatsApp" integration for instant customer-to-business communication.
- **Responsive Design**: A mobile-first, elegant UI built with Tailwind CSS that looks great on any device.
- **Business Context**: Includes an "About Us" section highlighting artisan craftsmanship and a "Contact" section with integrated location details.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **AI Engine**: [Google Gemini API (@google/genai)](https://ai.google.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

To use the AI features, you must have a Google Gemini API Key.

### Environment Setup

The application expects an environment variable named `API_KEY`.

```bash
# For local development, ensure your environment has:
API_KEY=your_google_gemini_api_key
```

## 🤖 AI Sales Associate Logic

The AI assistant in `services/geminiService.ts` is initialized with a robust system instruction that provides it with:
1. **Catalog Awareness**: The full JSON representation of all products.
2. **Business Knowledge**: Physical address, contact numbers, and operating hours.
3. **Persona Guidelines**: Instructions to be concise, polite, and to drive sales via the integrated contact buttons.

## 📁 Folder Structure

- `/components`: Modular UI components like `AIChat`, `ProductCard`, and `Hero`.
- `/services`: Logic for interacting with the Google GenAI SDK.
- `constants.ts`: The "Source of Truth" for the product catalog and business info.
- `types.ts`: Shared TypeScript definitions for data consistency.

---
*Lumina Home - Timeless design for modern living.*