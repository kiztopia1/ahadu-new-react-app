import { ADD_BOOKS, ADD_BOOKS_ROW, ADD_BOOK_TO_ROW } from "./actions";

let books = [
    {   
        "id": 1,
        "title":"Iron Widow",
        "price":120,
        "author":'jemes adam',
        "description": "so you can build reusable items.Now, in order to create a component,the first thing you need to do is to separate the waythat you've been calling your application.So in the past, we have used the createApp methodand passed it into a variable.And then we use this mountain method right afterwards.So usually you see this at the end of this.So you have to split it up into different partsso that you can then create one or more components",
        "img_id":"1.jpg"
    },
    {   
        "id": 2,
        "title":"The real Authony fauci",
        "price":120,
        "author":'Robert F.Kennedy jr',
        "description": "so you can build reusable items.Now, in order to create a component,the first thing you need to do is to separate the waythat you've been calling your application.So in the past, we have used the createApp methodand passed it into a variable.And then we use this mountain method right afterwards.So usually you see this at the end of this.So you have to split it up into different partsso that you can then create one or more components",
        "img_id":"2.jpg"
    },
    {   
        "id": 3,
        "title":"Kingdom of the wicked",
        "price":120,
        "author":'Kerri Maniscalco',
        "description": "so you can build reusable items.Now, in order to create a component,the first thing you need to do is to separate the waythat you've been calling your application.So in the past, we have used the createApp methodand passed it into a variable.And then we use this mountain method right afterwards.So usually you see this at the end of this.So you have to split it up into different partsso that you can then create one or more components",
        "img_id":"3.jpg"
    },
    {   
        "id": 4,
        "title":"The Dark Hours ",
        "price":120,
        "author":'Michael Connelly',
        "description": "so you can build reusable items.Now, in order to create a component,the first thing you need to do is to separate the waythat you've been calling your application.So in the past, we have used the createApp methodand passed it into a variable.And then we use this mountain method right afterwards.So usually you see this at the end of this.So you have to split it up into different partsso that you can then create one or more components",
        "img_id":"4.jpg"
    },
    {   
        "id": 5,
        "title":"The inheritance games",
        "price":120,
        "author":'Jennifer Lynn Barnes',
        "description": "so you can build reusable items.Now, in order to create a component,the first thing you need to do is to separate the waythat you've been calling your application.So in the past, we have used the createApp methodand passed it into a variable.And then we use this mountain method right afterwards.So usually you see this at the end of this.So you have to split it up into different partsso that you can then create one or more components",
        "img_id":"5.jpg"
    
    }
    
]
export const BOOKS = (state =books , action) => {
    const {type, payload } = action;
    switch(type) {
        case ADD_BOOKS: {
            state.push(payload)
        }
        // case ADD_BOOKS_ROW: {
        //     state.concat(payload.data)
        // }
        // case ADD_BOOK_TO_ROW: {
        //     payload.data.forEach(book=> state.find((data)=> payload.data.row == payload.row).data.push(book) )
            
        // }
        default:
            return state
    }
    
}

