import React from 'react'

// import {Container,Row,Col,Button} from "react-bootstrap"

import classNames from "classnames"
function Information({src,visible}) {
    var classes =  visible?"showInfo":"info"
    return (
        <div className={classes}>
            <div>
                <h4>Detail information about {src.mission_name}</h4>
                <br/>
            </div>
            <div>
                <h5>Launch Information : </h5>
                <p>Launch Date  : {src.launch_date_local}</p>
                <p>Launch Site : {src.launch_site.site_name}</p>
                <p>Successfully Launched : {src.launch_success?"Yes":"No"}</p>
                <p>Successfully Landed : {src.land_success?"Yes":"No"}</p>
                {
                    src.launch_success==false?
                    <p>
                        Failure Reason : {src.launch_failure_details.reason}
                    </p>
                    :null
                }
            </div>
            <div>
                <h5>Rocket Infromation : </h5>
                <p>Rocket ID : {src.rocket.rocket_id}</p>
                <p>Rocket Name : {src.rocket.rocket_name}</p>
                <p>Rocket Type : {src.rocket.rocket_type}</p>
            </div>
            <div>
                <h5>Links for more Information : </h5>
                <div>
                    <span>Mission Article : </span>
                    <a href={src.links.article_link} target="_blank">{src.links.article_link}</a>

                </div>
                <div>
                    <span>Wikipedia : </span>
                    <a href={src.links.wikipedia} target="_blank">{src.links.wikipedia}</a>

                </div>
                <div>
                    <span>Youtube : </span>
                    <a href={src.links.video_link} target="_blank">{src.links.video_link}</a>

                </div>
                
               
            </div>
        </div>
    )
}

export default Information
