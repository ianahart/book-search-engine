const { User, Book } = require('../models');
const { AuthenticationError, signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (_, _, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('thoughts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
