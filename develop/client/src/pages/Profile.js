import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_USER } from "../utils/queries";
import { User } from "../../../server/models";

const Profile = () => {
  const { userId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId: userId },
  });

  console.log(userId);
  console.log(useParams());
  console.log("_-----------_");
  console.log(data);

  return (
    <Fragment>
      {!!data && (
        <div>
          <h1>
            ${User.name}'s Profile
          </h1>
        </div>
      )}
    </Fragment>
  );
};

export default Profile;
