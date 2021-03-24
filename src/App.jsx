import { useState, useEffect } from 'react';

import Form from './components/Form/Form';
import BookItem from './components/BookItem/BookItem';
import { idGenerator } from './utils/idGenerator';

import './App.css';

const App = () => {
  const [booksList, setBooksList] = useState([]);
  const [isChangedBooks, setIsChangedBook] = useState(false); 

  const getBooks = () => {
    return JSON.parse(localStorage.getItem('bookList')) || [];
  };

  const setBooksToLocalStorage = (books) => {
    localStorage.setItem('bookList', JSON.stringify(books));
    setIsChangedBook(true);
  };

  const updateBooks = (id, authorName, bookName, coverImg) => {
    const books = JSON.parse(localStorage.getItem('bookList'));
    const updatedBooks = books.map(item => item.id === id ? {...item, authorName, bookName, coverImg} : item);
    setBooksToLocalStorage(updatedBooks);
  };

  const addBook = (authorName, bookName, coverImg) => {
    const books = getBooks();

    const newBook = {
      id: idGenerator(),
      authorName,
      bookName,
      coverImg,
    };
    
    books.push(newBook);
    setBooksToLocalStorage(books);
  };

  const removeBook = (id) => {
    const books = getBooks();
    const updatedBooks = books.filter(item => item.id !== id);
    setBooksToLocalStorage(updatedBooks);
  };

  useEffect(() => {
    const books = getBooks();
    setBooksList(books);
  }, []);

  useEffect(() => {
    if (isChangedBooks) {
      const books = getBooks();
      setBooksList(books);
      setIsChangedBook(false);
    }
  }, [isChangedBooks]);

  return (
    <div className='app'>
      <section className='app__section'>
        <h3>Добавить книгу</h3>
        <Form defaultAuthorName='' defaultBookName='' handleFormData={addBook} />
      </section>
      
      <section className='app__section'>
        <h3>Список книг</h3>
        {booksList.length > 0 && booksList.map(book => <BookItem key={book.id}
                                                                 id={book.id}
                                                                 updateBook={updateBooks}
                                                                 removeBook={removeBook} 
                                                                 authorName={book.authorName} 
                                                                 bookName={book.bookName}
                                                                 cover={book.coverImg} />)}
      </section>
    </div>
  );
}

export default App;
