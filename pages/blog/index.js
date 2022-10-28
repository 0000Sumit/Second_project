import { Layout } from 'antd'
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





         {data.map((item) => (
            <div href={`./blog/${item.id}`} key={item.id}>
               <h4>{item.id}</h4>
                <p>{item.title}</p>
            </div>
         )
         )}




        
        <Footer/>
        </Layout>
    </div>
  )
}

export default Blog;

export async function getServerSideProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    return {props: {data}};
}