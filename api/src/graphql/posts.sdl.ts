export const schema = gql`
  type Post {
    id: Int!
    title: String!
    img: String!
    author: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    title: String!
    img: String!
    author: String!
    body: String!
  }

  input UpdatePostInput {
    title: String
    img: String
    author: String
    body: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
