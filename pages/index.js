import styled from 'styled-components';
import Layouts from '../layouts/Layouts';
import Head from 'next/head';
import MainSection from '../components/HomePage/MainSection/MainSection';
import Footer from '../components/HomePage/Footer';

const Home = () => {
    return (
        <Layouts>
            <Head>
                <meta charset="UTF-8" />
                <meta name="description" content="Choose your color" />
                <meta name="keywords" content="color, random color, generate hex color, hex value, random rgb, rgb color, generate random hex color, generate random rgv color" />
                <meta name="author" content="Tanner Tech" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Tanner | Colors</title>
            </Head>
            <MainSection />
            <Footer />
        </Layouts>
    )
}

export default Home