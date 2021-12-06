const express = require('express')

const app = express();

app.get('/', (req,res)=>{
    const blog = {
        id:1,
        title:'Blog',
        description: 'Blog Description'
    }

    res.send(blog);
})

const port = 3000;
app.listen(port, ()=>{
    console.log(`Server ${port}'dan dinleniyor'`);
})