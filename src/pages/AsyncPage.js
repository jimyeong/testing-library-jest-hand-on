import React from "react";
import styled from "styled-components";
import { _axios } from "../server";
import { useAsync } from "../hooks/useAsync";
import { TYPE_LOAD } from "../hooks/useAsync";
import axios from "axios";

const AsyncPageBlock = styled.div``;

function AsyncPage({ children }) {
  const getItems = async () => {
    return await axios.get("http://localhost:3030/posts");
  };
  const [asyncState, asyncDispatch] = useAsync(getItems, []);
  if (asyncState.status == TYPE_LOAD.LOADING) return <div>loading</div>;
  if (asyncState.status == TYPE_LOAD.ERROR) return <div>error</div>;
  return (
    <AsyncPageBlock>
      <div>rendered: </div>
      <br />
      {!asyncState.data ||
        asyncState.data.map((item, idx) => {
          return (
            <div key={idx}>
              <span>{item.name}</span>
            </div>
          );
        })}
    </AsyncPageBlock>
  );
}

export default AsyncPage;
