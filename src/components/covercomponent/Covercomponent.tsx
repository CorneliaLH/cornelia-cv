import "./scss/cover.css";
import Cornelia2 from "../../images/Cornelia2.jpeg";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export function Covercomponent() {
  const h1Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // gsap.from("#h1Cornelia", { duration: 1, ease: "bounce.out", y: -200 });
  }, []);

  return (
    <>
      <div className='containerCover'>
        <div className='containerPresentation'>
          <section>
            <h1 ref={h1Ref} id='h1Cornelia'>
              Hej, jag heter Cornelia,<br></br> och jag utbildar mig till
              <br></br>
              Front-end utvecklare!
            </h1>
          </section>
          <div className='imageContainer'>
            <img src={Cornelia2} alt='Cornelia' className='imgCover' />
          </div>
        </div>
      </div>
    </>
  );
}
