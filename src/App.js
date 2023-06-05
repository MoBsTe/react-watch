import LeftBar from "./comnonents/LeftBar";
import './App.css'
import Waths from "./comnonents/Watchs";

function App() {

  const watchCatalog = [
    {
      id: 1,
      img: 'https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg',
      Type: 'MECHANICAL WATCHES',
      Price: 200,
    },
    {
      id: 2,
      img: 'https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg',
      Type: 'AUTOMATIC WATCHES',
      Price: 100,
    },
    {
      id: 3,
      img: 'https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg',
      Type: 'QUARTZ WATCHES',
      Price: 150,
    },
    {
      id: 4,
      img: 'https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg',
      Type: 'SOLAR WATCHES',
      Price: 50,
    },
    {
      id: 5,
      img: 'https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg',
      Type: 'TYPES OF WATCHES BY FUNCTIONALITY ',
      Price: 500,
    },
  ]


  return (
    <div className="App">
      <LeftBar watchCatalog={watchCatalog.Price} />
      <div className="items">
        {watchCatalog.map(watchCatalog => <Waths watchCatalog={watchCatalog} key={watchCatalog.id} />)}
      </div>
    </div>
  );
}

export default App;
