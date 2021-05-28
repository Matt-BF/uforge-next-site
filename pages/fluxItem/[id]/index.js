import { server } from "../../../config";
import Card from "../../../components/Card";

const fluxItem = ({ fluxItem }) => {
  return (
    <div>
      <h1>{fluxItem.title}</h1>
      <div>
        <p>{fluxItem.description}</p>
      </div>
      <h2>Linha</h2>
      <div className="flex">
        {fluxItem.items.map((item, idx) => (
          <Card key={idx} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/fluxes/${context.params.id}`);
  const fluxes = await res.json();

  return {
    props: {
      fluxes,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/fluxes`);

  const fluxes = await res.json();
  const ids = fluxes.map((flux) => flux.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default fluxItem;
