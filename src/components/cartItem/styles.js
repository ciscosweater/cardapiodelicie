import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 90%;
    min-height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 15px;
    flex-wrap: wrap;
`;

export const ItemPicture = styled.img`
    width: 30%;
    aspect-ratio: 1/1;
    background-color: black;
    border-radius: 20px;
    align-self: flex-start;
`;

export const ItemDetails = styled.div`
    width: 60%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
`;

export const ItemTitle = styled.span`
    font-family: 'Nunito', sans-serif;
    font-size: 22px;
    color: #37162c;
`;

export const ItemDescription = styled.span`
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    color: #6d2c59;
`;

export const ShoppingDiv = styled.div`
    margin-top: 10px;
    display: flex;
    width: 100%;
    height: 30px;
    align-items: center;
    justify-content: space-around;
`;

export const PriceTag = styled.span`
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #37162c;
`;

export const UnitTag = styled.span`
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    color: #37162c;
`;

export const MenuDivider = styled.div`
    width: 65%;
    border: 1px solid #f0dbea;
    margin: 20px 0px 10px 0px;
`;