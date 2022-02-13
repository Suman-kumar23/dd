import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
import { isMultiple } from "../utils";
import DashboardMap from "../components/DashboardMap";

const Home = ({ properties }) => {
  console.log(properties);
  return (
    <>
      {properties && (
        <div className="main">
          <div className="feed-container">
            <h1>Places to Stay near you</h1>
            <div className="feed">
              {properties.map((property, index) => (
                // eslint-disable-next-line react/jsx-key
                <Link href={`property/${property.slug.current}`}>
                  <div className="card" key={property._id}>
                    <img src={urlFor(property.mainImage)} />
                    <p>
                      {property.reviews.length} review
                      {isMultiple(property.reviews.length)}
                    </p>
                    <h3>{property.title}</h3>
                    <h3>
                      <b>${property.pricePerNight} /per Night</b>
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="map">
            <DashboardMap properties={properties} />
          </div>
        </div>
      )}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "property"]';
  const properties = await client.fetch(query);

  if (!properties.length) {
    return {
      props: {
        properties: [],
      },
    };
  } else {
    return {
      props: {
        properties,
      },
    };
  }
};
export default Home;
