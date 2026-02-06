package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	"github.com/modelcontextprotocol/go-sdk/mcp/models"
	"github.com/modelcontextprotocol/go-sdk/mcp/transport"
)

// helloWorldTool implements the mcp.Tool interface for a simple "hello world" functionality.
type helloWorldTool struct{}

func (h *helloWorldTool) Name() string {
	return "hello_world"
}

func (h *helloWorldTool) Description() string {
	return "A simple tool that returns a 'Hello, World!' message."
}

func (h *helloWorldTool) Parameters() map[string]models.Parameter {
	return nil // No parameters for this simple tool
}

func (h *helloWorldTool) Call(ctx context.Context, args map[string]any) (any, error) {
	return "Hello, World!", nil
}

func main() {
	// Create a new MCP server
	server, err := mcp.NewServer(
		mcp.WithTransport(transport.NewStdioTransport()),
		mcp.WithTools(&helloWorldTool{}), // Register the hello_world tool
	)
	if err != nil {
		log.Fatalf("Failed to create MCP server: %v", err)
	}

	// Run the server
	log.Printf("Starting Hello World MCP server...")
	if err := server.Run(context.Background()); err != nil {
		log.Fatalf("MCP server failed: %v", err)
	}
}