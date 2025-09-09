# Tech Context: RSS-ify

## Core Technologies
- **Runtime Environment**: [Bun](https://bun.sh/) is used as the primary JavaScript runtime for the bot.
- **Programming Language**: The bot is written in modern JavaScript, utilizing ES Modules (`.mjs`).
- **Telegram Bot Framework**: [Grammy](https://grammy.dev/) is the framework used to interact with the Telegram Bot API.

## Backend & Data
- **Database**: [Supabase](https://supabase.com/) is used for the database and backend services. The `@supabase/supabase-js` client library is a core dependency.
- **Feed Parsing**: The project uses `feedparser` and `xml2js` to parse RSS and XML feeds.
- **Custom Parser API**: A separate, self-contained API written in Python is used for more complex HTML parsing. This API is included as a Git submodule and its dependencies are managed with `uv` and `pip`.

## Development & Deployment
- **Package Management**: Bun is used for managing JavaScript dependencies.
- **Scripts**: The `package.json` contains scripts for starting the bot, the parser API, and both concurrently.
- **Deployment**: A shell script (`start.sh`) is the main entry point for deploying and running the bot.
- **Version Control**: The project is managed with Git and uses Git submodules to include the parser API.

## Key Dependencies
- `@supabase/supabase-js`: Client for interacting with the Supabase backend.
- `grammy`: Framework for building the Telegram bot.
- `feedparser`: For parsing RSS feeds.
- `axios`: For making HTTP requests, likely to fetch RSS feeds.
- `xml2js`: For converting XML to JavaScript objects.
- `markdown-escape`: To safely include text in Telegram messages that use Markdown formatting.
