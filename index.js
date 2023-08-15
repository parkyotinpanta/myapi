const express = require('express')
const app = express()
const port = 191
const bodyParser = require('body-parser')
app.use(bodyParser.json())
let park = [
    {
        name: "iphone 13",
        Image: "https://media-cdn.bnn.in.th/183834/iPhone_13_Green_1-square_medium.jpg",
        company:"apple"  

    },
    {
        name: "iphone 12",
        Image: "https://media.studio7thailand.com/5975/Apple-iPhone-12-Purple-1-square_medium.jpg",
        company:"apple"  

    },
    {
        name: "iphone 11",
        Image: "https://static-jaymart.com/ecom/public/1mNO8ihVNEBs7fmhrbkWpuTQy6Z.jpg",
        company:"apple"  

    }
]

app.post('/', (req, res) => {
    //ถ้าเป็นget ต้องใช้ req.query
    //ถ้าเป็นport ต้องใช้ req.body
   //res.status(200).json(req.body[0]); 
    //console.log(req.body);
    let val = req.body
    if (val.company == "apple"){
        res.status(200).send("park")
    }

    console.log(val);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
