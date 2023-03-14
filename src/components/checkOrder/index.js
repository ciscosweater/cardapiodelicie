import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";
import CartItem from "../cartItem";
import WhatsApp from "../../assets/whatsapp.png"
import { CartButton, ItemsMessage, MenuDiv, SumDiv, TotalSum, TotalTitle, WhatsAppButton, WhatsAppIcon, WhatsAppText } from "./styles";

function CheckOrder() {
    const { cartItems, wipeCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleQuit = () => {
        navigate('/')
        wipeCart()
    };

    const groupedItems = cartItems.reduce((acc, item) => {
        const { title } = item;
        if (!acc[title]) {
            acc[title] = { ...item, count: 1 };
        } else {
            acc[title].count++;
        }
        return acc;
    }, {});

    const itemsArray = Object.values(groupedItems);

    const totalSum = itemsArray.reduce((acc, item) => {
        return acc + item.price * item.count;
    }, 0);

    const sendMessage = `
    Bom dia!

Escolhi meu pedido pelo cardápio online, ele foi o seguinte:

${itemsArray.map((item) => (
        `${item.count}x unidades do ${item.title}\n`
    ))}

O total do pedido foi de R$${totalSum.toFixed(2)}
    `

    const encodedMessage = encodeURI(sendMessage)


    return (
        <MenuDiv>
            {itemsArray.length === 0 ?
                <ItemsMessage>Não há items em seu carrinho.</ItemsMessage>
                :
                <>
                    {itemsArray.map((item) => (
                        <CartItem
                            key={item.key}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            count={item.count}
                        />
                    ))}
                    <SumDiv>
                        <TotalTitle>Total</TotalTitle>
                        <TotalSum>R$ {totalSum.toFixed(2)}</TotalSum>
                    </SumDiv>
                    <a href={`https://wa.me/5577999676988?text=${encodedMessage}`} target="blank">
                        <WhatsAppButton>
                            <WhatsAppIcon src={WhatsApp} />
                            <WhatsAppText>Enviar o pedido</WhatsAppText>
                        </WhatsAppButton>
                    </a>
                </>
            }
            <CartButton onClick={handleQuit}>
                <span>Voltar para o cardápio</span>
            </CartButton>
        </MenuDiv>
    );
};

export default CheckOrder;