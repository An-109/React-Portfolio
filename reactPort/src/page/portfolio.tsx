type PortfolioProps = {
  url: string;
  imageSrc: string;
  altText: string;
  title: string;
};

const Portfolio = ({ url, imageSrc, altText, title }: PortfolioProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={imageSrc} alt={altText} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default Portfolio;