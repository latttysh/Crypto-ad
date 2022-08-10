import React, { FunctionComponent } from 'react';
import Title from "../Title/Title";
import s from "./staticmodal.module.scss"

interface OwnProps {
    close: () => void
}

type Props = OwnProps;

const StaticModal: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.wrapper}>
        <div className={s.modal}>
          <Title title={"Выход"}/>
          <div className={s.text}>
            Вы собираетесь выйти из аккаунта. Вам потребуется снова ввести электронную почту и пароль от вашего аккаунта, чтобы снова войти в Crypto Arbit.
            <br/><br/>
            Вы хотите продолжить?
          </div>
          <div className={s.buttons}>
            <button className={s.exit}>Выйти</button>
            <button className={s.cancel} onClick={props.close}>Отмена</button>
          </div>
        </div>
      </div>
  );
};

export default StaticModal;
