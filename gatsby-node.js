const path = require("path");
const data = require("./src/data/data.json");

exports.createPages = ({ actions, page }) => {
  const { createPage } = actions;

  // Your component that should be rendered for every item in JSON.
  const template = path.resolve(`src/templates/EmoticonContainer.js`);
  console.log(data);
  let tags = [];
  data.forEach(item => tags.push(item.path));
  // Create pages for each JSON entry.
  data.forEach(item => {
    const path = item.path;
    const emoticons = item.emoticons;
    createPage({
      path,
      component: template,
      emoticons: emoticons,
      tags: tags,

      // Send additional data to page from JSON (or query inside template)
      context: {
        path,
        emoticons,
        tags: tags,
      },
    });
  });
};

//eliminate one forloop
