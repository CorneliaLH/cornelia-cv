import "./scss/cover.css";
import Cornelia2 from "../../images/Cornelia2.webp";
import Cornelia2Tablet from "../../images/Cornelia2Tablet.webp";
import iconCar from "../../images/car1.svg";
import iconSki from "../../images/skiing.svg";
import iconSwim from "../../images/diving.svg";

export function Covercomponent({ lang }: any) {
  return (
    <>
      <div className='containerCover' id='hem'>
        <div className='containerPresentation'>
          <section className='containerH1'>
            <div className='containerPresText'>
              {lang === "se" ? (
                <h1 id='h1Cornelia'>
                  Hej, jag heter Cornelia, och jag utbildar mig till Front end
                  utvecklare!
                </h1>
              ) : (
                <h1 id='h1Cornelia'>
                  Hi, my name is Cornelia, and I am studying to becoma a Front
                  end developer
                </h1>
              )}

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
                  {lang === "se" ? (
                    <p className='iconText'>Badar gärna året om!</p>
                  ) : (
                    <p className='iconText'>Ocean swims all year around!</p>
                  )}
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
                  {lang === "se" ? (
                    <p className='iconText'>Veteranbil som heter Lizzie!</p>
                  ) : (
                    <p className='iconText'>Veteran car called Lizzie!</p>
                  )}
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
                  {lang === "se" ? (
                    <p className='iconText'>Alpint JA! Längd NEJ!</p>
                  ) : (
                    <p className='iconText'>Alpine YES! Cross country NO!</p>
                  )}
                </article>
              </section>

              <div className='divider'>
                <div></div>
              </div>
              <div className='buttonMailContainer'>
                <button
                  className='button'
                  onClick={() =>
                    (window.location.href =
                      "mailto:cornelialisaharder@gmail.com")
                  }
                >
                  {lang === "se" ? "Maila mig" : "Email me"}
                </button>
              </div>
            </div>

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
          </section>
        </div>
      </div>
    </>
  );
}
