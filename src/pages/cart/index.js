import { useContext } from "react";
import CheckOrder from "../../components/checkOrder";
import Header from "../../components/header";
import { CartContext } from "../../contexts/cartContext";
import { CartContainer, PageTitle } from "./styles";

function CartPage() {
    const { wipeCart } = useContext(CartContext);

    return (
        <CartContainer>
            <Header />
            <PageTitle onClick={() => wipeCart()}>Verifique seu pedido</PageTitle>
            <CheckOrder />
        </CartContainer>
    );
};

export default CartPage;