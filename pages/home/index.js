import { Carousel, Col, Row, Card, Button, Divider } from "antd";
import { Headpart, Layout} from "../../components";
import Sliderpic1 from "../../images/pic1.jpg";
import Sliderpic2 from "../../images/pic2.jpg";
import Sliderpic3 from "../../images/pic3.jpg";
import Sliderpic4 from "../../images/pic4.jpg";
import Image from 'next/image';
import Item from "antd/lib/list/Item";
const { Meta } = Card;

export async function getServerSideProps(){
  const res = await fetch (`${process.env.BASE_URL}posts`);
  const data = await res.json();
  return {props: { data }};
}

const Home = ({data}) => {
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
        {data.slice(0,3).map((item)=>(
          <div className="info" key={item.id}>
          <h4>{item.title}</h4>
           <p>{item.body}</p>
          </div>
        ))}
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
      
      {data.map((item)=>(
        <Col span={6} key={item.id}>
        <Card className="card-item"
         cover={<Image alt="example" src={Sliderpic4}  loading="lazy" />}>
        <Meta title={item.title}/>
        </Card>
        </Col>
      )

      )}
     
      
  </Row>
  </div>
</div>

{/* ----------------------------- */}
        </Layout>
        </div>
    )
}
export default Home;