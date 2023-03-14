import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import BagPic from "../../assets/bag.png";
import { HomeContainer, PageTitle } from "./styles";

function Home() {
    const navigate = useNavigate();

    return (
        <HomeContainer>
            <Header onclick={() => navigate('/cart')} icon={BagPic} />
            <PageTitle>Cardápio</PageTitle>
            <Menu />
        </HomeContainer>
    );
};

export default Home;