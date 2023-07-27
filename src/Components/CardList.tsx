import Card from "./Card";
import { infoInnsbruck, infoMunich, infoParis, infoVancouver, infoRome } from "../data";


function CardList() {
  return (
    <div className="card-list">
      <Card
        cityInfo={ infoParis }
      />
      <Card
        cityInfo={ infoMunich }
      />
      <Card
        cityInfo={ infoInnsbruck }
      />
            <Card
        cityInfo={ infoVancouver }
      />    
      <Card
        cityInfo={ infoRome }
      />
    </div>
  )
}

export default CardList;
