// Si ricarica a ogni cambio pagina: barra rosa in alto + dissolvenza del contenuto
export default function Template({ children }) {
  return (
    <>
      <div className="route-bar" aria-hidden="true" />
      <div className="page-fade">{children}</div>
    </>
  );
}
