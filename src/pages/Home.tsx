import { Image } from "react-bootstrap";


function Home() {
    return (<>
        <div className={'home-bg-container'}>
            <Image className={'home-bg'} src={'main-bg.jpeg'}/>
            <Image className={'home-bg-overlay'} src={'gladiator-farms.png'}/>
        </div>
    </>);
}

export default Home;