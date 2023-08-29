import { useEffect, useState } from 'react'
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setLoading(false)
                setUsers(res.data)
            })
    }, [])


    return (
        <div>
            {
                loading ? (<div>Veriler Bekleniyor</div>)
                : (
                    users.map((user, i)=>{
                        return <div key={i}>{user.name}</div>
                    })

                )
            }
        </div>
    )


}

export default Users;