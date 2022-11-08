import { Button, Nav, Navbar } from 'react-boostrap';
import { useTheme } from '../Context/ThemeContext';

const TopNavBar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Navbar bg={theme} variant={theme}>
            <div className=" d-flex justify-content-between" >
                <Navbar href="#home"> Navbar</Navbar>
                <Navbar className="me-auto">
                    <Nav.link href="/"> Home</Nav.link>
                    <Nav.link href="/features">Features</Nav.link>
                    <Nav.link href="/pricing">Pricing</Nav.link>
                    <Nav />
                    <Nav className="justify-content-end">
                        <Nav.link className="me-auto" onClick={toggleTheme}>
                            <Button variant="outline-primary">Toggle Theme</Button>
                        </Nav.link>
                    </Nav>
                </Navbar>
            </div>
        </Navbar>
    );
};

export default TopNavBar;