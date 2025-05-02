import React from "react";
import green from "../images/green.jpg";
import orange from "../images/orange.jpg";
import blackhome from "../images/blackhome.jpg";
import silver from "../images/silver.jpg";
import yellow from "../images/yellow.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid } from "@mui/material";

const Services = ()=>{
    return(
        <>
            <h1 className="text-warning">nos services</h1><br />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={7}  style={{borderRight:'solid 3px aqua'}}>
                    <h3 className="text-primary">CERTIFIED REPAIRS AND ORIGINAL SPARE PARTS</h3>
                    <img src={green} alt="" />
                    <img src={blackhome} alt="" />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <h3 className="text-primary">ORIGINAL SPARE PARTS</h3>
                    <img src={orange} alt="" />
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} style={{borderRight:'solid 3px aqua'}}>
                    <h3 className="text-primary">TRAINING AND CERTIFICATION</h3>
                    <img src={silver} alt="" />

                </Grid>
                <Grid item xs={12} sm={6}>
                    <h3 className="text-primary">CLASSIC SPARE PARTS</h3>
                    <img src={yellow} alt="" />
                </Grid>
            </Grid>
        </>
    );
}
export default Services;