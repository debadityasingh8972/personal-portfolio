import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import Sign from "../assets/img/Sign.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                        <img src={Sign} alt="Sign" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                        <a href="https://www.linkedin.com/in/debaditya-singh-402846198/"><img src={navIcon1} alt="Icon" /></a>
                        <a href="https://github.com/debadityasingh8972"><img src={navIcon2} alt="Icon" /></a>
                        <a href="https://www.instagram.com/debaditya_singh_5972/"><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved - Debaditya Singh</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
