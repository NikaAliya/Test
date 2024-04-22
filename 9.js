class Book {
    constructor(title, author, pageCount) {
      this.title = title;
      this.author = author;
      this.pageCount = pageCount;
    }
  
    isLong() {
      return this.pageCount > 500;
    }
  }
  
  const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 350);
  console.log(book1.isLong()); 
  
  const book2 = new Book('War and Peace', 'Leo Tolstoy', 1225);
  console.log(book2.isLong()); 
  