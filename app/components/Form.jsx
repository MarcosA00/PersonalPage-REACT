import React from "react";
import style from '../styles/Form.module.css'

function Form() {
  return (
    <div className={style.login}>
      <h4 className={style.identify}><span className={style.formSpan}>Identificate</span></h4>

      <form>
        <label htmlFor="name">
          Nombre
        </label>
        <input className={style.name} type="text" name="name" />

        <label htmlFor="email">
          Correo
        </label>
        <input className={style.email} type="text" name="email" />

        <label htmlFor="password">
          Contraseña
        </label>
        <input className={style.password} type="password" name="password" />

        <input className={style.submit} type="submit" value="Entrar" />
      </form>
    </div>
  );
}

export default Form;