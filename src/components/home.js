import React, { Component } from 'react'
import axios from "axios"

import {Container,Navbar,Nav,Form,FormControl,Button,Row,Col,Spinner} from "react-bootstrap"

import MediaBody from "./MediaBody"

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data : [],
             year : "",
             fetching : true,
             error : false
        }
        this.inputRef = null;

    }
    setRef = (element)=>{
        this.inputRef = element
        console.log(this.inputRef)
    }
    showAll = ()=>{
        this.setState({data : [],year :"",fetching : true,error:false})
        axios.get("https://api.spacexdata.com/v3/launches?limit=100")
        .then(res=>{
            this.setState({data : res.data,year :"",fetching : false,error:false})
            // console.log(res.data[0])
            // this.setState(prevState => {return {...prevState,data:res.data}})
        })
        .catch(err=>{
            this.setState({data : [],year :"",fetching : false,error:true})
            // console.log(err)
        })
    }
    showSuccessfulLaunches = ()=>{
        this.setState({data : [],year :"",fetching : true,error:false})
        axios.get("https://api.spacexdata.com/v3/launches?limit=100&launch_success=true")
        .then(res=>{
            this.setState({data : res.data,year :"",fetching : false,error:false})
            // console.log(res.data[0])
            // this.setState(prevState => {return {...prevState,data:res.data}})
        })
        .catch(err=>{
            this.setState({data : [],year :"",fetching : false,error:true})
        })
    }
    showSuccessfulLandings = ()=>{
        this.setState({data : [],year :"",fetching : true,error:false})
        axios.get("https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true")
        .then(res=>{
            this.setState({data : res.data,year :"",fetching : false,error:false})
        })
        .catch(err=>{
            this.setState({data : [],year :"",fetching : false,error:true})
            
        })
    }
    showYearLaunches = (e)=>{

        e.preventDefault();
        this.setState({data : [],year :"",fetching : true,error:false})

        axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${this.state.year}`)
        .then(res=>{
            this.setState({data : res.data,year :"",fetching : false,error:false})
        })
        .catch(err=>{
            this.setState({data : [],year :"",fetching : false,error:true})
        })
    }
    setYear = (e)=>{
        this.setState(prevState=>{return {...prevState,year : e.target.value}})
    }
    componentDidMount(){
        this.showAll();
    }
    
    render() {
        return (
            <Container fluid >
                    <Navbar className="NavStyle" expand="lg">
                    <Navbar.Brand href="#home" style={{color : "#FF4541"}}>SpaceX</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#home" onClick = {this.showAll}>Home</Nav.Link>
                        <Nav.Link href="#successful_Launches" onClick = {this.showSuccessfulLaunches}>Successful Launches</Nav.Link>
                        <Nav.Link href="#successful_Landings" onClick = {this.showSuccessfulLandings}>Successful Landings</Nav.Link>

                        </Nav>
                        <Form  inline onSubmit={this.showYearLaunches}>
                        <FormControl type="text" placeholder="Search year" value={this.state.year} onChange={this.setYear} className="mr-sm-2" />
                        <Button className="btn" variant="outline-warning" type="submit">Search</Button>
                        </Form> 
                    </Navbar.Collapse>
                    </Navbar>
                    <Row className="justify-content-md-center">
                        <Col>
                    {
                        !this.state.fetching ? this.state.data.map((data,index)=>{
                            return <MediaBody key ={index} src={data}/>
                        })
                        :
                        this.state.error?
                        <h1 className ="infoHeader">Error in fetching data</h1>
                        :<div className="d-flex justify-content-center "  style={{marginTop:"20%",}}>
                            <Spinner style={{marginTop:"3px"}} animation="border" />
                        </div>
                    }   
                    </Col>
                    </Row>
                    

            </Container>
        
        )
    }
}

export default Home
