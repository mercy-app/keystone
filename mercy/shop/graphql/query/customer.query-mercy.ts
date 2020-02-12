import gql from 'graphql-tag';

export const GET_LOGGED_IN_CUSTOMER = gql`
  query getUser {
    authenticatedUser {
      id
      name
      email
      address {
        id
        type
        name
        info
      }
      contact {
        id
        type
        number
      }
      card {
        id
        type
        cardType
        name
        lastFourDigit
      }
    }
  }
`;
