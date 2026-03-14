import { Container, Nav, Navbar } from "react-bootstrap";

function SiteNav() {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Gladiator Farms</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default SiteNav
