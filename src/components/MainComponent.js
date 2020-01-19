import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

//
// Container component : responsible for data fetching, state maintenance, uses
// and passes data to presentational components.
//

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null // Only tracking the dish id
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    findDishById(dishes, dishId) {
        let dish = dishes.filter( (d) => {
            return d.id === dishId;
        });
        return (dish[0]);
    }

    render() {
        return (
          <div>
              <Navbar dark color="primary">
                  <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                  </div>
              </Navbar>
              <Menu dishes={this.state.dishes} onClick={ (dishId) => { this.onDishSelect(dishId); } } />
              <DishDetail dish={ this.findDishById(this.state.dishes, this.state.selectedDish) } />
          </div>
        );
    }
}

export default Main;
