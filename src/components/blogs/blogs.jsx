import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/blog";

const Blogs = ({handleAddToShoppingcart}) => {
    const [blogs, setBlogs] = useState([]);  

    useEffect( () =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-3/4 grid grid-cols-3 gap-6 pb-20">
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                    blog={blog} 
                    handleAddToShoppingcart={handleAddToShoppingcart}
                ></Blog>)
            }
        </div>
    )
}

export default Blogs;