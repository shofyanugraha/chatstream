import React from 'react';
import PropTypes from "prop-types";
import './style.scss';

const MainLayout = ({children}) => {
    return (
        <div className="auth">
            <main className="content">
                <div className="container">
                    <div className="columns is-centered">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.element.isRequired
};

export default MainLayout;