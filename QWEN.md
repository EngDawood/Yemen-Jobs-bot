# RSS-ify Telegram Bot - Project Context

## Project Overview

RSS-ify is a lightweight Telegram bot built with Node.js that delivers content from RSS feeds directly to Telegram group chats or private conversations. The bot allows users to easily subscribe to, manage, and receive updates from their favorite RSS feeds without any hassle.

### Key Technologies
- **Runtime**: Node.js with ES Modules (type: "module" in package.json)
- **Framework**: Grammy (Telegram bot framework)
- **Database**: MongoDB for storing chat subscriptions and feed data
- **RSS Parsing**: Custom Python API service (ParserAPI) running on localhost:5000
- **Dependencies**: axios, feedparser, dotenv, mongodb driver, xml2js, p-limit, pretty-bytes
- **Build Tool**: Bun (implied by presence of bun.lock)

### Architecture
The bot consists of two main components:
1. **Telegram Bot** (Node.js) - Handles user commands and message delivery
2. **Parser API** (Python) - Fetches and parses RSS feeds (runs as a separate service)

## Project Structure
```
rssify/
├── bot.mjs                 # Main bot entry point
├── start                   # Deployment script
├── package.json            # Dependencies and scripts
├── .env.example           # Environment variable template
├── ext/                   # Bot extensions
│   ├── commands/          # Command handlers (add, del, list, etc.)
│   ├── utils/             # Utility functions (database, logging, etc.)
│   └── sendRss.mjs        # RSS update delivery logic
└── api/                   # ParserAPI submodule (Python RSS parser)
```

## Environment Variables
The bot requires the following environment variables (see `example.env`):
- `TOKEN` - Telegram bot token
- `DB_URI` - MongoDB connection URI
- `DB_NAME` - Database name (defaults to "rssify")
- `OWNER_ID` - Bot owner's Telegram ID (for admin commands)
- `FEED_LIMIT` - Maximum feeds per chat (defaults to 20)

## Key Bot Features
- `/add` - Subscribe to new RSS feeds
- `/del` - Unsubscribe from feeds
- `/list` - List subscribed feeds with pagination
- `/set` - Set a group topic for feed updates
- `/pause` `/resume` - Pause/resume feed updates
- `/export` `/import` - Export/import feeds as OPML
- `/del_all` - Delete all feeds with backup option
- `/stats` - Show bot server statistics
- `/about` - Display bot information

## Development Commands
```bash
# Install dependencies
npm install

# Start the bot (also starts ParserAPI)
npm run rssify

# Start bot only
npm run bot

# Start ParserAPI only
npm run api

# Full start with dependency installation
npm start
```

## Deployment
The bot can be deployed using the provided start script:
```bash
# Clean start (git pull + start)
bash start.sh -c

# Dirty run (git pull + start without clean)
bash start.sh -d

# Direct start
bash start.sh
```

## Development Guidelines
- Uses ES Modules (`.mjs` files)
- Follows modern JavaScript practices with ESNext target
- MongoDB for data persistence
- Modular structure with separate command handlers
- Rate limiting for API calls to prevent abuse
- Error handling for network issues and Telegram API errors
- Adult content filtering for feed subscriptions

## Important Implementation Details
- RSS feed parsing is handled by a separate Python service running on localhost:5000
- Feed updates are checked and delivered in cycles (every 10 seconds)
- Messages are sent with HTML parsing and topic support for group chats
- Implements spam protection and rate limiting
- Automatic cleanup of chats that have blocked the bot
- Duplicate detection to prevent sending the same content multiple times