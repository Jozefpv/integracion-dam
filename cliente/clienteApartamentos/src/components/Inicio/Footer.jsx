import Container from "react-bootstrap/Container";
import FooterContent from "./FooterContent";

const Footer = () => {

    return (
        <Container
            style={{
                minWidth: "100%",
                height: "30vh",
                backgroundImage: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(204,204,204,1) 100%, rgba(216,225,227,1) 100%)",
                backgroundColor: "rgb(255, 255, 255)",
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
            }}
        >
            <div style={{ width: "100%", height:"100%", display: "flex", justifyContent:"center", alignItems:"center", paddingTop:"80px" }}>
                <FooterContent/>
            </div>
        </Container>
    )
}

export default Footer