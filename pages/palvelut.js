import { useRouter } from 'next/router';
import HeadMod from '../components/head'
import Header from '../components/header'
import Contex from '../components/contex'
import Footer from '../components/footer'
import Nav from '../components/nav'
import VideoRepeater from '../components/videoRepeater'
import data from '../static/palvelut.json'
import Link from 'next/link'







class Palvelut extends React.Component {
    constructor(props) {
        super(props)
        this.state = { playing: false }
    }



    // static async getInitialProps({ query }) {
    //      const data = await import(`../static/palvelut.json`)

    //      console.log('data',data)
    //     //const data = await res.json()

    //     // const converter = new Converter({ metadata: true })
    //     // const content = converter.makeHtml(data)
    //     return {
    //         data: data,
    //     }

    // }

    render(props) {



        return (

            <>
                <HeadMod title={'Palvelumme - Awara'} />
                <Nav theme={'black'} />
                <section>
                    <header className="text-center mt-5 mb-5">
                        <h1>Palvelut</h1>
                    </header>
                    <div className="container">

                        {/* {data.map(service => service.name)} */}

                        <div className="row mt-5 mb-5   position-relative">
                            <div class="col-md-6 service ">
                                <div>
                                    <img
                                        src="../static/service_video.svg"
                                        alt="Eero Forss"
                                    />
                                    <h3>Mainosvideot</h3>
                                    <p>
                                    Haluatko mainosvideon, jolla on <b>tarina</b>?
                                    Haluamme tuoda tarinasi esille elävän kuvan muodossa.
                                </p>

                                </div>
                            </div>

                            <div class="col-md-6 service ">
                                <div>
                                    <img
                                        src="../static/yritys.svg"
                                        alt="Eero Forss"
                                    />
                                    <h3>Yritysvideot</h3>
                                    <p>
                                    Kerromme yrityksesi <b>tarinan</b>, mistä siinä on kyse, ketä palvelette ja miksi.
                                </p>

                                </div>
                            </div>
                            <div className="seperator_work"></div>

                            <div class="col-md-6 service ">
                                <div>
                                    <img
                                        src="../static/henkilo.svg"
                                        alt="Eero Forss"
                                    />
                                    <h3>Henkilötarinat</h3>
                                    <p>
                                    Henkilötarinoilla onnistumme tuomaan esille yritysten <b>inhimilliset</b> piirteet.
                                </p>

                                </div>
                            </div>

                            <div class="col-md-6 service ">
                                <div>
                                    <img
                                        src="../static/musa.svg"
                                        alt="Eero Forss"
                                    />
                                    <h3>Musiikkivideot</h3>
                                    <p>
                                    Tuomme esille bändin osaamista, hyvää tunnelmaa
                                     ja muista <b>erottautumista</b> .
                                </p>

                                </div>
                            </div>
                            <div class="col-md-12 service ">
                                <div>
                                    <img
                                        src="../static/muuta.svg"
                                        alt="Eero Forss"
                                    />
                                    <h3>Mielessä jotain muuta?</h3>
                                    <p>
                                  Tarvitsetko jotain muuta? 
                                   <b> Ollaan yhteydessä</b> ja mennään kahville keskustelemaan tarpeistasi.
                                </p>

                                </div>
                            </div>
                            <div className="mr-2 m-auto ">

                                <Link href={'/kahville'}>
                                    < button type="submit" class="bnt-custom m-auto">Ota yhteyttä</button>
                                </Link>
                            </div>

                        </div>
                    </div>



                </section>

                <Footer />

            </>

        );
    };

}


export default Palvelut;