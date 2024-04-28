const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // Errors
  AuthenticationError: new GraphQLError('You must be logged in to complete this action.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  CredentialError: new GraphQLError('Incorrect email or password.', {
    extensions: {
      code: 'BAD_USER_INPUT',
    },
  }),
  ServerError: new GraphQLError('Something went wrong... please try again.', {
    extensions: {
      code: 'INTERNAL_SERVER_ERROR',
    },
  }),
  // function for our authenticated routes
  authMiddleware: function ({ req }) {
    // allows token to be sent via  req.query or headers
    let token = req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
