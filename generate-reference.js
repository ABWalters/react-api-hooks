const jsdoc2md = require('jsdoc-to-markdown');

jsdoc2md.render({ files: 'src/*.js' }).then(console.log);
