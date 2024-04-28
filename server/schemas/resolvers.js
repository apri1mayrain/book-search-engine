const { User } = require('../models');
const { 
    signToken, 
    AuthenticationError,
    CredentialError,
    ServerError,
} = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
               return await User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError;
        },
    },

    Mutation: {
        login: async(parent, { email, password }, context) => {
            const user = await User.findOne({ email });

            if (!user){
                throw CredentialError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw){
                throw CredentialError;
            }

            const token = signToken(user);

            return { token, user };

        },
        addUser: async(parent, { username, email, password }, context) => {
            const user = await User.create({ username, email, password });

            if (!user){
                throw ServerError;
            }

            const token = signToken(user);

            return { token, user };
        },
        saveBook: async(parent, { content }, context) => {
            if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { savedBooks: content } },
                { new: true, runValidators: true },
            );

            if(!updatedUser){
                throw ServerError;
            }

            return updatedUser;
        }
            throw AuthenticationError;
        },
        removeBook: async(parent, { bookId }, context) => {
            if(context.user){
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId } } },
                    { new: true },
                );

                if(!updatedUser){
                    throw ServerError;
                }

                return updatedUser;
            }
            throw AuthenticationError;
        },
    },
};

module.exports = resolvers;