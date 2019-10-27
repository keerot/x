import React from 'react'
import Link from 'next/link'
import logo from '../static/logo.svg'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = props => (
  <nav style={{ color: props.theme }} className="black-theme">
    <div className="  reunat">
      <div className="row">
        <Link href='/'>
          <div style={{ color: props.theme }} className="col-4 black-theme col-md-4	col-2 text-center pl-3  pl-sm-5  pl-md-5 pr-3">
            <a>
            <img src={logo} alt="Logo" className="logo" />

            </a>
            {/* WALOI Production */}
     </div>
        </Link>
        <div className="col-4 col-md-4">
          <nav className="
          d-none 
          d-sm-none 
          d-sm-none
          d-md-block
          ">
            <ul className="mx-auto text-center">
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
            </ul>
          </nav>
        
        </div>
        <div className="col-4 col-md-4 text-center">
          <div className="
           d-none 
          d-sm-none 
          d-sm-none
          d-md-block">
          <i style={{ color: props.theme }} class="black-theme fa fa-facebook-square nav_icon"></i>
          <i style={{ color: props.theme }} class="black-theme fa fa-instagram nav_icon"></i>
          <i style={{ color: props.theme }} class="black-theme fa fa-linkedin nav_icon"></i>
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
