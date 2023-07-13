import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";
import CartItem from "../cartItem";
import WhatsApp from "../../assets/whatsapp.png";
import CheckIcon from "../../assets/check.png";
import { CartButton, CartSubtitle, CartTitle, CheckboxContainer, CheckboxText, HiddenCheckbox, ItemsMessage, MenuDiv, NeighbourhoodInput, PaymentSelect, ReferenceInput, StreetInput, StyledCheckbox, SumDiv, TotalSum, TotalTitle, WhatsAppButton, WhatsAppIcon, WhatsAppText } from "./styles";

function CheckOrder() {
    const [checked, setChecked] = useState(false);
    const [field1, setField1] = useState('')
    const [field2, setField2] = useState('')
    const [field3, setField3] = useState('')
    const [payment, setPayment] = useState(null);
    const { cartItems, wipeCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCheckChange = () => {
        setChecked(!checked)
    };

    const handleQuit = () => {
        navigate('/')
        wipeCart()
    };

    const handleChange1 = (event) => {
        setField1(event.target.value);
    };

    const handleChange2 = (event) => {
        setField2(event.target.value);
    };

    const handleChange3 = (event) => {
        setField3(event.target.value);
    };

    function changePayment(e) {
        setPayment(e.target.value);
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

O pedido foi escolhido pelo cardápio online, segue os itens selecionados:
${itemsArray.map((item) => (
        `\n*${item.count}x* ${item.count > 1 ? "unidades" : "unidade"} de *${item.prefix}* - *${item.title}*`
    ))}

A forma de pagamento escolhida foi: *${payment}*

${checked ?
            `O pedido deverá ser retirado no endereço: Rua Uirapuru, 128, Bairro Recanto dos Pássaros - Próximo a COOPEB.`
            :
            `O endereço para entrega é: *${field1.trim()}, ${field2.trim()}*.\nO ponto de referência é: *${field3.trim()}*.`
        }

O valor a ser pago pelo pedido é de *R$${totalSum.toFixed(2)}*${checked ? '' : ', mais o valor da taxa de entrega que será informado logo em seguida.'}
`

    const encodedMessage = encodeURI(sendMessage)


    return (
        <MenuDiv>
            <CartTitle>Carrinho</CartTitle>
            {itemsArray.length === 0 ?
                <ItemsMessage>Não há itens em seu carrinho.</ItemsMessage>
                :
                <>
                    <CartSubtitle>Verifique seu pedido antes de finalizar.</CartSubtitle>
                    {itemsArray.map((item) => (
                        <CartItem
                            key={item.key}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            price={item.price * item.count}
                            count={item.count}
                        />
                    ))}
                    <SumDiv>
                        <TotalTitle>Total</TotalTitle>
                        <TotalSum>R$ {totalSum.toFixed(2)}</TotalSum>
                    </SumDiv>
                    <PaymentSelect value={payment} onChange={changePayment}>
                        <option value="Não selecionado">Forma de pagamento...</option>
                        <option value="Pix">Pix</option>
                        <option value="Cartão de crédito">Cartão de crédito</option>
                        <option value="Cartão de débito">Cartão de débito</option>
                        <option value="Dinheiro">Dinheiro</option>
                    </PaymentSelect>
                    <CheckboxContainer
                        checked={checked}
                        onClick={handleCheckChange}
                    >
                        <HiddenCheckbox
                            onChange={handleCheckChange}
                            checked={checked}
                        />
                        <StyledCheckbox checked={checked}>
                            <img
                                alt="tick icon"
                                style={{ width: '15px' }}
                                src={CheckIcon}
                            />
                        </StyledCheckbox>
                        <CheckboxText checked={checked} > Retirar no local </CheckboxText>
                    </CheckboxContainer>
                    <StreetInput
                        placeholder="Insira sua rua e número..."
                        onChange={handleChange1}
                        value={field1}
                        disabled={checked ? 'disabled' : ''}
                    />
                    <NeighbourhoodInput
                        placeholder="Insira seu bairro..."
                        onChange={handleChange2}
                        value={field2}
                        disabled={checked ? 'disabled' : ''}
                    />
                    <ReferenceInput
                        placeholder="Insira um ponto de referência..."
                        onChange={handleChange3}
                        value={field3}
                        disabled={checked ? 'disabled' : ''}
                    />
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