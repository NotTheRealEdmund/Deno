import { serve } from "https://deno.land/std/http/server.ts";

async function main() {
  // Returning HTML as response in Deno
  const body = new TextEncoder().encode(`
        <!DOCTYPE html>
        <html>
            <body>
                <div style="text-align: center;">
                    <h1>Edmund Teo</h1>
                    <p>Computer Engineer</p>
                </div>
            </body>
        </html> 
    `);

  // Create a HTTP server listening on port 8000
  const s = serve({ port: 8000 });

  // Listen for requests and respond with the HTML response
  for await (const req of s) {
    req.respond({ body });
  }
}

main();

// Use "deno run --allow-net html.ts" to see your web app at localhost:8000
