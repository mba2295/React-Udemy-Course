import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetup = () => {
  const router = useRouter();
  const addNewMeetup = async (data) => {
    debugger;
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      header: { "Content-Type": "application/json" },
    });
    const result = response.json();
    console.log(result);
    router.push("/");
  };
  return (
    <Fragment>
      <Head>
        <title>React add new meetup page using next js by mba</title>
        <meta name="description" content="add new meetup to the meetups list" />
      </Head>
      <NewMeetupForm onAddMeetup={addNewMeetup}></NewMeetupForm>
    </Fragment>
  );
};

export default NewMeetup;
