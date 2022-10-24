import {useEffect, useState} from 'react'

import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head' 
import axios from "@/lib/axios"
import BookForm from "@/components/book/form"
import Booklist from '@/components/book/list'

 const BookPage = () => {
    const[books, setBooks] = useState ([])
    const[loading, setLoading] = useState (null)      //untuk loading
    const[error, setError] = useState (null)

    const fetchBooks = async () => {
       try{

        setLoading(true)
        const { data } = await axios.get('http://localhost:8000/api/books')
       
        //  console.log(data)  //cek data dapet atau tidak
  
          setBooks (data.data)
       } catch (error) {
            setError(error.message)
       } finally{
            setLoading(false)
       }
    }

    //memberitahukan fungsi di jalankan sekali saja
    useEffect(() => {
        fetchBooks()
    }, [])

    const handleAddBook = ({book}) => {
        setBooks(prev => [...prev, book])
    }

    if (error) return error

        return  ( 
        <AppLayout
        header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        }>

        <Head>
            <title>Books</title>
        </Head>

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">   
                    <div className="p-6 bg-white border-b border-gray-200">
                    <BookForm handleAddBook={handleAddBook}/>
                       
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
    ) 
}

export default BookPage