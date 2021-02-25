import React from 'react'

import {Container,Row,Col} from "react-bootstrap"

function Information2({src,visible}) {
    var classes =  visible?"showInfo":"info"
  
    return (
        <Container fluid>
        <Row  className={classes}>
            <Row>
                <Col>
                    <Row>
                    <h4>Informations about {src.mission_name}</h4>
                    </Row>
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <Row>
                        <p>Details : {src.details}</p>
                    </Row>
                </Col>

            </Row>
            <Row>
                <Col>
                <Row>   
                    <h4>Launch Information : </h4>
                </Row>
                <Row>
                    <p>Launch Date  : {src.launch_date_local}</p>
                </Row>
                <Row>
                    <p>Launch Site : {src.launch_site.site_name_long}</p>
                </Row>
                <Row>
                    <p>Successfully Launched : {src.launch_success?"Yes":"No"}</p> 
                </Row>
                <Row>
                    <p>Successfully Landed : {src.rocket.first_stage.cores[0].land_success?"Yes":"No"}</p> 
                </Row>
                <Row>
                {
                    src.launch_success===false?
                    <p>
                        Failure Reason : {src.launch_failure_details.reason}
                    </p>
                    :null
                }  
                </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <h4>Rocket Infromation : </h4>
                    </Row>
                    <Row>
                        <p>Rocket ID : {src.rocket.rocket_id}</p>
                    </Row>
                    <Row>
                        <p>Rocket Name : {src.rocket.rocket_name}</p>
                    </Row>
                    <Row>
                        <p>Rocket Type : {src.rocket.rocket_type}</p>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row>
                    <h4>Links for more Information : </h4>
                    </Row>
                    <Row>
                        <div>
                        <span style={{fontSize : "20px"}}>Mission Article : </span>
                        <a href={src.links.article_link} target="_blank" rel="noreferrer">{src.links.article_link}</a>

                        </div>
                    </Row>
                    <Row>
                        <div>
                        <span style={{fontSize : "20px"}}>Wikipedia : </span>
                        <a href={src.links.wikipedia} target="_blank" rel="noreferrer">{src.links.wikipedia}</a>

                        </div>
                    </Row>
                    <Row>
                        <div>
                        <span style={{fontSize : "20px"}}>Youtube : </span>
                        <a href={src.links.video_link} target="_blank" rel="noreferrer">{src.links.video_link}</a>

                        </div>
                    </Row>
                </Col>

            </Row>
        </Row>
        </Container>
    )
}

export default Information2
