import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetUpPage = () => {
  const addMeetUpHandler = (enteredMeetUpData) => {
    console.log(enteredMeetUpData);
  };
  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
};
export default NewMeetUpPage;
