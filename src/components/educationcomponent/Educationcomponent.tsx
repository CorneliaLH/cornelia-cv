import "./scss/education.css";

export function Educationcomponent() {
  let arrayEducation = [
    {
      heading: "Front End developer",
      time: "Medieinstitutet Yrkeshögskola / Från oktober 2021 med förväntad examen maj 2023",
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
  ];

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
          <h2 className='educationHeadingh3'>Utbildning</h2>

          <section className='educationText'>
            {arrayEducation.map((education) => (
              <article key={education.heading} id={education.id}>
                <h2
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
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='#59f9b4'
                    >
                      <path d='M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z' />
                    </svg>
                  ) : (
                    ""
                  )}
                </h2>
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
