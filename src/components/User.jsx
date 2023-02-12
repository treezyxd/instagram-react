import { useState } from "react";

export default function User() {

  const [name, setName] = useState("catanacomics");
  const [photo, setPhoto] = useState("assets/img/catanacomics.svg");

  const handleChangeName = () => {
    const name = prompt("Qual seu nome?");
    name ? setName(name) : alert("Nome invalido!");
  }

  const handleChangePhoto = () => {
    const url = prompt("Qual a url da foto?");
    url ? setPhoto(url) : alert("URL invalida!");
  }

  return (
    <div className="usuario">
        <img data-test="profile-image" className="profile-image" onClick={handleChangePhoto} src={photo} alt="imagem de perfil"/>
        <div className="texto">
          <span>
            <strong className="name" data-test="name" >{name}</strong>
            <ion-icon data-test="edit-name" onClick={handleChangeName} className="edit-name" name="pencil"></ion-icon>
          </span>
        </div>
     </div>
  )
}