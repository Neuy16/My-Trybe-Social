import React, { useState, useEffect, Fragment } from "react";
import Navigation from '../components/Navigation';
import AuthService from '../utils/auth';

const Footer = () => {

    const [user, setUser] = useState(null);
    async function getUser() {
        return AuthService.getUser()
    }
 
    useEffect(() => {
        if(AuthService.loggedIn()){
            getUser().then(results =>
                setUser(results.data));
            }
    }, [])

    console.log();

    return (
        <Fragment>
            {!!user &&
                <div className="footer">
                    <div>
                        <Navigation userId={user._id} />
                    </div>
                </div>}
        </Fragment>
    );
}

export default Footer;