import { CartDiv, CartIcon, HeaderDiv, LogoImg } from "./styles";
import LogoPic from "../../assets/logo.png"

function Header(props) {
    return (
        <HeaderDiv>
            <LogoImg src={LogoPic} onClick={props.onclick} />
            <CartDiv onClick={props.onclick}>
                <CartIcon src={props.icon} />
            </CartDiv>
        </HeaderDiv>
    );
};

export default Header;