import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

import { data } from "./books";
import SpecifcBook from "./Book";
import { greeting } from "./testing/testing";

function Booklist() {
  console.log(greeting);
  return (
    <section className="booklist">
      {data.map((book) => {
        return <SpecifcBook key={book.id} {...book}></SpecifcBook>;
      })}
    </section>
  );
}

ReactDOM.render(<Booklist />, document.getElementById("root"));
