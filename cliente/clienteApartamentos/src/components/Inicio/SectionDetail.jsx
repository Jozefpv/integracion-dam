import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextSection from "./TextSection";
import ImageSection from "./ImageSection";

const SectionDetail = () => {

    return (
        <Container
            style={{
                minWidth: "100%",
                height: "70vh",
                backgroundImage: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(204,204,204,1) 100%, rgba(216,225,227,1) 100%)",
                backgroundColor: "rgb(255, 255, 255)",
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
            }}
        >
            <Row style={{height:"100%"}}>
                <Col sm={12} md={5}>
                    <ImageSection />
                </Col>
                <Col sm={0} md={7} style={{height:"100%",display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <TextSection />
                </Col>
            </Row>
        </Container>
    )
}

export default SectionDetail