import Head from "next/head";
import { Fragment } from "react/jsx-runtime";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetUpPage = () => {
  const router = useRouter();
  const addMeetUpHandler = async (enteredMeetUpData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetUpData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data);
    router.push("/");
  };
  return (
    <Fragment>
      <Head>
        <title>Add a new React MeetUp!</title>
        <meta name="description" content="Come and add a new React MeetUps!" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
    </Fragment>
  );
};
export default NewMeetUpPage;
