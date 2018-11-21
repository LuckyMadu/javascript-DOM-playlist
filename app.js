const wrap = document.querySelector(
  "#book-list li:nth-child(2).list-group-item"
);
//console.log(wrap);

var books = document.querySelector("#book-list li.list-group-item");
//console.log(books);

books = document.querySelectorAll("#book-list li.list-group-item");
//console.log(books);

Array.from(books).forEach(function(book) {
  console.log(book);
});
