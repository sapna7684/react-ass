import styled from "styled-components";

export const StyledProfile = styled.div`
padding: 30px;
background:#f6f9f6b0;
height: 100vh;
`

export const UserContentWrapper = styled.div`
padding: 30px;
box-shadow: 0 0 15px rgba(0,0,0,.2);
display: grid;
background:#fff;
grid-template-columns: 25% 75%;
`

export const Column = styled.div`
margin: ${props => props.width_25 ? '0 auto' : null};
text-align: ${props => props.width_25 ? 'center' : null};
border-left: ${props => props.width_25 ? 'null' : '1px solid rgba(0,0,0,.15)'};
padding-left: ${props => props.width_25 ? 'null' : '40px'};
`
export const UserImage = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
overflow: hidden;
object-fit:cover;
`
export const Img = styled.img`
width:100%;
height:auto;
max-width:100%;
object-fit:cover;
border-radius: 100%;
`
export const UserName = styled.p`
font-size: 20px;
color:#000;
font-weight:600;
`

export const Title = styled.h4`
font-size:36px;
color:#000;
font-weight:600;
margin: 30px 0;
border-bottom:2px solid rgba(0,0,0,.15);
`
export const SubTitle = styled.div`
font-size:26px;
color:#787575;
margin-bottom:20px;
`
export const List = styled.ul`
display:grid;
align-item:center;
grid-template-columns:1fr 1fr 1fr;
list-style:none;
padding:0 0 20px;
margin:0 0 10px;
border-bottom:1px solid rgba(0,0,0,.15);

`
export const ListItems = styled.li`
padding-bottom:15px;
span{
    color:#00050c;
    font-weight:600;
    padding-right:20px;
}
`