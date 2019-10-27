import React from 'react'
import Link from 'next/link'
import ReactPlayer from 'react-player'







class VideoPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = { addClass: false, imgHeight: 600 }
        this.myImg = React.createRef()

    }

    componentDidMount () {
        console.log(this.myImg.current.offsetHeight)
        if(this.myImg.current.offsetHeight !== 0) {
            
            this.setState({imgHeight: this.myImg.current.offsetHeight });
        }
      }
    toggle() {
        this.setState({ addClass: !this.state.addClass });
    }


    render() {
        return (
            <div  className={`homepage-video   ${this.props.full || ''} `}  >
                <div className="header-video-wrapper">
                    <a onClick={this.props.play} className={`work-content-video-play work-content-video-play-center ${this.props.displayNone || ''}`} data-video="video-reel" data-preview="video-reel-preview">
                        <span>
                        </span>
                    </a>

                    <div className={`video-reel-loop ${this.props.displayNone || ''}`}>
                        <div className={`${this.props.container || ''} ${this.props.displayNone || ''}`}>
                            <video className="video-reel-preview" preload="auto" loop muted autoPlay  >
                                <source src="https://player.vimeo.com/external/262401968.hd.mp4?s=c53918ff231b0824a7b3c1ec6e1f6459faa4138d&amp;profile_id=175" type="" />
                            </video>
                        </div>
                    </div>
                    <div className={`video-reel-full  mt-3 ${this.props.displayBlock || ''}`}>
                        <div id="video-reel-wrapper"  style={{height: this.state.imgHeight}} className="container preview">
                            <img
                                ref={this.myImg}
                                src="https://cdn.frame.is/wp-content/uploads/Surfer-03-NEW-mobile-1.png"
                                class={` ${this.props.displayNone || ''}`}
                                alt="Video Reel"
                                sizes="(max-width: 1920px) 100vw, 1920px" />
                            <ReactPlayer
                                url='https://vimeo.com/255727878'
                                playing={this.props.autoPlay}
                                controls
                                width={'100%'}
                                height={'100%'}
                                onEnded={this.props.play} />
                        </div>
                    </div>
                </div>

                <div className={`work-content ${this.props.displayNone || ''}`}>
                    <div>
                        <h1>{this.props.videoTitle}</h1>

                    </div>
                    <div className="video-scroller
                     d-none   
                         d-sm-none 
                         d-md-none
                         d-lg-block
                          "></div>
                </div>




            </div >

        )
    }
}

export default VideoPreview


// const VideoPreview = props => (
//     <div className={`homepage-video mt-0 ${props.full || ''} `}  >
//         <div className="header-video-wrapper">
//             <a   onClick={props.play} className={`work-content-video-play work-content-video-play-center ${props.displayNone || ''}`} data-video="video-reel" data-preview="video-reel-preview">
//                 <span>
//                 </span>
//             </a>

//             <div className={`video-reel-loop ${props.displayNone || ''}`}>
//                 <div className={`${props.container || ''} ${props.displayNone || ''}`}>
//                     <video className="video-reel-preview" preload="auto" loop muted autoPlay  >
//                         <source src="https://player.vimeo.com/external/262401968.hd.mp4?s=c53918ff231b0824a7b3c1ec6e1f6459faa4138d&amp;profile_id=175" type="" />
//                     </video>
//                 </div>
//             </div>
//             <div className={`video-reel-full  mt-7 ${props.displayBlock || ''}`}>
//                 <div id="video-reel-wrapper" className="container preview">
//                 <img
//                                 //    ref={props.selref}
//                                    ref={(elem) => props.ref = elem}
//                                     src="https://cdn.frame.is/wp-content/uploads/Surfer-03-NEW-mobile-1.png"
//                                     class={` ${props.displayNone || ''}`}
//                                     alt="Video Reel"
//                                     sizes="(max-width: 1920px) 100vw, 1920px" />
//                     <ReactPlayer
//                      url='https://vimeo.com/255727878'
//                       playing={props.autoPlay}
//                       controls
//                       width={'100%'}
//                       height={'100%'}
//                       onEnded={props.play} />
//                 </div>
//             </div>
//         </div>

//         <div className={`work-content ${props.displayNone || ''}`}>
//             <div>
//                 <h1>{props.videoTitle}</h1>

//             </div>
//             <div className="video-scroller"></div>
//         </div>




//     </div >
// )



// export default VideoPreview
