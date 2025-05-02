import React from "react";
import black from "../images/black.jpg";
import biollet from "../images/biollet.jpg";
import blackhome from "../images/blackhome.jpg";
import blue from "../images/blue.jpg";
import { Grid } from "@mui/material";
const About = () => {
    return (
        <>
           
            <h3 className="text-primary">LAMBORGHINI</h3>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <img src={black} alt="" />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <p>
                        Automobili Lamborghini S.p.A., usually referred to as Lamborghini or colloquially Lambo, (Italian: [autoˈmɔːbili lamborˈɡiːni]) is an Italian manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.
                        Ferruccio Lamborghini 1916–1993, an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini S.p.A. in 1963 to compete with Ferrari. The company was noted for using a rear mid-engine, rear-wheel drive layout. Lamborghini grew rapidly during its first decade, but sales plunged in the wake of the 1973 worldwide financial downturn and the oil crisis. The firm's ownership changed three times after 1973, including a bankruptcy in 1978. American Chrysler Corporation took control of Lamborghini in 1987 and sold it to Malaysian investment group Mycom Setdco and Indonesian group V'Power Corporation in 1994. In 1998, Mycom Setdco and V'Power sold Lamborghini to the Volkswagen Group where it was placed under the control of the group's Audi division.
                        New products and model lines were introduced to the brand's portfolio and brought to the market and saw an increased productivity for the brand. In the late 2000s, during the Great Recession, Lamborghini's sales dropped nearly 50%.
                        Lamborghini currently produces the V10-powered Huracán, the Urus SUV powered by a twin-turbo V8 engine, and the Revuelto, a V12/electric hybrid, as of 2024. In addition, the company produces V12 engines for offshore powerboat racing.
                        Lamborghini Trattori, founded in 1948 by Ferruccio Lamborghini, is headquartered in Pieve di Cento, Italy, and continues to produce tractors. Since 1973, Lamborghini Trattori has been a separate entity from the Lamborghini's automobile division.
                    </p>
                </Grid>
            </Grid>

            <h3 className="text-primary">The History of Lamborghini</h3>
            <Grid container spacing={2}>  
                <Grid item xs={12} sm={6}>
                    <p>To this day, the unbridled energy of a fighting bull is the trademark of the super sports cars built in Sant’Agata Bolognese, both on and under the bonnet. In contrast to Bugatti, the legend of Lamborghini was still very much alive in 1998, as evidenced by the roar of the V12 engine. This unique combination of speed, style and perfection attracted the attention of the Volkswagen Group, which was looking to develop a luxury segment to enhance its prestige and market coverage. The opportunity came when the Indonesian holding company Megatech could no longer put up the capital required by its Italian subsidiary and Lamborghini faced financial problems. Company representatives searching for an engine for their Aerosa prototype contacted Audi. As a result, Volkswagen learnt that the Lamborghini brand was for sale. Following lengthy negotiations, Automobili Lamborghini S.p.A. was acquired on July 10, 1998.</p>
                </Grid> 
                <Grid item xs={12} sm={6}>
                    <img src={biollet} alt="" />
                </Grid>
            </Grid>   

            <h3 className="text-primary">Engagement</h3>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <p>The Volkswagen Group uses national and international cultural projects and partnerships to promote education in areas such as art, music and design. The Group is also involved in resolving social issues. Since 2015, the company has been committed to helping refugees by managing emergency aid, helping with language acquisition, education and qualification.The development and management of long-term partnerships are key factors in ensuring that the company’s engagement remains consistent.</p>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <img src={blue} alt="" />
                    <img src={blackhome} alt="" />
                </Grid>
            </Grid>
        </>
    );
}

export default About;










// const red = color("red").lighten(0.2).hex();
// import color from "color";
// import{ColorPicker} from "react-css-color";
// style={{ color: red }}