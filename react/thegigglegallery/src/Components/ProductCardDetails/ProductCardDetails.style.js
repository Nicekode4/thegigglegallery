import styled from "styled-components";

export const ProductCardDetailsStyle = styled.article`
border-color: black;
border-width: 2px;
margin-left: 3vw;
margin-right: 3vw;
width: 100%;
.productImg{
    height: 30vh;
    width: 94%;
}
.title{
    font-size: 6vw;
    margin-bottom: 2vh;
}
.desc{
    font-size: 3vw;
    margin-top: 2vh;
    color: gray;
}
.price{
    font-size: 5vw;
    font-weight: bold;
}
.priceDiv{
    display: grid;
    grid-template-columns: 70% 30%;
    margin-top: 2vh;
    
    div{
        button{
            background-color: #A56661;
            padding-top: 1vh;
            padding-bottom: 1vh;
            padding-left: 2vw;
            padding-right: 2vw;
            color: white;
            border-radius: 3px;
            border-color: gray;
        }
        p{
            margin-top: 0.5vh;
            padding: 0.5vh;
            margin-bottom: 3vh;
            border-radius: 3px;
            background-color: #83B0B2;
            color: white;
            width: 20vw;
            font-size: 2vh;
            text-align: center;
        }
    }
}
.ratingDiv{
    display: flex;
    
    width: 100%;
    img{
        padding-right: 2vw;
    }
    h6{
        
        
    }
    span{
        padding-left: 1vw;
        font-size: 2vh;
        width: 2vw;
        font-weight: 100;
    }
}
.ratingDiv2{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    button{
        background-color: none;
        border: none;
        color: green;
    }
    h2{
        font-size: 3vh;
        font-weight: 100;
    }
}
`