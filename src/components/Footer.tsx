import { Col, Container, Row } from "react-bootstrap";
import { CCircle, Instagram } from "react-bootstrap-icons";

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Using JavaScript for current year

    return (
        <footer className="bg-dark text-bg-dark ext-center text-lg-start mt-auto">
            <Container className="p-4">
                <Row>
                    <Col className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Gladiator Farms</h5>
                        <p>
                            Innovative agriculture in Canada.
                        </p>
                    </Col>
                    <Col className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Headquarters</h5>
                        <div>
                            <p className={'address-line'}>14255283 CANADA CORPORATION</p>
                            <p className={'address-line'}>4825 ON-138</p>
                            <p className={'address-line'}>St. Andrews West</p>
                            <p className={'address-line'}>Ontario, K0C 2A0</p>
                            <p className={'address-line'}>Canada</p>
                        </div>
                    </Col>
                    <Col className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="https://www.instagram.com/gladiatorfarms/"
                                   className="link-light"><Instagram/>&nbsp;Instagram</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="text-center p-3 bg-dark" style={{}}>
                <CCircle/> Copyright {currentYear} 14255283 CANADA CORPORATION
            </div>
        </footer>
    );
};

export default Footer;