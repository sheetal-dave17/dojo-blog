import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('mario');
    const [body, setBody] = useState('');
    const [loading, setIsLoading] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (event) => {
        setIsLoading(true)
        event.preventDefault();
        const newBlog = {title, body, author}
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(newBlog)
        }).then(() => {
            setIsLoading(false)
            history.push('/')
        })

        setTitle('');
        setAuthor('');
        setBody('');
    }

    return (
        <div className="create">
            <h2> Create New Blog </h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title : </label>
                <input 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text" 
                required />
                 <label>Blog Body : </label>
                <textarea 
                type="text" 
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required />
                <label>Blog Author : </label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value='mario'>mario</option>
                    <option value='yoshi'>yoshi</option>
                </select>
               {!loading &&  <button> Add Blog </button> }
               {loading &&  <button dis> Adding Blog ... </button> }

            </form>
        </div>
    );
}

export default Create;