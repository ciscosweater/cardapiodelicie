import { ItemContainer, ItemDescription, ItemDetails, ItemPicture, ItemTitle, MenuDivider, PriceTag, ShoppingDiv, UnitTag } from "./styles";

function CartItem(props) {
    return (
        <ItemContainer>
            <ItemPicture src={props.image} />
            <ItemDetails>
                <ItemTitle>{props.title}</ItemTitle>
                <ItemDescription>{props.description}</ItemDescription>
            </ItemDetails>
            <ShoppingDiv>
                <PriceTag>{`R$ ${props.price}.00`}</PriceTag>
                <UnitTag>{props.count > 1 ? `${props.count} unidades` : `${props.count} unidade`}</UnitTag>
            </ShoppingDiv>
            <MenuDivider />
        </ItemContainer>
    );
};

export default CartItem;