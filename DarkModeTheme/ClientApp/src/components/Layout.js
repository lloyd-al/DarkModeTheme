import React from 'react';
import { Container } from 'reactstrap';
import { useTheme } from './ThemeContext';
import NavMenu from './NavMenu';

function Layout(props) {
    const themeState = useTheme();
    return (
        <div className="BGTheme" data-theme={themeState.darkMode ? "dark" : "light"}>
            sfdd
            <NavMenu />
            <Container>
                {props.children}
            </Container>
        </div>
    );
}

export default Layout;