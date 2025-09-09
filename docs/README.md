# RSS-ify Documentation

Welcome to the official documentation for RSS-ify, a lightweight Telegram bot for RSS feed subscriptions.

## Table of Contents
- [RSS-ify Documentation](#rss-ify-documentation)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Getting Started](#getting-started)
  - [Commands](#commands)
  - [Deployment](#deployment)
  - [Architecture](#architecture)

## Introduction
RSS-ify helps you stay updated by delivering content from your favorite feeds directly to your Telegram group chat or in private. This documentation provides all the information you need to use, deploy, and understand the bot.

## Getting Started
To start using the bot, you can either use the official instance ([@rssifyxbot](https://t.me/rssifyxbot)) or deploy your own.

## Commands
The bot offers a variety of commands to manage your RSS feed subscriptions. Here is a list of available commands:

*   `/add <url>`: Add a new RSS feed subscription.
*   `/del <url>`: Delete an existing RSS feed subscription.
*   `/list`: List all your current subscriptions.
*   `/help`: Display the help message with all available commands.
*   `/start`: Start the bot and display a welcome message.
*   `/about`: Display information about the bot.
*   `/feed <url>`: Fetch and display the latest items from a specific feed without subscribing.
*   `/set`: Set custom configurations for your subscriptions.
*   `/delall`: Delete all your subscriptions at once.
*   `/stats`: Show statistics about the bot's usage.
*   `/opml`: Import and export subscriptions using an OPML file.
*   `/clean`: Clean up old or inactive subscriptions.

## Deployment
For detailed deployment instructions, please refer to the main [README.md](../README.md) file.

## Architecture
The bot is built with a modular architecture using NodeJS, Bun, and Supabase. For a detailed overview of the system's design and patterns, please refer to the [Memory Bank](../memory-bank/).
