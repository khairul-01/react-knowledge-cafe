
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (time, id) => {
    setReadingTime(readingTime+time);
    console.log('removed', id);
    const newBookmarks = bookmarks.filter(data => data.id !==id);
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
