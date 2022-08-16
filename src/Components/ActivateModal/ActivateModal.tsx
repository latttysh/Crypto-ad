import React, { FunctionComponent } from 'react';
import s from "./activatemodal.module.scss"
import Title from "../Title/Title";

import ActivateBundleItem from "../ActivateBundleItem/ActivateBundleItem";

interface OwnProps {
    close: ()=>void
}

type Props = OwnProps;

const ActivateModal: FunctionComponent<Props> = (props) => {
  return (
      <div className={s.wrapper}>
          <div className={s.modal}>
              <Title title={"Подтверждение активации"}/>
              <div className={s.subtitle}>Вы собираетесь активировать:</div>
              <ActivateBundleItem/>
              <div className={s.buttons}>
                  <button className={s.continue}>Продолжить</button>
                  <button className={s.cancel} onClick={props.close}>Отмена</button>
              </div>
          </div>
      </div>
  );
};

export default ActivateModal;
