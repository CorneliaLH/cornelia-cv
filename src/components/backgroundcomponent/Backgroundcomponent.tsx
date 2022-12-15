
import { useEffect, useState } from "react";
import "./scss/background.css";

export function Backgroundcomponent() {
    
const [testBoolean, setTestBoolean] = useState(false)

   let arraySkills = [
      {
        heading: "HTML",
        bar: "95",
        id:"progress-bar1",
      },
      {
        heading: "CSS",
        bar: "90",
        id:"progress-bar2",
      },
      {
        heading: "Javascript",
        bar: "90",
        id:"progress-bar3",
      },
      {
        heading: "Typescript",
        bar: "60",
        id:"progress-bar4",
      },
      {
        heading: "Reactjs",
        bar: "80",
        id:"progress-bar5",
      },
      {
        heading: "Angular",
        bar: "50",
        id:"progress-bar6",
      },
      {
        heading: "MySQL",
        bar: "50",
        id:"progress-bar7",
      },
      {
        heading: "NoSQL",
        bar: "50",
        id:"progress-bar8",
      },
      {
        heading: "Hubl",
        bar: "40",
        id:"progress-bar9",
      }
      
    ];


  
    

   function showProgress() {
 
   setTestBoolean(true)
    }
   
    function hideProgress() {
  
  setTestBoolean(false)
    }


   function handleScroll(){
 
    if (window.scrollY > 250 ){
      showProgress()
    } else {
      hideProgress()
    }
   }

    window.addEventListener("scroll", handleScroll)




    

    return (
      <>
      <div className="backgroundContainer" id="Front-end kunskaper">
   <section className="backgroundArticleLeft">
   <h2 id="skillsHeading">Front-end kunskaper (egenvärdering)</h2>
   <div className="scaleOptionsContainer">

   <div className="scaleContainer">
   <p>Förlåt, vad sa du?</p>
 
   <p>Absolut, det kan jag!</p>

   <p>Jag är grym!</p>
   </div>
   </div>
<article className="articleSkills" id="articleSkills">
<ul className="skillsBarContainer1">
 {arraySkills.map((skillitem =>
      <li className="skillsBarContainer2" key={skillitem.id} >
        <h4>{skillitem.heading}</h4>
        <div className="progress">
           <div className="progress-bar" id={skillitem.id} style={testBoolean ? {width:skillitem.bar + "%",transition: "all 2s"}:{width:"0%",transition: "all 2s"}}>
          
           </div>
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