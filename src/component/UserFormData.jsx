import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components"
import Select from "react-select";
import countryList from "react-select-country-list";
import { useNavigate } from "react-router";
import axios from "axios";
import {ButtonWrapper, Label, Form, Title} from './settings'

const Input = styled.input`
    display:block;
    height:50px;
    font-size:16px;
    width:100%;
    padding:10px;
    border:1px solid #eee;
    box-sizing: border-box;
    margin-bottom: 20px;
    `;
const Button = styled.button`
    padding: 10px 40px;
    margin: 20px auto 0;
    background: #5b5bbd;
    color:#fff;
    border:none;
    font-size:18px;
    cursor: pointer;
    `


export const UserData = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState('');
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    phoneNumber: '',
    addressLine1: '',
    city: ''
  });
  const options = useMemo(() => countryList().getData(), []);

  const fetchData = async (users) => {
    await axios
      .post('/addProfileData', {
        userName: '',
        email: '',
        phoneNumber: '',
        addressLine1: '',
        city: '',
      })
      .then((res) => setUsers(res.data))
    };
  useEffect(() => {
    fetchData();
  }, [users]);

  const CityRef = useRef();
  
  const handleChange = (e) => {
    // const City = inputRef.current['city'].state.selectValue[0].label
    setUsers({...users, [e.target.name]: e.target.value.trim()}, CityRef)
  }
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(users)
  }

  return (
    <>
      <Form onSubmit={formSubmit} >
        <Title>Add User</Title>
        <Label htmlFor="userName">userName:</Label>
        <Input type="text" placeholder="userName" id="userName" name="username" onChange={handleChange}/>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" placeholder="Email" id="email" name="email" onChange={handleChange}/>
        <Label htmlFor="phoneNumber">phoneNumber:</Label>
        <Input type="tel" placeholder="Contact Number" id="phoneNumber" name="phoneNumber"  onChange={handleChange}/>
        <Label htmlFor="addressLine1">addressLine1:</Label>
        <Input type="text" placeholder="Address" id="addressLine1" name="addressLine1" onChange={handleChange}/>
        <Label htmlFor="city">city:</Label>
        <Select className="selectcity" options={options} id="city"  />
        <ButtonWrapper><Button type="submit">Submit</Button></ButtonWrapper>
      </Form>
    </>
  )
}
