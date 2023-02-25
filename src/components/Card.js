function Card({ link, title, like, onCardClick }) {
  function handleClick() {
    onCardClick({ link, title });
  }
  return (
    <li className="gallery__list-item">
      <article className="card">
        <button className="card__delete-btn"></button>
        <img
          src={link}
          alt={`Фотография ${title}`}
          className="card__image"
          onClick={handleClick}
        />
        <div className="card__caption">
          <h2 className="card__title">{title}</h2>
          <div className="card__heart-group">
            <button
              type="button"
              className="card__heart-button"
              aria-label="Поставить лайк"
            ></button>
            <p className="card__like-number">{like}</p>
          </div>
        </div>
      </article>
    </li>
  );
}
export default Card;
