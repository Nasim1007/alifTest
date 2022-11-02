import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AppContext } from "../store";

const FormValid = observer(({ isLoading, setIsLoading }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [job, setJob] = useState("");
  const [date, setDate] = useState("");
  const { posts } = useContext(AppContext);
  const newTask = {
    id: posts.posts.length + 1,
    name: name,
    surname: surname,
    job: job,
    age: 5,
    date: date,
  };
  const createNewTask = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://my-json-server.typicode.com/Nasim1007/mockjson/posts",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(newTask),
        }
      );
      setIsLoading(false);
      let result = await response.json();
      console.log(posts);
      posts.setPosts([...posts.posts, result]);

      setName("");
      setSurname("");
      setJob("");
      setDate("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="row">
      <Form.Control
        type="text"
        placeholder="имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Form.Control
        type="text"
        placeholder="фамилия"
        value={surname}
        onChange={(e) => {
          setSurname(e.target.value);
        }}
      />
      <Form.Control
        type="text"
        placeholder="профессия"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <Form.Control
        type="date"
        placeholder="дата"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Button
        variant="primary"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          createNewTask();
        }}
      >
        Submit
      </Button>
    </form>
  );
});

export default FormValid;
