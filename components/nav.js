import React from 'react'
import Link from 'next/link'
import logo from '../static/logoBlack.svg'
import logoWhite from '../static/logoWhite.svg'
import NavBar from './navBar'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = props => (
  <nav style={{ color: props.theme }} className="black-theme mt-3">
    <div className="  ">
      <div className="row mt-2 mx-0">
        <Link href='/'>
          <div style={{ color: props.theme }} className="col-6 black-theme col-md-4	col-2 text-center pl-3  pl-sm-5  pl-md-5 pr-3">
            <a className={`logo ${props.theme === 'black' && 'logoBlack'} `}>
            {/* <img src={props.theme === 'black' ? 'logo' : 'logoWhite'} alt="Logo" className="logo" /> */}

            </a>
            {/* WALOI Production */}
     </div>
        </Link>
        <div className="col-3 col-md-4">
          <nav className="
          mt-3
          d-none 
          d-sm-none 
          d-sm-none
          d-md-block
          "> 
          <NavBar theme={props.theme } main={props.main} /> 
            {/* <ul className="mx-auto text-center">
              <li>
                <Link href='/tyot'>
                  <a className="black-theme" style={{ color: props.theme }}>Työt</a>
                </Link>
              </li>
              <li>
                <Link href='/palvelut'>
                  <a className="black-theme" style={{ color: props.theme }}>Palvelut</a>
                </Link>
              </li>
              <li>
                <Link href='/kahville'>
                  <a className="black-theme" style={{ color: props.theme }}>Kahville</a>
                </Link>
              </li>
            </ul> */}
          </nav>
        
        </div>
        <div className="col-3 col-md-4 text-center">
          <div className="
          mt-3
           d-none 
          d-sm-none 
          d-sm-none
          d-md-block">
          <a target="_blank"  rel="noopener"href="https://www.youtube.com/channel/UCFAnCSyU_TIxzPXn_tMxXKg/featured">
             <i style={{ color: props.theme }} className="black-theme fa fa-youtube nav_icon"></i>
          </a>
          <a target="_blank"  rel="noopener" href="https://www.instagram.com/awaraproductions/">
            <i style={{ color: props.theme }} className="black-theme fa fa-instagram nav_icon"></i>
          </a>
          <a target="_blank"  rel="noopener" href="https://www.linkedin.com/company/awara-productions">
             <i style={{ color: props.theme }} className="black-theme fa fa-linkedin nav_icon"></i>
          </a>
          </div>
          <div className="">
          <label   className="  
          d-block 
          d-sm-block 
          d-md-none 
          hamburger-btn" for="drawer-toggle">
            <span></span>
            <span></span>
            <span></span>
          </label>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Nav
