import Header from "../../components/header";
import Menu from "../../components/menu";
import { HomeContainer } from "./styles";

function Home() {
    return (
        <HomeContainer>
            <Header />
            <Menu />
        </HomeContainer>
    );
};

export default Home;