import {Catalog, Footer, Header, Navigation} from './components'

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <Footer />
    </>
  );
};
