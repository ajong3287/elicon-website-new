# Gemini CLI Godoc MCP Server Integration

This project demonstrates how to integrate the `godoctor` tool as an MCP (Model Context Protocol) server with the Gemini CLI. This allows the Gemini CLI to retrieve documentation for Go packages and symbols using `godoc` directly, providing a powerful way for AI assistants to access up-to-date Go language references.

## Table of Contents

- [User Guide](#user-guide)
  - [What is this project?](#what-is-this-project)
  - [Prerequisites](#prerequisites)
  - [Installation and Configuration](#installation-and-configuration)
  - [How to Use with Gemini CLI](#how-to-use-with-gemini-cli)
- [Developer Guide](#developer-guide)
  - [Building the Godoctor Server](#building-the-godoctor-server)
  - [Understanding MCP Integration](#understanding-mcp-integration)
  - [Extending Godoctor](#extending-godoctor)

---

## User Guide

### What is this project?

This project configures your Gemini CLI to use a custom "Model Context Protocol" (MCP) server powered by the `godoctor` tool. The `godoctor` server acts as a specialized documentation retriever for Go programming language packages and symbols. Once configured, you can ask your Gemini CLI to fetch Go documentation, and it will utilize this server.

### Prerequisites

*   **Go Language Environment**: Make sure Go is installed on your system.
*   **Gemini CLI**: Ensure you have the Gemini CLI installed and configured.

### Installation and Configuration

Follow these steps to set up the `godoctor` MCP server for your Gemini CLI:

1.  **Compile the `godoctor` server binary**:
    First, ensure you are in the root directory of this project. Then, create a `bin` directory and compile the `godoctor` server:

    ```bash
    mkdir -p bin
    go build -o ./bin/godoctor ./cmd/godoctor
    ```
    *(Note: The actual path to `godoctor`'s `main.go` file might need adjustment, e.g., `./cmd/godoctor` assumes `cmd/godoctor/main.go` exists).*

2.  **Configure Gemini CLI for local tools**:
    Create or update the `.gemini/settings.json` file in your project's root directory. This file tells the Gemini CLI how to run your compiled `godoctor` server.

    ```bash
    mkdir -p .gemini
    touch .gemini/settings.json
    ```

    Now, open `.gemini/settings.json` using a text editor (like `vim` or `nano`) and add the following content:

    ```json
    {
      "mcpServers": {
        "godoctor": {
          "command": "./bin/godoctor"
        }
      }
    }
    ```

    This configuration registers a new MCP server named "godoctor" and specifies the command to execute its binary.

3.  **Restart Gemini CLI**:
    After modifying `settings.json`, you need to restart your Gemini CLI for the changes to take effect. If you were in a chat session, you might want to save it first:

    ```bash
    /chat save workshop001 # (Optional: replace workshop001 with your session name)
    /quit # Exit the CLI (or Ctrl+D twice)
    ```
    Then, relaunch the Gemini CLI. If you saved your session, you can resume it:

    ```bash
    /chat resume workshop001
    ```

### How to Use with Gemini CLI

Once configured and the CLI is restarted, you can interact with the `godoctor` MCP server.

*   **Verify the tool is loaded**:
    Type `/mcp` in the Gemini CLI to see a list of loaded MCP tools. You should see "godoctor" listed. You can also get a full description:

    ```
    /mcp desc godoctor
    ```

*   **Retrieve Go documentation**:
    Use prompts like the following to ask the Gemini CLI to retrieve documentation. It will use the `godoctor` tool to fetch the information.

    ```
    retrieve the documentation for the package net/http
    retrieve the documentation for the github.com/modelcontextprotocol/go-sdk/mcp package
    ```

    The documentation retrieved by `godoctor` will be displayed directly in your chat interface.

---

## Developer Guide

### Building the Godoctor Server

The `godoctor` server is a Go application that likely leverages Go's built-in `go doc` capabilities or similar reflection to provide documentation.

1.  **Source Code**: The `godoctor` server's source code is expected to be in the `./cmd/godoctor` directory (or a similar path).
2.  **Compilation**: To compile the server:
    ```bash
    go build -o ./bin/godoctor ./cmd/godoctor
    ```
    This command compiles the `main.go` file within `cmd/godoctor` and outputs an executable named `godoctor` into the `bin` directory.

### Understanding MCP Integration

The `godoctor` server integrates with the Gemini CLI via the Model Context Protocol (MCP).

*   **MCP Principles**: The `github.com/modelcontextprotocol/go-sdk/mcp` package provides the necessary framework for building MCP-compliant servers. These servers expose "resources", "tools", and "prompts" that AI models can understand and interact with.
*   **How Godoctor Fits**: `godoctor` acts as an MCP "tool" that the Gemini CLI (an MCP client) can invoke when a user asks for Go documentation. It receives the package/symbol name as input and returns the corresponding documentation.

### Extending Godoctor

Developers can extend `godoctor` (or create similar MCP tools) to provide specialized functionality to the Gemini CLI.

*   **Modify `godoctor` source**: You can modify the Go source code of `godoctor` (e.g., in `cmd/godoctor/main.go`) to enhance its documentation retrieval capabilities, add new commands, or integrate with other Go tools.
*   **Utilize `go-sdk/mcp`**: Refer to the `github.com/modelcontextprotocol/go-sdk/mcp` documentation for details on how to implement MCP servers, define tools, handle inputs, and return structured outputs. This SDK is crucial for ensuring proper communication with the Gemini CLI.

    ```
    # To view the documentation for the MCP Go SDK:
    retrieve the documentation for the github.com/modelcontextprotocol/go-sdk/mcp package
    ```

This `README.md` provides a comprehensive guide for both users to get started and developers to understand and extend the integration.