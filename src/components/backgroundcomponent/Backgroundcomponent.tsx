import { useState } from "react";
import "./scss/background.css";

export function Backgroundcomponent({ lang }: any) {
  const [progressBoolean, setProgressBoolean] = useState(false);

  let arraySkills = [
    {
      heading: "HTML",
      bar: "95",
      id: "progress-bar1",
    },
    {
      heading: "CSS",
      bar: "90",
      id: "progress-bar2",
    },
    {
      heading: "Javascript",
      bar: "90",
      id: "progress-bar3",
    },
    {
      heading: "Typescript",
      bar: "60",
      id: "progress-bar4",
    },
    {
      heading: "Reactjs",
      bar: "80",
      id: "progress-bar5",
    },
    {
      heading: "Angular",
      bar: "45",
      id: "progress-bar6",
    },
    {
      heading: "Node.js",
      bar: "49",
      id: "progress-bar7",
    },
    {
      heading: "MySQL",
      bar: "42",
      id: "progress-bar8",
    },
    {
      heading: "NoSQL",
      bar: "53",
      id: "progress-bar9",
    },
    {
      heading: "Hubl",
      bar: "39",
      id: "progress-bar10",
    },
  ];

  function showProgress() {
    setProgressBoolean(true);
  }

  function hideProgress() {
    setProgressBoolean(false);
  }

  function handleScroll() {
    if (window.scrollY > 250) {
      showProgress();
    } else {
      hideProgress();
    }
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div className='backgroundContainer' id='Front-end kunskaper'>
        <section className='backgroundArticleLeft'>
          <h2 id='skillsHeading'>
            {" "}
            {lang === "se"
              ? "Front-end kunskaper (egenvärdering)"
              : "Front-end knowledge (self-evaluation)"}
          </h2>
          <div className='scaleOptionsContainer'>
            <div className='scaleContainer'>
              {lang === "se" ? (
                <>
                  {" "}
                  <p>Förlåt, vad sa du?</p>
                  <p>Absolut, det kan jag!</p>
                  <p>Jag är grym!</p>
                </>
              ) : (
                <>
                  <p>Sorry, what did you say?</p>
                  <p>Sure, I know that!</p>
                  <p>I'm!</p>
                </>
              )}
            </div>
          </div>
          <article className='articleSkills' id='articleSkills'>
            <ul className='skillsBarContainer1'>
              {arraySkills.map((skillitem) => (
                <li className='skillsBarContainer2' key={skillitem?.id}>
                  <h3>{skillitem?.heading}</h3>
                  <div className='progress'>
                    <div
                      className='progress-bar'
                      id={skillitem?.id}
                      style={
                        progressBoolean
                          ? {
                              width: skillitem?.bar + "%",
                              transition: "all 2s",
                            }
                          : { width: "0%", transition: "all 2s" }
                      }
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
