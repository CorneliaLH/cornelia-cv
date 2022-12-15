import "./scss/footer.css";
import github from "../../images/github.svg"
import linkedin from "../../images/linkedin.svg"
import envelope from "../../images/envelope.svg"

export function Footercomponent() {

    let arraySocialsLinks = [
        {
          href: "https://www.linkedin.com/in/cornelia-harder-140442222/",
          srcSVG: {linkedin},
          width: 32,
          height: 27,
          alt: "Linkedin-logo",
        },
        {
          href: "https://www.github.com/CorneliaLH",
          srcSVG: {github},
          width: 32,
          height: 32,
          alt: "Github-logo",
        },
      ];

    return (<>
    <footer className='footer' id="Socialt">
    <div className="footerContainer" id="Kontakt">
       <section className="socials">
       
          <article>
            <a href={"https://www.linkedin.com/in/cornelia-harder-140442222/"}>
            <img src={linkedin} alt={"Linkedin-logo"} />
            </a>
          </article>
          
          <article>
            <a href={"https://www.github.com/CorneliaLH"}>
            <img src={github} alt="Github-logo" />
            </a>
          </article>
       </section>
       <section className="copyright"><p>Copyright 2022</p></section>
       <section className="contact">
    
        <img src={envelope} alt="ikon brev"/> <a href="mailto:Cornelialisaharder@gmail.com"> Cornelialisaharder@gmail.com </a>
       </section>
       </div>
      </footer></>)
}