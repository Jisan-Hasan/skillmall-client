import React from "react";
import { Container } from "react-bootstrap";

const FAQ = () => {
    return (
        <Container className="my-5 py-5">
            <h2 className="text-center">Frequently Asked Questions</h2>

            <div className="my-4">
                <h6>1. How Can I get Premium Access?</h6>
                <p className="ms-2">For the premium access you have to pay the course fee.</p>
            </div>
            <div className="my-4">
                <h6>2. How to Pay for Premium Access</h6>
                <p className="ms-2">You Can Pay via Bkash, Nagad, Visa/ Mastercard, Paypal</p>
            </div>
            <div className="my-4">
                <h6>3. How the class conducted?</h6>
                <p className="ms-2">The Class will be conducted through online.</p>
            </div>
            <div className="my-4">
                <h6>4. What are the instructor's qualification?</h6>
                <p className="ms-2">In this platform you will get world class instructor in the relevent field.</p>
            </div>
        </Container>
    );
};

export default FAQ;
