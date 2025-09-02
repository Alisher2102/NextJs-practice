import { MongoClient } from "mongodb";
import { useRouter } from "next/router";
const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://recker2014brr_db_user:e9SI8zXBrvNNChVw@cluster0.0jdatae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "MeetUp inserted!" });
  }
};

export default handler;
