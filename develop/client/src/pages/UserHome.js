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
        <section className="post-feed-section hero is-fullheight">
          <div className="">
            <div className="">
              <strong className="">
                Welcome to your timeline {data[0].user?.firstName}
              </strong>
            </div>

            <div className="user-post-section hero">
              <PostList posts={data[1].posts} />
            </div>
          </div>
        </section>
      }
    </Fragment>
  );
};

export default UserHome;
