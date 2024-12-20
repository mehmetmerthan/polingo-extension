/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateWord = /* GraphQL */ `
  subscription OnCreateWord($filter: ModelSubscriptionWordFilterInput) {
    onCreateWord(filter: $filter) {
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
export const onUpdateWord = /* GraphQL */ `
  subscription OnUpdateWord($filter: ModelSubscriptionWordFilterInput) {
    onUpdateWord(filter: $filter) {
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
export const onDeleteWord = /* GraphQL */ `
  subscription OnDeleteWord($filter: ModelSubscriptionWordFilterInput) {
    onDeleteWord(filter: $filter) {
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
export const onCreateWebsite = /* GraphQL */ `
  subscription OnCreateWebsite($filter: ModelSubscriptionWebsiteFilterInput) {
    onCreateWebsite(filter: $filter) {
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
export const onUpdateWebsite = /* GraphQL */ `
  subscription OnUpdateWebsite($filter: ModelSubscriptionWebsiteFilterInput) {
    onUpdateWebsite(filter: $filter) {
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
export const onDeleteWebsite = /* GraphQL */ `
  subscription OnDeleteWebsite($filter: ModelSubscriptionWebsiteFilterInput) {
    onDeleteWebsite(filter: $filter) {
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
