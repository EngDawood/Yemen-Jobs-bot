## Brief overview
This rule mandates the use of the Context7 MCP server as the primary source for external information related to code generation, setup or configuration steps, and library or API documentation.

## Trigger Cases
- When code examples for a specific library are needed.
- When steps to configure a tool or framework are required.
- When documentation for a library or API is requested.
- When a task involves a new or unfamiliar technology.

## Workflow
1.  **Identify the library/tool:** Determine the specific library, framework, or tool for which information is needed.
2.  **Resolve Library ID:** Automatically use the `context7/resolve-library-id` tool to get the correct Context7-compatible ID.
3.  **Fetch Documentation:** Use the `context7/get-library-docs` tool with the resolved ID to retrieve the relevant documentation.
4.  **Synthesize and Apply:** Use the fetched documentation to answer the user's question, generate code, or provide configuration steps without explicit prompting from the user.
