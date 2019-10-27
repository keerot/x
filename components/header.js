import React from 'react'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import fetch from 'isomorphic-unfetch';
import { Converter } from 'showdown';
import Nav from '../components/nav'
 




class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = { playing: false, imgHeight: 600 }
        this.myImg = React.createRef()

    }
    componentDidMount () {
        console.log(this.myImg.current.offsetHeight)
        if(this.myImg.current.offsetHeight !== 0) {
            
            this.setState({imgHeight: this.myImg.current.offsetHeight});
        }
      }
    static async getInitialProps({ query }) {
        const res = await fetch(`http://localhost:1337/works?url_contains=${query.tyo}`)
        const data = await res.json()
        const converter = new Converter({ metadata: true })
        const content = converter.makeHtml(data[0].description)
        return {
            work: data[0],
            content: content
        }

    }

    toggle() {
        this.setState({ playing: !this.state.playing })
    }

    
    render(props) {
        const { work } = this.props

        let black
        let container
        let displayNone
        let full
        let displayBlock
        let heightAuto
        let autoPlay = ''
        if (this.state.playing) {
            black = 'black'
            container = 'container'
            displayNone = 'd-none'
            full = 'full'
            displayBlock = 'd-block'
            autoPlay = 'autoPlay'
            heightAuto = 'height-auto'
        }
    
        // console.log('im',this.state.imgHeight)

         return (
            <>
                <Nav theme={black} />
                <div   className={`homepage-video homepage-video-height  ${full || ''} `}  >
                    <div class={`header-video-wrapper-home ${heightAuto || ''}`}>
                        <div className={`video-reel-loop ${displayNone || ''}`}>
                            <div>
                                <video className="video-reel-preview" preload="auto" loop muted autoPlay  >
                                    <source src="../static/Sukoinen.mov" type="" />
                                </video>
                            </div>
                        </div>
                        <div className={`video-reel-full  mt-3 ${displayBlock || ''}`}>
                            <div id="video-reel-wrapper" style={{height: this.state.imgHeight}}   className="container preview">
                                <img
                                   ref={this.myImg}
                                    src="https://cdn.frame.is/wp-content/uploads/Surfer-03-NEW-mobile-1.png"
                                    class={` ${displayNone || ''}`}
                                    alt="Video Reel"
                                    sizes="(max-width: 1920px) 100vw, 1920px" />
                                <ReactPlayer
                                    url='https://vimeo.com/255727878'
                                    playing={autoPlay}
                                    controls
                                    width={'100%'}
                                    height={'100%'}
                                    onEnded={this.toggle.bind(this)} />
                            </div>
                        </div>

                    <div className={`homepage-content ${displayNone || ''}`}>
                        <div>
                            <h1>Sinun tarinasi</h1>
                            <a onClick={this.toggle.bind(this)} className={`video-play ${displayNone || ''}`} data-video="video-reel" data-preview="video-reel-preview">
                                <span>
                                </span>
                            </a>
                        </div>
                    </div>
                    </div>




                </div >
            </>
        )
    }
}

export default Header























        // const Header = () => (
//     <div className="homepage-video m-0"  >
//         <div class="header-video-wrapper">
//             <div className="video-reel-loop">
//                 <div>
//                     <video className="video-reel-preview" preload="auto" loop muted autoPlay  >
//                         <source src="../static/Sukoinen.mov" type="" />
//                     </video>
//                 </div>
//             </div>
//             <div className="video-reel-full">
//                 <div id="video-reel-wrapper" class="container">
//                 <ReactPlayer
//                      url='https://vimeo.com/255727878'
//                       playing={props.autoPlay}
//                       controls
//                       width={'100%'}
//                       height={'100%'}
//                       onEnded={props.play} />
//                 </div>
//             </div>
//         </div>

//         <div className="homepage-content">
//             <div>
//                 <h1>Sinun tarinasi</h1>
//                 <a    className="video-play" data-video="video-reel" data-preview="video-reel-preview">
//                     <span>
//                     </span>
//                 </a>
//             </div>
//         </div>




//     </div >
// )


// export default Header
