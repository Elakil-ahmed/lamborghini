import React, { useState } from "react";
import contact from "../images/contact.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Grid } from "@mui/material";
function App() {
    
    const Button = styled.button`
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 15px 32px;
    font-size: 16px;
    cursor: pointer;
    margin-right:10,41vw;
    &:hover {
      background-color: #45a049;
    }
  `
  ;
  
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        money: "",
        message: ""
    });
    const [dataList, setDataList] = useState([]);
    const [error, setError] = useState(""); 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };
    const validateForm = () => {
    if (!formData.name || !formData.email || !formData.age || !formData.money || !formData.message) {
        setError("Veuillez remplir tous les champs !");
        return false;
    }
    if (formData.age < 18) {
        setError("You haven't permis!");
        return false;
    }
    if (formData.money < 300000000) {
        setError("You are poor !");
        return false;
    }
    setError("");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
        setError("Votre email est invalide !");
        return false;
    }

    return true;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
        setDataList([...dataList, formData]);
        setFormData({
            name: "",
            email: "",
            age: "",
            money: "",
            message: ""
        });
        }
    };
    const handleDelete = (index) => {
        const newDataList = dataList.filter((_, i) => i !== index);
        setDataList(newDataList);
    };
    const handleEdit = (index) => {
        const entryToEdit = dataList[index];
        setFormData(entryToEdit);
        handleDelete(index);
    };
    
    return (
        <div className="App">
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3} >
                    <img src={contact} alt="" />
                </Grid>
                <Grid item xs={12} sm={9}   >
                    <h1>SEND US YOUR MESSAGE</h1>
                        <form id="form" onSubmit={handleSubmit}>
                            <div id="labels">
                                <label >What you name?</label>
                                <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Nom"
                                />
                            </div>
                            <div id="labels">
                                <label htmlFor="">Your email:</label>
                                <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                />
                            </div>
                            <div id="labels">
                                <label htmlFor="">How old are you?</label>
                                <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                placeholder="Âge"
                                />
                            </div>
                            <div id="labels">
                                <label htmlFor="">how much money do you have?</label>
                                <input
                                type="number"
                                name="money"
                                value={formData.money}
                                onChange={handleChange}
                                placeholder="Argent"
                                />
                            </div>
                            <div id="labels">
                                <label htmlFor="">send us your message:</label>
                                <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Welcome"
                                />
                            </div>
                            <button type="submit" className="btn btn-danger">SEND</button>
                        </form>
                        <h2  style={{ display: dataList.length === 0 ? "none" : "h2" }}>Données soumises</h2>
                        <table style={{ display: dataList.length === 0 ? "none" : "table" }} border={2}>
                            <tr>
                                <th>Nom</th>
                                <th>Email</th>
                                <th>Âge</th>
                                <th>Argent</th>
                                <th>Message</th>
                                <th>Actions</th>
                            </tr>
                            {dataList.map((data, index) => (
                                <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.age}</td>
                                <td>{data.money}</td>
                                <td>{data.message}</td>
                                <td>
                                    <button onClick={() => handleEdit(index)} className="btn btn-primary" >Modifier</button>
                                    <button onClick={() => handleDelete(index)} className="btn btn-primary" >Supprimer</button>
                                </td>
                                </tr>
                            ))}
                        </table>
                </Grid>
            </Grid>

        </div>
    );
}

export default App;








































// import { Container, Row, Col } from "react-grid-system";
