import React from 'react'
import Link from 'next/link'





const Contex = () => (
  <div className="contex  ">

    <div className="text-center   intro">
      <div className="container pt-0">
        <h2>Miksi teemme tätä?</h2>
        <hr />
        <p>
          Olemme nuoria, intohimoisia videotaitelijoita.  </p>
        <p>
          Meille jokainen video on <b>taideteos</b>, jota työstetään viimeistä silausta myöten.
        </p>


      </div>
    </div>
    <div className="text-center   intro">
      <div className="container pt-0">
        <h2>Mitä voimme tehdä vuoksesi? </h2>
        <hr />
        <p>
          Kerromme haluamasi tarinan videon muodossa.
          </p>
          <p>
            Luomme videoita, joilla on arvoa.
          </p>
      </div>
    </div>



    <div className="row m-0">
      <section className='    facts-homepage'>
        <div className='container text-center  my-3'>
          <h2>Kolme faktaa</h2>
          <hr className='border-white' />

          <div className="row">
            <div className="col-md-4 my-3">
            54% kuluttajista haluavat nähdä lisää videosisältöä brändiltä tai 
yritykseltä, jota he kannattavat.
              <span>(Oberlo, 2019)</span>
            </div>
            <div className="col-md-4 my-3">
            Sosiaalisessa mediassa yritysten videosisältö on suositumpaa kuin heidän muu sisältönsä.
              <span>(Animoto, 2018)</span>
            </div>
            <div className="col-md-4 my-3">
              Jos verkkosivuillasi on video, käyttäjä on siellä 88% todennäköisyydellä pidempään.
              <span>(Forbes, 2018)</span>
            </div>
          </div>
        </div>
      </section>
    </div>





    <section className='mb-3   container-fluid  steps-homepage'>

      <h2>Ystävä, aloitetaan luominen</h2>
      <p>
        Homma etenee <b>helposti</b> seuraavilla askelilla
      </p>


      <div className="row my-0">
        <div className="col-md-6 steps-homepage-padding">


          <div className='step   my-3'>
            <h3>1. Esituotanto</h3>
            <hr />
            <ul>
              <li>Kartoitetaan tarpeesi</li>
              <li>Videon suunnittelu, halutessa asiakkaan kanssa</li>
              <li>Käsikirjoituksen hyväksyminen asiakkaalta</li>
              <li>Kuvauspäivien sopiminen</li>
            </ul>
          </div>

          <div className='step my-3'>
            <h3>2. Kuvaus</h3>
            <hr />
            <ul>
               <li>Kuvataan sovittuina päivinä</li>
            </ul>
          </div>

          <div className='step my-3'>
            <h3>3. Jälkituotanto</h3>
            <hr />
            <ul>
              <li>Videon ensimmäinen versio asiakkaan tarkastettavaksi</li>
              <li>Mahdolliset asiakkaan haluamat muutokset videoon</li>
            </ul>
          </div>


        </div>
        <div className="col-md-6 steps-homepage-padding">

          <div className="  text-center contact">
          </div>
        </div>

        <div className="mt-5 m-auto">
          <div class="btn-group">
            <div className="mr-2  ">

              <Link href={'/kahville'}>
                < button type="submit" class="bnt-custom m-auto">Ota yhteyttä</button>
              </Link>
            </div>
            <Link href={'/palvelut'}>
              < button type="submit" class="bnt-custom m-auto">Tutustu palveluihimme</button>
            </Link>
          </div>
        </div>
      </div>
    </section>



  </div>
)

function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}

export default Contex
