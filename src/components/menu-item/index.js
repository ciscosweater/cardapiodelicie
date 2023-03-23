import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cartContext";
import { AddDiv, AddIcon, ItemContainer, ItemDescription, ItemDetails, ItemPicture, ItemTitle, MenuDivider, PriceTag, ShoppingDiv } from "./styles";

function MenuItem(props) {
    const { addToCart, removeFromCart } = useContext(CartContext);
    const [count, setCount] = useState(0);

    const handleAdding = () => {
        setCount(count + 1)
        addToCart({
            key: props.key,
            title: props.title,
            description: props.description,
            image: props.image,
            price: props.price,
            prefix: props.prefix
        })
    };

    const handleSubtracting = () => {
        setCount(0)
        removeFromCart({
            key: props.key,
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
                    <AddIcon onClick={handleSubtracting}>-</AddIcon>
                    <p>{count}</p>
                    <AddIcon onClick={handleAdding}>+</AddIcon>
                </AddDiv>
            </ShoppingDiv>
            <MenuDivider />
        </ItemContainer>
    );
};

export default MenuItem;