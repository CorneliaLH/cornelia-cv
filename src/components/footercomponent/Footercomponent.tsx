import "./scss/footer.css";
import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";
import envelope from "../../images/envelope.svg";

export function Footercomponent() {
  return (
    <>
      <footer className='footer' id='Socialt'>
        <div className='footerContainer' id='Kontakt'>
          <section className='socials'>
            <article>
              <a
                href={"https://www.linkedin.com/in/cornelia-harder-140442222/"}
              >
                <img
                  src={linkedin}
                  alt={"Linkedin-logo"}
                  width='35'
                  height='35'
                />
              </a>
            </article>

            <article>
              <a href={"https://www.github.com/CorneliaLH"}>
                <img src={github} alt='Github-logo' width='35' height='35' />
              </a>
            </article>
          </section>
          <section className='copyright'>
            <p>Copyright 2023</p>
          </section>
          <section className='contact'>
            <img src={envelope} alt='ikon brev' width='35' height='35' />{" "}
            <a href='mailto:Cornelialisaharder@gmail.com'>
              {" "}
              Cornelialisaharder@gmail.com{" "}
            </a>
          </section>
        </div>
      </footer>
    </>
  );
}
