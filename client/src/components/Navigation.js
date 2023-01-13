import React from 'react';
/* import { useParams } from 'react-router-dom'; */
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
import { QUERY_POST } from '../utils/queries';
import { QUERY_POSTS } from '../utils/queries';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Auth from '../utils/auth';
import decode from 'jwt-decode';
import 'bulma/css/bulma.css';
/* import jwtDecode from 'jwt-decode'; */

function Navigation({ userId }) {

    /*  const { userId } = useParams(); */

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

        <section> 
                <ul className='nav-buttons navbar columns'>
                    <li className='single-nav-btn button column is-one-quarter'>
                    <CustomLink className='nav-btn-txt' to="/logout">Log Out</CustomLink>
                    </li>
                    <li className='single-nav-btn button column is-one-quarter'>
                    <CustomLink className='nav-btn-txt' to={`/me/${decoded.data._id}`}>Home</CustomLink>
                    </li>
                    <li className='single-nav-btn button column is-one-quarter'>
                    <CustomLink className='nav-btn-txt' to={`/me/${decoded.data._id}/createpost`}>Post</CustomLink>
                    </li>
                    <li className='single-nav-btn button column is-one-quarter'>
                    <CustomLink className='nav-btn-txt' to={`/profile/${decoded.data._id}`}>Profile</CustomLink>
                    </li>
                </ul>
      
        </section>

    );
}



export default Navigation;