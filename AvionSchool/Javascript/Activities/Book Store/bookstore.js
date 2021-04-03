const { tsThisType } = require("@babel/types");
const { CustomConsole } = require("@jest/console");
const { listenerAdded } = require("emittery");

const store = {
    store: 'bookstore',
    inventoryList: [],
    earnings: 0
    
}
const book = [
    {
        title: 'book1',
        quantity: 10,
        value: 13
    }

]
function addBook(title, quantity, value) {
    const newBook = {}
    newBook.title = title;
    newBook.quantity = quantity;
    newBook.value = value;
    let inventory = book.push(newBook);
    return store.inventoryList = inventory;
}
function restockBook(title, quantity) {
    for(var v in book) {
        if (book[v].title === title) {
            let addQ = 0;
            addQ = book[v].quantity + quantity;
            return book[v].quantity = addQ;
        }
    }
    
}
function sellBook(title, quantity) {
    for(var v in book) {
        let number = book[v].quantity;
        if (book[v].title === title) {
            if (number >= quantity) {
                let addQ = 0;
                addQ = number - quantity;
                number = addQ;
                let earnings = 0;
                earnings = book[v].value * quantity;
                store.earnings = earnings;
                console.log("Successful transaction.");
            }
            else if(number < quantity) {
                console.log(`only ${number} stocks left`);
            }
            else if (book[v].title !== title) {
                console.log(`${title} out of stock`);
            } 
        }
    }
}

function totalEarnings() {
    let total = store.earnings;
    let storeName = store.store;
    console.log(`store: ${storeName}, total earnings: ${total}`)
}
function listInventory() {
    for(var v in book) {
        let title = book[v].title;
        let quantity = book[v].quantity;
        let value = book[v].value;
        console.log(`book title: ${title}, quantity: ${quantity}, price: ${value}`)
    }
}
addBook('booktitle2', 16, 10)
addBook('booktitle3', 16, 10)
restockBook('book1', 2);
sellBook('book1', 10);
totalEarnings()
listInventory()

module.exports = {
    addBook,
    restockBook,
    sellBook,
    totalEarnings,
    listInventory,
};