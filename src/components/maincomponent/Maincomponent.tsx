import { Aboutmecomponent } from "../aboutmecomponent/Aboutmecomponent";
import { Backgroundcomponent } from "../backgroundcomponent/Backgroundcomponent";
import { Covercomponent } from "../covercomponent/Covercomponent";
import { Educationcomponent } from "../educationcomponent/Educationcomponent";
import { Footercomponent } from "../footercomponent/Footercomponent";
import { Languagecomponent } from "../languagecomponent/Languagecomponent";
import { Portfoliocomponent } from "../portfoliocomponent/Portfoliocomponent";
import { Workexperiencecomponent } from "../workexperiencecomponent/Workexperiencecomponent";

import "./scss/main.css";

export function Maincomponent() {
  return (
    <>
      {<Covercomponent lang={"se"} />}

      {<Backgroundcomponent lang={"se"} />}
      {<Workexperiencecomponent lang={"se"} />}
      {<Educationcomponent lang={"se"} />}
      {<Portfoliocomponent lang={"se"} />}
      {<Languagecomponent lang={"se"} />}
      {<Aboutmecomponent lang={"se"} />}
      {<Footercomponent />}
    </>
  );
}
