import styled from "styled-components";

const Ul = styled.ul`
list-style:none;
display:flex;
margin:25px 0 auto;
padding:0;
justify-content: end;
`

const Li = styled.li`
border:1px solid #f1ecec;

`
const Button = styled.button`
background:none;
border:none;
padding: 15px 20px;
cursor:pointer;
&.active{
    background:blue;
    color:#fff;
}
`

const Pagination = ({ postsPerPage, totalPosts, paginate,currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <Ul>
        {pageNumbers.map(number => (
          <Li key={number}>
            <Button onClick={() => paginate(number)} className={`${currentPage === number ? "active" : ""}`}>
              {number}
            </Button>
          </Li>
        ))}
      </Ul>
  );
};

export default Pagination;