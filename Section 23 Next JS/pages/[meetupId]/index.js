import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";
import { Fragment } from "react";
const MeetupDetails = (props) => {
  const router = useRouter();
  return (
    <Fragment>
      <Head>
        <title>React meetup details using next js by mba</title>
        <meta name="description" content="get the details of the meetup" />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};
export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://meetupDBUser:rxLp7Ml3D4z8xhHa@meetupdb.jncou.mongodb.net/MeetupDB?retryWrites=true&w=majority"
  );
  const db = client.db("MeetupDB");
  const meetupsCollection = db.collection("meetups");
  const fetchedMeetupIds = await meetupsCollection
    .find({}, { _id: 1 })
    .toArray();
  client.close();
  return {
    fallback: "blocking",
    paths: fetchedMeetupIds.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
};
export const getStaticProps = async (context) => {
  const request = context.request;
  const response = context.response;
  console.log(request);
  const client = await MongoClient.connect(
    "mongodb+srv://meetupDBUser:rxLp7Ml3D4z8xhHa@meetupdb.jncou.mongodb.net/MeetupDB?retryWrites=true&w=majority"
  );
  const db = client.db("MeetupDB");
  const meetupsCollection = db.collection("meetups");
  const singleMeetup = await meetupsCollection.findOne({
    _id: ObjectId(context.params.meetupId),
  });
  client.close();
  return {
    props: {
      meetupData: {
        id: singleMeetup._id.toString(),
        image: singleMeetup.image,
        title: singleMeetup.title,
        address: singleMeetup.address,
        description: singleMeetup.description,
      },
    },
  };
};
export default MeetupDetails;
