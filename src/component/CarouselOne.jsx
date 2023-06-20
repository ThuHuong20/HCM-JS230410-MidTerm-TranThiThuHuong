import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
    return (
        <Carousel >
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="../images/slider_1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className="slider" style={{ color: "black", textAlign: "left", marginBottom: "100px" }}>
                    <p>SPRING / SUMMER COLLECTION 2017</p>
                    <h1 style={{ fontWeight: "bold", fontSize: "60px" }}>Get up to 30% off</h1>
                    <h1 style={{ fontWeight: "bold", fontSize: "60px" }}>New Arrivals</h1>
                    <button style={{ backgroundColor: "red", border: "none", color: "white", borderRadius: "5%" }}>SHOP NOW</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="../images/slider_2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption className="slider" style={{ color: "black", textAlign: "left", marginBottom: "100px" }}>
                    <p>SPRING / SUMMER COLLECTION 2017</p>
                    <h1 style={{ fontWeight: "bold", fontSize: "60px" }}>Get up to 30% off</h1>
                    <h1 style={{ fontWeight: "bold", fontSize: "60px" }}>New Arrivals</h1>
                    <button style={{ backgroundColor: "red", border: "none", color: "white", borderRadius: "5%" }}>SHOP NOW</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="../images/slider_3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className="slider" style={{ color: "black", textAlign: "left", marginBottom: "100px" }}>
                    <p>SPRING / SUMMER COLLECTION 2017</p>
                    <h1 style={{ fontWeight: "bold", fontSize: "60px" }}>Get up to 30% off</h1>
                    <h1 style={{ fontWeight: "bold", fontSize: "60px" }}>New Arrivals</h1>
                    <button style={{ backgroundColor: "red", border: "none", color: "white", borderRadius: "5%" }}>SHOP NOW</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;
