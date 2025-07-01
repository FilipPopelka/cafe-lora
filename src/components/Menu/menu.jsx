import './menu.css';
import { Drink } from '../Drink/drink.jsx';

export const Menu = () => {
    return (
        <section id="menu" className="menu">
        <div className="container">
          <h2>Naše nabídka</h2>
          <p className="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
          </p>
          <Drink
            id={0}
            name="Nejlepší Espresso"
            ordered={false}
            image="/cups/espresso.png"
            layers={[
              {
                color: '#613916',
                label: 'espresso',
              },
              {
                color: '#feeeca',
                label: 'mléčná pěna',
              },
            ]}
          />

          <div className="order-detail">
            <a href="/order.html">Detail objednávky</a>
          </div>
        </div>
      </section>
    );
}