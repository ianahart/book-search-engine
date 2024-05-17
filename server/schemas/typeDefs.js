const typeDefs = `
    type User {
         _id: ID!
        username: String!
        email: String!
        bookCount: Integer
        savedBooks: [Book]
    }

    type Book {
       bookId: ID!
       authors: [String]
       description: String!
       title: String
       image String
       link String
    }
`;

module.exports = typeDefs;
