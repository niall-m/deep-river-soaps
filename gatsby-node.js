const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      allStripeProduct {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  `);

  data.allStripeProduct.edges.forEach(({ node }) => {
    createPage({
      path: `products/${node.name}`,
      context: { stripeId: node.id },
      component: path.resolve('./src/templates/ProductTemplate/index.js')
    });
  });
};