import "./register.scss";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");
        const res = await axios.post("localhost:3000/api/auth/register")







}
















}