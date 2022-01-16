import React, { Component } from 'react'

import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'

class Customer extends Component {
    constructor(props) {
        super(props);
        this.startTime = null;
        this.endTime = null;
    
        this.setStartTime= element => {
          this.startTime = element;
          this.endTime = element;
        };
    }
    
  render() {
    const options = [
        {      
          label: "01:00",      
          value: "01",      
        },{      
            label: "02:00",      
            value: "02",      
        },{      
            label: "03:00",      
            value: "03",      
        },{      
            label: "04:00",      
            value: "04",      
        },{      
            label: "05:00",      
            value: "05",      
        },{      
            label: "06:00",      
            value: "06",      
        },{      
            label: "07:00",      
            value: "07",      
        },{      
            label: "08:00",      
            value: "08",      
        },{      
            label: "09:00",      
            value: "09",      
        },{      
            label: "10:00",      
            value: "10",      
        },{      
            label: "11:00",      
            value: "11",      
        },{      
            label: "12:00",      
            value: "12",      
        },{      
            label: "13:00",      
            value: "13",      
        },{      
            label: "14:00",      
            value: "14",      
        },{      
            label: "15:00",      
            value: "15",      
        },{      
            label: "16:00",      
            value: "16",      
        },{      
            label: "17:00",      
            value: "17",      
        },{      
            label: "18:00",      
            value: "18",      
        },{      
            label: "19:00",      
            value: "19",      
        },{      
            label: "20:00",      
            value: "20",      
        },{      
            label: "21:00",      
            value: "21",      
        },{      
            label: "22:00",      
            value: "22",      
        },{      
            label: "23:00",      
            value: "23",      
        },{      
            label: "00:00",      
            value: "00",      
        },    
      
      ];
    return (
      <div id="content" style={{margin:"10%"}}>
        <form onSubmit={(event) => {
            event.preventDefault()
            this.props.book(
            1,
            String(this.userName.value), 
            String(this.userEmail.value),
            24,
            parseInt(String(this.startTime.value).slice(0,2)),
            parseInt(String(this.endTime.value).slice(0,2)),
            parseInt(this.guestCount.value));        
         
          
        }}>
        <Card className=" mt-5 " style={{padding:"2%", margin:"5%", width:"120%"}}>
            <Card.Header style={{color:"white", backgroundColor:"black"}}>Booking Info</Card.Header>
            
            <ListGroup className="list-group-flush" style={{width:"100%"}}>
                <ListGroupItem>          
                    <input id="newTask1" ref={(input) => this.userName = input} type="text" className="form-control" placeholder="Full name" required />
                </ListGroupItem>
                <ListGroupItem>          
                    <input id="newTask2" ref={(input) => this.userEmail = input} type="email" className="form-control" placeholder="Email adrress" required />
                </ListGroupItem>
                <ListGroupItem>   
                    <select ref={(input) => this.startTime = input} className="form-control">
                        {options.map((option) => (
                        <option id="newTask3" value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </ListGroupItem>
                <ListGroupItem>          
                    <select ref={(input) => this.endTime = input} className="form-control">
                        {options.map((option) => (
                        <option id="newTask3" value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </ListGroupItem>
                <ListGroupItem>          
                    <input id="newTask5" ref={(input) => this.guestCount = input} type="Number" className="form-control" placeholder="No of Guests" required />
                </ListGroupItem>
                <Button variant="primary" type='submit'>Book</Button>
            </ListGroup>
        </Card>
        </form>
        <ul id="completedTaskList" className="list-unstyled">
        </ul>
      </div>
    );
  }
}

export default Customer;