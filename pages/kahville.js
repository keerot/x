import { useRouter } from 'next/router';
import HeadMod from '../components/head'
import Header from '../components/header'
import Contex from '../components/contex'
import Footer from '../components/footer'
import Nav from '../components/nav'
import VideoExample from '../components/video'







const Kahville = props => {
  
    return (

        <>
            <HeadMod title={'Tutkitaan yhdessä'} />
            <Nav theme={'black'} />
            
                         
                <Footer />
            
        </>

    );
};


 

export default Kahville;