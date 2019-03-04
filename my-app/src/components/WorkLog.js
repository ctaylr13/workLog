import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';



class WorkLog extends Component {

    deleteId = () => {
        const { id, deleteFunction } = this.props;
        deleteFunction(id);
    }
    render() {
        const { id, title, message, date, time } = this.props;
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
                                    <h3 color="primary">{title}</h3>
                                    <h4 color="primary">{message}</h4>
                                    <h6>Date: {date}</h6> 
                                    <h6>Time: {time}</h6> 
                            </ListGroupItem>
                        </CSSTransition>
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default WorkLog;