import React, { FunctionComponent } from 'react';
import s from "./supportmodal.module.scss"
import Title from "../Title/Title";
import img from "../../assets/img/SupportModal/bg.png"
import memoji from "../../assets/img/SupportModal/memoji.png";

interface OwnProps {
    close: () => void
}

type Props = OwnProps;

const SupportModal: FunctionComponent<Props> = (props) => {
  return (
      <div className={s.wrapper}>
          <div className={s.modal}>
              <Title title={"Поддержка"}/>
              <div className={s.block}>
                  <div className={s.info}>
                      <div className={s.subtitle}>Возникли какие-то проблемы <br/> или появились вопросы?</div>
                      <div className={s.infotitle}>Способы связи</div>
                      <button className={s.button__info}>Написать письмо</button>
                      <button className={s.button__info}>Телеграм-поддержка</button>
                      <div className={s.infotitle}>Информационные каналы</div>
                      <button className={s.button__contact}>CryptoArbit в телеграме</button>
                      <button className={s.button__info} onClick={props.close}>Закрыть</button>

                  </div>
                  <img src={memoji} alt=""/>
              </div>
          </div>
      </div>
  );
};

export default SupportModal;
