import { Col, Layout, Row } from 'antd'
import Link from 'next/link'
import Banner from '../../components/Banner/banner'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'

const Blog = ({data}) => {
  return (
    <div>
        <Layout>
        <Navbar/>
        <div className="banner-area">
        <Banner/>
        <div className="info">
            <h2>Blog</h2>
            <ul>
              <li>
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </li>
              <li><span>/</span></li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div className='bloginfo-main'>
        <Row gutter={[16, 16]}>
          {data.map((item) => (
            <Col className="gutter-row" xs={24} lg={8} md={12}
             href={`./blog/${item.id}`} key={item.id}>
             <div className='bloginfo'>
               <h4>{item.id}</h4>
                <p>{item.title}</p>
                </div>
            </Col>
         )
         )}
        </Row>
        </div>
        <Footer/>
        </Layout>
    </div>
  )
}

export default Blog;

export async function getServerSideProps(){
    const res = await fetch(`${process.env.BASE_URL_TWO}todos`);
    const data = await res.json();
    return {props: {data}};
}
