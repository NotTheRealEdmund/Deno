import { Application, Router } from "https://deno.land/x/oak/mod.ts"

import { getItems, getItem, addItem } from "./controller.ts"

// Server
const router = new Router()
router
    .get("/items", getItems)
    .get("/item/:name", getItem)
    .get("/add/:name/:price/:discount", addItem)

// Application
const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

// Run "deno run --allow-net app.ts" to visit localhost:8000 and all the routes
await app.listen({port: 8000})

// localhost:8000/items -> Shows all items
// localhost:8000/item/Orange -> Shows the item named 'Orange'
// localhost:8000/add/Orange/1.50/1 -> Adds an item with the specified name, price, and discount