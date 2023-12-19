import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Destinations from '../Destination/Destinations';
import Discount from '../Discount/Discount';
import Testimonials from '../Testimonials/Testimonials';
import BotomDetails from '../BotomDetails/BotomDetails';
import Footer from '../Footer/Footer';
import AdventureSection from '../AdventureSection/AdventureSection';
import Booking from '../Booking/Booking';

const Home = () => {
    return (
        
        <div className='bg-white text-black'>
                <Navbar></Navbar>
                <Banner></Banner>
                <AdventureSection></AdventureSection>
                <Destinations></Destinations>
                <Discount></Discount>
                <Booking></Booking>
                <Testimonials></Testimonials>
                <BotomDetails></BotomDetails>
                <Footer></Footer>
        </div>
    );
};

export default Home;