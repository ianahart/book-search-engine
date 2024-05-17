const typeDefs = `
    type User {
         _id: ID
        username: String!
        email: String!
        bookCount: Integer
        savedBooks: [Book]
    }

`;

module.exports = typeDefs;
