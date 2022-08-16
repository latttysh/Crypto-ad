import React, { FunctionComponent } from 'react';
import s from "./activatebundleitem.module.scss"
import img from "../../assets/img/ActivateBundleItem/img.png"

interface OwnProps {
}

type Props = OwnProps;

const ActivateBundleItem: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.activatebundleitem}>
          <img src={img} alt="img"/>
          <div className={s.title}>Название связки</div>
          <div className={s.stat}>
              <div className={s.stat__name}>Профит</div>
              <div className={s.stat__counter}>105%</div>
          </div>
          <div className={s.stat}>
              <div className={s.stat__name}>Период</div>
              <div className={s.stat__counter}>24ч</div>
          </div>
          <div className={s.deposit}>
              <div className={s.deposit__name}>
                  Депозит
              </div>
              <div className={s.deposit__counter}>
                  80-100$
              </div>
              <div className={s.deposit__input}>
                  <label>
                      Сумма депозита
                  </label>
                  <input type="text" placeholder={"80,000$"}/>
              </div>
          </div>
      </div>
  );
};

export default ActivateBundleItem;
