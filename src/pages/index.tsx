import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import Testimonials from '../components/Sections/Testimonials';

const Home: FC = memo(() => {
  const title = 'React Resume Template';
  const description = "Example site built with Tim Baker's react resume template";

  return (
    <Page description={description} title={title}>
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
    </Page>
  );
});

export default Home;