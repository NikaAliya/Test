const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  };
  
  function getBookInfo(book) {
    return `${book.title}, ${book.author}`;
  }
  
  const bookInfo = getBookInfo(book);
  console.log(bookInfo); 
  