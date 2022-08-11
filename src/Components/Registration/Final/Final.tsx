import React, {FunctionComponent} from 'react';
import s from "./final.module.scss";
import bg from "../../../assets/img/Login/bg.png";
import Title from "../../Title/Title";
import memoji from "../../../assets/img/Registration/avatar.png";
import {NavLink} from "react-router-dom";

interface OwnProps {
}

type Props = OwnProps;

const Final: FunctionComponent<Props> = (props) => {

    return (
        <div className={s.wrapper}>
            <div className={s.final} style={{backgroundImage: bg}}>
                <Title title={"Регистрация аккаунта"}/>
                <div className={s.block}>
                    <div>
                        <div className={s.text}>Вы успешно зарегистрированы! Для входа используйте введённые данные.
                        </div>
                        <div className={s.buttons}>
                            <NavLink to={"/"}>n
                                <button type={"button"} className={s.enter}>Мой кабинет</button>
                            </NavLink>
                            <NavLink to={"/"}>
                                <button className={s.cancel}>На главную</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.img}>
                        <img src={memoji} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Final;
