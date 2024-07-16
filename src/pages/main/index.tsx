import Layout from "../../app/layout";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store.ts";

const MainPage = () => {
  const cities = useSelector((state: RootState) => state.city.value);

  console.log(cities);

  return (
    <Layout>
      <div>
        <h1>MainPage</h1>
      </div>
    </Layout>
  );
};

export default MainPage;
