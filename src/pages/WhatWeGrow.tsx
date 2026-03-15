import { Card, Col, Row } from "react-bootstrap";

type GrowCardProps = {
    name: string,
    description?: string,
};


const growCardLoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida dui congue consectetur fringilla. Integer non tortor id odio pellentesque dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare malesuada turpis quis convallis. Cras non libero sed erat sodales rhoncus nec fringilla dolor. Suspendisse congue urna velit, vel sollicitudin ipsum finibus ut. Mauris facilisis augue quam, ac elementum lacus suscipit quis.";


const growCardDetails: GrowCardProps[] = [
    {
        name: "White Zucchini",
        description: "Our specialty variety of Lebanese white zucchini is field grown in early spring.",
    },
    {
        name: "Eggplant",
        description: "We grow eggplants throughout the growing season to meet our customer's needs. Grown to complement our white zucchini and Lebanese cucumbers.",
    },
    {
        name: "Tomatoes",
        description: "Backed by popular demand we offer Roma, Beefsteak, and Cherry tomatoes.",
    },
    {
        name: "Sweet Bell Peppers",
        description: "Another staple crop we offer to our customers. Grown locally to offer maximum sweetness.",
    },
    {
        name: "Cucumbers",
        description: "Lebanese variety cucumbers complement our eggplant and white zucchini as staples for our customers.",
    },
    {
        name: "Garlic",
        description: "A specialty crop we are implementing in our 2026 growing season to meet growing regional demand.",
    },
];

const GrowCard = function (props: GrowCardProps) {
    return (<>
        <Card style={{width: '18rem'}}>
            {/*<Card.Img variant="top" src=""/>*/}
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description ?? growCardLoremIpsum}
                </Card.Text>
            </Card.Body>
        </Card>
    </>);
}

function WhatWeGrow() {
    return (<>
        <h1>What we Grow</h1>
        <Row xs={1} md={2} className="g-4">
            {growCardDetails.map((p, idx) => (
                <Col key={idx}>
                    <GrowCard name={p.name} description={p.description}/>
                </Col>
            ))}
        </Row>
    </>);
}

export default WhatWeGrow