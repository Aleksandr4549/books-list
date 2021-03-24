import { useState } from 'react';

import Form from '../Form/Form';
import DefaultBtn from '../Buttons/DefaultBtn/DefaultBtn';
import BookCover from '../BookCover/BookCover';
import './bookItem.css';

const BookItem = ({ id, authorName, bookName, cover, updateBook, removeBook }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const activateEditMode = () => {
    setIsEditMode(true);
  };

  const save = (authorNameValue, bookNameValue, coverImg) => {
    setIsEditMode(false);
    updateBook(id, authorNameValue, bookNameValue, coverImg);
  };

  const remove = () => {
    removeBook(id);
  };

  if (isEditMode) return <Form defaultAuthorName={authorName} 
                               defaultBookName={bookName} 
                               handleFormData={save}
                               cover={cover} />

  return (
    <div className='book__item__container'>
      <BookCover url={cover} />
      <div className='book__item'>{authorName}</div>
      <div className='book__item'>{bookName}</div>
      <DefaultBtn onClickHandler={activateEditMode} value='редактировать' isDisable={false} />
      <DefaultBtn onClickHandler={remove} value='удалить' isDisable={false} />
    </div>
  );
};

export default BookItem;