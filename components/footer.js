import React from 'react'
import Link from 'next/link'



const Footer = () => (
  <>
  <div className="footer container-fluid pb-2">

    <div className="row vertical_midle">
      <div className="col-sm text-center">
        WALOI Production
  </div>
      <div className="col-sm text-center">
        <ul className="mx-auto text-center">
          <li>
            <Link href='/'>
              <a>Työt</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Palvelut</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Kahville</a>
            </Link>
          </li>
        </ul>
      </div>

    </div>
    <div>
      <p>+358 44 292 1296</p>
      <div className="bottom_border"></div>
      <div className="sosial_media">
        <i class="fa fa-facebook-square icon"></i>
        <i class="fa fa-instagram icon"></i>
        <i class="fa fa-linkedin icon"></i>
      </div>
      <div className="bottom">© 2019 Waloi Production</div>
    </div>

  </div>
  <input type="checkbox" id="drawer-toggle" className="d-none" />
  <nav id="nav-drawer" className="nav-mobile d-md-none">
  <label for="drawer-toggle" class="close">
		<span></span>
		<span></span>
	</label>
  <ul className="mx-auto text-center">
          <li>
            <Link href='/tyot'>
              <a>Työt</a>
            </Link>
          </li>
          <li>
            <Link href='/palvelut'>
              <a>Palvelut</a>
            </Link>
          </li>
          <li>
            <Link href='/kahville'>
              <a>Kahville</a>
            </Link>
          </li>
        </ul>
        <div className="
        text-white


          ">
          <i  class=" fa fa-facebook-square nav_icon"></i>
          <i  class="fa fa-instagram nav_icon"></i>
          <i  class=" fa fa-linkedin nav_icon"></i>
          </div>
  </nav>
  </>)

function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}

export default Footer
