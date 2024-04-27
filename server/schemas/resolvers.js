const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('savedBooks');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        login: async(parent, { email, password }, context) => {
            const user = User.findOne({ email });

            if (!user){
                throw new AuthenticationError('Can\'t find this user.');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw){
                throw new AuthenticationError('Wrong password!');
            }

            const token = signToken(user);

            return { token, user };

        },
        addUser: async(parent, { username, email, password }, context) => {
            const user = await User.create({ username, email, password });

            if (!user){
                throw new AuthenticationError('Something went wrong during signup.');
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

            return updatedUser;
        }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeBook: async(parent, { bookId }, context) => {
            if(context.user){
                const updatedUser = await User.findOneAndUpdate(
                    { _id: user._id },
                    { $pull: { savedBooks: { bookId } } },
                    { new: true },
                );

                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
};

module.exports = resolvers;