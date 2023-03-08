import { Link } from "react-router-dom";
import "./scss/notfound.css";

export function NotFoundcomponent() {
  return (
    <>
      <div className='notfoundContainer'>
        <section className='notfoundBox'>
          <>
            <h1>Oupps! Something went wrong!</h1>
            <Link to='/'>Home</Link>
          </>
        </section>
      </div>
    </>
  );
}
