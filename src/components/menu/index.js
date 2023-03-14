import { useNavigate } from "react-router-dom";
import MenuItem from "../menu-item";
import { CartButton, MenuDiv } from "./styles";
import ChocolateComMorango from "../../assets/fotos-ovos/chocolate-com-morango.png"
import NinhoComNutella from "../../assets/fotos-ovos/ninho-com-nutella.png"
import OreoComNutella from "../../assets/fotos-ovos/oreo-com-nutella.png"

function Menu() {
    const navigate = useNavigate();

    const MenuItems = [
        {
            key: 0,
            title: "Chocolate com Morango",
            description: "Ovo de Colher Gourmet, recheado com brigadeiros de chocolate e morango, casca de chocolate preto.",
            image: ChocolateComMorango,
            price: 60.00,
            count: 1
        },
        {
            key: 1,
            title: "Ninho com Nutella",
            description: "Ovo de Colher Gourmet, recheado com brigadeiros de ninho e muita Nutella, casca de chocolate preto.",
            image: NinhoComNutella,
            price: 60.00,
            count: 1
        },
        {
            key: 2,
            title: "Oreo com Nutella",
            description: "Ovo de Colher Gourmet, recheado com brigadeiros de Oreo e muita Nutella, casca de chocolate branco.",
            image: OreoComNutella,
            price: 60.00,
            count: 1
        }
    ]

    return (
        <MenuDiv>
            {MenuItems.map((item) => (
                <MenuItem
                    key={item.key}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                />
            ))}
            <CartButton onClick={() => navigate('/cart')}>
                <span>Ir para o carrinho</span>
            </CartButton>
        </MenuDiv>
    );
};

export default Menu;