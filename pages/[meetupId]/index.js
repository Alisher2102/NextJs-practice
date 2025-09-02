import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import MeetUpDetail from "../../components/meetups/MeetUpDetail";
import { Fragment } from "react/jsx-runtime";
const MeetUpDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupDetail.title}</title>
        <meta name="description" content={props.meetupDetail.description} />
      </Head>
      <MeetUpDetail
        image={props.meetupDetail.image}
        title={props.meetupDetail.title}
        description={props.meetupDetail.description}
        address={props.meetupDetail.address}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://recker2014brr_db_user:e9SI8zXBrvNNChVw@cluster0.0jdatae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://recker2014brr_db_user:e9SI8zXBrvNNChVw@cluster0.0jdatae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetups = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();
  console.log(meetupId);
  return {
    props: {
      meetupDetail: {
        title: selectedMeetups.title,
        description: selectedMeetups.description,
        image: selectedMeetups.image,
        address: selectedMeetups.address,
      },
    },
  };
}
export default MeetUpDetails;
