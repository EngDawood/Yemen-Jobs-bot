# Bot Commands

This page provides detailed documentation for all the commands available in the RSS-ify bot.

---

## `/add`

Subscribes you to a new RSS feed.

### Usage
```
/add <url>
```

### Arguments
-   `<url>` (Required): The full URL of the RSS feed.

### Description
Validates the feed, checks for duplicates, saves the subscription, and sends the latest item from the feed immediately upon successful subscription.

---

## `/del`

Unsubscribes you from an RSS feed.

### Usage
```
/del <url>
```

### Arguments
-   `<url>` (Required): The URL of the RSS feed to unsubscribe from.

### Description
Removes the specified RSS feed from your subscription list and deletes its associated log data.

---

## `/list`

Displays your list of subscribed RSS feeds.

### Usage
```
/list
```

### Description
Shows a paginated list of all the RSS feeds you are currently subscribed to. Each feed is displayed with its hostname and full URL. You can navigate through the pages of your subscriptions using the "Previous" and "Next" buttons.
