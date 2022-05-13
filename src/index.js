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
        return <Book key={book.id} {...book} />; // => spread opratotor spread all prpperties of object in an array
        // key/ref prop is a react requerment in map function for hint
      })}
    </section>
  );
}

const Book = ({ img: image, title, author }) => {
  //event => Event atribute (onclick), eventHandler Function
  const clickHandler = (e) => {
    console.log(e); //click properties
    console.log(e.target); //what is click. data of button
    console.log("Click Me Button");
  };

  const complexClickHandler = (auther) => {
    console.log(author);
  };
  return (
    //atribute and handler in single line
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={image} alt="" />
      {/* in this errow function we are call title property in console log */}
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Click Me!
      </button>
      {/* it will call automatically if we don't call it in errow function  */}
      <button type="button" onClick={() => complexClickHandler(author)}>
        Complex button
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
