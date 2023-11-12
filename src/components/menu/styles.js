import styled from "styled-components";

export const MenuDiv = styled.div`
    width: 95%;
    max-width: 700px;
    min-height: 100px;
    background-color: #f8edf4;
    margin: 20px 0px 50px 0px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 40px 0;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const CartButton = styled.button`
    width: 150px;
    height: 50px;
    background-color: #803367;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.5s;
    margin-top: 10px;

    span {
        font-size: 15px;
        color:  #f0dbea;
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
    }

    :hover {
        background-color: #5b244a;
    }
`;

export const SectionTitle = styled.span`
    font-family: 'Nunito', sans-serif;
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    color: #4b1e3d;
    margin-bottom: 20px;
`;

export const FirstMessage = styled.span`
    width: 70%;
    margin-bottom: 20px;
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #b64994;
`;