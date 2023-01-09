import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_USER } from "../utils/queries";
import "bulma/css/bulma.css";
import pic from "../assets/images/stockPFP.png";
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
        <div className="container is-widescreen">
          <div className="profile-content-section card">

            <section class="cover-pic hero is-medium">
              <div class="hero-body">
                <p class="title">
                  Welcome To Your Profile
                </p>
                <p class="subtitle">
                  Edit Profile to Customize Background
                </p>
              </div>
            </section>

            <section>
              <div className="profile-info-section card-content">
                <div className="media">


                  <div className="media-left">

                    <figure className="profile-pic image is-48x48">
                      <img src={pic} alt="Human Sillouette" />
                    </figure>

                  </div>

                  <div className="user=tags media-content columns">
                    <div className="column-1">

                      <p className="container title is-4">
                        {data.user.firstName} {data.user.lastName}
                      </p>

                      <p className="subtitle is-b is-6">
                        @{data.user.username}
                      </p>

                    </div>
                  </div>
                </div>

                <div className="content">
                  This bio is empty... got nothing to say?
                  <br />
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>

                  <p className="">Email: {data.user.email}</p>

                </div>
              </div>
            </section>

            <button class="edit-profile-btn button btn-block">
              Edit Profile
            </button>

          </div>

          <div>{data.user.post}</div>

        </div>
      )}
    </Fragment>
  );
};

export default Profile;
