import React, { FunctionComponent } from 'react';
import s from "./activatemodal.module.scss"
import Title from "../Title/Title";
import SuccessActivationModal from "../SuccessActivationModal/SuccessActivationModal";

import ActivateBundleItem from "../ActivateBundleItem/ActivateBundleItem";

interface OwnProps {
    close: ()=>void
}

type Props = OwnProps;

const ActivateModal: FunctionComponent<Props> = (props) => {

    const [isSuccess, setIsSuccess] = React.useState(false)
    const onContinueClick = () => {
        // props.close()
        setIsSuccess(true)
    }

  return (
      <div className={s.wrapper}>
          {isSuccess ? <SuccessActivationModal close={()=> props.close()}/> : <div className={s.modal}>
              <Title title={"Подтверждение активации"}/>
              <div className={s.subtitle}>Вы собираетесь активировать:</div>
              <ActivateBundleItem/>
              <div className={s.buttons}>
                  <button className={s.continue} onClick={onContinueClick}>Продолжить</button>
                  <button className={s.cancel} onClick={props.close}>Отмена</button>
              </div>
          </div>}

      </div>
  );
};

export default ActivateModal;
