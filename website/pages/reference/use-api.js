import React from 'react';
import ReferenceDisplay from '../../components/ReferenceDisplay';
import UseApiReference from '!!raw-loader!../../reference/use-api.md';

const UseApi = props => {
  return (
    <ReferenceDisplay source={UseApiReference} />
  );
};

UseApi.propTypes = {};

export default UseApi;
