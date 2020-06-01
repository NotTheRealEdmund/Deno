import { items, addItems, deleteItems } from "./data.ts";

// Show all items in data
export const getItems = ({ response }: { response: any }) => {
  response.body = items;
};

// Show an item in data
export const getItem = (
  { params, response }: {
    params: {
      name: string;
    };
    response: any;
  },
) => {
  const item = items.filter((item) => item.name === params.name);
  if (item.length) {
    response.body = item[0];
    response.status = 200;
    return;
  }
  response.body = { itemFound: "Failure" };
  response.status = 400;
};

// Add an item to data
export const addItem = async (
  { request, response }: {
    request: any;
    response: any;
  },
) => {
  const body = await request.body();
  const item: Item = body.value;
  addItems(item);

  response.body = { itemAdded: "Success" };
  response.status = 200;
};

// Remove an item from data
export const deleteItem = (
  { params, response }: {
    params: {
      name: string;
    };
    response: any;
  },
) => {
  deleteItems(params.name);

  response.body = { itemDeleted: "Success" };
  response.status = 200;
};
