import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function PopupEditAvatar({ isOpen, onClose }) {
  return (
    <>
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        textButton="Сохранить"
        isOpen={isOpen}
        onClose={onClose}
      >
        <input
          type="url"
          className="popup__input-field popup__input-field_type_avatar"
          name="avatar"
          value=""
          placeholder="Добавить фотографию"
          required
          id="avatar-input"
        />
        <span className="avatar-input-error popup__input-error"></span>
      </PopupWithForm>
    </>
  );
}

export default PopupEditAvatar;
