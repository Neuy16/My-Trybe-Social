import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostList from "../components/PostList";
import usePostUserData from "../components/usePostUserData";

const UserHome = () => {
  const { userId } = useParams();
  const data = usePostUserData(userId);

  return (
    <Fragment>
      {!!data &&
        <section className="hero is-fullheight has-background-success-light">
          <div className="">
            <div className="is-size-2 is-italic is-underlined">
              <strong className="">
                Welcome to your timeline {data[0].user?.firstName}!
              </strong>
            </div>

            <div className="hero is-halfheight has-background-white-ter">
              <PostList posts={data[1].posts} />
            </div>
          </div>
        </section>
      }
    </Fragment>
  );
};

export default UserHome;
