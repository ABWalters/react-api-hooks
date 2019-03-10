import React from 'react';

const BookList = ({ data, isStale }) => {
  return (
    <div style={{ opacity: isStale ? 0.2 : 1.0 }} className="book-list">
      {data.items.map(item => {
        const { volumeInfo } = item;
        const { imageLinks } = volumeInfo;
        return (
          <div key={volumeInfo.title + volumeInfo.publishedDate} className="book-list-item">
            <div className="image">
              {imageLinks && <img src={imageLinks.smallThumbnail} alt="book thumbnail" />}
            </div>
            <div className="text">
              <span>{volumeInfo.title}</span>
              <br />
              <small>{(volumeInfo.authors || []).join(', ')}</small>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
