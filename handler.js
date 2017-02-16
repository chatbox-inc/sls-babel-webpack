'use strict';

require("dotenv").config();

module.exports.hello = (event, context, callback) => {
  const statusCode = 200;
  const body = JSON.stringify({
    message: `Go Serverless v1.0! Your function executed successfully!`,
    debug: process.env.SLS_DEBUG ? "ON":"OFF",
    input: event
  })

  callback(null, { statusCode, body });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
