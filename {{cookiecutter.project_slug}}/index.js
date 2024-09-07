const nunjucks = require('nunjucks');
const fs = require('fs');
const data = require('./data');

// Configure Nunjucks
nunjucks.configure('templates', {
  autoescape: true
});

// Render the template
const renderedContent = nunjucks.render('template.html', data);

// Write the rendered content to output.txt
fs.writeFileSync('output.txt', renderedContent);

console.log('Template rendered and saved to output.txt');

