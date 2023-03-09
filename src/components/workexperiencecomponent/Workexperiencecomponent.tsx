import { useState } from "react";
import { ILang } from "../../models/ILang";
import "./scss/workexperience.css";

interface IWork {
  title: string;
  item1: string;
  item2: string;
  id: string;
  idcont: string;
}

export function Workexperiencecomponent({ lang }: ILang) {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [currentId, setCurrentId] = useState("");

  let workArray: IWork[];

  if (lang === "en") {
    workArray = [
      {
        title: `TeQflo`,
        item1:
          "Front-end developer (internship) / From October 2022 to December 2022 and February 2023 to present",
        item2: `About the role: Gained experience working as a consultant in web development. Worked with Hubspot CMS, as well as with Hubl and Javascript.`,
        id: "work1",
        idcont: "workCont1",
      },
      {
        title: "Copenhagen Municipality",
        item1: `Specialist dentist / From August 2020 to April 2021`,
        item2: `About the role: The role involved extensive experience in teamwork and delegation. Worked for the Copenhagen municipality providing orthodontic treatment to children and teenagers. The treatments included both removable and fixed appliances, including treatments with skeletal anchorage.`,
        id: "work2",
        idcont: "workCont2",
      },
      {
        title: "Region Jämtland Härjedalen",
        item1: "Specialist dentist / From September 2018 to June 2020",
        item2: `About the role: Gained experience with fixed appliances and skeletal anchorage, and also served as a supervisor for our dental hygienist in her thesis work for the orthodontic assistant training program.`,
        id: "work3",
        idcont: "workCont3",
      },
      {
        title: "Næstved Municipality",
        item1: "Specialist dentist / From September 2016 to May 2018",
        item2: `About the role: Worked in children's and youth dental care. Gained experience with fixed appliances and skeletal anchorage.`,
        id: "work4",
        idcont: "workCont4",
      },
      {
        title: `Frösöstrand Public Dental Clinic`,
        item1: "Dentist / From September 2010 to June 2013",
        item2: `About the role: Worked with both children's and adult dental care. Specialized in orthodontics.`,
        id: "work5",
        idcont: "workCont5",
      },
      {
        title: `TT-Line`,
        item1: "Cabin attendant / Summer job from 2002 to June 2010",
        item2: `About the role: On the ferries, I worked in the reception, cafeteria, and shop for about 2 months each summer, which provided extensive customer service experience.`,
        id: "work6",
        idcont: "workCont6",
      },
      {
        title: `Gaustablikk Mountain Hotel`,
        item1: "Café / Seasonal work from November 2003 to April 2004",
        item2: `About the role: The work at the ski center involved responsibility for food and beverage service.`,
        id: "work7",
        idcont: "workCont7",
      },
      {
        title: `Au-pair in Dortmund`,
        item1: "Nanny / Seasonal work from September 2002 to March 2003",
        item2: `About the role: Took care of a 4-year-old boy and improved my knowledge of German.`,
        id: "work8",
        idcont: "workCont8",
      },
    ];
  } else {
    workArray = [
      {
        title: `TeQflo`,
        item1:
          "Front-end utvecklare (LIA) / Från oktober 2022 till december 2022 och februari 2023 till nu",
        item2: `Kort om rollen: Fått erfarenhet att arbeta som konsult inom Webbutveckling. Arbetat i Hubspot CMS, och med Hubl och Javascript.`,
        id: "work1",
        idcont: "workCont1",
      },
      {
        title: "Köpenhamns Kommun",
        item1: `Specialisttandläkare / Från augusti 2020 till april 2021`,
        item2: `Kort om rollen: Rollen innebär stor erfarenhet av teamarbete och delegering. Arbetade kommunalt i Köpenhamns kommun med ortodontisk behandling av barn och ungdomar. Behandlingarna inkluderar både avtagbar apparatur och fast apparatur inklusive behandlingar med skeletal förankring.`,
        id: "work2",
        idcont: "workCont2",
      },
      {
        title: "Region Jämtland Härjedalen",
        item1: "Specialisttandläkare / Från september 2018 till juni 2020",
        item2: `Kort om rollen: Fått erfarenhet av behandling med fast apparatur och med skeletal förankring samt varit handledare för vår tandhygienist i hennes examensarbete till ort-assistent utbildningen.`,
        id: "work3",
        idcont: "workCont3",
      },
      {
        title: "Næstved Kommun",
        item1: "Specialisttandläkare / Från september 2016 till maj 2018",
        item2: `Kort om rollen: Arbetat i barn och ungdomstandvården. Har fått erfarenhet av behandling med fast apparatur och med skeletal förankring.`,
        id: "work4",
        idcont: "workCont4",
      },
      {
        title: `Frösöstrand Folktandvård`,
        item1: "Tandläkare / Från september 2010 till juni 2013",
        item2: `Kort om rollen: Arbetade med både barn- och vuxentandvård. Nischad inom Ortodonti.`,
        id: "work5",
        idcont: "workCont5",
      },
      {
        title: `TT-line`,
        item1: "Kabinvärdinna / Sommarjobb 2002 till juni 2010",
        item2: `Kort om rollen: På fartygen har jag arbetat i receptionen, cafeterian och shoppen ca 2 månader varje sommar, detta medför stor service och kundvana.`,
        id: "work6",
        idcont: "workCont6",
      },
      {
        title: `Gaustablikk Höjfjellshotell`,
        item1: "Café / Säsongsarbete november 2003 till april 2004",
        item2: `Kort om rollen: Arbetet på skidcentret innebar ansvar för mat och dryckesservering.`,
        id: "work7",
        idcont: "workCont7",
      },
      {
        title: `Au-pair i Dortmund`,
        item1: "Barnflicka / Säsongsarbete september 2002 till mars 2003",
        item2: `Kort om rollen: Tog hand om en 4 årig pojke samt förbättrade mina kunskaper i Tyska.`,
        id: "work8",
        idcont: "workCont8",
      },
    ];
  }

  return (
    <>
      <div className='workexperienceContainer' id='Arbetslivserfarenhet'>
        <div className='workexperience'>
          <h2 className='workHeadingh3'>
            {" "}
            {lang === "se" ? "Arbetslivserfarenhet" : "Work experience"}
          </h2>
          <div className='workText'>
            {workArray.map((work: IWork) => (
              <div key={work.title}>
                {" "}
                <h3
                  className='workTitle'
                  onClick={(e) => {
                    if (showSubMenu === true && work.idcont !== currentId) {
                      setShowSubMenu(false);
                      setCurrentId(work.idcont);
                    } else if (
                      showSubMenu === false &&
                      work.idcont === currentId
                    ) {
                      setCurrentId("");
                      setShowSubMenu(false);
                    } else if (
                      showSubMenu === true &&
                      work.idcont === currentId
                    ) {
                      setCurrentId("");
                      setShowSubMenu(false);
                    } else if (showSubMenu === false) {
                      setCurrentId(work.idcont);
                    }
                  }}
                >
                  {work.title}{" "}
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
                <ul id={work.idcont} className='containerWork'>
                  {currentId == work.idcont ? (
                    <>
                      <li className='workInfo'>{work.item1}</li>
                      <li className='workMoreText'>{work.item2}</li>
                    </>
                  ) : (
                    <></>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
