import { useRouter, withRouter } from 'next/router';
import Nav from '../../components/nav'
import Header from '../../components/header'
import Footer from '../../components/footer'
import HeadMod from '../../components/head'
import VideoPreview from '../../components/VideoPreview'
import fetch from 'isomorphic-unfetch';
import { Converter } from 'showdown';









import React from 'react'

// class Work extends React.Component {

//   static async getInitialProps({query}) {
//      const res = await fetch(`http://localhost:1337/works?url_contains=${query.tyo}`);
//     const data = await res.json();

//     console.log(`Show data fetched. Count: ${data}`);

//     return {
//       work: data[0]
//     }

//   }



//   render() {
//     const { work } = this.props
// console.log(work)
//     return (
//       <a>
//         A {work.otsikko}
//       </a>
//     )
//   }
// }

// export default Work




export default function Work(props) {
  const router = useRouter();

  const { work } = props

  return (
    <>
      <main>
        <HeadMod  title={`${work.name} -Waloi Productions`} />
        <Nav theme={'black'} />
        <VideoPreview videoTitle={work.video_title} />
        <section className="container-fluid workcontainer">
          <div className="row">
            <article className="col-xs-12  col-sm-8">
              <div>
                 <div dangerouslySetInnerHTML={{ __html: props.content }} />

               </div>
            </article>
            <aside className="col-xs-12  col-sm-4">
              <div>
                <h5>Asiakas</h5>
               {work.customer}
              </div>
              <div>
                <h5>Prosessi</h5>
                {work.prosess.map(step => (
                  <p>{step.step}</p>
                ))}
              </div>
            </aside>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}


Work.getInitialProps = async function ({ query }) {

  const res = await fetch(`http://localhost:1337/works?url_contains=${query.tyo}`);
  const data = await res.json();

 

  const converter = new Converter({ metadata: true });
  const content = converter.makeHtml(data[0].description);
  const meta = converter.getMetadata();

 
  return {
    work: data[0],
    content:content
  }
}



