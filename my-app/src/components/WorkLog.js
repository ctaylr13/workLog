import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';


class WorkLog extends Component {
    render() {
        const { id, title, message, time } = this.props;
        return (
            <Container >
                <ListGroup >
                    <TransitionGroup>
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem >
                                    <h3>Title: {title}</h3>
                                    <h4>Message: {message}</h4>
                                    <h6>{time}</h6> 
                            </ListGroupItem>
                        </CSSTransition>
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default WorkLog;