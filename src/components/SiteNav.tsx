import { Container, Nav, Navbar } from "react-bootstrap";

function SiteNav() {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/gladiator-farms.jpeg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Gladiator Farms</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#what-we-grow">What we Grow</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default SiteNav
