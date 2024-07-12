import fs from 'fs'
import {fileURLToPath} from 'url';
import * as path from "path";
import {v4 as uuid} from 'uuid'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const getClients = (req, res) => {
    try{
        const data = fs.readFileSync(path.resolve(__dirname, '../db/client.json'))
        res.send(data)
    }catch (error){
        res.sendStatus(500)
        throw error
    }
}

export const getClient = (req, res) => {
    try{
        const data = fs.readFileSync(path.resolve(__dirname, '../db/client.json'))
        const items = JSON.parse(data)
        const item = items.find(item => item.id == req.params.id)
        if(item){
            res.json(item)
        }else{
            res.sendStatus(404)
        }
    }catch (error){
        res.sendStatus(500)
        throw error
    }
}

export const patchClient = (req, res) => {
    try{
        const data = fs.readFileSync(path.resolve(__dirname, '../db/client.json'))
        const items = JSON.parse(data)

        let index = items.findIndex(item => item.id == req.params.id)

        items[index]={
            ...items[index],
            ...req.body
        }

        fs.writeFileSync(path.resolve(__dirname, '../db/client.json'),JSON.stringify(items))
        res.json(items[index])
    }catch (error){
        res.sendStatus(500)
        throw error
    }
}

export const postClient = (req, res) => {
    try{
        const data = fs.readFileSync(path.resolve(__dirname, '../db/client.json'))
        let items = JSON.parse(data)
        const newBill = {...req.body, idclient: uuid()}
        items.push(newBill)
        fs.writeFileSync(path.resolve(__dirname, '../db/client.json'),JSON.stringify(items))
        res.json(newBill)
    }catch (error){
        res.sendStatus(500)
        throw error
    }
}
export const deleteClient = (req, res) => {
    try{
        const data = fs.readFileSync(path.resolve(__dirname, '../db/client.json'))
        let items = JSON.parse(data)
        items = items.filter(item => item.id != req.params.id)
        fs.writeFileSync(path.resolve(__dirname, '../db/client.json'), JSON.stringify(items))
        res.sendStatus(200)
    }catch (error){
        res.sendStatus(500)
        throw error
    }
}


