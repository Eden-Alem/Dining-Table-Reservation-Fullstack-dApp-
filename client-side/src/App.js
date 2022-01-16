import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import { RESERVATION_ABI, RESERVATION_ADDRESS } from './config'
import Restaurant from './Restaurant'
import Customer from './Customer'

import { Navbar, Container, NavbarBrand, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { FaHotel, FaBook, FaRegistered } from "react-icons/fa";

class App extends Component {

  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const reservation = new web3.eth.Contract(RESERVATION_ABI, RESERVATION_ADDRESS)
    this.setState({ reservation })
    const restaurantsCount = await reservation.methods.restaurantsCount().call()
    this.setState({ restaurantsCount })
    console.log(restaurantsCount);
    for (var i = 1; i <= restaurantsCount; i++) {
      const restaurant = await reservation.methods.restaurants(i).call()
      this.setState({
        restaurants: [...this.state.restaurants, restaurant]
      })
    }
    const restaurantOwners = await reservation.methods.restaurantOwners(accounts[0]).call()
    this.setState({ owner: restaurantOwners })
    console.log(restaurantOwners > 0 && restaurantOwners == restaurantsCount)
    this.setState({ registeredRestaurant: restaurantOwners > 0 && restaurantOwners == restaurantsCount })
    this.setState({ loading: false })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      restaurantsCount: 0,
      restaurants: [],
      loading: true,
      currentUser: "",
      registeredRestaurant: false,
      clicked: false,
      resId: 0,
      owner: 0
    }
    this.addRestaurant = this.addRestaurant.bind(this)
    this.restaurantOwner = this.restaurantOwner.bind(this)
    this.customer = this.customer.bind(this)
    this.book = this.book.bind(this)
    this.bookHere = this.bookHere.bind(this)
  }

  restaurantOwner() {
    this.setState({ currentUser: "Restaurant" })
  }

  bookHere() {
    this.setState({ clicked: true })
  }

  customer() {
    this.setState({ currentUser: "Customer" })
  }

  addRestaurant(name, city, adress, opensAt, closesAt, totalSeats) {
    this.setState({ loading: true })
    this.state.reservation.methods.addRestaurant(name, city, adress, opensAt, closesAt, totalSeats).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  } 

  book(id, name, email, timeLimit, startTime, endTime, guestCount) {
    this.setState({ loading: true })
    this.state.reservation.methods.book(id, name, email, timeLimit, startTime, endTime, guestCount).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  } 
  
  reload() {
    window.location.reload() 
  }

  render() {
    return (
      <div>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Container>
            <NavbarBrand href="onClick={this.reload}">
              <FaHotel />  {' '}
              Maed
            </NavbarBrand>
          </Container>
        </Navbar>
        <div className="container-fluid">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex justify-content-center">
              { !this.state.currentUser &&
                (
                  <div>
                  <div style={{ 
                    width: '100vw', 
                    height: '720px',
                    backgroundImage: "url('https://images.unsplash.com/photo-1562050344-f7ad946cee35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'}}>
                    <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems: "center", flexDirection: "column"}}>
                      <p className='text-white mb-0 mt-5 pt-5' style={{fontSize: "4rem"}}>Maed Dining Table Reservation</p>
                      <p className='text-white mb-0 mt-5 pt-5 pl-5 pr-5 w-75' style={{fontSize: "1.3rem", textAlign:"center"}}>Book your table, please continue as a restaurant owner to register your restaurant or please continue as a customer to reserve a dining table at your favorite restaurant ;)</p>
                      <div className='pt-5' style={{ width:"60%",display:"flex", flexWrap:"wrap", justifyContent:"space-around", alignItems:"flex-start"}}>
                        <Button variant="dark" style={{ width:'40%', height:'5rem', fontSize:"1.2rem" }} onClick={this.restaurantOwner}><FaRegistered />  {' '}Restaurant Owner</Button>
                        
                        <Button variant="dark" style={{ width:'40%', height:'5rem', fontSize:"1.2rem" }} onClick={this.customer}><FaBook />  {' '}Customer</Button>
                        
                      </div>
                    </div>                    
                  </div>
                  </div>
                )}

              { this.state.currentUser == "Restaurant" && 
              (this.state.registeredRestaurant ? 
                <ul id="taskList" className="list-unstyled">
                  <Card className=" mt-5 h-100" style={{padding:"3%", margin:"5%"}}>
                        <Card.Header style={{color:"white", backgroundColor:"black"}}>Restaurants Already Registered</Card.Header>
                        
                { this.state.restaurants.map((restaurant, key) => {
                  return(
                    <>
                    <div className="taskTemplate" className="checkbox" key={key}>
                      <Card.Header></Card.Header>
                      <Card.Body >
                          <Card.Img variant="top" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" />
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                          <ListGroupItem>Name: {restaurant.name}</ListGroupItem>
                          <ListGroupItem>City: {restaurant.city}</ListGroupItem>
                          <ListGroupItem>Address:  {restaurant.adress}</ListGroupItem>
                          <ListGroupItem>Opens At: {restaurant.opensAt}</ListGroupItem>
                          <ListGroupItem>Closes At: {restaurant.closesAt}</ListGroupItem>
                          <ListGroupItem>Total Seats Avaliable: {restaurant.totalSeats}</ListGroupItem>
                        </ListGroup>
                      
                      </div>
                    </>
                  )
                })}
                </Card>
              </ul>
            : <Restaurant addRestaurant={this.addRestaurant}/>)} 

              { this.state.currentUser == "Customer" &&
              ( !this.state.clicked
                ? <ul id="taskLists" className="list-unstyled">
                  <Card className=" mt-5 " style={{padding:"2%", margin:"5%"}}>
                    <Card.Header style={{color:"white", backgroundColor:"black"}}>Restaurants Available</Card.Header>
                      
                { this.state.restaurants.map((restaurant, key) => {
                  return(                 
                    <div className="taskTemplates" className="checkbox" key={key}>
                      <ListGroup style={{display: 'flex', flexDirection: 'row'}} className="list-group-flush">
                            <ListGroupItem>Name: {restaurant.name}</ListGroupItem>
                            <ListGroupItem>City: {restaurant.city}</ListGroupItem>
                            <ListGroupItem>Address:  {restaurant.adress}</ListGroupItem>
                            <ListGroupItem>Opens At: {restaurant.opensAt}</ListGroupItem>
                            <ListGroupItem>Closes At: {restaurant.closesAt}</ListGroupItem>
                            <ListGroupItem>Total Seats Avaliable: {restaurant.totalSeats}</ListGroupItem>
                            <Button variant="primary" onClick={this.bookHere} key={key}>Book</Button>
                          </ListGroup>
                    </div>                  
                  )
                })}
              </Card>
              </ul>
             : <Customer book={this.book} />)} 

            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;