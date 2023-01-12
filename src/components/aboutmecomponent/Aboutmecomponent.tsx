import "./scss/aboutme.css";
import undraw_target_re_fi8j from "../../images/undraw_target_re_fi8j.svg";

export function Aboutmecomponent() {
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
          <p>
            "Att bygga hemsidor är som att lösa suduko hela dagarna, jag älskar
            problemlösningsdelen och att snabbt kunna se resultat. Efter 10 år
            som tandläkare är jag nu redo för nya utmaningar och det känns som
            att jag verkligen har hittat rätt!"
          </p>
        </div>
      </div>
    </>
  );
}
