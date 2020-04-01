import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';

import Header from '../components/header'
import Contex from '../components/contex'
import Footer from '../components/footer'
import HeadMod from '../components/head'
// import { initGA, logPageView } from '../components/googleAnalytics'
import { Button } from 'reactstrap';




export default class Home extends React.Component {
  componentDidMount() {
    // if (!window.GA_INITIALIZED) {
    //   initGA()
    //   window.GA_INITIALIZED = true
    // }
    // logPageView()
  }

  render() {
    // return (
    //   <div>
    //     <HeadMod title={'Awaraa videotuotantoa - Awara Productions'} />



    //     <main>
    //       <div className="container">

    //         <div className="building text-center mt-5">
    //           <h1>Awara Productions</h1>
    //           <br />
    //           <br />
    //           <br />
    //           <h2><span>Ystävä</span>, sivustoa rakennetaan parhaillaan</h2>
    //           <p>Soita ja kysy kahville</p>
    //           <div className="row mt-5 mb-5 text-center position-relative">
    //             <div class="col-md-6 people">

    //               <div class="">
    //                 <address>
    //                   <b>Eero Forss</b>
    //                   <p>Perustaja</p>
    //                   <p><a target="_blank" href="mailto:eero.forss@gmail.fi">eero.forss@gmail.fi</a></p>
    //                   <p><a href="tel:+358442921296">+358 44 292 1296</a></p>
    //                   <a target="_blank" href="https://www.facebook.com/eero.forss">
    //                     <i class="black-theme fa fa-facebook-square nav_icon"></i>
    //                   </a>
    //                   <a target="_blank" href="https://www.instagram.com/eeroforss/">
    //                     <i class="black-theme fa fa-instagram nav_icon"></i>
    //                   </a>
    //                   <a target="_blank" href="https://www.linkedin.com/in/eero-forss/">
    //                     <i class="black-theme fa fa-linkedin nav_icon"></i>
    //                   </a>

    //                 </address>
    //               </div>

    //             </div>
    //             {/* <div class="seperator"></div> */}

    //             <div class="col-md-6 people">

    //               <div class="">
    //                 <address>
    //                   <b>Lauri Forss</b>
    //                   <p>Perustaja</p>
    //                   <p><a target="_blank" href="mailto:lauri.forss@gmail.fi">lauri.forss@gmail.fi</a></p>
    //                   <p><a  href="tel:+358403559226">+358 40 355 9226</a></p>
    //                   <a target="_blank" href="https://www.facebook.com/lauri.forss">
    //                     <i class="black-theme fa fa-facebook-square nav_icon"></i>
    //                   </a>
    //                   <a target="_blank" href="https://www.instagram.com/forsslauri/">
    //                     <i class="black-theme fa fa-instagram nav_icon"></i>
    //                   </a>
    //                   <a target="_blank" href="https://www.linkedin.com/in/lauri-forss/">
    //                     <i class="black-theme fa fa-linkedin nav_icon"></i>
    //                   </a>
    //                 </address>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </main>

        
    //   </div>
    // )



    return (
      <div>
        <HeadMod title={'Visuaalista tarinankerrontaa - Awara'} />



        <main>

          <Header />
          <Contex />

        </main>
        <Footer />

      </div>
    )
  }
}

// export default Home
