import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Moment from 'react-moment';

//
// Presentational component : renders the view based on the props passed in.
//
class DishDetail extends Component {
    renderComments(comments) {
        if(!comments) { return(<div></div>); }

        const items = comments.map( (item) => {
            return(
                <div key={item.id}>
                    <li>
                        <div>{item.comment}</div>
                        <div className="m-2">
                            -- {item.author},
                            <Moment format=" MMM DD, YYYY">{item.date}</Moment>
                        </div>
                    </li>
                </div>
            );
        });

        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">{items}</ul>
            </div>
        );
    }

    renderDish(dish) {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    render() {
        console.log('--> DishDetail.render() this.props: ', this.props);

        if(!this.props.dish) { return(<div></div>); }

        return(
            <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish.comments)}
            </div>
        );
    }
}

export default DishDetail;
