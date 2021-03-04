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
      allStripePrice {
        edges {
          node {
            id
            product {
              name
            }
          }
        }
      }
    }
  `);

  data.allStripePrice.edges.forEach(({ node }) => {
    createPage({
      path: `products/${node.product.name}`,
      context: { stripePriceId: node.id },
      component: path.resolve('./src/templates/ProductTemplate/index.js')
    });
  });
};