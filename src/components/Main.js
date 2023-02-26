import Card from "./Card.js";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  userName,
  userDescription,
  userAvatar,
  cards,
  handleCardClick,
}) {
  return (
    <>
      <main>
        <section className="profile">
          <div className="profile__avatar-group">
            <button
              className="profile__button profile__button_type_avatar"
              onClick={onEditAvatar}
            ></button>
            <img
              src={userAvatar}
              alt="Фотография профиля"
              className="profile__avatar"
            />
          </div>

          <div className="profile__info">
            <div className="profile__name-group">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__button profile__button_type_edit"
                type="button"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__profession">{userDescription}</p>
          </div>
          <button
            className="profile__button profile__button_type_add"
            type="button"
            aria-label="Довавить фотографию"
            onClick={onAddPlace}
          ></button>
        </section>

        <section className="gallery" aria-label="Фотографии">
          <ul className="gallery__list">
            {cards.map((data) => {
              return (
                <Card
                  key={data._id}
                  link={data.link}
                  title={data.name}
                  like={data.likes.length}
                  onCardClick={handleCardClick}
                />
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
//
export default Main;
