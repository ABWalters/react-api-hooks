import React from 'react';
import PropTypes from 'prop-types';
import 'spectre.css/dist/spectre-icons.css';
import styled from 'styled-components';

const PaginatorWrapper = styled.div`
  display: flex;
  margin-top: 5px;

  .previous,
  .next {
  }

  .center {
    flex-grow: 1;
    text-align: center;
    line-height: 36px;
  }

  .btn,
  .btn:focus {
    background-color: #0b5351;
    border-color: #00a9a5;

    :hover,
    :active {
      background-color: #009793;
      border-color: #0b5351;
    }
  }
`;

const Paginator = ({ hasNext, hasPrevious, onNext, pageCnt, onPrevious, ...passProps }) => {
  return (
    <PaginatorWrapper {...passProps}>
      <div className="previous">
        <button className="btn btn-primary" onClick={onPrevious} disabled={!hasPrevious}>
          <i className="icon icon-arrow-left" />
          Previous
        </button>
      </div>
      <div className="center">Page #{pageCnt}</div>
      <div className="next">
        <button className="btn btn-primary" onClick={onNext} disabled={!hasNext}>
          Next
          <i className="icon icon-arrow-right" />
        </button>
      </div>
    </PaginatorWrapper>
  );
};

Paginator.propTypes = {
  hasNext: PropTypes.bool.isRequired,
  hasPrevious: PropTypes.bool.isRequired
};

export default Paginator;
