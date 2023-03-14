import styled from "styled-components";

export const MenuDiv = styled.div`
    width: 95%;
    max-width: 450px;
    min-height: 100px;
    background-color: #f8edf4;
    margin: 10px 0px;
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
        background-color: #d392bf;
    }
`;