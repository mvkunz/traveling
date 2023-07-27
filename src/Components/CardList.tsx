import Card from "./Card";
import { infoAcapulco, infoCidadeDoCabo, infoParis } from "../data";


function CardList() {
  return (
    <div className="card-list">
      <Card
        cityInfo={ infoParis }
      />
      <Card
        cityInfo={ infoCidadeDoCabo }
      />
      <Card
        cityInfo={ infoAcapulco }
      />
    </div>
  )
}

export default CardList;
