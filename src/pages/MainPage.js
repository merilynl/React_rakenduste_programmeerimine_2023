import List from "../components/List";
import FeedbackForm from "../components/FeedbackForm";
import Children from "../components/Children";
import React from "react";

function MainPage() {
  const myHobbies = ["Reading", "Gardening", "Cooking", "Hiking"];

  return (
    <Children>
      <List hobbies={myHobbies} />

      <FeedbackForm />
    </Children>
  );
}

export default MainPage;
