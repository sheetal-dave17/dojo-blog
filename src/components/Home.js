import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: 'My new website', body: 'loren ipsum ....', author: 'mario' },
        { id: 2, title: 'Welcome party', body: 'loren ipsum ....', author: 'yoshi' },
        { id: 3, title: 'Web dev top tips', body: 'loren ipsum ....', author: 'mario' }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title={'All Blogs'} handleDelete={handleDelete} />
        </div>
    );
}

export default Home;