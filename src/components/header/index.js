import { useNavigate } from "react-router-dom";
import { CartDiv, CartIcon, HeaderDiv, LogoImg } from "./styles";
import LogoPic from "../../assets/logo.png"
import BagPic from "../../assets/bag.png"

function Header() {
    const navigate = useNavigate();

    return (
        <HeaderDiv>
            <LogoImg src={LogoPic} onClick={() => navigate('/')} />
            <CartDiv onClick={() => navigate('/cart')}>
                <CartIcon src={BagPic} />
            </CartDiv>
        </HeaderDiv>
    );
};

export default Header;