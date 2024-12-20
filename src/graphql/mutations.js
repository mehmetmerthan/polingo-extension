/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      words {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      words {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      words {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createWord = /* GraphQL */ `
  mutation CreateWord(
    $input: CreateWordInput!
    $condition: ModelWordConditionInput
  ) {
    createWord(input: $input, condition: $condition) {
      id
      word
      translation
      isLearned
      type
      createdAt
      updatedAt
      userWordsId
      __typename
    }
  }
`;
export const updateWord = /* GraphQL */ `
  mutation UpdateWord(
    $input: UpdateWordInput!
    $condition: ModelWordConditionInput
  ) {
    updateWord(input: $input, condition: $condition) {
      id
      word
      translation
      isLearned
      type
      createdAt
      updatedAt
      userWordsId
      __typename
    }
  }
`;
export const deleteWord = /* GraphQL */ `
  mutation DeleteWord(
    $input: DeleteWordInput!
    $condition: ModelWordConditionInput
  ) {
    deleteWord(input: $input, condition: $condition) {
      id
      word
      translation
      isLearned
      type
      createdAt
      updatedAt
      userWordsId
      __typename
    }
  }
`;
export const createWebsite = /* GraphQL */ `
  mutation CreateWebsite(
    $input: CreateWebsiteInput!
    $condition: ModelWebsiteConditionInput
  ) {
    createWebsite(input: $input, condition: $condition) {
      id
      title
      url
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateWebsite = /* GraphQL */ `
  mutation UpdateWebsite(
    $input: UpdateWebsiteInput!
    $condition: ModelWebsiteConditionInput
  ) {
    updateWebsite(input: $input, condition: $condition) {
      id
      title
      url
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteWebsite = /* GraphQL */ `
  mutation DeleteWebsite(
    $input: DeleteWebsiteInput!
    $condition: ModelWebsiteConditionInput
  ) {
    deleteWebsite(input: $input, condition: $condition) {
      id
      title
      url
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
