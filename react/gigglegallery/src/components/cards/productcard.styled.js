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
    height: 100px;
}
.title{
    font-size: 45px;
}
.desc{
    font-size: 20px;
}
.price{
    font-size: 30px;
    font-weight: bold;
}
`
