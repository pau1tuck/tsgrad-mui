import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   *
   *     Errors messages and codes mapped to
   *     fields or non fields errors.
   *     Example:
   *     {
   *         field_name: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         other_field: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         nonFieldErrors: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ]
   *     }
   *
   */
  ExpectedErrorType: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
};

/**
 * Archive account and revoke refresh tokens.
 *
 * User must be verified and confirm password.
 */
export type ArchiveAccount = {
  __typename?: "ArchiveAccount";
  success?: Maybe<Scalars["Boolean"]>;
  errors?: Maybe<Scalars["ExpectedErrorType"]>;
};

/**
 * Delete account permanently or make `user.is_active=False`.
 *
 * The behavior is defined on settings.
 * Anyway user refresh tokens are revoked.
 *
 * User must be verified and confirm password.
 */
export type DeleteAccount = {
  __typename?: "DeleteAccount";
  success?: Maybe<Scalars["Boolean"]>;
  errors?: Maybe<Scalars["ExpectedErrorType"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  login?: Maybe<ObtainJwToken>;
  /**
   * Register user with fields defined in the settings.
   *
   * If the email field of the user model is part of the
   * registration fields (default), check if there is
   * no user with that email or as a secondary email.
   *
   * If it exists, it does not register the user,
   * even if the email field is not defined as unique
   * (default of the default django user model).
   *
   * When creating the user, it also creates a `UserStatus`
   * related to that user, making it possible to track
   * if the user is archived, verified and has a secondary
   * email.
   *
   * Send account verification email.
   *
   * If allowed to not verified users login, return token.
   */
  register?: Maybe<Register>;
  /**
   * Verify user account.
   *
   * Receive the token that was sent by email.
   * If the token is valid, make the user verified
   * by making the `user.status.verified` field true.
   */
  verifyAccount?: Maybe<VerifyAccount>;
  /**
   * Sends activation email.
   *
   * It is called resend because theoretically
   * the first activation email was sent when
   * the user registered.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  resendActivationEmail?: Maybe<ResendActivationEmail>;
  /**
   * Send password reset email.
   *
   * For non verified users, send an activation
   * email instead.
   *
   * Accepts both primary and secondary email.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmail>;
  /**
   * Change user password without old password.
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, update
   * user password and in case of using refresh
   * tokens, revoke all of them.
   */
  passwordReset?: Maybe<PasswordReset>;
  /**
   * Change account password when user knows the old password.
   *
   * A new token and refresh token are sent. User must be verified.
   */
  passwordChange?: Maybe<PasswordChange>;
  /**
   * Update user model fields, defined on settings.
   *
   * User must be verified.
   */
  updateAccount?: Maybe<UpdateAccount>;
  /**
   * Archive account and revoke refresh tokens.
   *
   * User must be verified and confirm password.
   */
  archiveAccount?: Maybe<ArchiveAccount>;
  /**
   * Delete account permanently or make `user.is_active=False`.
   *
   * The behavior is defined on settings.
   * Anyway user refresh tokens are revoked.
   *
   * User must be verified and confirm password.
   */
  deleteAccount?: Maybe<DeleteAccount>;
  /**
   * Send activation to secondary email.
   *
   * User must be verified and confirm password.
   */
  sendSecondaryEmailActivation?: Maybe<SendSecondaryEmailActivation>;
  /**
   * Verify user secondary email.
   *
   * Receive the token that was sent by email.
   * User is already verified when using this mutation.
   *
   * If the token is valid, add the secondary email
   * to `user.status.secondary_email` field.
   *
   * Note that until the secondary email is verified,
   * it has not been saved anywhere beyond the token,
   * so it can still be used to create a new account.
   * After being verified, it will no longer be available.
   */
  verifySecondaryEmail?: Maybe<VerifySecondaryEmail>;
  /**
   * Swap between primary and secondary emails.
   *
   * Require password confirmation.
   */
  swapEmails?: Maybe<SwapEmails>;
  /**
   * Remove user secondary email.
   *
   * Require password confirmation.
   */
  removeSecondaryEmail?: Maybe<RemoveSecondaryEmail>;
  /**
   * Obtain JSON web token for given user.
   *
   * Allow to perform login with different fields,
   * and secondary email if set. The fields are
   * defined on settings.
   *
   * Not verified users can login by default. This
   * can be changes on settings.
   *
   * If user is archived, make it unarchive and
   * return `unarchiving=True` on output.
   */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  verifyToken?: Maybe<VerifyToken>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  refreshToken?: Maybe<RefreshToken>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  revokeToken?: Maybe<RevokeToken>;
};

export type MutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationRegisterArgs = {
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  username: Scalars["String"];
  password1: Scalars["String"];
  password2: Scalars["String"];
};

export type MutationVerifyAccountArgs = {
  token: Scalars["String"];
};

export type MutationResendActivationEmailArgs = {
  email: Scalars["String"];
};

export type MutationSendPasswordResetEmailArgs = {
  email: Scalars["String"];
};

export type MutationPasswordResetArgs = {
  token: Scalars["String"];
  newPassword1: Scalars["String"];
  newPassword2: Scalars["String"];
};

export type MutationPasswordChangeArgs = {
  oldPassword: Scalars["String"];
  newPassword1: Scalars["String"];
  newPassword2: Scalars["String"];
};

export type MutationUpdateAccountArgs = {
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
};

export type MutationArchiveAccountArgs = {
  password: Scalars["String"];
};

export type MutationDeleteAccountArgs = {
  password: Scalars["String"];
};

export type MutationSendSecondaryEmailActivationArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationVerifySecondaryEmailArgs = {
  token: Scalars["String"];
};

export type MutationSwapEmailsArgs = {
  password: Scalars["String"];
};

export type MutationRemoveSecondaryEmailArgs = {
  password: Scalars["String"];
};

export type MutationTokenAuthArgs = {
  password?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
};

export type MutationVerifyTokenArgs = {
  token: Scalars["String"];
};

export type MutationRefreshTokenArgs = {
  refreshToken: Scalars["String"];
};

export type MutationRevokeTokenArgs = {
  refreshToken: Scalars["String"];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars["ID"];
};

/**
 * Obtain JSON web token for given user.
 *
 * Allow to perform login with different fields,
 * and secondary email if set. The fields are
 * defined on settings.
 *
 * Not verified users can login by default. This
 * can be changes on settings.
 *
 * If user is archived, make it unarchive and
 * return `unarchiving=True` on output.
 */
export type ObtainJsonWebToken = {
  __typename?: "ObtainJSONWebToken";
  token?: Maybe<Scalars["String"]>;
  success?: Maybe<Scalars["Boolean"]>;
  errors?: Maybe<Scalars["ExpectedErrorType"]>;
  user?: Maybe<UserNode>;
  unarchiving?: Maybe<Scalars["Boolean"]>;
  refreshToken?: Maybe<Scalars["String"]>;
};

export type ObtainJwToken = {
  __typename?: "ObtainJWToken";
  token?: Maybe<Scalars["String"]>;
  user?: Maybe<UserType>;
  refreshToken?: Maybe<Scalars["String"]>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
};

/**
 * Change account password when user knows the old password.
 *
 * A new token and refresh token are sent. User must be verified.
 */
export type PasswordChange = {
  __typename?: "PasswordChange";
  success?: Maybe<Scalars["Boolean"]>;
  errors?: Maybe<Scalars["ExpectedErrorType"]>;
  refreshToken?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
};

/**
 * Change user password without old password.
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, update
 * user password and in case of using refresh
 * tokens, revoke all of them.
 */
export type PasswordReset = {
  __typename?: "PasswordReset";
  success?: Maybe<Scalars["Boolean"]>;
  errors?: Maybe<Scalars["ExpectedErrorType"]>;
};

export type PostType = {
  __typename?: "PostType";
  id: Scalars["ID"];
  title: Scalars["String"];
  content: Scalars["String"];
  author: UserType;
  createdAt: Scalars["DateTime"];
};

export type Query = {
  __typename?: "Query";
  posts?: Maybe<Array<Maybe<PostType>>>;
  me?: Maybe<UserNode>;
  /** The ID of the object */
  user?: Maybe<UserNode>;
  users?: Maybe<UserNodeConnection>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type QueryUsersArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
  username_Icontains?: Maybe<Scalars["String"]>;
  username_Istartswith?: Maybe<Scalars["String"]>;
  isActive?: Maybe<Scalars["Boolean"]>;
  status_Archived?: Maybe<Scalars["Boolean"]>;
  status_Verified?: Maybe<Scalars["Boolean"]>;
  status_SecondaryEmail?: Maybe<Scalars["String"]>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RefreshToken = {
  __typename?: "RefreshToken";
  token?: Maybe<Scalars["String"]>;
  payload?: Maybe<Scalars["GenericScalar"]>;
  success?: Maybe<Scalars["Boolean"]>;
  errors?: Maybe<Scalars["ExpectedErrorType"]>;
  refreshToken?: Maybe<Scalars["String"]>;
};

/**
 * Register user with fields defined in the settings.
 *
 * If the email field of the user model is part of the
 * registration fields (default), check if there is
 * no user with that email or as a secondary email.
 *
 * If it exists, it does not register the user,
 * even if the email field is not defined as unique
 * (default of the default django user model).
 *
 * When creating the user, it also creates a `UserStatus`
 * related to that user, making it possible to track
 * if the user is archived, verified and has a secondary
 * email.
 *
 * Send account verification email.
 *
 * If allowed to not verified users login, return token.
 */
export type Register = {
  __typename?: "Register";
  success?: Maybe<Scalars["Boolean"]>;
  errors?: Maybe<Scalars["ExpectedErrorType"]>;
  refreshToken?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
};

/**
 * Remove user secondary email.
 *
 * Require password confirmation.
 */
export type RemoveSecondaryEmail = {
  __typename?: "RemoveSecondaryEmail";
  success?: Maybe<Scalars["Boolean"]>;
  errors?: Maybe<Scalars["ExpectedErrorType"]>;
};

/**
 * Sends activation email.
 *
 * It is called resend because theoretically
 * the first activation email was sent when
 * the user registered.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type ResendActivationEmail = {
  __typename?: "ResendActivationEmail";
  success?: Maybe<Scalars["Boolean"]>;
  errors?: Maybe<Scalars["ExpectedErrorType"]>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RevokeToken = {
  __typename?: "RevokeToken";
  revoked?: Maybe<Scalars["Int"]>;
  success?: Maybe<Scalars["Boolean"]>;
  errors?: Maybe<Scalars["ExpectedErrorType"]>;
};

/**
 * Send password reset email.
 *
 * For non verified users, send an activation
 * email instead.
 *
 * Accepts both primary and secondary email.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type SendPasswordResetEmail = {
  __typename?: "SendPasswordResetEmail";
  success?: Maybe<Scalars["Boolean"]>;
  errors?: Maybe<Scalars["ExpectedErrorType"]>;
};

/**
 * Send activation to secondary email.
 *
 * User must be verified and confirm password.
 */
export type SendSecondaryEmailActivation = {
  __typename?: "SendSecondaryEmailActivation";
  success?: Maybe<Scalars["Boolean"]>;
  errors?: Maybe<Scalars["ExpectedErrorType"]>;
};

/**
 * Swap between primary and secondary emails.
 *
 * Require password confirmation.
 */
export type SwapEmails = {
  __typename?: "SwapEmails";
  success?: Maybe<Scalars["Boolean"]>;
  errors?: Maybe<Scalars["ExpectedErrorType"]>;
};

/**
 * Update user model fields, defined on settings.
 *
 * User must be verified.
 */
export type UpdateAccount = {
  __typename?: "UpdateAccount";
  success?: Maybe<Scalars["Boolean"]>;
  errors?: Maybe<Scalars["ExpectedErrorType"]>;
};

export type UserNode = Node & {
  __typename?: "UserNode";
  /** The ID of the object. */
  id: Scalars["ID"];
  lastLogin?: Maybe<Scalars["DateTime"]>;
  username: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  email: Scalars["String"];
  avatar: Scalars["String"];
  isStaff: Scalars["Boolean"];
  isActive: Scalars["Boolean"];
  createdAt: Scalars["DateTime"];
  lastVisit: Scalars["DateTime"];
  post: Array<PostType>;
  pk?: Maybe<Scalars["Int"]>;
  archived?: Maybe<Scalars["Boolean"]>;
  verified?: Maybe<Scalars["Boolean"]>;
  secondaryEmail?: Maybe<Scalars["String"]>;
};

export type UserNodeConnection = {
  __typename?: "UserNodeConnection";
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: "UserNodeEdge";
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
};

export type UserType = {
  __typename?: "UserType";
  id: Scalars["ID"];
  lastLogin?: Maybe<Scalars["DateTime"]>;
  username: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  email: Scalars["String"];
  avatar: Scalars["String"];
  isStaff: Scalars["Boolean"];
  isActive: Scalars["Boolean"];
  createdAt: Scalars["DateTime"];
  lastVisit: Scalars["DateTime"];
  post: Array<PostType>;
  password: Scalars["String"];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars["Boolean"];
};

/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccount = {
  __typename?: "VerifyAccount";
  success?: Maybe<Scalars["Boolean"]>;
  errors?: Maybe<Scalars["ExpectedErrorType"]>;
};

/**
 * Verify user secondary email.
 *
 * Receive the token that was sent by email.
 * User is already verified when using this mutation.
 *
 * If the token is valid, add the secondary email
 * to `user.status.secondary_email` field.
 *
 * Note that until the secondary email is verified,
 * it has not been saved anywhere beyond the token,
 * so it can still be used to create a new account.
 * After being verified, it will no longer be available.
 */
export type VerifySecondaryEmail = {
  __typename?: "VerifySecondaryEmail";
  success?: Maybe<Scalars["Boolean"]>;
  errors?: Maybe<Scalars["ExpectedErrorType"]>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type VerifyToken = {
  __typename?: "VerifyToken";
  payload?: Maybe<Scalars["GenericScalar"]>;
  success?: Maybe<Scalars["Boolean"]>;
  errors?: Maybe<Scalars["ExpectedErrorType"]>;
};

export type PostsQueryVariables = Exact<{ [key: string]: never }>;

export type PostsQuery = { __typename?: "Query" } & {
  posts?: Maybe<
    Array<
      Maybe<
        { __typename?: "PostType" } & Pick<
          PostType,
          "id" | "title" | "content" | "createdAt"
        > & {
            author: { __typename?: "UserType" } & Pick<
              UserType,
              "id" | "firstName" | "lastName" | "email"
            >;
          }
      >
    >
  >;
};

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars["String"];
}>;

export type ForgotPasswordMutation = { __typename?: "Mutation" } & {
  sendPasswordResetEmail?: Maybe<
    { __typename?: "SendPasswordResetEmail" } & Pick<
      SendPasswordResetEmail,
      "success" | "errors"
    >
  >;
};

export type LoginMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutation = { __typename?: "Mutation" } & {
  login?: Maybe<
    { __typename?: "ObtainJWToken" } & Pick<
      ObtainJwToken,
      "token" | "refreshToken"
    > & {
        user?: Maybe<
          { __typename?: "UserType" } & Pick<UserType, "id" | "firstName">
        >;
      }
  >;
};

export type LogoutMutationVariables = Exact<{
  refreshToken: Scalars["String"];
}>;

export type LogoutMutation = { __typename?: "Mutation" } & {
  revokeToken?: Maybe<
    { __typename?: "RevokeToken" } & Pick<RevokeToken, "success" | "errors">
  >;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: "Query" } & {
  me?: Maybe<
    { __typename?: "UserNode" } & Pick<
      UserNode,
      "id" | "firstName" | "lastName" | "email"
    >
  >;
};

export type RegisterMutationVariables = Exact<{
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  email: Scalars["String"];
  password1: Scalars["String"];
}>;

export type RegisterMutation = { __typename?: "Mutation" } & {
  register?: Maybe<
    { __typename?: "Register" } & Pick<Register, "success" | "errors" | "token">
  >;
};

export type VerifyTokenMutationVariables = Exact<{
  token: Scalars["String"];
}>;

export type VerifyTokenMutation = { __typename?: "Mutation" } & {
  verifyToken?: Maybe<
    { __typename?: "VerifyToken" } & Pick<VerifyToken, "payload">
  >;
};

export const PostsDocument = gql`
  query Posts {
    posts {
      id
      title
      content
      author {
        id
        firstName
        lastName
        email
      }
      createdAt
    }
  }
`;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(
  baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>
) {
  return Apollo.useQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    baseOptions
  );
}
export function usePostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>
) {
  return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    baseOptions
  );
}
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<
  PostsQuery,
  PostsQueryVariables
>;
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($email: String!) {
    sendPasswordResetEmail(email: $email) {
      success
      errors
    }
  }
`;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >
) {
  return Apollo.useMutation<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >(ForgotPasswordDocument, baseOptions);
}
export type ForgotPasswordMutationHookResult = ReturnType<
  typeof useForgotPasswordMutation
>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<
  ForgotPasswordMutation
>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
export const LoginDocument = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      refreshToken
      user {
        id
        firstName
      }
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const LogoutDocument = gql`
  mutation logout($refreshToken: String!) {
    revokeToken(refreshToken: $refreshToken) {
      success
      errors
    }
  }
`;
export type LogoutMutationFn = Apollo.MutationFunction<
  LogoutMutation,
  LogoutMutationVariables
>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogoutMutation,
    LogoutMutationVariables
  >
) {
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    baseOptions
  );
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>;
export const MeDocument = gql`
  query me {
    me {
      id
      firstName
      lastName
      email
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    baseOptions
  );
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RegisterDocument = gql`
  mutation Register(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password1: String!
  ) {
    register(
      firstName: $firstName
      lastName: $lastName
      email: $email
      username: $email
      password1: $password1
      password2: $password1
    ) {
      success
      errors
      token
    }
  }
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      password1: // value for 'password1'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    baseOptions
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const VerifyTokenDocument = gql`
  mutation VerifyToken($token: String!) {
    verifyToken(token: $token) {
      payload
    }
  }
`;
export type VerifyTokenMutationFn = Apollo.MutationFunction<
  VerifyTokenMutation,
  VerifyTokenMutationVariables
>;

/**
 * __useVerifyTokenMutation__
 *
 * To run a mutation, you first call `useVerifyTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyTokenMutation, { data, loading, error }] = useVerifyTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VerifyTokenMutation,
    VerifyTokenMutationVariables
  >
) {
  return Apollo.useMutation<VerifyTokenMutation, VerifyTokenMutationVariables>(
    VerifyTokenDocument,
    baseOptions
  );
}
export type VerifyTokenMutationHookResult = ReturnType<
  typeof useVerifyTokenMutation
>;
export type VerifyTokenMutationResult = Apollo.MutationResult<
  VerifyTokenMutation
>;
export type VerifyTokenMutationOptions = Apollo.BaseMutationOptions<
  VerifyTokenMutation,
  VerifyTokenMutationVariables
>;
