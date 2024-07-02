// pages/ssr-page.js

function SSR({ DonalData }) {
  return (
    <section>
      <h1>Donald</h1>
      <p>{DonalData}</p>
    </section>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("https://api.tronalddump.io/random/quote");
  const data = await response.json();

  return {
    props: {
      DonalData: data.value, // Assurez-vous de bien accéder à la donnée souhaitée
    },
  };
};

export default SSR;
