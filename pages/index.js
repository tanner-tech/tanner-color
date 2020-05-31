import styled from 'styled-components';
import Layouts from '../layouts/Layouts';
import Head from 'next/head';
import MainSection from '../components/HomePage/MainSection/MainSection';
import Footer from '../components/HomePage/Footer';

const Home = () => {
    return (
        <Layouts>
            <Head>
                {/* Add meta tags */}
                <title>Tanner | Colors</title>
            </Head>
            <MainSection />
            <Footer />
        </Layouts>
    )
}
const HomePage = styled.div`
    
`
const Heading = styled.h1``
export default Home