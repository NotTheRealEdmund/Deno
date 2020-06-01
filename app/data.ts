import { Item } from "./model.ts";

// Starting array of items, this usually should come from a database for changes to be permanent
export let items: Array<Item> = [
  {
    name: "Pen",
    price: 2.20,
    discount: false,
  },
  {
    name: "Eraser",
    price: 1.00,
    discount: false,
  },
  {
    name: "Sharpener",
    price: 0.80,
    discount: true,
  },
];

// Add an item to array
export function addItems(item: Item) {
  items.push(item);
}

// Remove an item from array
export function deleteItems(deletedName: string) {
  items = items.filter((item) => item.name !== deletedName);
}
