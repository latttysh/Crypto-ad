import React, {FunctionComponent} from 'react';
import SubtypeBundle from "../SubtypeBundle/SubtypeBundle";
import s from "./bundleitem.module.scss"
import img from "../../assets/img/Activate/item.png"
import {ReactComponent as Cart} from "../../assets/img/Activate/cart.svg";

interface OwnProps {
}

type Props = OwnProps;

const BundleItem: FunctionComponent<Props> = (props) => {
    return (
        <div className={s.bundleitem}>
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
            </div>
            <div className={s.price}>
                <div className={s.price__counter}>100$</div>
                <div className={s.change}>
                    <span className={s.minus}>-</span>
                    <span className={s.change__counter}>1</span>
                    <span className={s.plus}>+</span>
                </div>
            </div>
            <button className={s.button}>
                <Cart/>
                <span>Активировать связку</span>
            </button>
        </div>
    );
};

export default BundleItem;
