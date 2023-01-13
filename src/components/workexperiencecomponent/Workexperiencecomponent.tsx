import "./scss/workexperience.css";

export function Workexperiencecomponent() {
  let workArray = [
    {
      title: `TeQflo`,
      item1:
        "Front-end utvecklare (LIA) / Från oktober 2022 till december 2022",
      item2: `Fått erfarenhet att arbeta som konsult inom Webbutveckling. Arbetat i Hubspot CMS, och med Hubl och Javascript.`,
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
  ];

  function moreInformationWork(workId: any, workIdCont: any, workText: any) {
    let workexperienceContainer = document.getElementById(workIdCont);

    if (document.getElementById(workId + 2) === null) {
      for (let i = 0; i < workArray.length; i++) {
        if (workArray[i].id === workId) {
          let newText = document.createElement("li");

          if (workText !== undefined) {
            newText.innerText = workText;
            newText.id = workId + 2;
            newText.className = "workMoreText";
            workexperienceContainer?.append(newText);
          }
        }
      }
    } else {
      let elementToRemove2 = document.getElementById(workId + 2);
      elementToRemove2?.remove();
    }
  }

  return (
    <>
      <div className='workexperienceContainer' id='Arbetslivserfarenhet'>
        <div className='workexperience'>
          <h2 className='workHeadingh3'>Arbetslivserfarenhet</h2>
          <div className='workText'>
            {workArray.map((work) => (
              <div key={work.title}>
                {" "}
                <h3
                  className='workTitle'
                  onClick={() => {
                    moreInformationWork(work.id, work.idcont, work.item2);
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
                  <li className='workInfo'>{work.item1}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
