import './App.scss';
import imageEquilibrium from './assets/images/image-equilibrium.jpg';
import avatar from './assets/images/image-avatar.png';
import view from './assets/images/icon-view.svg';
export default function App() {
  return (
    <main className="card-container">
      <div className="card">
        <div className="card-header">
          <img alt={imageEquilibrium} src={imageEquilibrium}></img>
          <div className="middle">
            <img alt={view} src={view} />
          </div>
        </div>
        <div className="card-body">
          <h2>Equilibrium #3429</h2>
          <p>Our Equilibrium collection promotes balance and calm.</p>
          <div>
            <span className="eth">0.041 ETH </span>
            <span className="days">3 days left</span>
          </div>
        </div>
        <hr />
        <div className="card-footer">
          <img alt={avatar} src={avatar} />
          <div>
            <span>Creation of</span>
            <span className="name">Jules Wyvern</span>
          </div>
        </div>
      </div>
    </main>
  );
}
