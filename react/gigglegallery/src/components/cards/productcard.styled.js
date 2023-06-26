import styled from "styled-components";

export const ProductCardStyle = styled.article`

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
    height: 10vh;
}
.title{
    font-size: 5vw;
}
.desc{
    font-size: 2vw;
}
.price{
    font-size: 3vw;
    font-weight: bold;
}
`
