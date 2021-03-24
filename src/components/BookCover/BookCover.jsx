import defaultCover from '../../assets/book.png'; 

import './cover.css';

const BookCover = ({ url }) => {
  return <img className='cover__img' src={url || defaultCover} alt='cover' />
};

export default BookCover;