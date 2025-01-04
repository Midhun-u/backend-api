import express, { response } from 'express'
import cors from 'cors'
const app = express()
const PORT = 2000


app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())

app.get("/" , (request , response) => {

    response.send("Hello world")

})

app.post("/data" , (request , response) => {

    response.status(200).json(request.body)

})


app.listen(PORT , () => {
    console.log("Server running on " + PORT )
})