import { ADD_BOOKS, ADD_BOOKS_ROW, ADD_BOOK_TO_ROW } from "./actions";

let books = [
    {   
        "id": 1,
        "title":"The power of habit",
        "price":120,
        "author":'jemes adam',
        "description": "so you can build reusable items.Now, in order to create a component,the first thing you need to do is to separate the waythat you've been calling your application.So in the past, we have used the createApp methodand passed it into a variable.And then we use this mountain method right afterwards.So usually you see this at the end of this.So you have to split it up into different partsso that you can then create one or more components"
    
    },
    {   
        "id": 2,
        "title":"book 2",
        "price":120,
        "author":'jemes adam',
        "description": "so you can build reusable items.Now, in order to create a component,the first thing you need to do is to separate the waythat you've been calling your application.So in the past, we have used the createApp methodand passed it into a variable.And then we use this mountain method right afterwards.So usually you see this at the end of this.So you have to split it up into different partsso that you can then create one or more components"
    
    },
    {   
        "id": 3,
        "title":"book3",
        "price":120,
        "author":'jemes adam',
        "description": "so you can build reusable items.Now, in order to create a component,the first thing you need to do is to separate the waythat you've been calling your application.So in the past, we have used the createApp methodand passed it into a variable.And then we use this mountain method right afterwards.So usually you see this at the end of this.So you have to split it up into different partsso that you can then create one or more components"
    
    },
    {   
        "id": 4,
        "title":"book4",
        "price":120,
        "author":'jemes adam',
        "description": "so you can build reusable items.Now, in order to create a component,the first thing you need to do is to separate the waythat you've been calling your application.So in the past, we have used the createApp methodand passed it into a variable.And then we use this mountain method right afterwards.So usually you see this at the end of this.So you have to split it up into different partsso that you can then create one or more components"
    },
    {   
        "id": 5,
        "title":"book4",
        "price":120,
        "author":'jemes adam',
        "description": "so you can build reusable items.Now, in order to create a component,the first thing you need to do is to separate the waythat you've been calling your application.So in the past, we have used the createApp methodand passed it into a variable.And then we use this mountain method right afterwards.So usually you see this at the end of this.So you have to split it up into different partsso that you can then create one or more components"
    
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

