import { useRouter } from 'next/router';
import HeadMod from '../components/head'
import Header from '../components/header'
import Contex from '../components/contex'
import Footer from '../components/footer'
import Nav from '../components/nav'
import VideoExample from '../components/video'







const Tyot = props => {
  
    return (

        <>
            <HeadMod title={'Katso töitämme'} />
            <Nav theme={'black'} />
            <section>
                <div className="container">
                    <div className="text-center titleWorks mt-5 mb-5">
                        <h1>Työt</h1>
                        <p>Intohimolla luodut tarinat</p>
                    </div>
                    <VideoExample
                        description={'Tunnetta kehissä'}
                        title={'Showreel'}
                        url={'tunnetta-kehissa'}
                     
                        autoplay={true} />


                    <div className="row mt-5 mb-5">
                        {props.works.map(work => (
                            <div className="col-sm-12 col-md-6 mb-5 noPadding">
                                <VideoExample
                                    description={work.name}
                                    title={work.customer}
                                    url={work.url}
                                />
                            </div>
                        ))}
                    </div>



                    {/* <div className="row mt-5 mb-5">
                        <div className="col-sm noPadding">
                            <VideoExample
                                description={'Voiton puolella'}
                                title={'Showreel'}
                                url={'voiton-puolella'}
                            />
                        </div>
                        <div className="col-sm noPadding">
                            <VideoExample
                                description={'Maaseudun taika'}
                                title={'Mainokset'}
                                url={'maaseudun-taika'}

                            />
                        </div>
                    </div>
                 
                    <div className="row mt-5 mb-5">
                        <div className="col-sm noPadding">
                            <VideoExample
                                description={'Ilmasta voitto'}
                                title={'Fonecta Suomi'}
                                url={'ilmasta-voitto'}
                            />
                        </div>
                        <div className="col-sm noPadding">
                            <VideoExample
                                description={'Nautinto'}
                                title={'Mainokset'}
                                url={'nautinto'}

                            />
                        </div>
                    </div>   */}
                </div>
                <Footer />
            </section>
        </>

    );
};



Tyot.getInitialProps = async function ({ query }) {

    const res = await fetch('http://localhost:1337/works');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${query.tyo}`);
    const first = data.find(work => work.FirstWork & work)

    return {
        works: data,
        firstWork: first
    }
}


export default Tyot;