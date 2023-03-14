import styled from "styled-components";

export const HeaderDiv = styled.div`
    width: 100%;
    position: sticky;
    height: 70px;
    background-color: #4b1e3d;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #37162c;
`;

export const LogoImg = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 10px;
    cursor: pointer;
`;

export const CartDiv = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.5s;

    :hover {
        background-color: #37162c;
    }
`;

export const CartIcon = styled.img`
    width: 25px;
    height: 25px;
`;