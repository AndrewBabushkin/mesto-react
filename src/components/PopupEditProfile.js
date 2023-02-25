import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupEditProfile({ isOpen, onClose }) {
  return (
    <>
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        textButton="Сохранить"
        isOpen={isOpen}
        onClose={onClose}
      >
        <input
          type="text"
          className="popup__input-field popup__input-field_type_name"
          name="editName"
          value="Имя"
          placeholder="Ваше имя"
          required
          id="name-input"
          minlength="2"
          maxlength="40"
        />
        <span className="name-input-error popup__input-error"></span>
        <input
          type="text"
          className="popup__input-field popup__input-field_type_profession"
          name="editProfession"
          value="Профессия"
          placeholder="Ваш род деятельности"
          required
          id="profession-input"
          minlength="2"
          maxlength="200"
        />
        <span className="profession-input-error popup__input-error"></span>
      </PopupWithForm>
    </>
  );
}
export default PopupEditProfile;
