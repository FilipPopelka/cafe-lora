import './drink.css';
import { Layer } from '../Layer/layer.jsx';

export const Drink = ({ id, name, ordered, image, layers }) => {
  return (
    <div className="drinks-list">
            <div id={id} className="drink">
              <div className="drink__product">
                <div className="drink__cup">
                  <img src={image} />
                </div>
                <div className="drink__info">
                  <h3>{name}</h3>
                  <div className="layer">
                    <div className="layer__color" style={{ backgroundColor: '#613916' }}></div>
                    <div className="layer__label">espresso</div>
                  </div>
                </div>
              </div>
              <form className="drink__controls">
                <input type="hidden" className="order-id" value="0" />
                <button className="order-btn">
                  Objednat
                </button>
              </form>
            </div>

            <div id={id} className="drink">
              <div className="drink__product">
                <div className="drink__cup">
                  <img src={image} />
                </div>
                <div className="drink__info">
                  <h3>{name}</h3>
                  {layers.map((layer, index) => (
                    <Layer key={index} color={layer.color} label={layer.label} />
                  ))}
                </div>
              </div>
              <form className="drink__controls">
                <input type="hidden" className="order-id" value="1" />
                <button className="order-btn">
                  Objednat
                </button>
              </form>
            </div>

            <div id={id} className="drink">
              <div className="drink__product">
                <div className="drink__cup">
                  <img src={image} />
                </div>
                <div className="drink__info">
                  <h3>{name}</h3>
                  {layers.map((layer, index) => (
                    <Layer key={index} color={layer.color} label={layer.label} />
                  ))}
                </div>
              </div>
              <form className="drink__controls">
                <input type="hidden" className="order-id" value="2" />
                <button className="order-btn">
                  Objednat
                </button>
              </form>
            </div>
          </div>
  );
}