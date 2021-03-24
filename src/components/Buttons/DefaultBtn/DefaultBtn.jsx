import './defaultBtn.css';

const DefaultBtn = ({ value, onClickHandler, isDisable }) => {
  return <button className={isDisable ? 'default__btn default__btn_disable' : 'default__btn'} 
                 onClick={onClickHandler} disabled={isDisable}>{value}</button>
};

export default DefaultBtn;