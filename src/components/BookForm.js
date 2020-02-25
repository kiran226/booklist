import React,{useContext,useState} from 'react';
import { BookContext } from '../context/BookContext';

const BookForm =()=>{
    const {addBook}=useContext(BookContext);
    const [title,setTitle]=useState('');
    const[author,setAuthor]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        addBook(title,author);
        setTitle('');
        setAuthor('');
    }
  return(
    <form onSubmit={handleSubmit}>
        <input type="text" value={title} placeholder={"book title"}
            onChange={(e)=>setTitle(e.target.value)} required/>
            <input type="text" value={author} placeholder={"author"}
            onChange={(e)=>setAuthor(e.target.value)} required/>
            <input type="submit" value="add book"/>
    </form>
    )
}
export default BookForm;