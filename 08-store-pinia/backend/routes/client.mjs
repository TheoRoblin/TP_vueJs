import express from "express";
import * as ctrl from "../controllers/client.mjs";

const router = express.Router();

router.get('/', ctrl.getClients)

router.get('/:id', ctrl.getClient)

router.post('/', ctrl.postClient)

router.put('/:id', ctrl.patchClient)

router.delete('/:id', ctrl.deleteClient)

export {router}