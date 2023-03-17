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

export const DetailsTitle = styled.span`
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    color: #6e2b55;
    text-align: center;
`;

export const PaymentSelect = styled.select`
    width: 250px;
    height: 40px;
    border: none;
    outline: none;
    border-bottom: 2px solid #6e2b55;
    background-color: #f8edf4;
    margin-bottom: 10px;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    color: #37152b;

    option {
        font-family: 'Raleway', sans-serif;
        color: #37152b;
    }
`;

export const StreetInput = styled.input`
    width: 245px;
    height: 40px;
    border: none;
    outline: none;
    border-bottom: 2px solid #6e2b55;
    background-color: #f8edf4;
    margin-bottom: 10px;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    color: #37152b;
    display: ${props => props.disabled ? 'none' : ''};
`;

export const NeighbourhoodInput = styled.input`
    width: 245px;
    height: 40px;
    border: none;
    outline: none;
    border-bottom: 2px solid #6e2b55;
    background-color: #f8edf4;
    margin-bottom: 15px;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    color: #37152b;
    display: ${props => props.disabled ? 'none' : ''};
`;

export const ReferenceInput = styled.input`
    width: 245px;
    height: 40px;
    border: none;
    outline: none;
    border-bottom: 2px solid #6e2b55;
    background-color: #f8edf4;
    margin-bottom: 15px;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    color: #37152b;
    display: ${props => props.disabled ? 'none' : ''};
`;

export const CheckboxContainer = styled.div`
    width: 200px;
    height: 40px;
    padding-left: 0px;
    border-radius: 20px;
    cursor: pointer;
    background-color: ${props => props.checked ? '#dba3c7' : '#f1dae8'};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    margin: 5px 0px 10px 0px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    overflow: hidden;
    white-space: nowrap;width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    cursor: pointer;
`;

export const CheckboxText = styled.label`
    color: ${props => props.checked ? '#5c2447' : '#491d39'};
    font-family: 'Raleway', sans-serif;
    transition: 0.5s;
    cursor: pointer;
`;

export const StyledCheckbox = styled.label`
    width: 23px;
    height: 23px;
    margin-right: 6px;
    border-radius: 50%;
    background: #F6F6F6;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
        display: ${props => props.checked ? 'flex' : 'none'};
    }
`;

export const CartTitle = styled.span`
    font-family: 'Nunito', sans-serif;
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    color: #4b1e3d;
    margin-bottom: 20px;
    margin-top: -10px;
`;