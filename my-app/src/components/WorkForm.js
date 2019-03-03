import React, { Component } from 'react';
import { Container, Card, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import uuid from 'uuid';

class WorkForm extends Component {

    render() {
    return (
        <Container>
            <Card>
                <Form>
                    <FormGroup>
                        <Label for="WorkFrom">Add Work Log</Label>
                        <Input 
                            type="textarea" 
                            name="title" 
                            id="WorkFrom" 
                            placeholder="Log Title"
                            margin-bottom="2rem"
                        />
                        <Input 
                            type="textarea" 
                            name="message" 
                            id="WorkFrom" 
                            placeholder="Log Message"
                        />
                    </FormGroup>
                    <Button
                        color="dark"
                        margin-bottom="0.5rem"
                    >Add Log</Button>
                </Form>
            </Card>
        </Container>
    );
  }

}

export default WorkForm;