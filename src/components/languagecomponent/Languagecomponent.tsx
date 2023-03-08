import "./scss/language.css";

export function Languagecomponent({ lang }: any) {
  let languageArray: any;
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
            {languageArray.map((item: any) => {
              console.log(item.nrChecked);
              return (
                <article className='languageArticle'>
                  <h3 className='languageRadioHeading'>{item.language}</h3>
                  <div className='inputRadio'>
                    <input
                      type='radio'
                      checked={item.nrChecked >= 1 ? true : false}
                    ></input>

                    <input
                      type='radio'
                      checked={item.nrChecked >= 2 ? true : false}
                    ></input>

                    <input
                      type='radio'
                      checked={item.nrChecked >= 3 ? true : false}
                    ></input>

                    <input
                      type='radio'
                      checked={item.nrChecked >= 4 ? true : false}
                    ></input>

                    <input
                      type='radio'
                      checked={item.nrChecked >= 5 ? true : false}
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
