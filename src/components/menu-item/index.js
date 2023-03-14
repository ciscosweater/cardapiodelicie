import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cartContext";
import { AddDiv, AddIcon, ItemContainer, ItemDescription, ItemDetails, ItemPicture, ItemTitle, MenuDivider, PriceTag, ShoppingDiv } from "./styles";

function MenuItem(props) {
    const { addToCart } = useContext(CartContext);
    const [count, setCount] = useState(0);

    const handleAdding = () => {
        setCount(count + 1)
        addToCart({
            key: props.key,
            title: props.title,
            description: props.description,
            image: props.image,
            price: props.price
        })
    };

    return (
        <ItemContainer>
            <ItemPicture src={props.image} />
            <ItemDetails>
                <ItemTitle>{props.title}</ItemTitle>
                <ItemDescription>{props.description}</ItemDescription>
            </ItemDetails>
            <ShoppingDiv>
                <PriceTag>{`R$ ${props.price}.00`}</PriceTag>
                <AddDiv>
                    <AddIcon>-</AddIcon>
                    <p>{count}</p>
                    <AddIcon onClick={handleAdding}>+</AddIcon>
                </AddDiv>
            </ShoppingDiv>
            <MenuDivider />
        </ItemContainer>
    );
};

export default MenuItem;