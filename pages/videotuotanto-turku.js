import React from 'react'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import HeadMod from '../components/head'
import Nav from '../components/nav'




const VideotuotantoTurku = () => (
  <div>
    <HeadMod title={'Videotuotanto Turku - Awara'}
      description={'Laadukasta videotuotantoa Turun alueella ja tietenkin koko varsinais-suomen alueella'}
    />



    <main>
      <Nav theme={'black'} />
      <div className="policy  container mb-5">
        {/* <h1><b>Videoita jokaiselle turkulaiselle</b></h1> */}
        <h1><b>Tarinoita turkulaisista</b></h1>

        <div className="container">
          <div className="row">
            <div className="video-containerYouTube">
              <iframe width="853" height="480" src="https://www.youtube.com/embed/ubz-M1ZmPVo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="pb-3 text-center ">
          <p>Kuvaamme ammattitaitoisesti Turun alueella</p>
          {/* <p>Yrityksemme nopeana toimintaetuna pystymme tuottamaan Turun alueella videoita</p> */}
        </div>
        <div className="mr-2 m-auto text-center">




        </div>
        <div class="container">
          <div class="row">
            {/* <div class="col-sm text-center">
              <p>Jätä numerosi, soitamme sinulle saman päivän aikana</p>

              <input required type="tel" name="email" className="mb-2 mt-2" id="Sähköposti" aria-describedby="emailHelp" placeholder="Puhelinnumerosi" />
              <button type="submit" class="bnt-custom m-auto ">Lähetä soittopyyntö</button>
            </div> */}
            <div class="col-sm text-center">
              <p>Soita suoraan Awaran <span className="text-danger d-inline">kuumalle linjalle</span></p>

              <div className="mt-2">
                <a className="bg-danger p-2 mt-2" href='tel:+358442921296' class=" ">Soita tästä 044 292 1296</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5   position-relative">
          <div className="text-center">

            <h1 className="text-center"><b>Tutustu alla palveluihimme</b></h1>
          </div>
          <div class="col-md-6 service ">
            <div>
              <img
                src="../static/service_video.svg"
                alt="Eero Forss"
              />
              <h3>Mainosvideot</h3>
              <p>
                Haluatko mainosvideon jolla on <b>tarina</b>?
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
                Kerrotaan yrityksesi <b>tarina</b>. Kerrotaan mistä siinä on kyse, ketä palvelette ja miksi.
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
                Henkilötarinoilla onnistutaan tuomaan esille yritysten <b>inhimilliset</b> piirteet.
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
                Tuodaan esille bändin osaamista, hyvää meininkiä,
                                     ja myös <b>erottautumista</b> muista.
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

    </main>
    <Footer />

  </div>
)

export default VideotuotantoTurku
