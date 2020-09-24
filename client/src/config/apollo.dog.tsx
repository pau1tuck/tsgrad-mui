import {
  ApolloClient,
  ApolloLink,
  Observable,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const cache = new InMemoryCache();

const request = async (operation: any) => {
  const token = await localStorage.getItem("x-token");
  // set the token in the request header for authorization
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });
};

export const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle: any;
      Promise.resolve(operation)
        .then((oper) => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

const link = new HttpLink({
  uri: "http://localhost:8000/graphql/",
  // For server with different domain use "include"
  credentials: "same-origin",
});

const client = new ApolloClient({ link, cache });

export { client };
