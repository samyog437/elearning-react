import axios from "axios";
const baseUrl = "http://localhost:3001/course"

const getAllCourse = () => {
    return axios.get(baseUrl)
}

const createCourse = (course) => {
    return axios.post(baseUrl, course)
}

export default {
    getAllCourse,
    createCourse,
}