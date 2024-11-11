
export default function Fatter (){
    const footerStyle = {
        position: 'absolute' as 'absolute', 
        bottom: 0, 
        width: '100%', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem', 
        backgroundColor: 'blue',
        margin: 0, 
    };

    const linkStyle = {
        display: 'inline-block',
        margin: '0'
    };

    const imageStyle = {
        width: '3rem', 
        height: '3rem', 
        margin: '0'
    };

    const lastImageStyle = {
        width: '3rem',  
        height: '3rem', 
        margin: '0'
    };
    
    return(
    <footer  style={footerStyle}>
    <a href="https://github.com/An-109" style={linkStyle} >
        <img src="./src/assets/github-mark.png" alt="git hub"style={imageStyle}/>
    </a>
    <a href="linkedin.com/in/an-le-198b06333 "style={linkStyle}>
        <img src="./src/assets/link.png" alt="linkedIn" style={imageStyle}  />
    </a>
    <a href="instagram.com/doing.thingys/ "style={linkStyle}>
        <img src="./src/assets/insta.png" alt="Instagram"style={lastImageStyle}/>
    </a>
</footer>
    );
}