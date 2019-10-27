import React from 'react'
import Head from 'next/head'
import "../static/style.css"
import "../static/footer.css"
import "../static/contex.css"
import "../static/tyot.css"

const HeadMod = props => (

    <Head>
        <title>    
        {props.title}
        </title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        <link rel='icon' href='/favicon.ico' />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css?family=Khula:400,700&display=swap" rel="stylesheet" />

    </Head>

)

export default HeadMod
