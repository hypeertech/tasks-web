import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  ProjectID: any;
  TaskID: any;
  UserID: any;
  UserPassword: any;
};

export type AuthLoginInput = {
  password: Scalars['UserPassword'];
  username: Scalars['String'];
};

export type AuthLoginPayload = {
  __typename?: 'AuthLoginPayload';
  query?: Maybe<Query>;
};

export type AuthLogoutPayload = {
  __typename?: 'AuthLogoutPayload';
  query?: Maybe<Query>;
};

export type Mutation = {
  __typename?: 'Mutation';
  auth?: Maybe<MutationAuth>;
  project?: Maybe<MutationProject>;
  task?: Maybe<MutationTask>;
  user?: Maybe<MutationUser>;
};

export type MutationAuth = {
  __typename?: 'MutationAuth';
  login?: Maybe<AuthLoginPayload>;
  logout?: Maybe<AuthLogoutPayload>;
};


export type MutationAuthLoginArgs = {
  input: AuthLoginInput;
};

export type MutationProject = {
  __typename?: 'MutationProject';
  add?: Maybe<ProjectAddPayload>;
};


export type MutationProjectAddArgs = {
  input: ProjectAddInput;
};

export type MutationTask = {
  __typename?: 'MutationTask';
  add?: Maybe<TaskAddPayload>;
  delete?: Maybe<TaskDeletePayload>;
  edit?: Maybe<TaskEditPayload>;
  remove?: Maybe<TaskRemovePayload>;
};


export type MutationTaskAddArgs = {
  input: TaskAddInput;
};


export type MutationTaskDeleteArgs = {
  input: TaskDeleteInput;
};


export type MutationTaskEditArgs = {
  input: Array<TaskEditInput>;
};


export type MutationTaskRemoveArgs = {
  input: TaskRemoveInput;
};

export type MutationUser = {
  __typename?: 'MutationUser';
  signUp: UserSignUpPayload;
};


export type MutationUserSignUpArgs = {
  input: UserSignUpInput;
};

export type Project = {
  __typename?: 'Project';
  /** Project ID */
  id?: Maybe<Scalars['ProjectID']>;
  /** Project name */
  name: Scalars['String'];
  owner: User;
  ownerId: Scalars['UserID'];
};

export type ProjectAddInput = {
  /** Project name */
  name: Scalars['String'];
};

export type ProjectAddPayload = {
  __typename?: 'ProjectAddPayload';
  query?: Maybe<Query>;
  record?: Maybe<Project>;
  recordId?: Maybe<Scalars['ProjectID']>;
};

export type Query = {
  __typename?: 'Query';
  project: Project;
  projectCollection?: Maybe<Array<Maybe<Project>>>;
  task?: Maybe<Task>;
  taskCollection?: Maybe<Array<Maybe<Task>>>;
  user?: Maybe<User>;
  userCollection?: Maybe<Array<Maybe<User>>>;
};


export type QueryProjectArgs = {
  id: Scalars['ProjectID'];
};


export type QueryTaskArgs = {
  id: Scalars['TaskID'];
};


export type QueryTaskCollectionArgs = {
  filter?: InputMaybe<TaskFilter>;
  sort?: InputMaybe<TaskSort>;
};


export type QueryUserArgs = {
  id: Scalars['UserID'];
};

export type Task = {
  __typename?: 'Task';
  dueDate?: Maybe<Scalars['DateTime']>;
  /** Task ID */
  id: Scalars['TaskID'];
  isCompleted: Scalars['Boolean'];
  isRemoved: Scalars['Boolean'];
  owner: User;
  ownerId: Scalars['UserID'];
  project: Project;
  projectId: Scalars['ProjectID'];
  title: Scalars['String'];
};

export type TaskAddInput = {
  dueDate?: InputMaybe<Scalars['DateTime']>;
  isCompleted?: InputMaybe<Scalars['Boolean']>;
  isRemoved?: InputMaybe<Scalars['Boolean']>;
  projectId: Scalars['ProjectID'];
  title: Scalars['String'];
};

export type TaskAddPayload = {
  __typename?: 'TaskAddPayload';
  query?: Maybe<Query>;
  record?: Maybe<Task>;
  recordId?: Maybe<Scalars['TaskID']>;
};

export type TaskDeleteInput = {
  id: Scalars['TaskID'];
};

export type TaskDeletePayload = {
  __typename?: 'TaskDeletePayload';
  query?: Maybe<Query>;
  record?: Maybe<Task>;
  recordId?: Maybe<Scalars['TaskID']>;
};

export type TaskEditInput = {
  dueDate?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['TaskID'];
  isCompleted?: InputMaybe<Scalars['Boolean']>;
  isRemoved?: InputMaybe<Scalars['Boolean']>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TaskEditPayload = {
  __typename?: 'TaskEditPayload';
  query?: Maybe<Query>;
  record?: Maybe<Task>;
  recordCollection?: Maybe<Array<Maybe<Task>>>;
  recordId?: Maybe<Scalars['TaskID']>;
  recordIdCollection?: Maybe<Array<Maybe<Scalars['TaskID']>>>;
};

export type TaskFilter = {
  dueDate?: InputMaybe<Scalars['Date']>;
  isCompleted?: InputMaybe<Scalars['Boolean']>;
  isRemoved?: InputMaybe<Scalars['Boolean']>;
  project?: InputMaybe<Scalars['ProjectID']>;
};

export type TaskRemoveInput = {
  id: Scalars['TaskID'];
};

export type TaskRemovePayload = {
  __typename?: 'TaskRemovePayload';
  query?: Maybe<Query>;
  record?: Maybe<Task>;
  recordId?: Maybe<Scalars['TaskID']>;
};

export enum TaskSort {
  DueDateAsc = 'DUE_DATE_ASC',
  DueDateDesc = 'DUE_DATE_DESC'
}

export type User = {
  __typename?: 'User';
  /** User ID */
  id: Scalars['UserID'];
};

export type UserSignUpInput = {
  /** User password */
  password: Scalars['UserPassword'];
  /** User username */
  username: Scalars['String'];
};

export type UserSignUpPayload = {
  __typename?: 'UserSignUpPayload';
  query?: Maybe<Query>;
  record?: Maybe<User>;
  recordId?: Maybe<Scalars['UserID']>;
};

export type AllPageQueryVariables = Exact<{
  filter?: InputMaybe<TaskFilter>;
}>;


export type AllPageQuery = { __typename?: 'Query', taskCollection?: Array<{ __typename?: 'Task', id: any, title: string, isCompleted: boolean, isRemoved: boolean, dueDate?: any | null, projectId: any, ownerId: any, project: { __typename?: 'Project', id?: any | null, name: string }, owner: { __typename?: 'User', id: any } } | null> | null, projectCollection?: Array<{ __typename?: 'Project', id?: any | null, name: string } | null> | null };

export type TrashPageQueryVariables = Exact<{
  filter?: InputMaybe<TaskFilter>;
}>;


export type TrashPageQuery = { __typename?: 'Query', taskCollection?: Array<{ __typename?: 'Task', id: any, title: string, isCompleted: boolean, isRemoved: boolean, dueDate?: any | null, projectId: any, ownerId: any, project: { __typename?: 'Project', id?: any | null, name: string }, owner: { __typename?: 'User', id: any } } | null> | null };

export type AuthLoginMutationVariables = Exact<{
  input: AuthLoginInput;
}>;


export type AuthLoginMutation = { __typename?: 'Mutation', auth?: { __typename?: 'MutationAuth', login?: { __typename: 'AuthLoginPayload' } | null } | null };

export type ProjectPageQueryVariables = Exact<{
  filter?: InputMaybe<TaskFilter>;
}>;


export type ProjectPageQuery = { __typename?: 'Query', taskCollection?: Array<{ __typename?: 'Task', id: any, title: string, isCompleted: boolean, isRemoved: boolean, dueDate?: any | null, projectId: any, ownerId: any, project: { __typename?: 'Project', id?: any | null, name: string }, owner: { __typename?: 'User', id: any } } | null> | null, projectCollection?: Array<{ __typename?: 'Project', id?: any | null, name: string } | null> | null };

export type SchedulePageQueryVariables = Exact<{
  filter?: InputMaybe<TaskFilter>;
  sort?: InputMaybe<TaskSort>;
}>;


export type SchedulePageQuery = { __typename?: 'Query', taskCollection?: Array<{ __typename?: 'Task', id: any, title: string, isCompleted: boolean, isRemoved: boolean, dueDate?: any | null, projectId: any, ownerId: any, project: { __typename?: 'Project', id?: any | null, name: string }, owner: { __typename?: 'User', id: any } } | null> | null, projectCollection?: Array<{ __typename?: 'Project', id?: any | null, name: string } | null> | null };

export type ProjectFieldsFragment = { __typename?: 'Project', id?: any | null, name: string };

export type ProjectAddMutationVariables = Exact<{
  input: ProjectAddInput;
}>;


export type ProjectAddMutation = { __typename?: 'Mutation', project?: { __typename?: 'MutationProject', add?: { __typename?: 'ProjectAddPayload', recordId?: any | null, record?: { __typename?: 'Project', id?: any | null, name: string } | null } | null } | null };

export type UserSignUpMutationVariables = Exact<{
  input: UserSignUpInput;
}>;


export type UserSignUpMutation = { __typename?: 'Mutation', user?: { __typename?: 'MutationUser', signUp: { __typename?: 'UserSignUpPayload', recordId?: any | null, record?: { __typename?: 'User', id: any } | null } } | null };

export type UserFieldsFragment = { __typename?: 'User', id: any };

export type ProjectCollectionQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectCollectionQuery = { __typename?: 'Query', projectCollection?: Array<{ __typename?: 'Project', id?: any | null, name: string } | null> | null };

export type TaskAddMutationVariables = Exact<{
  input: TaskAddInput;
}>;


export type TaskAddMutation = { __typename?: 'Mutation', task?: { __typename?: 'MutationTask', add?: { __typename?: 'TaskAddPayload', recordId?: any | null, record?: { __typename?: 'Task', id: any, title: string, isCompleted: boolean, isRemoved: boolean, dueDate?: any | null, projectId: any, ownerId: any, project: { __typename?: 'Project', id?: any | null, name: string }, owner: { __typename?: 'User', id: any } } | null } | null } | null };

export type TaskEditMutationVariables = Exact<{
  input: Array<TaskEditInput> | TaskEditInput;
}>;


export type TaskEditMutation = { __typename?: 'Mutation', task?: { __typename?: 'MutationTask', edit?: { __typename?: 'TaskEditPayload', recordId?: any | null, recordIdCollection?: Array<any | null> | null, record?: { __typename?: 'Task', id: any, title: string, isCompleted: boolean, isRemoved: boolean, dueDate?: any | null, projectId: any, ownerId: any, project: { __typename?: 'Project', id?: any | null, name: string }, owner: { __typename?: 'User', id: any } } | null, recordCollection?: Array<{ __typename?: 'Task', id: any, title: string, isCompleted: boolean, isRemoved: boolean, dueDate?: any | null, projectId: any, ownerId: any, project: { __typename?: 'Project', id?: any | null, name: string }, owner: { __typename?: 'User', id: any } } | null> | null } | null } | null };

export type TaskFieldsFragment = { __typename?: 'Task', id: any, title: string, isCompleted: boolean, isRemoved: boolean, dueDate?: any | null, projectId: any, ownerId: any, project: { __typename?: 'Project', id?: any | null, name: string }, owner: { __typename?: 'User', id: any } };

export type TaskRemoveMutationVariables = Exact<{
  input: TaskRemoveInput;
}>;


export type TaskRemoveMutation = { __typename?: 'Mutation', task?: { __typename?: 'MutationTask', remove?: { __typename?: 'TaskRemovePayload', recordId?: any | null, record?: { __typename?: 'Task', id: any, title: string, isCompleted: boolean, isRemoved: boolean, dueDate?: any | null, projectId: any, ownerId: any, project: { __typename?: 'Project', id?: any | null, name: string }, owner: { __typename?: 'User', id: any } } | null } | null } | null };

export const ProjectFieldsFragmentDoc = gql`
    fragment ProjectFields on Project {
  id
  name
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  id
}
    `;
export const TaskFieldsFragmentDoc = gql`
    fragment TaskFields on Task {
  id
  title
  isCompleted
  isRemoved
  dueDate
  project {
    id
    name
  }
  projectId
  owner {
    id
  }
  ownerId
}
    `;
export const AllPageDocument = gql`
    query AllPage($filter: TaskFilter) {
  taskCollection(filter: $filter) {
    ...TaskFields
  }
  projectCollection {
    ...ProjectFields
  }
}
    ${TaskFieldsFragmentDoc}
${ProjectFieldsFragmentDoc}`;

/**
 * __useAllPageQuery__
 *
 * To run a query within a React component, call `useAllPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPageQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useAllPageQuery(baseOptions?: Apollo.QueryHookOptions<AllPageQuery, AllPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllPageQuery, AllPageQueryVariables>(AllPageDocument, options);
      }
export function useAllPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPageQuery, AllPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllPageQuery, AllPageQueryVariables>(AllPageDocument, options);
        }
export type AllPageQueryHookResult = ReturnType<typeof useAllPageQuery>;
export type AllPageLazyQueryHookResult = ReturnType<typeof useAllPageLazyQuery>;
export type AllPageQueryResult = Apollo.QueryResult<AllPageQuery, AllPageQueryVariables>;
export const TrashPageDocument = gql`
    query TrashPage($filter: TaskFilter) {
  taskCollection(filter: $filter) {
    ...TaskFields
  }
}
    ${TaskFieldsFragmentDoc}`;

/**
 * __useTrashPageQuery__
 *
 * To run a query within a React component, call `useTrashPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrashPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrashPageQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useTrashPageQuery(baseOptions?: Apollo.QueryHookOptions<TrashPageQuery, TrashPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrashPageQuery, TrashPageQueryVariables>(TrashPageDocument, options);
      }
export function useTrashPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrashPageQuery, TrashPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrashPageQuery, TrashPageQueryVariables>(TrashPageDocument, options);
        }
export type TrashPageQueryHookResult = ReturnType<typeof useTrashPageQuery>;
export type TrashPageLazyQueryHookResult = ReturnType<typeof useTrashPageLazyQuery>;
export type TrashPageQueryResult = Apollo.QueryResult<TrashPageQuery, TrashPageQueryVariables>;
export const AuthLoginDocument = gql`
    mutation AuthLogin($input: AuthLoginInput!) {
  auth {
    login(input: $input) {
      __typename
    }
  }
}
    `;
export type AuthLoginMutationFn = Apollo.MutationFunction<AuthLoginMutation, AuthLoginMutationVariables>;

/**
 * __useAuthLoginMutation__
 *
 * To run a mutation, you first call `useAuthLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authLoginMutation, { data, loading, error }] = useAuthLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthLoginMutation(baseOptions?: Apollo.MutationHookOptions<AuthLoginMutation, AuthLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthLoginMutation, AuthLoginMutationVariables>(AuthLoginDocument, options);
      }
export type AuthLoginMutationHookResult = ReturnType<typeof useAuthLoginMutation>;
export type AuthLoginMutationResult = Apollo.MutationResult<AuthLoginMutation>;
export type AuthLoginMutationOptions = Apollo.BaseMutationOptions<AuthLoginMutation, AuthLoginMutationVariables>;
export const ProjectPageDocument = gql`
    query ProjectPage($filter: TaskFilter) {
  taskCollection(filter: $filter) {
    ...TaskFields
  }
  projectCollection {
    ...ProjectFields
  }
}
    ${TaskFieldsFragmentDoc}
${ProjectFieldsFragmentDoc}`;

/**
 * __useProjectPageQuery__
 *
 * To run a query within a React component, call `useProjectPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectPageQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useProjectPageQuery(baseOptions?: Apollo.QueryHookOptions<ProjectPageQuery, ProjectPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectPageQuery, ProjectPageQueryVariables>(ProjectPageDocument, options);
      }
export function useProjectPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectPageQuery, ProjectPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectPageQuery, ProjectPageQueryVariables>(ProjectPageDocument, options);
        }
export type ProjectPageQueryHookResult = ReturnType<typeof useProjectPageQuery>;
export type ProjectPageLazyQueryHookResult = ReturnType<typeof useProjectPageLazyQuery>;
export type ProjectPageQueryResult = Apollo.QueryResult<ProjectPageQuery, ProjectPageQueryVariables>;
export const SchedulePageDocument = gql`
    query SchedulePage($filter: TaskFilter, $sort: TaskSort) {
  taskCollection(filter: $filter, sort: $sort) {
    ...TaskFields
  }
  projectCollection {
    ...ProjectFields
  }
}
    ${TaskFieldsFragmentDoc}
${ProjectFieldsFragmentDoc}`;

/**
 * __useSchedulePageQuery__
 *
 * To run a query within a React component, call `useSchedulePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useSchedulePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSchedulePageQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useSchedulePageQuery(baseOptions?: Apollo.QueryHookOptions<SchedulePageQuery, SchedulePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SchedulePageQuery, SchedulePageQueryVariables>(SchedulePageDocument, options);
      }
export function useSchedulePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SchedulePageQuery, SchedulePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SchedulePageQuery, SchedulePageQueryVariables>(SchedulePageDocument, options);
        }
export type SchedulePageQueryHookResult = ReturnType<typeof useSchedulePageQuery>;
export type SchedulePageLazyQueryHookResult = ReturnType<typeof useSchedulePageLazyQuery>;
export type SchedulePageQueryResult = Apollo.QueryResult<SchedulePageQuery, SchedulePageQueryVariables>;
export const ProjectAddDocument = gql`
    mutation ProjectAdd($input: ProjectAddInput!) {
  project {
    add(input: $input) {
      record {
        id
        name
      }
      recordId
    }
  }
}
    `;
export type ProjectAddMutationFn = Apollo.MutationFunction<ProjectAddMutation, ProjectAddMutationVariables>;

/**
 * __useProjectAddMutation__
 *
 * To run a mutation, you first call `useProjectAddMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProjectAddMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [projectAddMutation, { data, loading, error }] = useProjectAddMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useProjectAddMutation(baseOptions?: Apollo.MutationHookOptions<ProjectAddMutation, ProjectAddMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ProjectAddMutation, ProjectAddMutationVariables>(ProjectAddDocument, options);
      }
export type ProjectAddMutationHookResult = ReturnType<typeof useProjectAddMutation>;
export type ProjectAddMutationResult = Apollo.MutationResult<ProjectAddMutation>;
export type ProjectAddMutationOptions = Apollo.BaseMutationOptions<ProjectAddMutation, ProjectAddMutationVariables>;
export const UserSignUpDocument = gql`
    mutation UserSignUp($input: UserSignUpInput!) {
  user {
    signUp(input: $input) {
      record {
        ...UserFields
      }
      recordId
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export type UserSignUpMutationFn = Apollo.MutationFunction<UserSignUpMutation, UserSignUpMutationVariables>;

/**
 * __useUserSignUpMutation__
 *
 * To run a mutation, you first call `useUserSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSignUpMutation, { data, loading, error }] = useUserSignUpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserSignUpMutation(baseOptions?: Apollo.MutationHookOptions<UserSignUpMutation, UserSignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserSignUpMutation, UserSignUpMutationVariables>(UserSignUpDocument, options);
      }
export type UserSignUpMutationHookResult = ReturnType<typeof useUserSignUpMutation>;
export type UserSignUpMutationResult = Apollo.MutationResult<UserSignUpMutation>;
export type UserSignUpMutationOptions = Apollo.BaseMutationOptions<UserSignUpMutation, UserSignUpMutationVariables>;
export const ProjectCollectionDocument = gql`
    query ProjectCollection {
  projectCollection {
    id
    name
  }
}
    `;

/**
 * __useProjectCollectionQuery__
 *
 * To run a query within a React component, call `useProjectCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectCollectionQuery({
 *   variables: {
 *   },
 * });
 */
export function useProjectCollectionQuery(baseOptions?: Apollo.QueryHookOptions<ProjectCollectionQuery, ProjectCollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectCollectionQuery, ProjectCollectionQueryVariables>(ProjectCollectionDocument, options);
      }
export function useProjectCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectCollectionQuery, ProjectCollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectCollectionQuery, ProjectCollectionQueryVariables>(ProjectCollectionDocument, options);
        }
export type ProjectCollectionQueryHookResult = ReturnType<typeof useProjectCollectionQuery>;
export type ProjectCollectionLazyQueryHookResult = ReturnType<typeof useProjectCollectionLazyQuery>;
export type ProjectCollectionQueryResult = Apollo.QueryResult<ProjectCollectionQuery, ProjectCollectionQueryVariables>;
export const TaskAddDocument = gql`
    mutation TaskAdd($input: TaskAddInput!) {
  task {
    add(input: $input) {
      record {
        ...TaskFields
      }
      recordId
    }
  }
}
    ${TaskFieldsFragmentDoc}`;
export type TaskAddMutationFn = Apollo.MutationFunction<TaskAddMutation, TaskAddMutationVariables>;

/**
 * __useTaskAddMutation__
 *
 * To run a mutation, you first call `useTaskAddMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTaskAddMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [taskAddMutation, { data, loading, error }] = useTaskAddMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTaskAddMutation(baseOptions?: Apollo.MutationHookOptions<TaskAddMutation, TaskAddMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TaskAddMutation, TaskAddMutationVariables>(TaskAddDocument, options);
      }
export type TaskAddMutationHookResult = ReturnType<typeof useTaskAddMutation>;
export type TaskAddMutationResult = Apollo.MutationResult<TaskAddMutation>;
export type TaskAddMutationOptions = Apollo.BaseMutationOptions<TaskAddMutation, TaskAddMutationVariables>;
export const TaskEditDocument = gql`
    mutation TaskEdit($input: [TaskEditInput!]!) {
  task {
    edit(input: $input) {
      record {
        ...TaskFields
      }
      recordId
      recordCollection {
        ...TaskFields
      }
      recordIdCollection
    }
  }
}
    ${TaskFieldsFragmentDoc}`;
export type TaskEditMutationFn = Apollo.MutationFunction<TaskEditMutation, TaskEditMutationVariables>;

/**
 * __useTaskEditMutation__
 *
 * To run a mutation, you first call `useTaskEditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTaskEditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [taskEditMutation, { data, loading, error }] = useTaskEditMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTaskEditMutation(baseOptions?: Apollo.MutationHookOptions<TaskEditMutation, TaskEditMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TaskEditMutation, TaskEditMutationVariables>(TaskEditDocument, options);
      }
export type TaskEditMutationHookResult = ReturnType<typeof useTaskEditMutation>;
export type TaskEditMutationResult = Apollo.MutationResult<TaskEditMutation>;
export type TaskEditMutationOptions = Apollo.BaseMutationOptions<TaskEditMutation, TaskEditMutationVariables>;
export const TaskRemoveDocument = gql`
    mutation TaskRemove($input: TaskRemoveInput!) {
  task {
    remove(input: $input) {
      record {
        ...TaskFields
      }
      recordId
    }
  }
}
    ${TaskFieldsFragmentDoc}`;
export type TaskRemoveMutationFn = Apollo.MutationFunction<TaskRemoveMutation, TaskRemoveMutationVariables>;

/**
 * __useTaskRemoveMutation__
 *
 * To run a mutation, you first call `useTaskRemoveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTaskRemoveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [taskRemoveMutation, { data, loading, error }] = useTaskRemoveMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTaskRemoveMutation(baseOptions?: Apollo.MutationHookOptions<TaskRemoveMutation, TaskRemoveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TaskRemoveMutation, TaskRemoveMutationVariables>(TaskRemoveDocument, options);
      }
export type TaskRemoveMutationHookResult = ReturnType<typeof useTaskRemoveMutation>;
export type TaskRemoveMutationResult = Apollo.MutationResult<TaskRemoveMutation>;
export type TaskRemoveMutationOptions = Apollo.BaseMutationOptions<TaskRemoveMutation, TaskRemoveMutationVariables>;