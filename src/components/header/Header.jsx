import {  react } from "react";
import './Header.css'

// import img from '../../assets/main.jpg'


function Header ({title,techs,body,img}) {
    console.log({img})
    return(
        <div className=" page h-20 w-32  bg-auto border-8 border-pink-100 rounded-3xl outline-double px-1 py-1.5" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
       <h3 className="font-serif text-2xl text-center">{title}</h3>
       <h2>{techs}</h2>
       <h3>{body}</h3> 
      </div>
    );
    
}

export default Header;