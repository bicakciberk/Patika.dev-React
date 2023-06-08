import axios from 'axios';

async function getData(number){
    const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${number}`)
    .then((res)=>{
        return res.json()
    })

    const post = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)
    .then((res)=>{
        return res.json()
    })

    console.log(user)
    console.log(post)

}

export default getData;

getData(1)

