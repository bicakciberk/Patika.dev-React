import React from 'react'
import { Link, useRouteMatch, Switch, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'
import User from './user'


function Users() {
  const [users, setUsers] = useState([])
  const [load, setLoad] = useState(true)

  const { path, url } = useRouteMatch();


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setUsers(data)
        setLoad(false)
        console.log(data)
      })
  }, [])

  const match = useRouteMatch();
  console.log(match)

  return (
    <div>
      <h3>Users</h3>
      {
        load ? (<div>Veriler Yükleniyor</div>)
          : (
            <ul>
              {
                users.map((user, i) => {
                  return (
                    <li key={i}>
                      <Link to={`${url}/${user.id}`}>{user.name}</Link>
                    </li>
                  )
                })
              }
            </ul>

          )

      }
       <Switch>
        <Route exact path={path}>
          <h3>Please select a user.</h3>
        </Route>
        <Route path={`${path}/:id`}>
          <User />
        </Route>
      </Switch>
    </div>
  )
}

export default Users