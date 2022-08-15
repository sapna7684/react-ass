import styled from 'styled-components';


export const StyledLogin = styled.div`
    max-width:1000px;
    margin: 40px auto;
    padding: 40px;
    box-shadow: 0 0 15px rgba(0,0,0,.2);
    display:grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
`
export const Label = styled.label`
    font-size: 18px;
    display:block;
    margin-bottom:10px;
`

export const Title = styled.h1`
    text-align: center;
    font-size:36px;
    margin: 0 auto;
    padding-bottom: 50px;
    `
export const Input = styled.input`
    display:block;
    height:50px;
    font-size:16px;
    width:100%;
    padding:10px;
    border:1px solid #eee;
    box-sizing: border-box;
    margin-bottom: 20px;
    `;
export const Button = styled.button`
    padding: 10px 40px;
    margin: 20px auto 0;
    background: #5b5bbd;
    color:#fff;
    border:none;
    font-size:18px;
    cursor: pointer;
    `
export const ButtonWrapper = styled.div`
    text-align:center;
    `
export const Column = styled.div`
text-align: ${props => props.backgound ? 'center' : 'left'};
border-right: ${props => props.backgound ? '1px solid rgba(0,0,0,.15)' : null};
margin-right: ${props => props.backgound ? '20px' : null};
margin-left: ${props => props.backgound ? 'null' : '20px'};
`
export const Img = styled.img`
max-width:90%;
margin: 0 auto 50px;
`
export const Form = styled.form`
`
export const TextCenter = styled.div`
text-align:center;
margin:50px auto 0;
`

export const Textright = styled.div`
text-align:right;
`
export const Container = styled.div`
display:flex;
align-items:center;
height:100vh;
`
export const ErrorMessage = styled.p`
color:red;
`