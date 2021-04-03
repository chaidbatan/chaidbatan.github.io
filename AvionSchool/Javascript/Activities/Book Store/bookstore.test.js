const addBook = require("./bookstore.js");
test("add book", () => {
    expect(addBook('booktitle2', 16, 10)).toBe({ title: 'booktitle2', quantity: 16, value: 10 }); 
});