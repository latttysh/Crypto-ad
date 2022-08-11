import React, { FunctionComponent } from 'react';
import s from "./setinfo.module.scss"
import bg from "../../../assets/img/Login/bg.png";
import Title from "../../Title/Title";
import memoji from "../../../assets/img/Registration/avatar.png";

interface OwnProps {
  next: () => void
}

type Props = OwnProps;

const SetInfo: FunctionComponent<Props> = (props) => {
  return (
      <div className={s.wrapper}>
        <div className={s.registration} style={{backgroundImage: bg}}>
          <Title title={"Регистрация аккаунта"}/>
          <div className={s.block}>
            <form>
              <div className={s.input}>
                <label>Ваш никнейм</label>
                <input type="text" placeholder={"Никнейм"}/>
              </div>
              <div className={s.input}>
                <label>Ваша электронная почта</label>
                <input type="text" placeholder={"Электронная почта"}/>
              </div>
              <div className={s.input}>
                <label>Пароль</label>
                <input type="password" placeholder={"********"}/>
              </div>
              <div className={s.input}>
                <label>Повторите пароль</label>
                <input type="password" placeholder={"********"}/>
              </div>
              <div className={s.input}>
                <label>Реферальный код, если имеется</label>
                <input type="text" placeholder={"GRTEND80"}/>
              </div>
              <div className={s.buttons}>
                <button type={"button"} className={s.enter} onClick={props.next}>Продолжить</button>
                <button className={s.cancel}>Отмена</button>
              </div>
              <div className={s.forgot}>У Вас уже есть аккаунт? Войти</div>
            </form>
            <div className={s.img}>
              <img src={memoji} alt=""/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SetInfo;
