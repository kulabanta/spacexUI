import React,{useState} from 'react'
import {Button} from "react-bootstrap"

import Information2 from "./Information2.js"

import {Row,Col} from "react-bootstrap"

function MediaBody({src}) {
    const [visible,setVisible] =  useState(false)
    
    const show=()=>{
            setVisible(!visible)
    }
    return (
       <div fluid ="md" className = "mediaStyle shadow-box-example hoverable ">
           <Row  className="justify-content-md-center">
            <Col md={3}>
            <img
                width={200}
                height={200}
                className="mr-5"
                src={src.links.mission_patch}
                alt="Generic placeholder"
            />
            </Col>

            <Col md={9}>
            <Row>
                        <Col>
                        <h4>Flight Number : {src.flight_number}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>   
                        <h5>Mission Name  : {src.mission_name}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {
                        !visible? <div><p>
                                Launch Year : {src.launch_year}
                            </p>
                            <p>
                                SuccessFully Launched : {src.launch_success?"Yes":"No"}
                            </p>
                            </div>
                            :null
                        }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Information2 src={src} visible={visible}/>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Button variant="primary" onClick ={show}>{!visible?"Explore":"Collapse"}</Button>
                        </Col>
                    </Row>

            </Col>
            
                
                    
        </Row>
       </div>
        
    )
}

export default MediaBody
