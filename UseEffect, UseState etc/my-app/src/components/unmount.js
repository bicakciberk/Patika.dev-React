import { useState, useEffect } from "react";


function Counter() {
    const [number, setNumber] = useState(0);

    /*useEffect(()=>{
      console.log('State Güncellendi')
      // bu ifade ise state her güncellendiğinde çalışır
    })*/

    // useEffect(() => {
    //     console.log('State Güncellendi')
    //     // bu ifade ise "number" state'si her güncellendiğinde çalışır. araya virgül koyarak çoğaltılabilir.
    // }, [name])

    // useEffect(() => {
    //     console.log('Component mouth edildi')
    //     setInterval(() => {
    //         setNumber((n)=>{
    //            return n+1
    //         })
    //     }, 1000)

    // }, [])
    // sayfa yüklendiği an çalışsın bir kere çalışır. component'in mouth edildiğini gösterir
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 1)
            }}>Click</button>
        </div>
    )
}

export default Counter;