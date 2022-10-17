import Link from "next/link";
import { Headpart, Layout} from '../../components';
import Banner from '../../components/Banner/banner';

const Contact = () => {
  return (
    <div>
    <Headpart pagetitle="Contact Page" />
    <Layout>
    <div className="banner-area">
          <Banner/>
          <div className="info">
            <h2>Contact Us</h2>
            <ul>
              <li>
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </li>
              <li><span>/</span></li>
              <li>Contact Us</li>
            </ul>
          </div>
          </div>
    </Layout>
    
    </div>
  )
}

export default Contact;