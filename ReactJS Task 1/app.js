import axios from 'axios';

async function getData(number) {
    const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${number}`)


    const post = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)


    console.log(user)
    console.log(post)

}

export default getData;


