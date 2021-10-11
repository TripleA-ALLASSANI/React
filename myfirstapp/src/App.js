import './App.css';
import image from './img/Water.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section class="login py-5 bg-light">
          <div class="container">
            <div class="row g-0">
              <div class="col-lg-5">
                <img src={image} class="img-fluid" alt=""/>
              </div>
              <div class="col-lg-7 text-center py-5">
                <h1 class="animate__animated animate__heartBeat animate__infinite">The water resource</h1>
                
                <form>
                  <div class="form-row py-3 pt-5">
                    <div class="offset-1 col-lg-10">
                      <input type="text" class="inp px-3" placeholder="Username"/>
                    </div>
                  </div>
                  <div class="form-row py-3">
                    <div class="offset-1 col-lg-10">
                      <input type="password" class="inp px-3" placeholder="Password"/>
                    </div>
                  </div>
                  <div class="form-row py-3">
                    <div class="offset-1 col-lg-10">
                      <button class="btn1">SignUp</button>
                    </div>
                  </div>
                </form>
                <p>Or Login With</p>
                <span><em class="fa fa-facebook"></em></span>
                <span><em class="fa fa-google-plus"></em></span>
                <span><em class="fa fa-twitter"></em></span>
                <span><em class="fa fa-instagram"></em></span>
                <span><em class="fa fa-youtube"></em></span>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
