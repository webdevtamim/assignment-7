import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);  

    useEffect( () =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>

        </div>
    )
}

export default Blogs;