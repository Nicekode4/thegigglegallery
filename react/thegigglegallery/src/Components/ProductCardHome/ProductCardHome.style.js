import styled from "styled-components";

export const ProductCardHomeStyle = styled.article`

.section{
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
}
.card{
    border: 3px solid #262234;
    padding: 10px;
    background-color: white;
    filter: drop-shadow(5px 5px 5px gray);
}

.productImg{
    height: 40vh;
    margin-left: 15vw;
}
.title{
    font-size: 45px;
    font-family: 'PT Sans', sans-serif;
}
.desc{
    font-size: 20px;
    font-family: 'PT Sans', sans-serif;
}
.price{
    font-size: 30px;
    font-family: 'PT Sans', sans-serif;
    font-weight: bold;
}
`
