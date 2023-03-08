import "./scss/education.css";

export function Educationcomponent({ lang }: any) {
  let arrayEducation: any;
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
        id: "education4",
        id1: "eduCon4",
      },
      {
        heading: "Legal overview course",
        time: "Lund University / From March 2005 to June 2005",
        id: "education5",
        id1: "eduCon5",
      },
      {
        heading: "Rotary exchange student in Australia",
        time: "St Hildas School for Girls / From June 1999 to June 2000",
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
        id: "education4",
        id1: "eduCon4",
      },
      {
        heading: "Juridisk översiktskurs",
        time: "Lunds universitet / Från mars 2005 till juni 2005",
        id: "education5",
        id1: "eduCon5",
      },
      {
        heading: "Rotary utbytesstudent i Australien",
        time: "St Hildas School for Girls / Från juni 1999 till juni 2000",
        id: "education6",
        id1: "eduCon6",
      },
    ];
  }

  function moreInformationEducation(
    idFromClick: any,
    idCont: any,
    educationText: any
  ) {
    let educationContainer = document.getElementById(idCont);

    if (document.getElementById(idFromClick + 2) === null) {
      for (let i = 0; i < arrayEducation.length; i++) {
        if (arrayEducation[i].id === idFromClick) {
          let newText = document.createElement("li");

          if (educationText !== undefined) {
            newText.innerText = educationText;
            newText.id = idFromClick + 2;
            newText.className = "educationMoreText";
            educationContainer?.append(newText);
          }
        }
      }
    } else {
      let elementToRemove2 = document.getElementById(idFromClick + 2);
      elementToRemove2?.remove();
    }
  }
  return (
    <>
      <div className='educationContainer' id='Utbildning'>
        <div className='education'>
          <h2 className='educationHeadingh3'>
            {lang === "se" ? "Utbildning" : "Education"}
          </h2>

          <section className='educationText'>
            {arrayEducation.map((education: any) => (
              <article key={education.heading} id={education.id}>
                <h3
                  className='educationTitle'
                  onClick={() => {
                    moreInformationEducation(
                      education.id,
                      education.id1,
                      education.text
                    );
                  }}
                >
                  {education.heading}{" "}
                  {education.text ? (
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
                  ) : (
                    ""
                  )}
                </h3>
                <ul id={education.id1}>
                  <li className='educationTime'>{education.time}</li>
                </ul>
              </article>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
