import React from 'react'
import Link from 'next/link'
import NavBar from './navBar'
import { initGA, logPageView } from './googleAnalytics'



export default class Footer extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render() {
    return (
  <>
  <div className="footer container-fluid pb-2">

    <div className="row vertical_midle">
      <div className="col-sm text-center">
      Awara Productions
      <p>Turku</p>
  </div>
      <div className="col-sm text-center">
      <NavBar  /> 

      </div>

    </div>
    
    <div className='  container  '>
    <div className='row   m-auto'>
   
      <div className='col-md-6 col-sm-6 d-block text-center mt-3'>
      <p>
        <span  className=' d-block'>Eero Forss</span>
        <a href="tel:+358442921296">+358 44 292 1296</a>
      </p>
      </div>
      <div className='col-md-6 col-sm-6 d-block mt-3'>
      <p>
        <span className='d-block'>Lauri Forss</span>
        <a href="tel:+358403558226">+358 40 355 8226</a>
      </p>
      </div>
      </div>
      </div>

      <div className="bottom_border mt-2"></div>
      <div className="sosial_media">
      <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCFAnCSyU_TIxzPXn_tMxXKg/featured">
             <i  class=" fa fa-youtube icon"></i>
          </a>
          <a target="_blank" rel="noopener" href="https://www.instagram.com/awaraproductions/">
            <i  class=" fa fa-instagram icon"></i>
          </a>
          <a target="_blank" rel="noopener" href="https://www.linkedin.com/company/awara-productions">
             <i  class=" fa fa-linkedin icon"></i>
          </a>
      </div>
      <div className="bottom">© 2020 Awara Productions Oy</div>
     
    <Link  href={'/tietosuojailmoitus'}>
       <span style={{color: '#bebebe', cursor: 'pointer'}}>Tietosuojailmoitus</span>
       </Link>
    
  </div>
  <input type="checkbox" id="drawer-toggle" className="d-none" />
  <nav id="nav-drawer" className="nav-mobile d-md-none">
  <label for="drawer-toggle" class="close">
		<span></span>
		<span></span>
	</label>
  <NavBar  theme={'white' } /> 
        <div className="
        text-white


          ">
        <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCFAnCSyU_TIxzPXn_tMxXKg/featured">
             <i  class=" fa fa-youtube nav_icon"></i>
          </a>
          <a target="_blank" rel="noopener" href="https://www.instagram.com/awaraproductions/">
            <i  class=" fa fa-instagram nav_icon"></i>
          </a>
          <a target="_blank" rel="noopener" href="https://www.linkedin.com/company/awara-productions">
             <i  class=" fa fa-linkedin nav_icon"></i>
          </a>
          </div>
  </nav>
  <logPageView />
  </>)


}
}

