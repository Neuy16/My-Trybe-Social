import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_USER, QUERY_ME } from "../utils/queries";
import { QUERY_POSTS } from "../utils/queries";
import React, { useState } from "react";

const usePostUserData = (userId) => {
      const [ post, setPost] = useState({})
      const [ user, setUser] = useState({})
        const queryUser =  useQuery(userId ? QUERY_SINGLE_USER : QUERY_ME, {
            variables: { userId: userId },
            onCompleted: setUser
          });
        const queryPosts =  useQuery(QUERY_POSTS, {onCompleted: setPost});
        const  arrayData = [user, post];
        
        return arrayData;
};

export default usePostUserData;