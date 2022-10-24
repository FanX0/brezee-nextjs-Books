import React, {useState} from 'react'
import ReactPropTypes  from 'prop-types'
import { useFormik } from 'formik'
import * as Yup from 'yup';

import FormControl from '@/components/form/formControl'
import Input from '@/components/form/input'
import Button from '@/components/form/button'

import axios from "@/lib/axios"




const Form = ({handleAddBook}) => {
    const bookSchema = Yup.object().shape({
        name: Yup.string()
        //terintegrasi dengan controller backend
            .min(4,'Minimal 4 karakter' )
            .max(250, 'Maksimal 250 karakter')
            .required( 'Name is required'),
        description: Yup.string()
            .min(10,'Minimal 10 karakter' )
            .max(255, 'Maksimal 300 karakter')
            .required( 'Description is Required'),
        price: Yup.number()
            .required( 'Price is Required'),
        })
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: 0,
        },
        validationSchema: bookSchema,
        onSubmit: (values, { resetForm }) => {
            handleSubmit(values, resetForm)
        },
    })
   
    
    const handleSubmit = async (values, resetForm) => {

        try {
            const {data} = await axios.post(
                'http://localhost:8000/api/books',
                values,
                 )

            handleAddBook({
                book: data.data,
            })

           resetForm()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit} >
            <FormControl label="Name" id="name" >
                <Input placeholder="nama" 
                id="name" 
                name="name" 
                onChange={formik.handleChange}
                value={formik.values.name}
                />  

                {formik.errors && (
                    <label className="text-red-600">
                        {formik.errors['name']} 
                    </label>
                     )}
            </FormControl>

            <FormControl label="Description" id="description">
                <Input placeholder="Deskripsi" 
                id="description" 
                name="description" 
                onChange={formik.handleChange}
                value={formik.values.description}
                 />

                 {formik.errors && (
                    <label className="text-red-600">
                        {formik.errors['description']} 
                    </label>
                    
                 )}
            </FormControl>
            
            <FormControl label="Price" id="price">
                <Input placeholder="Harga" 
                id="price" 
                type="number"
                name="price" 
                onChange={formik.handleChange}
                value={formik.values.price}
                 />

{formik.errors && (
                    <label className="text-red-600">
                        {formik.errors['price']} 
                    </label>
                    
                 )}
            </FormControl>
            <Button type="submit" disabled={(!formik.isValid && formik.dirty)} >
                 Simpan 
            </Button>

          
                
        </form>
        
        
        digunakan untuk debug/menampilkan data
         {/* <pre>
            {JSON.stringify(form, null, 2)}
        </pre> */}
        </div>
    )
}

Form.propTypes = {}

export default Form