import { StyledLogin, Button, ButtonWrapper, Column, Form, Input, Label, Title, Img, Textright, TextCenter, Container, ErrorMessage } from './style/Login.Styled'
import bgImage from '../../assets/images/posting_photo.svg'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import UseAuth from '../protectedRoutes/UseAuth'

const LOGIN_URL = '/login'
export const Login = () => {
  const { setAuth } = UseAuth()
  const userRef = useRef();
  const errorRef = useRef();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage('')

  }, [user, password])


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const response = await axios.post(LOGIN_URL,
      JSON.stringify({ userName: user, password }),
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      },
    )
      const accessToken = response?.data?.login;
      setAuth({ user, password, accessToken });
      setUser('');
      setPassword('');
      navigate(from, { replace: true });
  }
    catch(err) {
        if (err?.response) {
          setErrorMessage('No Server Response');
        } else if (err.response?.status === 400) {
          setErrorMessage('Missing Username or Password');
        } else if (err.response?.status === 401) {
          setErrorMessage('Unauthorized');
        } else {
          setErrorMessage('Login Failed');
        }
        errorRef.current.focus();
      }

  }



  return (
    <Container>
      <StyledLogin>
        <Column backgound>
          <Title>Sign In</Title>
          <Img src={`${bgImage}`} />
        </Column>
        <Column>
          <ErrorMessage ref={errorRef} aria-live="assertive">{errorMessage}</ErrorMessage>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor='userName'>UserName:</Label>
            <Input type="text" placeholder='Username' id="userName" name="userName"
              ref={userRef} autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <Label htmlFor='password'>Password:</Label>
            <Input type="password" placeholder='Password' id="password" name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              autoComplete='off' />
            <Textright><NavLink to="/" >Forgot Password?</NavLink></Textright>
            <ButtonWrapper><Button type="submit">Sign In</Button></ButtonWrapper>
          </Form>
          <TextCenter>Need an account? <NavLink to="/register">Sign Up</NavLink></TextCenter>
        </Column>
      </StyledLogin>
    </Container>
  )
}
