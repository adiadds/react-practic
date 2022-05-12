import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// array of objects
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL604_SR604,400_.jpg",
    title: "If Animals Kissed Good Night",
    author: "Ann Whitford Paul",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL604_SR604,400_.jpg",
    title: "If Animals Kissed Good Night",
    author: "Ann Whitford Paul",
  },
];
function BookList() {
  return (
    <section className="booklist">
      {/*  map always return an Array and it dosn't change the size of orignal array (unlike filters) */}
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
        // key/ref prop is a react requerment in map function for hint
      })}
    </section>
  );
}

const Book = (props) => {
  //alias is used in props destructring
  const { img: image, title, author } = props.book; //destructing on onbject type props (props.book) it could be solved with Spred oprator
  return (
    <article className="book">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
