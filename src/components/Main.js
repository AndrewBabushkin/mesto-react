import React, { useEffect, useState } from "react";
import PopupEditProfile from "./PopupEditProfile.js";
import PopupEditAvatar from "./PopupEditAvatar.js";
import PopupAddCard from "./PopupAddCard.js";
import PopupRemoveCard from "./PopupRemoveCard.js";
import api from "../utils/Api.js";
import Card from "./Card.js";
import PopupZoomImage from "./PopupZoomImage.js";

function Main(props) {
  // переменные состояния
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isZoomImagePopupOpen, setIsZoomImagePopupOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  const [cards, setCard] = useState([]);

  const [selectedCard, setSelectedCard] = useState({});

  // отрытие попапов
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddCardClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleCardClick = (data) => {
    setSelectedCard(data);
    setIsZoomImagePopupOpen(true);
  };

  // закрытие попапов
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
    setIsZoomImagePopupOpen(false);
  };

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => console.log(`Error: ${err}`));
  });

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCard(data);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  return (
    <>
      <main>
        <section className="profile">
          <div className="profile__avatar-group">
            <batton
              className="profile__button profile__button_type_avatar"
              onClick={handleEditAvatarClick}
            ></batton>
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
                onClick={handleEditProfileClick}
              ></button>
            </div>
            <p className="profile__profession">{userDescription}</p>
          </div>
          <button
            className="profile__button profile__button_type_add"
            type="button"
            aria-label="Довавить фотографию"
            onClick={handleAddCardClick}
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
      <PopupEditProfile
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupAddCard isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <PopupEditAvatar
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <PopupZoomImage
        isOpen={isZoomImagePopupOpen}
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default Main;
