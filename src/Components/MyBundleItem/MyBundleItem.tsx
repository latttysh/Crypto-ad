import React, { FunctionComponent } from 'react';
import s from "./mybundleitem.module.scss"
import img from "../../assets/img/Activate/item.png";
import SubtypeBundle from "../SubtypeBundle/SubtypeBundle";
import {ReactComponent as Cart} from "../../assets/img/Activate/cart.svg";
import hold from "../../assets/img/MyBundles/hold.png"

interface OwnProps {}

type Props = OwnProps;

const MyBundleItem: FunctionComponent<Props> = (props) => {
  return (
      <div className={s.mybundleitem}>
          <img src={hold} alt="" className={s.hold}/>
        <img src={img} alt="img" className={s.img}/>
        <div className={s.title}>Название связки</div>
        <div className={s.types}>
          <SubtypeBundle title={"BTC"}/>
          <SubtypeBundle title={"USDT"}/>
        </div>
        <div className={s.info}>
          <div className={s.deposit}>
            <div className={s.deposit__title}>Профит</div>
            <div className={s.counter}>105%</div>
          </div>
          <div className={s.period}>
            <div className={s.period__title}>Период</div>
            <div className={s.counter}>24ч</div>
          </div>
          <div className={s.status}>
            <div className={s.status__title}>Статус</div>
            <div className={s.counter}>Активна</div>
          </div>
          <div className={s.time}>
            <div className={s.time__title}>Осталось</div>
            <div className={s.counter}>Активна</div>
          </div>
        </div>

        <div className={s.profit}>
          <div className={s.profit__title}>Вы заработали</div>
          <div className={s.counter}>1 356,000$</div>
        </div>

        <div className={s.buttons}>
          <button className={s.extend}>Продлить</button>
          <button className={s.take}>Забрать</button>
        </div>
      </div>
  );
};

export default MyBundleItem;
