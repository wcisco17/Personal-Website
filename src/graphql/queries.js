// eslint-disable
// this is an auto generated file. This will be overwritten

export const getProjects = `query GetProjects($id: ID!) {
  getProjects(id: $id) {
    id
    title
    description
    image
    createdOn
    type
    website
    git
    color
  }
}
`;
export const listProjectss = `query ListProjectss(
  $filter: ModelProjectsFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjectss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      image
      createdOn
      type
      website
      git
      color
    }
    nextToken
  }
}
`;
export const getContact = `query GetContact($id: ID!) {
  getContact(id: $id) {
    id
    name
    email
    message
  }
}
`;
export const listContacts = `query ListContacts(
  $filter: ModelContactFilterInput
  $limit: Int
  $nextToken: String
) {
  listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      message
    }
    nextToken
  }
}
`;
