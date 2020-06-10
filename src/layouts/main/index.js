import React from 'react';
import PropTypes from "prop-types";
import { Navbar } from 'react-bulma-components';

const MainLayout = ({children}) => {
    return (
        <div className="main">
            <Navbar>
                <div className="container">
                    <Navbar.Brand>
                        <Navbar.Item renderAs="a" href="#">
                            <img
                            src="https://bulma.io/images/bulma-logo.png"
                            alt="Bulma: a modern CSS framework based on Flexbox"
                            width="112"
                            height="28"
                            />
                        </Navbar.Item>
                        <Navbar.Burger />
                    </Navbar.Brand>
                    <Navbar.Menu>
                        <Navbar.Container position="end">
                            <Navbar.Item href="#">Video</Navbar.Item>
                            <Navbar.Item dropdown hoverable href="#">
                                <Navbar.Link arrowless={false}>
                                    {'{username}'}
                                </Navbar.Link>
                                <Navbar.Dropdown>
                                    <Navbar.Item href="#">Setting</Navbar.Item>
                                    <Navbar.Divider/>
                                    <Navbar.Item href="#">Logout</Navbar.Item>
                                </Navbar.Dropdown>
                            </Navbar.Item>
                        </Navbar.Container>
                    </Navbar.Menu>
                </div>
            </Navbar>
            <main className="content">
                <div className="container">
                    {children}
                </div>
            </main>
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.element.isRequired
};

export default MainLayout;