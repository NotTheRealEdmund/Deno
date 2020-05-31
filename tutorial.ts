// Download all the code from the website, which won't clutter your folder (unlike with node_modules etc.)
// You can visit the website to view the documentation on all the functions that could be imported from this library
import { serve } from "https://deno.land/std/http/server.ts"

// Create a HTTP server listening on port 8000
const s = serve({ port: 8000 })

// Listen for requests and respond with a string
for await (const req of s) {
    req.respond({ body: "Hello World!" })
}

// Deno is a secure runtime because you have to use flags to give permission before running every command 
// You cannot simply use "deno run tutorial.ts"
// You have to use "deno run --allow-net tutorial.ts" to see your web app at localhost:8000