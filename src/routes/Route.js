import React from "react";
import { Route, Redirect } from "react-router-dom";
import DefaultLayout from "../layouts/main";



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
    

    const Layout = signed ? DefaultLayout : DefaultLayout;

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