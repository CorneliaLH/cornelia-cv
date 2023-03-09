import { Aboutmecomponent } from "../aboutmecomponent/Aboutmecomponent";
import { Backgroundcomponent } from "../backgroundcomponent/Backgroundcomponent";
import { Covercomponent } from "../covercomponent/Covercomponent";
import { Educationcomponent } from "../educationcomponent/Educationcomponent";
import { Footercomponent } from "../footercomponent/Footercomponent";
import { Languagecomponent } from "../languagecomponent/Languagecomponent";
import { Portfoliocomponent } from "../portfoliocomponent/Portfoliocomponent";
import { Workexperiencecomponent } from "../workexperiencecomponent/Workexperiencecomponent";

import "./scss/main.css";

export function MainEngcomponent() {
  return (
    <>
      {<Covercomponent lang={"en"} />}
      {<Backgroundcomponent lang={"en"} />}
      {<Workexperiencecomponent lang={"en"} />}
      {<Educationcomponent lang={"en"} />}
      {<Portfoliocomponent lang={"en"} />}
      {<Languagecomponent lang={"en"} />}
      {<Aboutmecomponent lang={"en"} />}
      {<Footercomponent />}
    </>
  );
}
