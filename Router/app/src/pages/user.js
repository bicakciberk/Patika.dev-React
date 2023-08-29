import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function User() {
    const [user, setUser] = useState([])
    const [load, setLoad] = useState(true)


    let { id } = useParams()

    // const [increase, setincrease] = useState(id);    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setUser(data)
                setLoad(false)
            })
    }, [id])

    return (
        <div>
            {
                load ? (<div>Veriler Yükleniyor</div>)
                    : (
                        <code>{JSON.stringify(user)}</code>
                    )
            }
            <br />
            <br />
            <Link to={`/users/${Number(id) + 1}`}>Next User ({Number(id) + 1})</Link>
        </div>
    )
}

export default User