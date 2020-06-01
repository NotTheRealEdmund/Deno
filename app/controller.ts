import { items } from "./data.ts";

export const getItems = ({ response }: { response: any }) => {
  response.body = items;
};

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
  response.body = { msg: "Cannot find item " + params.name };
  response.status = 400;
};

export const addItem = async (
  { request, response }: {
    request: any;
    response: any;
  },
) => {
  const body = await request.body();
  const item: Item = body.value;
  items.push(item);

  response.body = { itemsAdded: "Success" };
  response.status = 200;
};
