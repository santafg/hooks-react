import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: "Something went wrong",
        post: {},
      };

    default:
      return state;
  }
};

export const FetchData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const myFunction = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      if (data) {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      }
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
    }
  };

  useEffect(() => {
    myFunction();
  }, []);

  return (
    <div>
      <div>{state.loading && <h1>Loading</h1>}</div>
      <div>{state.error && <h1>{state.error}</h1>}</div>
      <div>{state.post && <h1>{state.post.title}</h1>}</div>
    </div>
  );
};
