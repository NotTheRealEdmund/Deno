import { Application, Router } from "https://deno.land/x/oak/mod.ts"

import { getItems, getItem, addItem } from "./controller.ts"

// Server
const router = new Router()
router
    .get("/items", getItems)
    .get("/item/:name", getItem)
    .post('/add', addItem)

// Application
const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

// Run "deno run --allow-net app.ts" to visit localhost:8000 and all the routes
await app.listen({port: 8000})

// Use curl in another cmd to carry out GET and POST methods
// curl localhost:8000/items -> Shows all items
// curl localhost:8000/item/Orange -> Shows the item named 'Orange'
// curl localhost:8000/add -X POST -H "Content-Type: application/json" -d "{ \"name\": \"Orange\", \"price\": 1.50, \"discount\": true}" -> Adds an item with the specified name, price, and discount