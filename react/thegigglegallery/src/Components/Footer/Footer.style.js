import styled from "styled-components";

export const FooterStyle = styled.footer`
    div {
        background-color: #262234;
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 100%;
    }

    .fIcons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    }

    .pIcons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    }

    img {
    padding: 7px 10px 0px 10px;
    cursor: pointer;
    }

    p{
        color: white;
        padding: 2px;
        font-size: 18px;
        font-family: 'PT Sans', sans-serif;
    }

    .toptxt{
        font-size: 20px;
        padding-top: 25px;
        padding-bottom: 15px;
    }

    .adress{
        padding: 0;
        font-size: 17px;
    }

    .tlfn{
        padding-top: 20px;
        padding-bottom: 0;
        font-size: 18px;
    }

    .email{
        padding: 0;
    }

    .findos{
        padding-top: 20px;
        font-size: 22px;
    }

    .payment{
        padding-top: 20px;
        font-size: 22px;
    }

    .all{
        padding-top: 10px;
        padding-bottom: 20px;
    }

    .bottomtxt{
        padding-bottom: 25px;
    }
`