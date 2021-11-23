
const main={
width:"100%",
  height:"80px",
  backgroundColor: "black",
//   backgroundColor: "linearGradient(90deg, rgba(5,1,75,1) 0%, rgba(9,9,121,1) 36%, rgba(58,179,204,1) 100%)", 
  color:"rgb(196, 196, 196)",
  display:"flex",
  justifyContent:"center",
  textAlign:"center",
  boxShadow: "2px 2px 10px 2px grey",
  top:"0px",
  zIndex: "10",
}

const inner = {
  width:"80%",
  height:"100%",
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  gap:"60px",
  textAlign:"center",
  fontWeight:"bold",
  color:"white",
} 

const item = {
    textDecoration:"none",
    color:"white",
}


function NavigationBar(){

    return(
        <div style={main}>
            <div style={inner}>
                <a className="link-white hidden sm:block"  href="#statistics" >Statistics</a>
                <a className="link-white hidden sm:block"  href="#purpose">Our Purpose</a>
                <a className="link-white  w-60 " href="#publix" >Daniel McCann-Sayles</a>
                <a className="link-white hidden sm:block" href="#about-us">About Us</a>
                <a className="link-white hidden sm:block" href="#partners">Partners</a>
            </div>
        </div>
    );
}

export default NavigationBar;