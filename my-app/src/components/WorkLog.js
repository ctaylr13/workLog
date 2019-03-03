import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';


class WorkLog extends Component {

    deleteId = () => {
        const { id, deleteFunction } = this.props;
        // console.log("id", id);
        deleteFunction(id);
    }
    render() {
        const { id, title, message, time, deleteFunction } = this.props;
        return (
            <Container >
                <ListGroup >
                    <TransitionGroup>
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem color="secondary">
                                    <h6>
                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={this.deleteId}
                                        >Delete</Button>
                                    </h6>
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