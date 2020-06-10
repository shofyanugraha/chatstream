import React from "react";
import { Route, Redirect } from "react-router-dom";
import DefaultLayout from "../layouts/main";
import AuthLayout from "../layouts/auth";



const RouteWrapper = ({
    component: Component,
    isPrivate,
    ...rest
}) => {
    const signed = false;
    if(isPrivate && !signed){
        return <Redirect to="/"/>;
    }

    if(!isPrivate && signed){
        return <Redirect to="/dashboard"/>;
    }
    

    const Layout = signed ? DefaultLayout : AuthLayout;

    return (
        <Route 
            {...rest}
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    )

};

export default RouteWrapper;