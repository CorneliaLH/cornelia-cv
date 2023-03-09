import { useState } from "react";
import { ILang } from "../../models/ILang";
import "./scss/education.css";

interface IEducation {
  heading: string;
  time: string;
  text: string;
  id: string;
  id1: string;
}

export function Educationcomponent({ lang }: ILang) {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [currentId, setCurrentId] = useState("");

  let arrayEducation: IEducation[];
  if (lang === "en") {
    arrayEducation = [
      {
        heading: "Front End developer",
        time: "Medieinstitutet Vocational College / From October 2021 with expected graduation in June 2023",
        text: "About the education: The Front End Developer education provides competence to use the web technology required to produce advanced websites, including JavaScript, version control, frameworks, HTML, CSS, web design, and usability/UX. The education includes everything from programming languages to knowledge in developing mobile web applications.",
        id: "education1",
        id1: "eduCon1",
      },
      {
        heading: "Specialist dental education",
        time: "University of Copenhagen / From September 2013 to October 2016",
        text: "About the education: The education includes both clinical and theoretical teaching in orthodontics, practice, mandatory courses, and final examination. The education has also resulted in me being almost fluent in speaking and writing the Danish language.",
        id: "education2",
        id1: "eduCon2",
      },
      {
        heading: "Dental education",
        time: "Malmö University / From October 2005 to June 2010",
        text: "About the education: The dental education was conducted according to PBL, problem-based learning, which means that the studies are based on case studies and problem solving.",
        id: "education3",
        id1: "eduCon3",
      },
      {
        heading: "English A",
        time: "Lund University / From August 2004 to December 2004",
        text: "",
        id: "education4",
        id1: "eduCon4",
      },
      {
        heading: "Legal overview course",
        time: "Lund University / From March 2005 to June 2005",
        text: "",
        id: "education5",
        id1: "eduCon5",
      },
      {
        heading: "Exchange student Australia",
        time: "Rotary Youth Exchange, St Hildas School for Girls / From June 1999 to June 2000",
        text: "",
        id: "education6",
        id1: "eduCon6",
      },
    ];
  } else {
    arrayEducation = [
      {
        heading: "Front End developer",
        time: "Medieinstitutet Yrkeshögskola / Från oktober 2021 med förväntad examen juni 2023",
        text: `Om utbildningen: Utbildningen Front End Developer ger kompetens att använda den webbteknik som krävs för att producera avancerade webbplatser, detta inkluderar JavaScript, versionshantering, ramverk, html, CSS, webbdesign och användbarhet/UX. Utbildningen innehåller allt från programmeringsspråk till kunskaper i utveckling av mobila webbapplikationer.`,
        id: "education1",
        id1: "eduCon1",
      },
      {
        heading: "Specialisttandläkarutbildning",
        time: "Köpenhamns universitet / Från september 2013 till oktober 2016",
        text: `Om utbildningen: Utbildningen omfattar både klinisk och teoretisk undervisning i tandreglering, praktik, obligatoriska kurser samt avslutande examination. Utbildnignen har även medfört att jag nästan är flytande i tal och skrift i det danska språket.`,
        id: "education2",
        id1: "eduCon2",
      },
      {
        heading: "Tandläkarutbildning",
        time: "Malmö högskola / Från oktober 2005 till juni 2010",
        text: `Om utbildningen: Tandläkarutbildningen bedrevs enligt PBL, problembaserat lärande, vilket innebär att studierna baseras på fallstudier och problemlösning.`,
        id: "education3",
        id1: "eduCon3",
      },
      {
        heading: "Engelska A",
        time: "Lunds universitet / Från augusti 2004 till december 2004",
        text: "",
        id: "education4",
        id1: "eduCon4",
      },
      {
        heading: "Juridisk översiktskurs",
        time: "Lunds universitet / Från mars 2005 till juni 2005",
        text: "",
        id: "education5",
        id1: "eduCon5",
      },
      {
        heading: "Utbytesstudent Australien",
        time: "Genom Rotary, St Hildas School for Girls / Från juni 1999 till juni 2000",
        text: "",
        id: "education6",
        id1: "eduCon6",
      },
    ];
  }

  return (
    <>
      <div className='educationContainer' id='Utbildning'>
        <div className='education'>
          <h2 className='educationHeadingh3'>
            {lang === "se" ? "Utbildning" : "Education"}
          </h2>

          <section className='educationText'>
            {arrayEducation.map((education: IEducation) => (
              <article key={education.heading} id={education.id}>
                <h3
                  className='educationTitle'
                  onClick={() => {
                    if (showSubMenu === true && education.id1 !== currentId) {
                      setShowSubMenu(false);
                      setCurrentId(education.id1);
                    } else if (
                      showSubMenu === false &&
                      education.id1 === currentId
                    ) {
                      setCurrentId("");
                      setShowSubMenu(false);
                    } else if (
                      showSubMenu === true &&
                      education.id1 === currentId
                    ) {
                      setCurrentId("");
                      setShowSubMenu(false);
                    } else if (showSubMenu === false) {
                      setCurrentId(education.id1);
                    }
                  }}
                >
                  {education.heading}{" "}
                  <svg
                    className='knowMoreIcon'
                    xmlns='http://www.w3.org/2000/svg'
                    width='35'
                    height='35'
                    viewBox='0 0 16 16'
                    fill='#59f9b4'
                  >
                    <path d='M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z' />
                  </svg>
                </h3>
                <ul id={education.id1}>
                  {currentId == education.id1 ? (
                    <>
                      <li className='educationTime'>{education.time}</li>
                      <li className='educationMoreText'>{education.text}</li>
                    </>
                  ) : (
                    <></>
                  )}
                </ul>
              </article>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
