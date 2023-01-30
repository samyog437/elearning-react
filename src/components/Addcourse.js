import axios from "axios";
import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../css/register.css";
import courseService from "../services/courseService";

const Addcourse = () => {
  const [title, setNewTitle] = useState("");
  const [content, setNewContent] = useState("");
  const [image, setNewImage] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(title, content, image);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);
    axios
      .post("http://localhost:3001/course", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h3>Add a Course</h3>
      <div className="reg">
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="enter title"
              type="title"
              value={title}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="content">Content</Label>
            <Input
              id="content"
              name="content"
              placeholder="enter content"
              type="textarea"
              value={content}
              onChange={(e) => setNewContent(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input
              id="image"
              name="image"
              placeholder="Insert image"
              type="file"
              onChange={(e) => setNewImage(e.target.files[0])}
            />
            {/* <FormFeedback>{message}</FormFeedback> */}
          </FormGroup>
          <Button color="primary" onClick={handleAdd}>
            Add Course
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Addcourse;
