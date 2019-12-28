import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component {

    renderComments(comments) {
        if (comments !== null) {
            return (
                <ul className="list-unstyled">
                    {
                        comments.map((comment) => {
                            return (
                                <div key={comment.id}>
                                    <li>{comment.comment}</li>
                                    <li>-- {comment.author}</li>
                                </div>
                            );
                        })
                    }
                </ul>
            );
        } else {
            return (
                <div>
                </div>
            );
        }
    }

    renderDish(dish) {
        if (dish !== null) {
            return (
                <div>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            return (
                <div>
                </div>
            );
        }
    }

    render() {
        const {dish} = this.props;
        return (
            <div className="row">
                <div className="col-12 col-md-5 mt-1">
                    {this.renderDish(dish)}
                </div>
                <div className="col-12 col-md-5 mt-1">
                    {this.renderComments(dish.comments)}
                </div>
            </div>
        );
    }
}

export default DishDetail;