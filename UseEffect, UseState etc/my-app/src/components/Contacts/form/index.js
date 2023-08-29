import React from 'react';
import { useState } from 'react'


function Form() {
    const [form, setForm]= useState({fullName: "", phone_number: ""})

    const onChangeInput = (e) => {
        setForm({...form,[e.target.name]: e.target.value})
    }
    
    const onSubmit = () =>{
        if(form.fullName === '' || form.phone_number === '') return;

        console.log(form)
    }
   

    return (
        <div>
            <div>
                <input onChange={onChangeInput} name='fullName' placeholder='Name' />
            </div>
            <div>
                <input onChange={onChangeInput} name='phone_number' placeholder='Phone Number' />
            </div>
            <div>
                <button onClick={onSubmit}>Add</button>
            </div>
        </div>

    )
}

export default Form;