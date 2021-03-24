import { useState } from 'react';

import DefaultBtn from '../Buttons/DefaultBtn/DefaultBtn';
import BookCover from '../BookCover/BookCover';
import { convertToBase64 } from '../../utils/convertToBase64';
import './form.css';

const Form = ({ defaultAuthorName, defaultBookName, handleFormData, cover }) => {
  const [authorName, setAuthorName] = useState(defaultAuthorName);
  const [bookName, setBookName] = useState(defaultBookName);
  const [bookCover, setBookCover] = useState(cover);

  const changeAuthorName = (e) => {
    setAuthorName(e.target.value);
  };

  const changeBookName = (e) => {
    setBookName(e.target.value);
  };

  const handleClick = () => {
    handleFormData(authorName, bookName, bookCover);
    setAuthorName('');
    setBookName('');
    setBookCover(null);
  };

  const changeFileInput = (e) => {
    const file = e.target.files[0];
    convertToBase64(file).then(res => setBookCover(res));
  };

  return (
    <div className='form__container'>
      <div className='form__cover'>
        <BookCover url={bookCover} />
        <label>
          загрузить обложку
          <input id='file' type="file" onChange={changeFileInput} />
        </label>
      </div>

      <div className='form'>       
        <input className='form__field' type='text' placeholder='введите имя автора'
               value={authorName} onChange={changeAuthorName} />
        <input className='form__field' type='text' placeholder='введите название книги'
              value={bookName} onChange={changeBookName} />
        <DefaultBtn onClickHandler={handleClick} value='сохранить' isDisable={!authorName || !bookName} />
      </div>
    </div>
  )
};

export default Form;