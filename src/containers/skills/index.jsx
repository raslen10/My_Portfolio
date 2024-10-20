import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import './styles.scss';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillsData.map((item, index) => (
          <div key={index} className="skills__content-wrapper__innercontent">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="skills__content-wrapper__innercontent__category-text">
                {item.name}
              </h3>
              <div className="skills__content-wrapper__innercontent__progressbar-container">
                {item.data.map((skillItem, subIndex) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity:0", "opacity:1"]}
                    iterationCount="1"
                    key={subIndex}
                  >
                    <div className="progressbar-wrapper">
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.Percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="2"
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
