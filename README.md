# GameHub AI Chatbot

An intelligent customer service chatbot for a video game retail store, powered by Anthropic's Claude AI. This chatbot assists customers with inquiries about game availability, prices, trade-ins, pre-orders, and general gaming questions.

## Features

- AI-Powered Responses: Leverages Claude Sonnet 4 for natural, helpful conversations
- Real-time Chat Interface: Smooth, responsive chat experience
- Game Store Expertise: Specialized knowledge about gaming retail operations
- Modern UI: Clean, gaming-themed interface built with Tailwind CSS
- Fast Performance: Built on Next.js 14 with optimized API routes

## Live Demo

[View Live Demo](https://game-store-chatbot.vercel.app)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **AI Model**: Anthropic Claude Sonnet 4
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- An Anthropic API key ([Get one here](https://console.anthropic.com/))
- npm or yarn package manager

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gianluca-buonanno/Game-Store-Chatbot.git
   cd Game-Store-Chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   ANTHROPIC_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Use Cases

This chatbot can help customers with:

- **Product Inquiries**: Game availability, new releases, and upcoming titles
- **Pricing Information**: Current prices and special offers
- **Trade-In Programs**: How the trade-in system works
- **Pre-Orders**: Information about pre-ordering upcoming games
- **Console Information**: Details about gaming consoles and accessories
- **Store Policies**: Hours, locations, and general store information

## Project Structure

```
game-store-chatbot/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts      # Claude API integration
│   ├── page.tsx              # Main chat interface
│   └── layout.tsx            # Root layout
├── public/                   # Static assets
├── .env.local               # Environment variables (not committed)
└── package.json             # Project dependencies
```

## Configuration

### Customizing the Chatbot

You can modify the chatbot's behavior by editing the system prompt in `app/api/chat/route.ts`:

```typescript
system: `You are a helpful customer service assistant for "GameHub"...`
```

### Adjusting Response Length

Modify the `max_tokens` parameter in `app/api/chat/route.ts`:

```typescript
max_tokens: 1024  // Adjust as needed
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variable: `ANTHROPIC_API_KEY`
4. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/gianluca-buonanno/Game-Store-Chatbot)

## Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Gianluca Buonanno**

- GitHub: [@gianluca-buonanno](https://github.com/gianluca-buonanno)
- Project Link: [https://github.com/gianluca-buonanno/Game-Store-Chatbot](https://github.com/gianluca-buonanno/Game-Store-Chatbot)

## Acknowledgments

- [Anthropic](https://www.anthropic.com/) for Claude AI
- [Vercel](https://vercel.com/) for hosting platform
- [Next.js](https://nextjs.org/) team for the amazing framework
