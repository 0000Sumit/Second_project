import { Carousel, Col, Row, Card, Button, Divider } from "antd";
import { Headpart, Layout} from "../../components";
import Sliderpic1 from "../../images/pic1.jpg";
import Sliderpic2 from "../../images/pic2.jpg";
import Sliderpic3 from "../../images/pic3.jpg";
import Sliderpic4 from "../../images/pic4.jpg";
import Image from 'next/image';
const { Meta } = Card;


const Home = () => {
    return(
        <div className="homearea">
        <Headpart pagetitle="Home Page" />
        <Layout>
{/* ----------------------- */}

{/* ------slider area */}
        <div div className="main-slider">
        <Carousel autoplay>
    <div className="item">
    <Image className='pic'
      src={Sliderpic1}
      alt="Picture of the author"
      width={1700}
      height={600}
    />
    <div className="sliderinfo">
      <h3>Enjoy your dreem journey with us</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book.</p>
    </div>
    </div>

    <div className="item">
    <Image className='pic'
      src={Sliderpic2}
      alt="Picture of the author"
      width={1700}
      height={600}
    /> 
    <div className="sliderinfo">
      <h3>Enjoy your dreem journey with us</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book.</p>
    </div>
    </div>

    <div className="item">
    <Image className='pic'
      src={Sliderpic3}
      alt="Picture of the author"
      width={1700}
      height={600}
    />
    <div className="sliderinfo">
      <h3>Enjoy your dreem journey with us</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book.</p>
    </div>
   </div>
    <div className="item">
    <Image className='pic'
      src={Sliderpic4}
      alt="Picture of the author"
      width={1700}
      height={600}
    />
    <div className="sliderinfo">
      <h3>Enjoy your dreem journey with us</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book.</p>
    </div>
   </div>
  </Carousel>
        </div>

{/* ------our info ------ */}
<div className="ourinfo">
<Row>
      <Col span={12}>
        <div className="info">
          <h4>Plan and join with us</h4>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the  standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make
             a type specimen book. It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>

          <p>
          It is a long established fact that a reader will be distracted by the
           readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution of
             letters, as opposed to using  content making it look like readable English.
          </p>

          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the  standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make
             a type specimen book. It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining essentially unchanged.
              It is a long established fact that a reader will be distracted by the
           readable content.
          </p>
          
        </div>
      </Col>
      <Col span={12}>
        <div className="picarea">
        <Image className='pic' src={Sliderpic2}
        alt="Picture of the author" width={600} height={400} /> 
        </div>
      </Col>
    </Row>
</div>

{/* -------our service -------- */}
<div className="ourservice">
  <div className="main-headline">
    <h2>Our Services</h2>
  </div>
<div className="cardbox" style={{padding:50}}>
  <Row gutter={8}>
      <Col span={6}>
      <Card className="card-item"
    hoverable
    style={{
      
    }}
    cover={<Image alt="example" src={Sliderpic4}  loading="lazy" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
      </Col>

      <Col span={6}>
      <Card
    hoverable
    style={{
    }}
    cover={<Image alt="example" src={Sliderpic2} loading="lazy" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
      </Col>

      <Col span={6}>
      <Card
    hoverable
    style={{
    }}
    cover={<Image alt="example" src={Sliderpic3} loading="lazy" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
      </Col>

      <Col span={6}>
      <Card
    hoverable
    style={{
    }}
    cover={<Image alt="example" src={Sliderpic4} loading="lazy" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
      </Col>
  </Row>
  </div>
</div>

{/* ----------------------------- */}
        </Layout>
        </div>
    )
}
export default Home;