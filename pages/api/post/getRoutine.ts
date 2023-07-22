import { connectDB } from "@/util/database";
import { NextApiRequest, NextApiResponse } from "next";
import { Db } from "mongodb";

export default async function getRoutine(req : NextApiRequest, res : NextApiResponse) {
    if ( req.method === "GET") {
        const db : Db = (await connectDB).db("TREEDS");
        const result = await db.collection("FeatureTRD").find().toArray();
        return res.status(200).json(result);
    }
    else {
        return res.status(400).json({message : "Wrong Request Method"})
    }
}