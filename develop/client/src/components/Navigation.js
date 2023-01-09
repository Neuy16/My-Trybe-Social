import React from 'react';
/* import { useParams } from 'react-router-dom'; */
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
import { QUERY_POST } from '../utils/queries';
import { QUERY_POSTS } from '../utils/queries';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Auth from '../utils/auth';
import decode from 'jwt-decode';
/* import jwtDecode from 'jwt-decode'; */

function Navigation({userId}) {
    
   /*  const { userId } = useParams(); */


    // If there is no `userId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
    const { loading, } = useQuery(
        userId ? QUERY_SINGLE_USER : QUERY_ME,
        {
            variables: { userId: userId },
        },
        QUERY_POST,
        QUERY_POSTS
    );

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
        return false;
      }
    const decoded = decode(token);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <nav>
            <ul>
                <CustomLink to={`/me/${decoded.data._id}`}>Home</CustomLink>
                <CustomLink to={`/me/${decoded.data._id}/createpost`}>Post</CustomLink>
                <CustomLink to="/logout">Log Out</CustomLink> {/* make this the profile link */}
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    /*    const path = window.location.pathname */
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}


export default Navigation;