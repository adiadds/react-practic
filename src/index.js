import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// first object
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};
// second object
const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL604_SR604,400_.jpg",
  title: "If Animals Kissed Good Night",
  author: "Ann Whitford Paul",
};

function BookList() {
  return (
    <section className="booklist">
      {/* passsing objct 1 properties as props */}
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
        {/* passsing children props */}
        <p>hi this is discription of the picture. and its children this is children props</p>
      </Book>
      {/* passsing objct 2 properties as props */}
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props; //destructing method # 1
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* receving children props. */}
      {props.children}
    </article>
  );
};

//destructing method # 2
// const Book = ({ img, title, author, children }) => {
//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       {children}
//       <h4>{author}</h4>
//     </article>
//   );
// };

// without destructing
// const Book = (props) => {
//   return (
//     <article className="book">
//       <img src={props.img} alt="" />
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//     </article>
//   );
// };

ReactDOM.render(<BookList />, document.getElementById("root"));
