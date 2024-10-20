import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiPython, DiAndroid, DiGit } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";
import { AiFillDashboard, AiFillOpenAI } from "react-icons/ai";

const personalDetails = [
  {
    label: "Name",
    value: "Raslen Guesmi",
  },
  {
    label: "Age",
    value: "26",
  },
  {
    label: "Address",
    value: "Hammamet,8056, Tunisia",
  },
  {
    label: "Primary Email",
    value: "guesmiraslen2@gmail.com",
  },
  {
    label: "Secondary Email",
    value: "rasleng282@gmail.com",
  },
  {
    label: "Contact No",
    value: "+216 54930176",
  },
];

const jobSummary =
  "As a dedicated Data Scientist and Data Analyst with over a year of hands-on experience, I excel in developing and deploying machine learning models, particularly in NLP. I am proficient in Python, SQL, and NoSQL databases, with strong skills in data visualization using Power BI and Tableau. My robust mathematical background enhances my ability to perform complex data analysis and modeling. I have successfully turned data into actionable insights to drive decision-making and business strategy. My expertise lies in merging analytical skills with technical prowess to solve real-world problems.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0)",
            }}
          >
            <h3>Data Scientist | Data Analyst</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0)",
            }}
          >
            <div className="about__content__servicesWrapper__insertContent">
              <div>
                <DiPython size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <AiFillDashboard
                  size={60}
                  color="var(--yellow-theme-main-color)"
                />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiGit size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
