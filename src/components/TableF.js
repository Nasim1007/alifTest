import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { AppContext } from "../store";
import { observer } from "mobx-react-lite";
import FormValid from "./FormValid";

const TableF = observer(() => {
  const [isLoading, setIsLoading] = useState(false);
  const { posts } = useContext(AppContext);
  useEffect(() => {
    setIsLoading(true);
    try {
      fetch("http://my-json-server.typicode.com/Nasim1007/mockjson/posts")
        .then((res) => res.json())
        .then((res) => {
          posts.setPosts(res);
          setIsLoading(false);
          // setPostes(res);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1>Table </h1>
      {isLoading && (
        <div className="loading">
          <h1>loading...</h1>
        </div>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>№</th>
            <th>Ном</th>
            <th>Насаб</th>
            <th>ихтисос</th>
            <th>сана</th>
          </tr>
        </thead>
        <tbody>
          {posts.posts.map((post, index) => (
            <tr key={index}>
              <td>{post.id}</td>
              <td>{post.name}</td>
              <td>{post.surname}</td>
              <td>{post.job}</td>
              <td>{post.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <FormValid isLoading={isLoading} setIsLoading={setIsLoading} />
    </div>
  );
});
export default TableF;
