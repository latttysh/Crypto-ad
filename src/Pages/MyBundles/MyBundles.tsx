import React, { FunctionComponent } from 'react';
import s from "./mybundles.module.scss"
// import {ReactComponent as Arrow} from "../../assets/img/MyBundles/arrow.svg";
import MyBundleItem from "../../Components/MyBundleItem/MyBundleItem";

import Title from "../../Components/Title/Title";

interface OwnProps {}

type Props = OwnProps;

const MyBundles: FunctionComponent<Props> = (props) => {
  return (
      <div className={s.mybundles}>
        <Title title={"Мои связки"}/>
        <div className={s.fastbuy}>
          <div className={s.title}>Быстрая покупка</div>
          <div className={s.options}>
            <div className={s.named}>
              <span>Название связки (USDT/BNB)</span>
              {/*<Arrow/>*/}
            </div>
              <div className={s.bundle__count}>
                  <span className={s.name}>Количество связок</span>
                  <div className={s.count}>1 штука</div>
              </div>
              <div className={s.withdraw__count}>
                  <span className={s.name}>Количество связок</span>
                  <div className={s.count}>1 штука</div>
              </div>
          </div>
        </div>
          <div className={s.block}>
              <MyBundleItem/>
              <MyBundleItem/>
              <MyBundleItem/>
              <MyBundleItem/>
          </div>
      </div>
  );
};

export default MyBundles;
