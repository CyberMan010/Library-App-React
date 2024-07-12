import "./styles.css";
// src/components/Main.js

// src/components/Main.js

import React from "react";

const Main = ({ books }) => {
  return (
    <main>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>
              <strong>Author:</strong> {book.author}
            </p>
            <p>
              <strong>ISBN:</strong> {book.isbn}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
