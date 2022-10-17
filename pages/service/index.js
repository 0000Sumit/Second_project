import Link from "next/link";
import { Headpart, Layout} from '../../components';
import Banner from '../../components/Banner/banner';

const Service = ({data}) => {
  return (
    <div>
    <Headpart pagetitle="Service Page" />
    <Layout>
    <div className="banner-area">
          <Banner/>
          <div className="info">
            <h2>Service</h2>
            <ul>
              <li>
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </li>
              <li><span>/</span></li>
              <li>Service</li>
            </ul>
          </div>
          </div>


      {data.map((item)=> (
        <Link href={`/service/${item.id}`} key={item.id}>
          <a>
            <div className="card">
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          </a>
        </Link>
      ))}
    </Layout>
    </div>
  );
};

export default Service;


export async function getServerSideProps(){
  const res = await fetch (`${process.env.BASE_URL}posts`);
  const data = await res.json();

  return {props: { data }};
}
