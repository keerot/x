import React from 'react'
import Link from 'next/link'




const Contex = () => (
<div className="contex mt-3 container-fluid">

  <div className="text-center my-3 intro"> 
     <h1>Olemme videotuontantoyhtiö</h1> 
     <p>Me kerromme tarinasi maailmalle</p>
  </div>

  <div className="row">
    <div className=" col-sm-12 col-md-6 text-center contact">
        <div>
         Ota yhteyttä
        </div>
    </div>
    <div className="col-sm-12 col-md-6 col-sm text-center services">
        <div>
      Tutustu meihin 
        </div>
    </div>
  </div>

</div>
)

function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

export default Contex
