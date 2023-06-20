import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
    return (

        <Navbar expand="lg" className="bg-body-tertiary" style={{
            position: "sticky", top: "0", zIndex: "1", backgroundColor: "white", webkitboxshadow: " 9px 15px 28px 0px rgba(86, 86, 86, 0.54)",
            boxShadow: " 9px 15px 28px 0px rgba(86, 86, 86, 0.54)"
        }}  >
            <Container fluid
            >
                <Navbar.Brand href="#"><span style={{ fontSize: "30px", marginLeft: "25px" }}>FASHION</span><span style={{ color: "red", fontSize: "30px" }}>CUBE</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <div style={{ display: "flex", marginLeft: "550px" }}>
                            <div style={{ display: "flex" }}>
                                <Nav.Link href="#action1">HOME</Nav.Link>
                                <Nav.Link href="#action2">CONTACT</Nav.Link>
                                <NavDropdown title="SHOP" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            <div className='icon' style={{ marginLeft: "80px", marginTop: "10px" }} >
                                <span class="material-symbols-outlined">
                                    search
                                </span>
                                <span class="material-symbols-outlined">
                                    person
                                </span>
                                <span class="material-symbols-outlined" style={{ width: "30px", height: "30px", borderRadius: "100%", backgroundColor: " rgba(232, 229, 229,1)" }}>
                                    local_mall
                                </span>
                            </div>
                        </div>
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar >

    );
}

export default NavScrollExample;