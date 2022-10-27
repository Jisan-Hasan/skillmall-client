import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
    const course = useLoaderData();
    const {
        id,
        title,
        instructor,
        rating,
        students,
        time,
        lesson,
        fee,
        img,
        details,
        content,
    } = course;
    return (
        <Card className="mt-5">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="my-2 text-muted">
                    Instructor: {instructor}
                </Card.Subtitle>
                <Card.Text className="mt-4">
                    <h4>Fee: ${fee}</h4>
                </Card.Text>
                <Form className="mt-4">
                    <h5>Please Select your payment option: </h5>
                    <div className="mb-3">
                        <Form.Check
                            label="Bkash"
                            name="group1"
                            type="radio"
                            id={`inline-radio-1`}
                        />
                        <Form.Check
                            label="Nagad"
                            name="group1"
                            type="radio"
                            id={`inline-radio-2`}
                        />
                        <Form.Check
                            name="group1"
                            label="Paypal"
                            type="radio"
                            id={`inline-radio-3`}
                        />
                        <Form.Check
                            name="group1"
                            label="Visa/ Mastercard"
                            type="radio"
                            id={`inline-radio-4`}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-5">
                        <Button variant="primary" size="lg">
                            Pay Now
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default Checkout;
