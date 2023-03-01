import {Header, Layout} from './components'

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <nav>
          <Layout className="navigation__container" />
        </nav>
        <section></section>
      </main>
      <footer></footer>
    </>
  );
};
