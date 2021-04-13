import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import PartnerContent from '../components/Common/PartnerContent';
import Footer from '../components/Layouts/Footer';
import PartnerSlider from '../components/Common/PartnerSlider';

class Partner extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Partner" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Partner" 
                    bgImgClass="item-bg2" 
                />  
                <PartnerContent />
                <PartnerSlider />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Partner;