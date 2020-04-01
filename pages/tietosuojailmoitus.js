import React from 'react'
import Link from 'next/link'
import Header from '../components/header'
 import Footer from '../components/footer'
import HeadMod from '../components/head'
import Nav from '../components/nav'




const Tietosuojailmoitus = () => (
  <div>
    <HeadMod title={'Tietosuojailmoitus - Awara'} />



    <main>
    <Nav theme={'black'} />
       <div className="policy  container mb-5">
<h1><b>Tietosuojailmoitus</b></h1>

      <p>Rekisterinpitäjä</p>
  Awara Productions Oy | y-tunnus: 3097291-9 | Verkkosivustomme: https://awara.fi |
  eero@awara.fi
  
  <p>Miksi Awara kerää tietoa?</p>
  Awara kerää välttämättömiä tietoja markkinointia, yhteydenpitoa, ja laskutusta varten. Rekisterit tarkastetaan tasaisin väliajoin – kaikki tarpeettomat tiedot hävitetään.
  
  <p>Mitä tietoa kerätään ja kelle sen jaamme?</p>
  Emme jaa/myy tietojasi. Ainoat kolmannet osapuolet, joiden kanssa tiedot jaamme on mainittuna alla.
  
  Tälle verkkosivulle on asennettu Google Analytics, jotka keräävät anonyymiä tietoa kävijöistä – yksittäistä kävijää ei voi tunnistaa.
  
  Jos soitat / lähetät sähköpostia meille. Me saatamme tallentaa numerosi / sähköpostisi, jotta takaisin vastaaminen on helpompaa.
  <br />
  Tallennamme yhteynottolomakeeseen annetut tiedot (nimi, sähköposti, viesti), joita käyttämme asiakkaan palvelemiseen.
  
  
  <p>Turvallisuus</p>
  Awaran sivuilla on käytössä SSL sertifikaatti, eli käytämme salattua https yhteyttä. Awaran henkilökunta on sitoutunut käsittelemään tietoja huolellisesti ja luottamuksella.
  
 
  <p>Tietojen poisto / näyttäminen</p>
  
  Jos haluat poistaa kaikki tietomme sinusta – ota yhteyttä eero@awara.fi
  
  <p>Evästeet</p>
  Emme käytä omia evästeitä – ainoastaan Googlen ja tawk.to:n käyttämiä evästeitä.
  
  <span>Lisätietoja antaa: Eero Forss – eero@awara.fi</span>
      </div>
    </main>
    <Footer />

  </div>
)

export default Tietosuojailmoitus
