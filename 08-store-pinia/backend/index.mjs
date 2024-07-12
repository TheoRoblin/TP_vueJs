import express from "express";
import cors from 'cors'
import {router as billRouter} from "./routes/bill.mjs";
import {router as clientRouter} from "./routes/client.mjs";


const app = express()
const port = 3000

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

app.use('/bills',billRouter)
app.use('/clients',clientRouter)