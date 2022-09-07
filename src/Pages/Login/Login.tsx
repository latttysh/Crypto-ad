import React, {FunctionComponent} from 'react';
import s from "./login.module.scss"

import Title from "../../Components/Title/Title";

import memoji from "../../assets/img/Login/emoji.png"
import bg from "../../assets/img/Login/bg.png"
import {useForm} from "react-hook-form";
import {useAppDispatch} from '../../redux/store';
import {fetchLoginReq} from "../../redux/Slice/asyncActions";
import {log} from "util";


interface OwnProps {
}

type Props = OwnProps;

const Login: FunctionComponent<Props> = (props) => {
    const dispatch = useAppDispatch();

    const [isLogin, setIsLogin] = React.useState(false)
    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    const onLoginClick =(data: any) => {
        data["loginRequestFrontendBaseURL"] = "https://capi.envx.team"
        dispatch(fetchLoginReq(data)).then((res:any) => {
            if (!res.error) {
                setIsLogin(true)
            }
        })
    }

    return (
        <div className={s.wrapper}>
            <div className={s.login} style={{backgroundImage: bg}}>
                <Title title={"Авторизация"}/>
                <div className={s.block}>
                    {!isLogin ? <form onSubmit={handleSubmit(onLoginClick)}>
                        <div className={s.input}>
                            <label>Ваша электронная почта</label>
                            <input type="text" placeholder={"Электронная почта"} {...register("loginRequestEmail")}/>
                        </div>
                        <div className={s.buttons}>
                            <button className={s.enter}>Войти</button>
                            <button className={s.cancel}>Отмена</button>
                        </div>
                        <div className={s.forgot}>Забыли пароль? Восстановить</div>
                    </form> : <div>Письмо с авторизацией отправлена на вашу электронную почту</div>}
                    <div className={s.img}>
                        <img src={memoji} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
