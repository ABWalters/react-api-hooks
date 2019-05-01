import React from 'react';
import BasicExampleSource from '!!raw-loader!../../examples/BasicExample';
import BasicExample from '../../examples/BasicExample';
import ExampleComponent from '../../components/ExampleComponent';
import BaseLayout from '../../components/layout/BaseLayout';

const Basic = props => {
  return (
    <BaseLayout>
      <ExampleComponent Component={BasicExample}
                        componentSource={BasicExampleSource} />
    </BaseLayout>
  );
};

Basic.propTypes = {};

export default Basic;
