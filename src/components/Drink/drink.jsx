import './drink.css';
import { Layer } from '../Layer/layer.jsx';

const dataAssets = 'http://localhost:4000';

export const Drink = ({ id, name, ordered, image, layers }) => {
  return (
    <div id={id} className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={`${dataAssets}${image}`} alt={name} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((layer, index) => (
            <Layer key={index} color={layer.color} label={layer.label} />
          ))}
        </div>
      </div>
    <form className="drink__controls" data-id={id} data-ordered={ordered}>
        <input type="hidden" className="order-id" value="0" />
        {ordered ? (
          <button className="order-btn--ordered">Zrušit</button>
        ) : (
          <button className="order-btn">Objednat</button>
        )}  
      </form>
    </div>
  );
};