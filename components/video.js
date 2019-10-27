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
    console.log('The link was clicked.', videoPlaying);
}
{/* <Link href="/tyot/[tyo]" as={`/tyot/${props.url}`}> */}

    return (
                    <div className="position-relative videoReel" >
<Link href={{pathname: '/tyot/[tyo]', query: {id: 'else', description: props.description, text: props.text}}} as={`/tyot/${props.url}`}>
                         
                            <a href="https://frame.is/project/feelyourstory/">
                                <section className="mainVideo">
                                    <h5>{props.title}</h5>
                                    <h3>{props.description}</h3>
                                </section>
                                <video onMouseOver={handleMouseOver} preload="auto" loop muted autoPlay={props.autoplay} poster="https://cdn.frame.is/wp-content/uploads/FFF_Asset_3.png" >
                                <source src="https://player.vimeo.com/external/304677986.sd.mp4?s=e6cc9188144b86d5cf0ac7deb6090e4fe4acfb0a&#038;profile_id=165" type="video/mp4" />
                                </video>
                             </a>
                        </Link>

                        </div>
            )
        }
        
export default VideoExample