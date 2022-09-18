import Layout from "./Layout";
import Discover from "./components/Discover";
import Item from "./components/Item";

import { albums, playlists, categories } from "./data/fake";
const albumItems = albums.map((item, index) => {
  return <Item key={index} {...item} />;
});

const playlistItems = playlists.map((item, index) => {
  return <Item key={index} {...item} />;
});

const categoryItems = categories.map((item, index) => {
  return <Item key={index} {...item} />;
});

function App() {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-y-6">
        <Discover name="New Releases">{albumItems}</Discover>
        <Discover name="Featured Playlists">{playlistItems} </Discover>
        <Discover name="Categories">{categoryItems}</Discover>
      </div>
    </Layout>
  );
}

export default App;
