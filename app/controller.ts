import { Item } from "./model.ts"
import { items } from "./data.ts"

export const getItems = ({response} : {response: any}) => {
    response.body = items;
}

export const getItem = (
    {params, response} : {
        params: {
            name: string
        }
        response: any
    }
) => {
    const item = items.filter((item) => item.name === params.name)
    if (item.length) {
        response.body = item[0]
        response.status = 200
        return
    }
    response.body = { msg: "Cannot find item " + params.name }
    response.status = 400
}  

export const addItem = async (
    {params, response} : {
        params: {
            name: any,
            price: any,
            discount: any,
        }
        response: any
    }
) => {
    const item: Item = {name: params.name, price: Number(params.price), discount: params.discount == '1' ? true : false}
    items.push(item)
    
    response.body = {itemsAdded: "Success"}
    response.status = 200
}  