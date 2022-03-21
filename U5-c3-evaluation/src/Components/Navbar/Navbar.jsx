import { Link } from "react-router-dom";

const links = [
  {to: "/", title: "Home"},
  {to: "/section/history", title: "History"},
  {to: "/section/mystery", title: "Mystery"},
  {to: "/section/mythology", title: "Mythology"},
  {to: "/section/technology", title: "Technology"}
]

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
        {/* <button className="home"><Link to = "/" ></Link>Home</button>
        <button className="history"><Link to = "/section/history" >History</Link></button>
        <button className="mystery"><Link to = "/section/section/mystery" >Mystery</Link></button>
        <button className="mythology"><Link to = "/section/mythology" >Mythology</Link></button>
        <button className="technology"><Link to = "/section/technology" >Technology</Link></button> */}
        {
          links.map((el)=>{
            return(
              <Link key={el.to} to={el.to}>
                {el.title} 
              </Link>
            )
          })
        }
      </div>
    </>
  );
};
