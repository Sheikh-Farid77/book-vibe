import React, { useEffect, useState } from 'react'

const Books = () => {
    const [books, setBooks] = useState([])
    
    useEffect(()=>{
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    } ,[])
    
  return (
    <div className='mt-10'>
        <h2 className="text-4xl text-center font-bold">Books</h2>
    </div>
  )
}

export default Books