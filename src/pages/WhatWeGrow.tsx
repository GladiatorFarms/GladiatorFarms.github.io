import { Card, Col, Row } from "react-bootstrap";
import PageContainer from "../components/PageContainer.tsx";

type GrowCardProps = {
    name: string,
    description?: string,
    img?: string
};


const growCardLoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida dui congue consectetur fringilla. Integer non tortor id odio pellentesque dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare malesuada turpis quis convallis. Cras non libero sed erat sodales rhoncus nec fringilla dolor. Suspendisse congue urna velit, vel sollicitudin ipsum finibus ut. Mauris facilisis augue quam, ac elementum lacus suscipit quis.";


const growCardDetails: GrowCardProps[] = [
    {
        name: "White Zucchini",
        description: "Our specialty variety of Lebanese white zucchini is field grown in early spring.",
        img: "what-we-grow/zucchini.jpeg",
    },
    {
        name: "Eggplant",
        description: "We grow eggplants throughout the growing season to meet our customer's needs. Grown to complement our white zucchini and Lebanese cucumbers.",
        img: "what-we-grow/eggplant.jpeg",
    },
    {
        name: "Tomatoes",
        description: "Backed by popular demand we offer Roma, Beefsteak, and Cherry tomatoes.",
        img: "what-we-grow/tomatoes.jpeg",
    },
    {
        name: "Sweet Bell Peppers",
        description: "Another staple crop we offer to our customers. Grown locally to offer maximum sweetness.",
        img: "what-we-grow/bellpepper.jpeg",
    },
    {
        name: "Cucumbers",
        description: "Lebanese variety cucumbers complement our eggplant and white zucchini as staples for our customers.",
        img: "what-we-grow/cucumbers.jpeg",
    },
    {
        name: "Garlic",
        description: "A specialty crop we are implementing in our 2026 growing season to meet growing regional demand.",
        img: "what-we-grow/garlic.jpeg",
    },
    {
        name: "Strawberries",
        description: "We are adding to our lineup year-round strawberry production. A popular berry eaten fresh, dipped in chocolate (as a dessert!), or baked in pies, strawberries are always a hit and even better when they are local!",
        img: "what-we-grow/strawberry.jpeg",
    },
    {
        name: "Purslane",
        description: "A key ingredient in fattoush and green tomatillo salsa, this plant is a superfood that will elevate your salads with nutrients and flavour.",
        img: "what-we-grow/purslane.jpeg",
    },
    {
        name: "Pole Beans",
        description: "Our sweet pole beans are a popular snack ready to eat fresh, or cooked. A roadstand favourite!",
        img: "what-we-grow/greenflatbean.jpeg",
    }
];

const GrowCard = function (props: GrowCardProps) {
    return (<>
        <Card className={'h-100'}>
            {props.img === undefined ? null : <Card.Img variant="top" alt={props.name} src={props.img}/>}
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
        <PageContainer title={'Our Produce'}>
            <Row xs={1} md={2} className="g-4">
                {growCardDetails.map((p, idx) => (
                    <Col key={idx}>
                        <GrowCard name={p.name} description={p.description} img={p.img}/>
                    </Col>
                ))}
            </Row>
        </PageContainer>
    </>);
}

export default WhatWeGrow