import React, {useState, useEffect} from 'react';
import PuffLoader from "react-spinners/PuffLoader";
import './App.css';

import PromotionCard from './components/Promotion/Card/Card'

function App() {
  const [PreLoading, setPreLoading] = useState(false)

  useEffect(() => {
    setPreLoading(true)
    setTimeout(() => {
      setPreLoading(false)
    }, 1500);

  }, [])
  
  const promotion = {
    "id": 1,
    "title": "Kit Notebook Acer Aspire 3 + Mochila Green, AMD Ryzen 3 2200U Dual Core 2.5",
    "price": 2399,
    "imageUrl": "https://cdn.gatry.com/gatry-static/promocao/imagem_url/2631517face1861bc4f46ae154d387de.png",
    "url": "https://www.amazon.com.br/Notebook-Acer-Mochila-A315-41-R790-Mem%C3%B3ria/dp/B07YDWLV7S/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=gatry0b-20&linkId=e4a1146599e36741a720a6a952cbc328&language=pt_BR",
    "comments": [{
      "id": 1,
        "comment": "Valeu muito a pena comprar!"
    }]
  }

  return (
    <div className="App">
      {PreLoading ? <PuffLoader color={'#14B897'} loading={PreLoading} size={150} /> :
      <div>
        <PromotionCard promotion={promotion} />
        <PromotionCard promotion={promotion} />
        <PromotionCard promotion={promotion} />
      </div>}
    </div>
  );
}

export default App;
