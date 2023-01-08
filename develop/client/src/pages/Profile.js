import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_USER } from "../utils/queries";
// import { User } from "../../../server/models";

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
          <div>
            <h1>
              {data.user.firstName} {data.user.lastName}'s Profile
            </h1>
            <h3>AKA: {data.user.username}</h3>
          </div>
          <div>
            {data.user.post}
          </div>
          <div>
            <h3>Email: {data.user.email}</h3>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Profile;