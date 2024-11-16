import './index.css';


type PortfolioItem = {
  url: string;
  imageSrc: string;
  altText: string;
  title: string;
};

interface PortfolioProps {
  items: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ items }) => {
  return (
    
    <div className="imgGeneral">
    <h2 className="portfolioTitle">Portfolio</h2>
    {items.map((item, index) => (
      <div key={index} className="imgtitle">
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <img
            src={item.imageSrc}  
            alt={item.altText}
            className="imgPort"
          />
        </a>
        <span className="hoverTitle">
          <span className="titleText">{item.title}</span>
          <a href="https://github.com/An-109" target="_blank" rel="noopener noreferrer" className="githubLink">
            <img src="./github-mark.png" alt="GitHub" className="githubIcon" />
          </a>
        </span>
      </div>
    ))}
  </div>
  );
};

export default Portfolio;