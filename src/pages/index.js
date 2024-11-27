import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  const extras = useSelector((state) => state.menuReducer.extras);
  if (extras) {
    const { categories } = extras;
    return (
      <div>
        <h1>What category are you looking for?</h1>
        <div
          style={{
            display: "inline-flex",
            width: "60%",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          {categories &&
            Object.keys(categories).map((item) => {
              return (
                <div key={item}>
                  <h2>{item}</h2>
                  <button
                    onClick={() => history.replace(item.toLocaleLowerCase())}
                  >
                    <img
                      style={{ width: "150px" }}
                      src={categories[item].icon}
                      alt="img"
                    />
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
  return <div>Loading...</div>;
};

export default Home;
