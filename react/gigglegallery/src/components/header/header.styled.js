import styled from "styled-components";

export const HeaderStyled = styled.header`
    .top {
        background-color: #262234;
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .s1{
        color: #3d8bb6;
    }

    .s2{
        color: #e94a21;
    }

    .s3{
        color: #bb1111;
    }
    h1{
        color: white;
        font-size: 50px;
        padding: 10px;
        letter-spacing: 5px;
        font-family: 'Nanum Pen Script', cursive;
    }

    .logimg{
        display: flex;
        justify-content: flex-end;
        padding-top: 25px;
        padding-left: 20px;
        height: 100%;
    }

    img{
        width: 35px;
        height: 35px;
        cursor: pointer;
    }
`