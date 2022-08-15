import styled from "styled-components";

export const tableHead = [
    {
        name: 'Username', field: 'username'
    },
    {
        name: 'Email', field: 'email'
    },
    {
        name: 'Phone', field: 'phone'
    },
    {
        name: 'Address', field: 'address'
    },
    {
        name: 'Country', field: 'country'
    },
    {
        name: 'Action', field: 'action'
    }
];

export const Wrappper = styled.div`
padding: 30px;
background:#f6f9f6b0;
`
export const Table = styled.table`
width:100%;
border-spacing:0;
`
export const Th = styled.th`
padding-bottom: 15px;
border-bottom:2px solid #eee;
text-align:left;
text-transform: capitalize;
`
export const Tr = styled.tr`
border-bottom:1px solid #eee;
`
export const Td = styled.td`
padding:20px 10px;
border-bottom:1px solid #f1ecec;

&.align{
    display:flex;
}

`
export const Input = styled.input`
font-size: 16px;
margin: 0 20px;
height:36px;
padding:10px;
border:1px solid #eee;
box-sizing: border-box;
`
export const SearchFilter = styled.div`
display:flex;
justify-content:end;
margin-bottom:30px;
font-weight:500;
`

export const Button = styled.div`
color: ${props => props.secondary ? "green" : "red"};
margin-left: ${props => props.secondary ? "0" : "15px"};
`
export const ButtonWrapper = styled.div`
    text-align:center;
    `
export const Label = styled.label`
    font-size: 18px;
    display:block;
    margin-bottom:10px;
    `;
export const Form = styled.form`
    max-width:500px;
    margin: 40px auto;
    padding: 40px;
    box-shadow: 0 0 15px rgba(0,0,0,.2);
    `;
export const Title = styled.h1`
    text-align: center;
    font-size:36px;
    margin: 0 auto 25px;
    `