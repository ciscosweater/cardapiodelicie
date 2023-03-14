import { useNavigate } from "react-router-dom";
import { CartDiv, CartIcon, HeaderDiv, LogoImg } from "./styles";
import LogoPic from "../../assets/logo.png"
import BagPic from "../../assets/bag.png"
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

function Header() {
    const { wipeCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleQuit = () => {
        navigate('/')
        wipeCart()
    };

    return (
        <HeaderDiv>
            <LogoImg src={LogoPic} onClick={handleQuit} />
            <CartDiv onClick={() => navigate('/cart')}>
                <CartIcon src={BagPic} />
            </CartDiv>
        </HeaderDiv>
    );
};

export default Header;