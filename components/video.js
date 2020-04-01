import Link from 'next/link'


const PostLink = props => (
    <li>
      <Link href="/tyot/[id]" as={`/tyot/${props.title}`}>
        
      </Link>
    </li>
  );



const VideoExample = props => {
    let videoPlaying = false
function handleMouseOver(e, videoPlaying) {
    e.preventDefault();
    videoPlaying = true
 }
{/* <Link href="/tyot/[tyo]" as={`/tyot/${props.url}`}> */}

    return (
                    <div className="position-relative videoReel" >
<Link href={{pathname: '/tyot/[tyo]'}} as={`/tyot/${props.url}`}>
                         
                            <a href="">
                                <section className="mainVideo">
                                    <h5>{props.customer}</h5>
                                    <h3>{props.work}</h3>
                                </section>
                                {/* <img src={'../static/countryside.jpg'}/> */}
                                <video onMouseOver={handleMouseOver} preload="auto" loop muted 
                                autoPlay={props.autoplay} 
                                poster={props.video_poster_image_url} >
                                <source src={props.video_poster_url} type="video/mp4" />
                                </video>
                             </a>
                        </Link>

                        </div>
            )
        }
        
export default VideoExample