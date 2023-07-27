import Card from "./Card";
import { infoInnsbruck, infoMunich, infoParis, infoVancouver, infoRome, infoVaticano, infoBarcelona, infoLisboa, infoCappadocia, infoIstanbul } from "../data";


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
        cityInfo={ infoRome }
      />
      <Card
        cityInfo={ infoVaticano }
      />
      <Card
        cityInfo={ infoBarcelona }
      />
      <Card
        cityInfo={ infoLisboa }
      />
      <Card
        cityInfo={ infoIstanbul }
      />
      <Card
        cityInfo={ infoCappadocia }
      />
      <Card
        cityInfo={ infoVancouver }
      />   
    </div>
  )
}

export default CardList;
