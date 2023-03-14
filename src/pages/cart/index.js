import CheckOrder from "../../components/checkOrder";
import Header from "../../components/header";
import { CartContainer, PageTitle } from "./styles";

function CartPage() {

    return (
        <CartContainer>
            <Header />
            <PageTitle>Verifique seu pedido</PageTitle>
            <CheckOrder />
        </CartContainer>
    );
};

export default CartPage;