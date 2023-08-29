import { useState } from "react";

function InputComponent(){
    const [name,setName] = useState('Mehmet')
    const [surName, setSurName] = useState('Yılmaz')

   const changeName = (event)=>{
    return setName(event.target.value)
   }

   const changeSurname = (event)=>{
    return setSurName(event.target.value)
   }

    return(
        <div>
            <input value={name} onChange={changeName} />
            <br />
            {name}

            <br />
            <input value={surName} onChange={changeSurname} />
            <br />
            {surName}
        </div>
    )
}

export default InputComponent;