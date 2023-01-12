import "./scss/cover.css";
import Cornelia2 from "../../images/Cornelia2.webp";
import Cornelia2Tablet from "../../images/Cornelia2Tablet.webp";
import iconCar from "../../images/car1.svg";
import iconSki from "../../images/skiing.svg";
import iconSwim from "../../images/diving.svg";

export function Covercomponent() {
  return (
    <>
      <div className='containerCover' id='hem'>
        <div className='containerPresentation'>
          <section className='containerH1'>
            <h1 id='h1Cornelia'>
              Hej, jag heter Cornelia, och jag utbildar mig till Front-end
              utvecklare!
            </h1>

            <div className='divider'>
              <div></div>
            </div>
            <section className='interestContainer'>
              <article>
                <div className='iconImageContainer'>
                  <img
                    src={iconSwim}
                    alt='Ikon bada (intresse)'
                    width='100'
                    height='100'
                    className='intrestIcon'
                  />
                </div>
                <p className='iconText'>Badar gärna året om!</p>
              </article>
              <article>
                <div className='iconImageContainer'>
                  <img
                    src={iconCar}
                    alt='Ikon bil (intresse)'
                    width='68'
                    height='68'
                    className='intrestIcon'
                    id='iconCar'
                  />
                </div>
                <p className='iconText'>Veteranbil som heter Lizzie!</p>
              </article>
              <article>
                <div className='iconImageContainer'>
                  <img
                    src={iconSki}
                    alt='Ikon åka skidor (intresse)'
                    width='100'
                    height='100'
                    className='intrestIcon'
                  />
                </div>
                <p className='iconText'>Alpint JA! Längd NEJ!</p>
              </article>
            </section>
            <div className='divider'>
              <div></div>
            </div>
            <div className='buttonMailContainer'>
              <button className='button'>Maila mig</button>
            </div>
          </section>
          <div className='imageContainer'>
            <img
              src={Cornelia2}
              alt='Cornelia'
              className='imgCoverDesktop'
              width='400'
              height='533'
            />
            <img
              src={Cornelia2Tablet}
              alt='Cornelia'
              className='imgCoverTablet'
              width='400'
              height='400'
            />
          </div>
        </div>
      </div>
    </>
  );
}
