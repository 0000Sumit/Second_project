import Link from "next/link";
import Banner from '../../components/Banner/banner';
import Layout from "../../components/Layout/layout";
import Headpart from "../../components/Headpart/headpart";
import { Card, Col, Row } from "antd";

const About = ({data}) => {
  return (
    <div className='aboutmain'>
    <Headpart pagetitle="About Page" />
    <Layout>
    <div className="banner-area">
          <Banner/>
          <div className="info">
            <h2>About Us</h2>
            <ul>
              <li>
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </li>
              <li><span>/</span></li>
              <li>About</li>
            </ul>
          </div>
          </div>
          <div className="cardarea">
          <div className="container">
            <Row gutter={16}>
            {data.map((item) => (
            <Col className="gutter-row" xs={24} lg={8} md={12} href={`./about/${item.id}`} key={item.id}>
            <div>
            <Card className="card">
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            </Card>
            </div>
            </Col>
            )
          )}
            </Row>
            </div>
          </div>
    </Layout>
  </div>
  )
}

export default About;

export async function getServerSideProps(){
  const res = await fetch (`${process.env.BASE_URL}posts`);
  const data = await res.json();
  return {props: { data }};
}




