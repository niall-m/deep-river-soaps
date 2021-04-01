const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const validateCartItems = require("use-shopping-cart/src/serverUtil")
  .validateCartItems;

const inventory = require("../data/products.json");

exports.handler = async event => {
  try {
    const productJSON = JSON.parse(event.body);

    const line_items = validateCartItems(inventory, productJSON);

    line_items.forEach(item => {
      item.tax_rates = ['txr_1IbF4GH63NiWM9A3AFG4baa9'];
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_rates: ['shr_1IbElGH63NiWM9A3iKVgmdiD'],
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      success_url: "https://www.deepriversoaps.com/thanks",
      cancel_url: "https://www.deepriversoaps.com/error",
      line_items,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    };
  } catch (error) {
    console.error(error);
  }
};