import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupAddCard({ isOpen, onClose }) {
  return (
    <>
      <PopupWithForm
        name="add-card"
        title="Новое место"
        textButton="Создать"
        isOpen={isOpen}
        onClose={onClose}
      >
        <input
          type="text"
          className="popup__input-field popup__input-field_type_title"
          name="name"
          value=""
          placeholder="Название места"
          required
          id="title-input"
          minlength="2"
          maxlength="30"
        />
        <span className="title-input-error popup__input-error"></span>
        <input
          type="url"
          className="popup__input-field popup__input-field_type_image"
          name="link"
          value=""
          placeholder="Добавить фотографию"
          required
          id="image-input"
        />
        <span className="image-input-error popup__input-error"></span>
      </PopupWithForm>
    </>
  );
}

export default PopupAddCard;
