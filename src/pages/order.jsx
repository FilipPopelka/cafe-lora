import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/Header/header.jsx';
import { Footer } from '../components/Footer/footer.jsx';
import { Order } from '../components/Order/order.jsx';

const response = await fetch(`http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image
`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
  });

const data = await response.json();
const listOfDrinks = data.data;

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={false}/>
      <main className="order">
        <Order items={listOfDrinks} />
      </main>
      <Footer />
    </div>
  </div>
);
