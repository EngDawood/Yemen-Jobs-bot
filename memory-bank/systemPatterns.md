# System Patterns: RSS-ify

## Overall Architecture
RSS-ify follows a modular architecture that separates concerns into distinct components. The main components are the core bot logic (`bot.mjs`), command handlers, utility services, and a scheduled job for sending updates.

## Key Design Patterns
- **Command Handler Pattern**: Each bot command (e.g., `/add`, `/del`) is managed by a dedicated module in the `ext/commands/` directory. This pattern isolates the logic for each command, making the system easy to maintain and extend. The main bot file (`bot.mjs`) is responsible for registering these handlers.

- **Service Abstraction**: Common functionalities are abstracted into utility modules within `ext/utils/`. For example, `db.mjs` and `supabase.mjs` abstract database interactions, and `parserApi.mjs` handles communication with the external parser service. This decouples the command handlers from the specific implementation of these services.

- **Scheduled Jobs**: The `ext/sendRss.mjs` module likely contains the logic for a scheduled job that runs periodically. This job is responsible for fetching the latest content from all subscribed RSS feeds and sending updates to the respective users or groups.

- **Middleware**: The `ext/utils/middlewares.mjs` file suggests the use of middleware, likely within the Grammy framework, to handle tasks like authentication, logging, or pre-processing of incoming messages before they reach the command handlers. A `spamProtection` middleware is in place to prevent abuse, with a bypass for the bot owner, whose ID is set in the `OWNER_ID` environment variable.

## Component Relationships
```mermaid
graph TD
    subgraph Core
        Bot[bot.mjs]
        SendRss[ext/sendRss.mjs]
    end

    subgraph Commands
        Add[ext/commands/addHandler.mjs]
        Del[ext/commands/delHandler.mjs]
        List[ext/commands/listHandler.mjs]
        OtherCommands[...]
    end

    subgraph Utils
        DB[ext/utils/db.mjs]
        Supabase[ext/utils/supabase.mjs]
        Parser[ext/utils/parserApi.mjs]
        Middlewares[ext/utils/middlewares.mjs]
    end

    Bot --> Add
    Bot --> Del
    Bot --> List
    Bot --> OtherCommands

    Add --> DB
    Del --> DB
    List --> DB

    SendRss --> DB
    SendRss --> Parser

    Bot -- uses --> Middlewares
