import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from '../../images/bvb.png';
import ImageTwo from '../../images/resume.png';
import ImageThree from '../../images/wirtz_musiala.png';
import ImageFour from '../../images/Scouting_Dashboard.png';
import ImageFive from '../../images/deug.png';
import './styles.scss';

const portfolioData = [
  {
    id: 2,
    name: 'Football Player Scouting',
    link: 'https://github.com/raslen10/Scouting_Football_Dashboard',
    image: ImageFour,
  },
  {
    id: 3,
    name: 'Resume Classification',
    link: 'https://github.com/raslen10/Resume_Classification',
    image: ImageTwo,
  },
  {
    id: 2,
    name: 'Wirtz VS Musiala',
    link: 'https://github.com/raslen10/Football-Player-Analysis-Project---BVB-2024-2025',
    image: ImageThree,
  },
  {
    id: 4,
    name: 'Drug Classification',
    link: 'https://github.com/raslen10/Drug_Classification_ML',
    image: ImageFive,
  },
];

const filterData = [
  {
    filterId: 1,
    label: 'All',
  },
  {
    filterId: 2,
    label: 'Dashboards',
  },
  {
    filterId: 3,
    label: 'Applications',
  },
  {
    filterId: 4,
    label: 'Machine Learning Models',
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter(item => item.id === filteredValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? 'active' : ''}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => setHoveredValue(index)}
              onMouseLeave={() => setHoveredValue(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img alt={item.name} src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => window.open(item.link, "_blank")}>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
