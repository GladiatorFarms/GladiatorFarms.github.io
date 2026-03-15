import { Container, Nav, Navbar } from "react-bootstrap";

function SiteNav() {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="light" data-bs-theme="light" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/gladiator-farms-mini.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Gladiator Farms</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#what-we-grow">What we Grow</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default SiteNav
