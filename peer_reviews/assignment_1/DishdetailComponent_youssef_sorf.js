import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
export default class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish == null) {
      return <div></div>;
    } else {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    }
  }
  renderComments(comments) {
    if (comments.length === 0) {
      return <div></div>;
    } else {
      return comments.map(item => {
        return (
          <div key={item.id}>
            <ul className="list-unstyled">
              <li>{item.comment}</li>
              <li>
                --{item.author},{item.date}
              </li>
            </ul>
          </div>
        );
      });
    }
  }

  render() {
    const dish = this.props.dish;
    return (
      <div className="row">
        {this.renderDish(dish)}
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {this.renderComments(this.props.comments)}
        </div>
      </div>
    );
  }
}
