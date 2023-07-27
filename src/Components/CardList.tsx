import Card from "./Card";
import { infoBuenos, infoMonte, infoSantiago, infoAssumption, infoPanamaCity, infoOrlando, infoMiami, infoInnsbruck, infoMunich, infoParis, infoVancouver, infoRome, infoVaticano, infoBarcelona, infoLisboa, infoCappadocia, infoIstanbul } from "../data";


function CardList() {
  return (
    <div className="card-list">
      <Card
        cityInfo={ infoBuenos }
      />
      <Card
        cityInfo={ infoMonte }
      />
      <Card
        cityInfo={ infoSantiago }
      />
      <Card
        cityInfo={ infoAssumption }
      />
      <Card
        cityInfo={ infoPanamaCity }
      />
      <Card
        cityInfo={ infoOrlando }
      />
      <Card
        cityInfo={ infoMiami }
      />
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
        cityInfo={ infoIstanbul }
      />
      <Card
        cityInfo={ infoCappadocia }
      />
      <Card
        cityInfo={ infoLisboa }
      />
      <Card
        cityInfo={ infoVancouver }
      />   
    </div>
  )
}

export default CardList;
