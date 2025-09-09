import { escapeHTML } from '../utils/escapeHelper.mjs';
import { chatCollection, logCollection } from '../utils/db.mjs';
import { log } from '../utils/colorLog.mjs';

export const delCmd = async (ctx) => {
  try {
    await ctx.react('😢');
  } catch (error) {
    log.warn("Unable to react to message:", error.description || error.message);
  }

  const rssUrl = ctx.message.text.split(' ')[1];
  if (!rssUrl) {
    return ctx.reply('Usage: /del <code>source_url</code>', { parse_mode: 'HTML' });
  }

  const chatId = ctx.chat.id.toString();
  const { data: chat, error } = await chatCollection().select('rssFeeds').eq('chatId', chatId).single();

  if (chat) {
    const newFeeds = chat.rssFeeds.filter(feed => feed !== rssUrl);
    const { error: updateError } = await chatCollection().update({ rssFeeds: newFeeds }).eq('chatId', chatId);
    if (updateError) {
      log.error('Error deleting feed:', updateError.message);
      return ctx.reply('<i>Failed to remove feed</i>', { parse_mode: 'HTML' });
    }
  }

  const { error: logError } = await logCollection().delete().eq('chatId', chatId).eq('rssUrl', rssUrl);
  if (logError) {
    log.error('Error deleting log:', logError.message);
  }

  ctx.reply(`<i>Feed removed</i>: <a href="${escapeHTML(rssUrl)}">${escapeHTML(rssUrl)}</a>`, {
    parse_mode: 'HTML',
    disable_web_page_preview: true,
  });
}
