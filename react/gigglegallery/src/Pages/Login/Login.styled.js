
import styled from "styled-components";

export const LoginStyled = styled.div`

    .loginsection{
        background-color: #3d8bb6;
        width: 100%;
        display: none;
    }

    .loginsection.active{
        display: flex;
        justify-content: center;
    }

    .form-container{
        padding: 20px;
    }
    // Register 
    .name{
        padding: 0px 0px 10px 0px;
    }

    .surname{
        padding: 0px 0px 10px 0px;
    }

    .register{
        display: none;
    }

    .register.activereg{
        display: block; 
    }

    .secpassword{
        padding: 0px 0px 10px 0px;
    }

    // Login 
    .username{
        padding: 0px 0px 10px 0px;
    }
    
    .password{
        padding: 0px 0px 10px 0px;
    }

    p{
        color: #262234;
        font-family: 'Nanum Pen Script', cursive;
        font-size: 22px;
        padding: 0px 0px 2px 0px;
    }

    input{
        height: 22px;
        border: 2px solid #262234;
        border-radius: 5px;
        background-color: white;
    }

    textarea, input { 
        outline: none; 
    }

    .loginbtn{
        padding-top: 5px;
    }

    button{
        font-size: 22px;
        font-family: 'Nanum Pen Script', cursive;
        width: 70px;
        height: 30px;
        color: white;
        background-color: #262234;
        border: none;
        border-radius: 15px;
    }
// Create User 

    .createuser{
        padding-top: 10px;
    }

    .newuser{
        color: white;
        font-size: 25px;
        cursor: pointer;
    }

    .newuser:hover{
        text-decoration: underline;
        transition: .5s ease;
    }
`

