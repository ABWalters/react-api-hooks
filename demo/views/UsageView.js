import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const input = `
### useAPI

Perform an API call and pass the data returned from the API to a UI component.

\`\`\`javascript
import React from 'react';
import { useAPI } from 'react-api-hooks';

const Component = () => {
  const { isLoading, data, error } = useAPI(url);

  if (error) {
    return <div>An error occured.</div>;
  }

  return (isLoading) ? <Loading /> : <UIComponent data={data} />;
};
\`\`\`

### useParams

Perform an API call using parameters to filter the results.


\`debouncedUpdateParams\` can be used to delay the params update until a set delay has passed between function calls.

\`updateParams\` can be used to immediately update the params.

\`\`\`javascript
import React from 'react';
import { useAPI, useParams } from 'react-api-hooks';

const Component = () => {
  const { params, updateParams, debouncedUpdateParams } = useParams();
  const { isLoading, data, error } = useAPI(url, { params });

  if (error) {
    return <div>An error occured.</div>;
  }

  return (
    <>
      <SearchInput onChange={e => debouncedUpdateParams({ search: e.target.value })} />
      <CategorySelect onChange={e => updateParams({ category: e.target.value })} />
      {(isLoading) ? <Loading /> : <UIComponent data={data} />}
    </>
  );
};
\`\`\`
`;

const UsageView = props => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return <ReactMarkdown source={input} />;
};

UsageView.propTypes = {};

export default UsageView;
