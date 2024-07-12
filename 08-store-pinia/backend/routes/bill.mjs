import express from "express";
import * as ctrl from "../controllers/bill.mjs";

const router = express.Router();

router.get('/', ctrl.getItems)

router.get('/:id', ctrl.getItem)

router.post('/', ctrl.postItem)

router.put('/:id', ctrl.patchItem)

router.delete('/:id', ctrl.deleteItem)

export {router}