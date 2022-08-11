import React, {FunctionComponent} from 'react';
import s from "./login.module.scss"

import Title from "../../Components/Title/Title";

import memoji from "../../assets/img/Login/emoji.png"
import bg from "../../assets/img/Login/bg.png"

interface OwnProps {
}

type Props = OwnProps;

const Login: FunctionComponent<Props> = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.login} style={{backgroundImage: bg}}>
                <Title title={"Авторизация"}/>
                <div className={s.block}>
                    <form>
                        <div className={s.input}>
                            <label>Ваша электронная почта</label>
                            <input type="text" placeholder={"Электронная почта"}/>
                        </div>
                        <div className={s.input}>
                            <label>Пароль</label>
                            <input type="password" placeholder={"********"}/>
                        </div>
                        <div className={s.buttons}>
                            <button className={s.enter}>Войти</button>
                            <button className={s.cancel}>Отмена</button>
                        </div>
                        <div className={s.forgot}>Забыли пароль? Восстановить</div>
                    </form>
                    <div className={s.img}>
                        <img src={memoji} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
