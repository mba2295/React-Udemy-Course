import { MongoClient } from "mongodb";

// api/new-meetup
export default async function handler(request, response) {
  if (request.method === "POST") {
    const data = request.body;
    const client = await MongoClient.connect(
      "mongodb+srv://meetupDBUser:rxLp7Ml3D4z8xhHa@meetupdb.jncou.mongodb.net/MeetupDB?retryWrites=true&w=majority"
    );
    const db = client.db("MeetupDB");
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(JSON.parse(data));
    console.log(result);
    client.close();
    response.status(201).json({ message: "Record added successfully." });
  }
}
