import { React, useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import Footer from './Footer'
import { Routes, Route } from 'react-router-dom';

function App() {
  const [post,setPost] =useState([[{ id: 1, title: "post 1", datetime: "09/02/2023", body: "Preparing" }, { id: 2, title: "post 2", datetime: "09/02/2023", body: "Preparing" }, { id: 3, title: "post 3", datetime: "09/02/2023", body: "Preparing" }]])
  const [search, setSearch] = useState('');
  const [searchresult, setSearchresult] = useState([]);
  return (
    <div className='App'>

      <Header title="Socia Media"></Header>
      <Nav search={search} setSearch={setSearch}></Nav>
      <Home></Home>
      <NewPost></NewPost>
      <PostPage></PostPage>
      <About></About>
      <Missing></Missing>
      <Footer></Footer>
    </div>
  );
}

export default App;
