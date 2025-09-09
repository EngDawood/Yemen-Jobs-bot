const helpMessage = `*Welcome to RSS-ify!*

Here are the commands you can use:
\`/start\` - Start the bot
\`/add <url>\` - Add a new RSS feed
\`/del <url>\` - Delete an RSS feed
\`/list\` - List all your RSS feeds
\`/set <topic_id>\` - Set a group topic for feeds
\`/del_all\` - Delete all your feeds (with backup)
\`/pause <url>\` - Pause updates for a feed
\`/resume <url>\` - Resume updates for a feed
\`/export\` - Export your feeds to an OPML file
\`/import\` - Import feeds from an OPML file
\`/stats\` - Show bot and server statistics
\`/about\` - Show information about the bot
\`/help\` - Show this help message

*Owner-only commands:*
\`/clean\` - Clean defunct feeds
\`/send <message>\` - Broadcast a message to all users
`;

export const helpCmd = async (ctx) => {
  await ctx.reply(helpMessage, { parse_mode: "Markdown" });
};
