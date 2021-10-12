import "./App.css";
import image from "./img/Water.jpg";

function App() {
  let inputUserName = (
    <input type="text" className="inp px-3" placeholder="Username" />
  );
  let inputPassWord = (
    <input type="password" className="inp px-3" placeholder="Password" />
  );
  let button = <button className="btn1">SignUp</button>;
  let facebook = (
    <span>
      <em className="fa fa-facebook"></em>
    </span>
  );
  let googlePlus = (
    <span>
      <em className="fa fa-google-plus"></em>
    </span>
  );
  let twitter = (
    <span>
      <em className="fa fa-twitter"></em>
    </span>
  );
  let instagram = (
    <span>
      <em className="fa fa-instagram"></em>
    </span>
  );
  let youtube = (
    <span>
      <em className="fa fa-youtube"></em>
    </span>
  );
  return (
    <div className="App">
      <header className="App-header">
        <section className={"login py-5 bg-light"}>
          <div className={"container"}>
            <div className={"row g-0"}>
              <div className={"col-lg-5"}>
                <img src={image} className={"img-fluid"} alt="Water" />
              </div>
              <div className={"col-lg-7 text-center py-5"}>
                <h1 className={"animate__animated animate__heartBeat animate__infinite"}>
                  The water resource
                </h1>
                <form>
                  <div className={"form-row py-3 pt-5"}>
                    <div className={"offset-1 col-lg-10"}>{inputUserName}</div>
                  </div>
                  <div className={"form-row py-3"}>
                    <div className={"offset-1 col-lg-10"}>{inputPassWord}</div>
                  </div>
                  <div className={"form-row py-3"}>
                    <div className={"offset-1 col-lg-10"}>{button}</div>
                  </div>
                </form>
                <p>Or Login With</p>
                {facebook} {googlePlus} {twitter} {instagram} {youtube}
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
