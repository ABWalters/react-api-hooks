const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');

jsdoc2md.render({ files: 'src/useAPI.js' }).then(markdown => {
  console.log(markdown);
  fs.writeFileSync(
    'website/reference/use-api.md',
    markdown
  );
});

jsdoc2md.render({ files: 'src/useParams.js' }).then(markdown => {
  console.log(markdown);
  fs.writeFileSync(
    'website/reference/use-params.md',
    markdown
  );
});
