import { useState } from "react";

import List from './list/index.js'
import Form from './form/index.js'

function Contacts() {

    const [contacts, setContacts] = useState([])

    return (
        <div>
            <List></List>
            <Form setContacts={setContacts}></Form>
        </div>
    )
}

export default Contacts;