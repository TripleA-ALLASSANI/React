import imageinsrc from "./imageInSrc.jpg";
import video from "./videos/myvideo.mp4"
import "./App.css";
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className={"imgoupe py-5 bg-light"}>
          <div className="container">
            <div className="row g-0">
              <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
                <h1 className="title red animate__animated animate__heartBeat animate__infinite">
                  Your name here
                </h1>
                <br />
                <div className={"col-lg"}>
                  <img
                    width={"100%"}
                    height={"10px"}
                    src={imageinsrc}
                    alt="scrimage"
                  />
                </div>
                <br />
                <div className={"col-lg"}>
                  <img
                    width={"100%"}
                    height={"10px"}
                    src="/imageInPublic.jpg"
                    alt="publicimage"
                  />
                </div>
              </div>
              <video width={320} height={240} contrôles>
                <source
                  src={video}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
