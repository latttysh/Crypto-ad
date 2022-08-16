import React, { FunctionComponent } from 'react';
import s from "./successactivationmodal.module.scss"
import Title from "../Title/Title";
interface OwnProps {
  close: ()=> void
}

type Props = OwnProps;

const SuccessActivationModal: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.modal}>
        <Title title={"Успешная активация"}/>
        <div className={s.subtitle}>Связка «Название» успешно активирована! <br/>
          За статусом можете наблюдать в разделе «Мои связки».</div>
        <div className={s.buttons}>
          <button className={s.continue}>Мои связки</button>
          <button className={s.cancel} onClick={props.close}>Закрыть</button>
        </div>
      </div>
  );
};

export default SuccessActivationModal;
