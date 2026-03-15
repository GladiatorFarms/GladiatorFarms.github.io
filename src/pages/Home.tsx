import { Image } from "react-bootstrap";


function Home() {
    return (<>
        <div className={'home-bg-container'}>
            <Image className={'home-bg'} src={'main-bg.jpeg'}/>
        </div>
    </>);
}

export default Home;