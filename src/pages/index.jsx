import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header.jsx';
import { Banner } from '../components/Banner/banner.jsx';
import { Menu } from '../components/Menu/menu.jsx';
import { Gallery } from '../components/Gallery/gallery.jsx';
import { Contact } from '../components/Contact/contact.jsx';
import { Footer } from '../components/Footer/footer.jsx';


  const response = await fetch('http://localhost:4000/api/drinks');
  const data = await response.json();
  const listOfDrinks = data.data;
  console.log(listOfDrinks);

  document.querySelector('#root').innerHTML = render(
    <div className="page">
      <Header showMenu={true} />
      <main>
          <Banner />
          <Menu drinks={listOfDrinks} />
          <Gallery />
          <Contact />
      </main>
      <Footer />
    </div>
  );

 document.querySelectorAll('.drink__controls').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const drinkId = form.dataset.id;
    const orderedDrink = form.classList.contains('ordered') || form.dataset.ordered === 'true';
    console.log(drinkId);
    console.log(orderedDrink);

    const body = [
      { op: 'replace', path: '/ordered', value: !orderedDrink }
    ];

    const response = await fetch(`http://localhost:4000/api/drinks/${drinkId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    console.log(result);
    window.location.reload();
  });
});


  const navBtn = document.querySelector('.nav-btn');
  const rolloutNav = document.querySelector('.rollout-nav');
  
  navBtn?.addEventListener('click', () => {
    rolloutNav?.classList.toggle('nav-closed');
  });

  rolloutNav?.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      rolloutNav.classList.add('nav-closed');
    }
  });
