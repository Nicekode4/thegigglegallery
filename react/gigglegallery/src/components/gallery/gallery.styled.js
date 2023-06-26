import styled from "styled-components";

export const GalleryStyle = styled.article`
.gallery {
    display: flex;
    justify-content: center;
}

.border {
    display: flex;
    padding: 20px;
    border: 3px solid #262234;
    border-radius: 5px;
    background-color: white;
    filter: drop-shadow(5px 5px 5px gray);
}

.arrow {
    border: none;
    font-size: 50px;
    background-color: white;
    color: #c69a6b;
}

.image{
    height: 30vh;
}
`