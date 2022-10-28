import Link from "next/link";

const Navbar = () =>{
    return(
        <div className="navbar-area">
         <ul>
           <li> <Link href="/home"><a>Home</a></Link> </li>
           <li> <Link href="/about"><a>About</a></Link> </li>
           <li> <Link href="/service"><a>Service</a></Link> </li>
           <li> <Link href="/contact"><a>Contact</a></Link> </li>
           <li> <Link href="/blog"><a>Blog</a></Link> </li>

         </ul>
        </div>
    )
}

export default Navbar;


