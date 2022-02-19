import React from "react";
import List from "./List";

const Title = ({ title, alertTitle, profile, profiles }) => {
  alertTitle();
  console.log(profiles);

  return (
    <div>
      <h1>
        {JSON.stringify(profile)}
        Title :{title} || {profile.name}
      </h1>
      <h1>List orang :</h1>
      <ul>
        {profiles.map((profile) => (
          // <h3>{profile.name}</h3>
          <List name={profile.name} />
        ))}
      </ul>
    </div>
  );
};

export default Title;
