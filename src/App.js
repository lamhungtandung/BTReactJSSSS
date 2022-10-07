import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Content from './component/BTReactJS1/Content';
import Item from './component/BTReactJS1/Item';
import Footer from './component/BTReactJS1/Footer';
import Glasses from './component/BTReactJS2/Glasses';
import TitleGlasses from './component/BTReactJS2/TitleGlass';
import Shoe from './component/BTReactJS3/Shoe';
import BookSeat from './component/BTReactJS4/BookSeat';

function App() {
  return (
    <div className="App">
      <BookSeat/>
      {/* BT1 */}
      {/* <Header/>
      <Content/>
      <Item/>
  <Footer/> */}

      {/* BT2
      */}
      {/* <TitleGlasses/>
      <Glasses/> */}
      {/* BT3 */}
      {/* <Shoe/> */}
    </div>
  );
}

export default App;
