import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CheckOrder from "../../components/checkOrder";
import Header from "../../components/header";
import ArrowPic from "../../assets/arrow.png";
import { CartContext } from "../../contexts/cartContext";
import { CartContainer } from "./styles";

function CartPage() {
    const { wipeCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleQuit = () => {
        navigate('/')
        wipeCart()
    };

    return (
        <CartContainer>
            <Header onclick={handleQuit} icon={ArrowPic} />
            <CheckOrder />
        </CartContainer>
    );
};

export default CartPage;