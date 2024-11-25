import './App.css';
import cheetah from './images/cheetah.jpeg';
import mandril from './images/mandril.jpg';
import whiteTiger from './images/white-tiger.jpg';

function App() {
  return (
    <div>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={cheetah} alt="Cheetah" />
          </div>
          <div className="card-back">
            <h1>Cheetah</h1>
            <p>
              The cheetah (Acinonyx jubatus) is a remarkable and distinctive large cat known for its incredible speed and agility.
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={mandril} alt="Mandrill" />
          </div>
          <div className="card-back">
            <h1>Mandrill</h1>
            <p>
              The mandrill (Mandrillus sphinx) is a species of Old World monkey native to the rainforests and coastal areas of central and western Africa.
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={whiteTiger} alt="White Tiger" />
          </div>
          <div className="card-back">
            <h1>White Tiger</h1>
            <p>
              The white tiger (Panthera tigris) is a rare color variant of the Bengal tiger (Panthera tigris tigris), which is a species of big cat found in the Indian subcontinent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
