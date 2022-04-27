import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

const Home = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React meetups using next js by mba</title>
        <meta
          name="description"
          content="practice project for next js showing all meetups list"
        />
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>
    </Fragment>
  );
};
export const getStaticProps = async (context) => {
  const request = context.req;
  const response = context.response;
  const client = await MongoClient.connect(
    "mongodb+srv://meetupDBUser:rxLp7Ml3D4z8xhHa@meetupdb.jncou.mongodb.net/MeetupDB?retryWrites=true&w=majority"
  );
  const db = client.db("MeetupDB");
  const meetupsCollection = db.collection("meetups");
  const fetchedMeetups = await meetupsCollection.find().toArray();
  const transformedMeetups = fetchedMeetups.map((meetup) => ({
    id: meetup._id.toString(),
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
  }));
  console.log(
    "🚀 ~ file: index.js ~ line 41 ~ transformedMeetups ~ transformedMeetups",
    transformedMeetups
  );
  client.close();
  return {
    props: {
      meetups: transformedMeetups,
    },
    revalidate: 1,
  };
};

// export const getServerSideProps = async (context) => {
//   const request = context.req;
//   const response = context.response;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export default Home;
