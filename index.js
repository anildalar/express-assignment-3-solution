const express = require('express')
const app = express()

app.use(express.json());

app.post('/getmyfamilymembers', function (req, res) {
    console.log(req.body.fname);

    console.log(req.body.mname);
    console.log(req.body.sibling[0].name);
    console.log(req.body.sibling[0].childrens[0].name);
    console.log(req.body.sibling[0].childrens[1].name);
    console.log(req.body.sibling[1].name);
    console.log(req.body.sibling[1].childrens[0].name);
    console.log(req.body.sibling[1].childrens[1].name);
    // . = Member selection operator

    res.send(req.body)
})

let port = 3000;
app.listen(port,()=>{
    console.log(`The Server is running on port ${ port} `);
})