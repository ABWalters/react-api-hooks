import React from 'react';
import styled from 'styled-components';
import APIComponentWrapper from './APIComponentWrapper';
import NoResults from './status/NoResults';

const GoogleBookListWrapper = styled.ul`
  box-shadow: none;
  margin: 0;
  padding: 0;
  list-style: none;
  transform: none;
`;

const GoogleBookLi = styled.li`
  cursor: pointer;
  background: #fff;
  margin: 0;
  padding: 2px 2px;
  transition: background 300ms linear;
  border-bottom: 1px solid #f1f1fc;
  opacity: 1;
  transition: opacity 300ms linear;

  :last-child {
    border-bottom: none;
  }

  :hover {
    background: #f1f1fc;
    color: #5755d9;
  }

  .text {
    padding: 5px 15px;
  }

  h5 {
    margin-bottom: 0.1em;
  }

  .label {
    font-size: 12px;
    margin-right: 2px;
  }
`;

export const GoogleBook = ({ item }) => {
  const { volumeInfo } = item;
  const { imageLinks, title, authors } = volumeInfo;
  return (
    <GoogleBookLi>
      <div style={{ display: 'flex ' }}>
        <div
          style={{
            width: 50,
            height: 74,
            borderRadius: 3,
            border: '1px solid #dadada',
            backgroundImage: `url(${(imageLinks || {}).smallThumbnail})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <div style={{ flexGrow: 1 }} className="text">
          <h5>{title}</h5>
          <div>
            {(authors || []).map(a => (
              <span key={`${title}=${a}`} className="label">
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </GoogleBookLi>
  );
};

export const GoogleBooksListInner = ({ items }) => {
  return (
    <GoogleBookListWrapper>
      {items.map(item => (
        <GoogleBook item={item} key={item.id} />
      ))}
    </GoogleBookListWrapper>
  );
};

const GoogleBooksList = ({ data, ...passProps }) => {
  const items = data.items || [];

  if (items.length === 0) {
    return <NoResults />;
  }

  return (
    <APIComponentWrapper {...passProps}>
      <GoogleBooksListInner items={items} />
    </APIComponentWrapper>
  );
};

export default GoogleBooksList;
