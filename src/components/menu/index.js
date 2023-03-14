import { useNavigate } from "react-router-dom";
import MenuItem from "../menu-item";
import { CartButton, MenuDiv } from "./styles";

function Menu() {
    const navigate = useNavigate();

    const MenuItems = [
        {
            key: 0,
            title: "Ovo Teste 1",
            description: "Descrição Ovo Teste 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: {},
            price: 10.00,
            count: 1
        },
        {
            key: 1,
            title: "Ovo Teste 2",
            description: "Descrição Ovo Teste 2, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: {},
            price: 15.00,
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