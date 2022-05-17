import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { books } from "./books"; //namaed import => in js file we don't need file extention in import. its a named import so we cant change the name. and we have to use books in import
import Book from "./Book"; //default import
function BookList() {
  return (
    <section className="booklist">
      {/*  map always return an Array and it dosn't change the size of orignal array (unlike filters) */}
      {books.map((book) => {
        return <Book key={book.id} {...book} />; // => spread opratotor spread all prpperties of object in an array
        // key/ref prop is a react requerment in map function for hint
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
