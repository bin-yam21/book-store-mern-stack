import Banner from "./Banner";
import News from "./News";
import Recommended from "./Recommended";
import TopSellers from "./TopSellers";

function Home() {
  return (
    <div className="space-y-4">
      <Banner />
      <TopSellers />
      <Recommended />
      <News />
    </div>
  );
}

export default Home;
