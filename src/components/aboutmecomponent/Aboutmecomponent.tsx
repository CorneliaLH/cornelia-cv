import "./scss/aboutme.css";
import undraw_target_re_fi8j from "../../images/undraw_target_re_fi8j.svg";

export function Aboutmecomponent({ lang }: any) {
  return (
    <>
      <div className='aboutmeContainer'>
        <div className='bullseye'>
          <img
            src={undraw_target_re_fi8j}
            alt='Två personer brevid ett dart-bräde och en har fått en bulls eye'
            className='bulleyeimg'
            width='400'
            height='400'
          />
        </div>
        <div className='aboutmeQuote'>
          {lang === "se" ? (
            <p>
              "Att bygga hemsidor är som att lösa suduko hela dagarna, jag
              älskar problemlösningsdelen och att snabbt kunna se resultat.
              Efter 10 år som tandläkare är jag nu redo för nya utmaningar och
              det känns som att jag verkligen har hittat rätt!"
            </p>
          ) : (
            <p>
              "Building websites is like solving Sudoku puzzles all day, I love
              the problem-solving aspect and being able to quickly see results.
              After 10 years as a dentist, I am now ready for new challenges and
              it feels like I have really found my calling!"
            </p>
          )}
        </div>
      </div>
    </>
  );
}
