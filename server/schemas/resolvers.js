const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {},
    },

    Mutation: {
        login: async(parent, { email, password }, context) => {},
        addUser: async(parent, { username, email, password }, context) => {},
        saveBook: async(parent, { content }, context) => {},
        removeBook: async(parent, { bookId }, context) => {},
    },
};

module.exports = resolvers;