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
    <div>
      <span>{ city }</span>
      <span>{ country }</span>
      <img src={ imageUrl } alt={ city } />
      <span>{ visited ? 'Já fui!' : 'Não fui (ainda..)'}</span>
    </div>
  );
}

export default Card;
