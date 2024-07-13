import axios from "axios";
import "./styles.css";
import { useState } from "react";
import Button from "./button";
import Editing from "./editbutton";
import Delete from "./delete";

// src/components/Main.js

import React from "react";
import Restore from "./restore";

const Main = ({ books }) => {
  const [data, setData] = useState([]);
  const getBooks = async () => {
    const response = await axios.get(
      "https://group5-93806-default-rtdb.europe-west1.firebasedatabase.app/books.json"
    );
    setData(response.data);
  };
  getBooks();

  const Add = async () => {
    const [title, isbn, author] = [
      prompt("title"),
      prompt("isbn"),
      prompt("author"),
    ];

    const adding = await axios.put(
      `https://group5-93806-default-rtdb.europe-west1.firebasedatabase.app/books/${data.length}.json`,
      {
        id: data.length + 1,
        title: title,
        isbn: isbn,
        author: author,
      }
    );
    console.log(adding);
  };

  const Edit = async (id) => {
    const [newTitle, newisbn, newauthor] = [
      prompt("newTitle"),
      prompt("newisbn"),
      prompt("newauthor"),
    ];
    await axios.patch(
      `https://group5-93806-default-rtdb.europe-west1.firebasedatabase.app/books/${id}.json`,
      {
        title: newTitle,
        isbn: newisbn,
        author: newauthor,
      }
    );
  };
  const DeleteBook = async (id) => {
    await axios.patch(
      `https://group5-93806-default-rtdb.europe-west1.firebasedatabase.app/books/${id}.json`,
      {
        isDeleted: "true",
      }
    );
  };
  const restoreBook = async (id) => {
    await axios.patch(
      `https://group5-93806-default-rtdb.europe-west1.firebasedatabase.app/books/${id}.json`,
      {
        isDeleted: "false",
      }
    );
  };

  return (
    <main>
      <h2>Book List</h2>
      <ul>
        {data.map((book) => {
          return book.isDeleted === "true" ? (
            <>
              <Restore onClick={() => restoreBook(book.id - 1)} />
            </>
          ) : (
            <li key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>
                <strong>Author:</strong> {book.author}
              </p>
              <p>
                <strong>ISBN:</strong> {book.isbn}
              </p>
              <Editing onClick={() => Edit(book.id - 1)} />
              <Delete onClick={() => DeleteBook(book.id - 1)} />
            </li>
          );
        })}
      </ul>
      <Button onClick={() => Add()} />
    </main>
  );
};

export default Main;
