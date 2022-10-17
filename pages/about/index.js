import Link from "next/link";
// import Image from 'next/image';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner/banner';
// import bannerpic from '../../images/pic1.jpg';
import Layout from "../../components/Layout/layout";
import Headpart from "../../components/Headpart/headpart";
import { Badge, Card, Button } from 'antd';
const { Meta } = Card;
import { Col, Row } from 'antd';

const About = () => {
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
    {/* <Image className='pic'
      src={bannerpic}
      alt="Picture of the author"
      width={1400}
      height={500}
    /> */}

    

  <div className="cardbox" style={{padding:50}}>
  <Row gutter={8}>
      <Col span={6}>
      <Card className="card-item"
    hoverable
    style={{
      
    }}
    cover={<img alt="example" src="https://images.unsplash.com/photo-1606052399786-db8ffb540dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
      </Col>

      <Col span={6}>
      <Card
    hoverable
    style={{
    }}
    cover={<img alt="example" src="https://images.unsplash.com/photo-1603833814808-b7e5df2e5305?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
      </Col>

      <Col span={6}>
      <Card
    hoverable
    style={{
    }}
    cover={<img alt="example" src="https://images.unsplash.com/photo-1621816967863-a8e925603d41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
      </Col>

      <Col span={6}>
      <Card
    hoverable
    style={{
    }}
    cover={<img alt="example" src="https://images.unsplash.com/photo-1603834608556-88bb4f1b174d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
      </Col>
  </Row>
  <div className="buttonarea" style={{padding:25}}>
  <Button type="primary" block>
      Primary
    </Button>
  </div>
  
  </div>

  {/* ---------batge ---------- */}

  <div className="badgebox" style={{padding:50}}>
  <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <div>

        <Badge.Ribbon text="Hippies">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>

        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
        <Badge.Ribbon text="Hippies" color="red">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
        <Badge.Ribbon text="Hippies" color="green">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
        <Badge.Ribbon text="Hippies" color="purple">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
        </div>
      </Col>
    </Row>
  </div>

 



  








    </Layout>
  </div>
  )
}

export default About;