/* eslint-disable */

/**
 * Vercel deploy entry handler for serverless deployment.
 * This wraps the Express app as a Vercel serverless function.
 */
const app = require("../backend/dist/app.js").default;

module.exports = (req, res) => app(req, res);
