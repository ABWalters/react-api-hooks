import HooksReferenceSource from '!!raw-loader!../reference/hooks.md';
import BaseLayout from '../components/BaseLayout';
const ReactMarkdown = require('react-markdown');

const Reference = () => {
  return (
    <BaseLayout>
      <h1>Reference</h1>
      <ReactMarkdown escapeHtml={false} source={HooksReferenceSource} />
    </BaseLayout>
  );
};

export default Reference;
