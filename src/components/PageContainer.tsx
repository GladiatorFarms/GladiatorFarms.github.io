import { Container } from "react-bootstrap";
import type { ReactElement } from "react";

type PageContainerProps = {
    title: string,
    children?: ReactElement | ReactElement[];
};

const PageContainer = (props: PageContainerProps) => {
    return (<>
        <Container>
            <h1 className={'page-title'}>{props.title}</h1>
            <div className={'page-body'}>
                {props.children}
            </div>
        </Container>
    </>);
}

export default PageContainer