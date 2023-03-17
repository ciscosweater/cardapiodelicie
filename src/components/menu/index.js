import { useNavigate } from "react-router-dom";
import MenuItem from "../menu-item";
import { CartButton, MenuDiv, SectionTitle } from "./styles";
import ChocolateComMorango from "../../assets/fotos-ovos/chocolate-com-morango.png"
import NinhoComNutella from "../../assets/fotos-ovos/ninho-com-nutella.png"
import OreoComNutella from "../../assets/fotos-ovos/oreo-com-nutella.png"
import Churros from "../../assets/fotos-ovos/churros.png"
import Brigadeiro from "../../assets/fotos-ovos/brigadeiro.png"
import FerreroRocher from "../../assets/fotos-ovos/ferrerorocher.png"
import Tradicional from "../../assets/fotos-ovos/tradicional.png"
import Guloseimas from "../../assets/fotos-ovos/guloseimas.png"
import MM from "../../assets/fotos-ovos/mm.png"

function Menu() {
    const navigate = useNavigate();

    const Colher350G = [
        {
            key: 0,
            title: "Chocolate com Morango (350g)",
            description: "Ovo de Colher Gourmet, recheado com brigadeiros de chocolate e morango, casca de chocolate ao leite.",
            image: ChocolateComMorango,
            price: 60.00,
            count: 1
        },
        {
            key: 1,
            title: "Ninho com Nutella (350g)",
            description: "Ovo de Colher Gourmet, recheado com brigadeiros de ninho e muita Nutella, casca de chocolate ao leite.",
            image: NinhoComNutella,
            price: 60.00,
            count: 1
        },
        {
            key: 2,
            title: "Oreo com Nutella (350g)",
            description: "Ovo de Colher Gourmet, recheado com brigadeiros de Oreo e muita Nutella, casca de chocolate branco.",
            image: OreoComNutella,
            price: 60.00,
            count: 1
        },
        {
            key: 3,
            title: "Churros (350g)",
            description: "Ovo de Colher Gourmet, recheado com brigadeiros de churros e muito doce de leite, casca de chocolate ao leite.",
            image: Churros,
            price: 60.00,
            count: 1
        },
        {
            key: 4,
            title: "Brigadeiro (350g)",
            description: "Ovo de Colher Gourmet, recheado com brigadeiros de chocolate, casca de chocolate ao leite.",
            image: Brigadeiro,
            price: 60.00,
            count: 1
        },
        {
            key: 5,
            title: "Ferrero Rocher (350g)",
            description: "Ovo de Colher Gourmet, recheado com brigadeiros de Ferrero Rocher e muita Nutella, casca de chocolate ao leite.",
            image: FerreroRocher,
            price: 60.00,
            count: 1
        }
    ];

    const Colher550G = [
        {
            key: 0,
            title: "Chocolate com Morango (550g)",
            description: "Ovo de Colher Gourmet, recheado com brigadeiros de chocolate e morango, casca de chocolate ao leite.",
            image: ChocolateComMorango,
            price: 75.00,
            count: 1
        },
        {
            key: 1,
            title: "Ninho com Nutella (550g)",
            description: "Ovo de Colher Gourmet, recheado com brigadeiros de ninho e muita Nutella, casca de chocolate ao leite.",
            image: NinhoComNutella,
            price: 75.00,
            count: 1
        },
        {
            key: 2,
            title: "Oreo com Nutella (550g)",
            description: "Ovo de Colher Gourmet, recheado com brigadeiros de Oreo e muita Nutella, casca de chocolate branco.",
            image: OreoComNutella,
            price: 75.00,
            count: 1
        },
        {
            key: 3,
            title: "Churros (550g)",
            description: "Ovo de Colher Gourmet, recheado com brigadeiros de churros e muito doce de leite, casca de chocolate ao leite.",
            image: Churros,
            price: 75.00,
            count: 1
        },
        {
            key: 4,
            title: "Brigadeiro (550g)",
            description: "Ovo de Colher Gourmet, recheado com brigadeiros de chocolate, casca de chocolate ao leite.",
            image: Brigadeiro,
            price: 75.00,
            count: 1
        },
        {
            key: 5,
            title: "Ferrero Rocher (550g)",
            description: "Ovo de Colher Gourmet, recheado com brigadeiros de Ferrero Rocher e muita Nutella, casca de chocolate ao leite.",
            image: FerreroRocher,
            price: 75.00,
            count: 1
        }
    ];

    const ColherKids = [
        {
            key: 0,
            title: "M&M (320g)",
            description: "Ovo de Colher para crianças, recheado com brigadeiro de chocolate e M&Ms, casca de chocolate ao leite.",
            image: MM,
            price: 40.00,
            count: 1
        },
        {
            key: 1,
            title: "Guloseimas (320g)",
            description: "Ovo de Colher para crianças, recheado com brigadeiro e diversas guloseimas! Casca de chocolate ao leite.",
            image: Guloseimas,
            price: 40.00,
            count: 1
        }
    ];

    const Tradicionais = [
        {
            key: 0,
            title: "Pequeno (100g)",
            description: "Ovo de Páscoa ao leite recheados com Bombons de Chocolate.",
            image: Tradicional,
            price: 10.00,
            count: 1
        },
        {
            key: 1,
            title: "Médio (250g)",
            description: "Ovo de Páscoa ao leite recheados com Bombons de Chocolate.",
            image: Tradicional,
            price: 25.00,
            count: 1
        },
        {
            key: 2,
            title: "Grande (500g)",
            description: "Ovo de Páscoa ao leite recheados com Bombons de Chocolate.",
            image: Tradicional,
            price: 40.00,
            count: 1
        }
    ];

    return (
        <MenuDiv>
            <SectionTitle>Ovos Gourmet - 350g</SectionTitle>
            {Colher350G.map((item) => (
                <MenuItem
                    key={item.key}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                />
            ))}
            <SectionTitle>Ovos Gourmet - 550g</SectionTitle>
            {Colher550G.map((item) => (
                <MenuItem
                    key={item.key}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                />
            ))}
            <SectionTitle>Ovos Kids</SectionTitle>
            {ColherKids.map((item) => (
                <MenuItem
                    key={item.key}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                />
            ))}
            <SectionTitle>Ovos Tradicionais</SectionTitle>
            {Tradicionais.map((item) => (
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