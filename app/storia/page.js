import Layout from '../../components/Layout';

export const metadata = { title: 'La Nostra Storia - Notte&Dì' };

export default function Storia() {
  return (
    <>

      <Layout
        activePage="storia"
        showCart={false}
        showCollLabel={false}
        showContatti={false}
        footer={
          <footer>
            <p>&copy; 2024 Notte&amp;Dì - Boutique Esclusiva di Lusso</p>
          </footer>
        }
      >
        <h2 className="welcome-title">COME TUTTO È INIZIATO</h2>

        <div className="timeline">

          <div className="timeline-container left">
            <div className="content-box">
              <h2>2010</h2>
              <p>Apertura della prima piccola boutique in centro. Nasce il sogno di portare eleganza e comfort nelle case dei nostri clienti, con una selezione di tessuti unici e pregiati.</p>
            </div>
          </div>

          <div className="timeline-container right">
            <div className="content-box">
              <h2>2015</h2>
              <p>Il negozio si espande. Introduciamo la collezione Uomo e una linea esclusiva di costumi da bagno che diventa subito il nostro punto di forza estivo.</p>
            </div>
          </div>

          <div className="timeline-container left">
            <div className="content-box">
              <h2>2019</h2>
              <p>Rinnovamento totale dei locali e lancio del servizio di sartoria su misura per pigiami in seta. La qualità dei nostri prodotti attira clienti da tutta la regione.</p>
            </div>
          </div>

          <div className="timeline-container right">
            <div className="content-box">
              <h2>2024</h2>
              <p>Nasce ufficialmente &ldquo;Notte&amp;Dì&rdquo; come lo conosci oggi. Un brand moderno che unisce la tradizione dell&apos;intimo di classe alle nuove tendenze della moda mare.</p>
            </div>
          </div>

        </div>
      </Layout>
    </>
  );
}
