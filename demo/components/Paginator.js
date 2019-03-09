import React from 'react';

const Paginator = ({ isNext, isPrev, onNext, onPrev }) => {
  return (
    <div className="paginator">
      {isPrev && (
        <button type="button" onClick={onPrev}>
          Prev Page
        </button>
      )}
      <div className="center" />
      {isNext && (
        <button type="button" onClick={onNext}>
          Next Page
        </button>
      )}
    </div>
  );
};

export default Paginator;
