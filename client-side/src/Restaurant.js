import React, { Component } from 'react'
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'

class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.restaurantOpensAt = null;
        this.restaurantClosesAt = null;
    
        this.setStartTime= element => {
          this.restaurantOpensAt = element;
          this.restaurantClosesAt = element;
        };
    }

  render() {
    const options = [
    {      
        label: "01:00",      
        value: "01:00",      
    },{      
        label: "02:00",      
        value: "02:00",      
    },{      
        label: "03:00",      
        value: "03:00",      
    },{      
        label: "04:00",      
        value: "04:00",      
    },{      
        label: "05:00",      
        value: "05:00",      
    },{      
        label: "06:00",      
        value: "06:00",      
    },{      
        label: "07:00",      
        value: "07:00",      
    },{      
        label: "08:00",      
        value: "08:00",      
    },{      
        label: "09:00",      
        value: "09:00",      
    },{      
        label: "10:00",      
        value: "10:00",      
    },{      
        label: "11:00",      
        value: "11:00",      
    },{      
        label: "12:00",      
        value: "12:00",      
    },{      
        label: "13:00",      
        value: "13:00",      
    },{      
        label: "14:00",      
        value: "14:00",      
    },{      
        label: "15:00",      
        value: "15:00",      
    },{      
        label: "16:00",      
        value: "16:00",      
    },{      
        label: "17:00",      
        value: "17:00",      
    },{      
        label: "18:00",      
        value: "18:00",      
    },{      
        label: "19:00",      
        value: "19:00",      
    },{      
        label: "20:00",      
        value: "20:00",      
    },{      
        label: "21:00",      
        value: "21:00",      
    },{      
        label: "22:00",      
        value: "22:00",      
    },{      
        label: "23:00",      
        value: "23:00",      
    },{      
        label: "00:00",      
        value: "00:00",      
    },    
    
    ];
    return (
      <div id="content" style={{margin:"10%"}}>
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.addRestaurant(
              String(this.restaurantName.value), 
              String(this.restaurantCity.value),
              String(this.restaurantAdress.value),
              String(this.restaurantOpensAt.value),
              String(this.restaurantClosesAt.value),
              parseInt(this.restaurantTotalSeats.value))
        }}>
            <Card className=" mt-5 " style={{padding:"2%", margin:"5%", width:"120%"}}>
            <Card.Header style={{color:"white", backgroundColor:"black"}}>Register Restaurant</Card.Header>
            
            <ListGroup className="list-group-flush" style={{width:"100%"}}>
                <ListGroupItem>          
                    <input id="1newTask" ref={(input) => this.restaurantName = input} type="text" className="form-control" placeholder="Add name..." required />
                </ListGroupItem>
                <ListGroupItem>          
                    <input id="2newTask" ref={(input) => this.restaurantCity = input} type="text" className="form-control" placeholder="Add city..." required />
                </ListGroupItem>
                <ListGroupItem>          
                    <input id="3newTask" ref={(input) => this.restaurantAdress = input} type="text" className="form-control" placeholder="Add address..." required />
                </ListGroupItem>
                <ListGroupItem>          
                    <select ref={(input) => this.restaurantOpensAt = input} className="form-control">
                        {options.map((option) => (
                        <option id="newTask3" value={option.value}>{option.label}</option>

                        ))}

                    </select>
                </ListGroupItem>
                <ListGroupItem>          
                    <select ref={(input) => this.restaurantClosesAt = input} className="form-control">
                        {options.map((option) => (
                        <option id="newTask3" value={option.value}>{option.label}</option>

                        ))}

                    </select>
                </ListGroupItem>
                <ListGroupItem>          
                    <input id="6newTask" ref={(input) => this.restaurantTotalSeats = input} type="Number" className="form-control" placeholder="Add total seats..." required />
                </ListGroupItem>
                <Button variant="primary" type='submit'>Register</Button>
            </ListGroup>
        </Card>
        </form>
        <ul id="completedTaskList" className="list-unstyled">
        </ul>
      </div>
    );
  }
}

export default Restaurant;