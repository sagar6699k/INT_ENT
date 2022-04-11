import express from "express";
const router = express.Router();

import User from "../entities/user";
import { dbCreateConnection } from "../orm/dbConnection";


dbCreateConnection.getMongoRepository(User)

router.post("/", async (req, res) => {
    try {
        const user = dbCreateConnection.getMongoRepository(User).create(req.body);
        const users = await dbCreateConnection.getMongoRepository(User).save(user);

        res.status(201).send({ users });
    } catch (error) {
        res.status(400).send({error});
    }
})

router.get("/", async (req, res) => {
    try {
        const user = await dbCreateConnection.getMongoRepository(User).find();

        res.status(200).send({ user });
    } catch (error) {
        res.status(400).send(error);
    }
})


export default router;