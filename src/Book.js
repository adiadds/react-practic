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
export default Book;
