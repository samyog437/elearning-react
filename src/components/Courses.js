import axios from "axios";
import { useEffect, useState } from "react";
import "../css/course.css";
import courseService from "../services/courseService";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const getCourse = () => {
    courseService
      .getAllCourse()
      .then((response) => {
        // console.log(response.data);
        const coursesWithImages = response.data.map((course) => {
          return {
            ...course,
            image: `http://localhost:3001/image/${course.image}`,
          };
        });
        setCourses(coursesWithImages);
      })
      .catch((err) => console.log(err));
  };

  useEffect(getCourse, []);
  return (
    <>
      <h3>Courses</h3>
      <div className="row">
        {courses.map((course) => (
          <div className="card" key={course.id}>
            <div className="cardimage">
              {console.log(course.image)}
              <img src={course.image} alt={course.title} />
            </div>
            <div className="cardtitle">{course.title}</div>
          </div>
        ))}
        <div className="card">  
          <div className="cardimage">
            <img src="https://via.placeholder.com/150 " />
          </div>
          <div className="cardtitle">This is a title</div>
        </div>
      </div>
    </>
  );
};

export default Courses;
