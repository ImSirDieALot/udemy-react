import React from "react";
import ReactDOM from "react-dom";

// CSS file
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I love you to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81255VTWssL._AC_UL200_SR200,200_.jpg",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/81qGZXiAgeL._AC_UL200_SR200,200_.jpg",
    title: "This is Your Mind on Plants",
    author: "Michael Pollan",
  },
  {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL._AC_UL200_SR200,200_.jpg",
    title: "Rich Dad, Poor Dad",
    author: "Robert T. Kiyosaki",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
        // return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  //attribute, eventHandler
  // onClick, onMouseOver
  // reference
  const clickHandler = () => {
    console.log("button clicked");
  };
  const { img, title, author } = props.book;
  // when using ... operator, below works perfectly
  // const { img, title, author } = props;
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(props);
      }}
    >
      <img src={img}></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Submit
      </button>
      <button
        type="button"
        onClick={() => {
          console.log("inline handler", author);
        }}
      >
        Submit Inlne
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
