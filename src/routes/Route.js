import React from "react";
import { Route, Redirect } from "react-router-dom";
import DefaultLayout from "../layouts/main";



const RouteWrapper = ({
    component: Component,
    isPrivate,
    ...rest
}: RouteWrapperProps) => {
    const signed = true;

    if(isPrivate && !signed){
        return <Redirect to="/"/>;
    }

    if(!isPrivate && signed){
        return <Redirect to="/dashboard"/>;
    }

    const Layout = signed ? DefaultLayout : null;

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