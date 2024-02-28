extend schema @auth(rules: [{ allow: public }])
schema
  @auth(
    providers: [
      { type: jwt, issuer: "nextauth", secret: "{{ env.NEXTAUTH_SECRET }}" }
    ]
    rules: [{ allow: private }]
  ) {
  query: Query
  mutation: Mutation
}
type Message @model {
  username: String!
  avatar: URL
  body: String!
  likes: Int @default(value: 0)
  dislikes: Int @default(value: 0)
}
type Mutation {
  createMessage(username: String!, avatar: URL, body: String!): Message!
  updateMessage(id: ID!, body: String!): Message!
  deleteMessage(id: ID!): Boolean!
}
