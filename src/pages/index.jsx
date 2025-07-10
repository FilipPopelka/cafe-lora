// index.jsx
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
      <Header />
      <main>
          <Banner />
          <Menu drinks={listOfDrinks} />
          <Gallery />
          <Contact />
      </main>
      <Footer />
    </div>
  );

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
