import styled from "styled-components";

export const MenuDiv = styled.div`
    width: 95%;
    max-width: 450px;
    min-height: 100px;
    background-color: #f8edf4;
    margin: 20px 0px 100px 0px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 40px 0;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const ItemsMessage = styled.span`
    font-size: 20px;
    color:  #491d3b;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
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

export const SumDiv = styled.div`
    margin-bottom: 10px;
    display: flex;
    width: 100%;
    height: 30px;
    align-items: center;
    justify-content: space-around;
`;

export const TotalTitle = styled.span`
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    color: #37162c;
`;

export const TotalSum = styled.span`
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #37162c;
`;

export const WhatsAppButton = styled.div`
    width: 250px;
    height: 60px;
    margin: 5px 0px 10px 0px;
    border-radius: 15px;
    background-color: #075E54;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    transition: 0.5s;
    cursor: pointer;

    :hover {
        background-color: #05473f;
    }
`;

export const WhatsAppIcon = styled.img`
    width: 35px;
    height: 35px;
`;

export const WhatsAppText = styled.span`
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    color: #fff;
`;