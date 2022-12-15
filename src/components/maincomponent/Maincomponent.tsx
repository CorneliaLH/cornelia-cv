
import { Aboutmecomponent } from "../aboutmecomponent/Aboutmecomponent";
import { Backgroundcomponent } from "../backgroundcomponent/Backgroundcomponent";
import { Covercomponent } from "../covercomponent/Covercomponent";
import { Educationcomponent } from "../educationcomponent/Educationcomponent";
import { Footercomponent } from "../footercomponent/Footercomponent";
import { Workexperiencecomponent } from "../workexperiencecomponent/Workexperiencecomponent";


import "./scss/main.css";

export function Maincomponent() {
  return <>{<Covercomponent />}

  {<Backgroundcomponent />}

  {<Educationcomponent />}
  {<Workexperiencecomponent />}
  {<Aboutmecomponent />}
  {<Footercomponent />}</>;
}
