import React, { FunctionComponent } from 'react';
import s from "./setavatar.module.scss"
import bg from "../../../assets/img/Login/bg.png";
import Title from "../../Title/Title";
import memoji from "../../../assets/img/Registration/avatar.png";

interface OwnProps {
    next: ()=> void
}

type Props = OwnProps;

const SetAvatar: FunctionComponent<Props> = (props) => {
  return (
      <div className={s.wrapper}>
        <div className={s.setAvatar} style={{backgroundImage: bg}}>
          <Title title={"Выберите аватар"}/>
          <div className={s.text}>Привет, новый друг! Рады видеть тебя в нашей команде. Остался последний шаг — выбор аватара. Выбери из списка ниже, наиболее подходящий тебе вариант и нажми кнопку «Завершить регистрацию».</div>
          <div className={s.block}>
              <div className={s.avatars}>
                  <div className={s.item}>
                      <img src={memoji} alt=""/>
                  </div>
                  <div className={s.item}>
                      <img src={memoji} alt=""/>
                  </div>
                  <div className={s.item}>
                      <img src={memoji} alt=""/>
                  </div>
                  <div className={s.item}>
                      <img src={memoji} alt=""/>
                  </div>
                  <div className={s.item}>
                      <img src={memoji} alt=""/>
                  </div>
                  <div className={s.item}>
                      <img src={memoji} alt=""/>
                  </div>
                  <div className={s.item}>
                      <img src={memoji} alt=""/>
                  </div>
                  <div className={s.item}>
                      <img src={memoji} alt=""/>
                  </div>
                  <div className={s.item}>
                      <img src={memoji} alt=""/>
                  </div>
              </div>
              <div className={s.buttons}>
                <button type={"button"} className={s.enter} onClick={props.next}>Завершить регистрацию</button>
                <button className={s.cancel}>Отмена</button>
              </div>
          </div>
        </div>
      </div>
  );
};

export default SetAvatar;
