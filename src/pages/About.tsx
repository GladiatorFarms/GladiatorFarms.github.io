import PageContainer from "../components/PageContainer.tsx";
import { Carousel } from "react-bootstrap";

const About = () => {
    return (<>
        <PageContainer title={'About Us'}>
            <p>Gladiator Farms started as a market garden in 2022 just outside Cornwall, Ontario in a place called Saint
                Andrews’ West. We grow fruits and vegetables for hungry gladiators - everyday people who want to feel
                healthier and stronger from the food they eat.</p>

            <p>Our current expansion plans are underway for 2026, where we will be adding our all-season, state of the
                art greenhouses with heating and lighting to help serve you better.</p>

            <p>We look forward to seeing you again this year as we grow our operations.</p>
            <Carousel fade className={'about-carousel'}>
                <Carousel.Item>
                    <img className={'about-carousel-img'} src={'about/about-1.jpeg'} alt={'The farm'}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className={'about-carousel-img'} src={'about/about-2.jpeg'} alt={'The farm'}/>
                </Carousel.Item>
            </Carousel>
        </PageContainer>
    </>);
};

export default About;