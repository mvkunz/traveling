type CityType = {
  cityInfo: {
    city: string,
    country: string,
    imageUrl: string,
    visited?: boolean,
  }
}

function Card({ cityInfo }: CityType) {
  const { city, country, imageUrl, visited } = cityInfo;
  return (
    <div className="all-together">
    <div className="card">
      <span className="city-span">{ city }</span>
      <span className="country-span">{ country }</span>
    </div>
    <div className="img-conditional">
      <img src={ imageUrl } alt={ city } />
      <span>{ visited ? <span className="already">Já fui!</span> : <span className="not-yet">Não fui (ainda..)</span>}</span>
    </div>
    </div>
  );
}

export default Card;
