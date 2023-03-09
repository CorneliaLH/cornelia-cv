import { ILang } from "../../models/ILang";
import "./scss/language.css";

interface ILanguage {
  language: string;
  nrChecked: number;
}

export function Languagecomponent({ lang }: ILang) {
  let languageArray: ILanguage[];
  if (lang === "se") {
    languageArray = [
      {
        language: "Svenska",
        nrChecked: 5,
      },
      {
        language: "Engelska",
        nrChecked: 5,
      },
      {
        language: "Danska",
        nrChecked: 4,
      },
      {
        language: "Tyska",
        nrChecked: 3,
      },
    ];
  } else {
    languageArray = [
      {
        language: "Swedish",
        nrChecked: 5,
      },
      {
        language: "English",
        nrChecked: 5,
      },
      {
        language: "Danish",
        nrChecked: 4,
      },
      {
        language: "German",
        nrChecked: 3,
      },
    ];
  }
  return (
    <>
      <div className='languageContainer'>
        <section className='languageBox'>
          <h2 className='languageHeading'>
            {lang === "se" ? "Språkkunskaper" : "Language skills"}
          </h2>

          <div className='radioContainer'>
            {languageArray.map((item: ILanguage) => {
              return (
                <article key={item.language} className='languageArticle'>
                  <h3 className='languageRadioHeading'>{item.language}</h3>
                  <div className='inputRadio'>
                    <input
                      aria-label='radiobutton to snow languageskills'
                      type='radio'
                      defaultChecked={item.nrChecked >= 1 ? true : false}
                    ></input>

                    <input
                      aria-label='radiobutton to snow languageskills'
                      type='radio'
                      defaultChecked={item.nrChecked >= 2 ? true : false}
                    ></input>

                    <input
                      aria-label='radiobutton to snow languageskills'
                      type='radio'
                      defaultChecked={item.nrChecked >= 3 ? true : false}
                    ></input>

                    <input
                      aria-label='radiobutton to snow languageskills'
                      type='radio'
                      defaultChecked={item.nrChecked >= 4 ? true : false}
                    ></input>

                    <input
                      aria-label='radiobutton to snow languageskills'
                      type='radio'
                      defaultChecked={item.nrChecked >= 5 ? true : false}
                    ></input>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
