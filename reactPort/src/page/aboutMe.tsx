import Header from "./header";
import Fatter from "./footer";
export default function AboutMe(){
    const header1: React.CSSProperties = {
        fontSize: "21px",
        color: "black",
        paddingLeft: "20px",
       
        display: "flex",
        justifyContent: "flex-start", 
        alignItems: "flex-start",      
        position: "absolute",          
        top: '20px',                  
        left: '20px',                 
      };
      
      const paragraphStyle: React.CSSProperties = {
        position: "absolute",        
        top: "120px",                   
        left: "30px",                
       
        textAlign: "center",         
      };
    return(
        
        <header>
            
            <h1 style={header1}>
                About Me
            </h1 >
            <p style={paragraphStyle}>My name is An Le, I am currently a student learning programming and is planning to enter college for computer science. I currently am learning to code in a programming bootcamp.</p>
           
        </header>
    );
}