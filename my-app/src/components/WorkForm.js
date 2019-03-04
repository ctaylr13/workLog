import React, { Component } from 'react';
import { Container, Card, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../WorkForm.css'
import uuid from 'uuid';

class WorkForm extends Component {

    render() {
    const { addLogFunction, onChangeMessage, onChangeTitle} = this.props;
    return (
        <Container>
            <Card>
                <Form onSubmit={e => addLogFunction(e)}>
                    <FormGroup>
                        <Label for="WorkFrom" class="label">Add new log</Label>
                        <Input
                            class="title"
                            size="" 
                            type="textarea" 
                            name="title" 
                            id="WorkFrom" 
                            placeholder="Log Title"
                            margin-bottom="2rem"
                            onChange={e => onChangeTitle(e)}
                        />
                        <Input 
                            type="textarea" 
                            name="message" 
                            id="WorkFrom" 
                            placeholder="Log Message"
                            onChange={e => onChangeMessage(e)}
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