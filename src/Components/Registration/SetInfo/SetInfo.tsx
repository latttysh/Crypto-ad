import React, {FunctionComponent} from 'react';
import s from "./setinfo.module.scss"
import bg from "../../../assets/img/Login/bg.png";
import Title from "../../Title/Title";
import memoji from "../../../assets/img/Registration/avatar.png";
import {useAppDispatch} from '../../../redux/store';
import {fetchLogin, fetchRegister} from "../../../redux/Slice/asyncActions";
import {useForm} from "react-hook-form";
import axios from "axios";
import {NavLink} from "react-router-dom";

interface OwnProps {
    next: () => void
}

type Props = OwnProps;


const SetInfo: FunctionComponent<Props> = (props) => {
    const dispatch = useAppDispatch();
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onRegisterClick = (params: any) => {
        // console.log(params)
        params["registerRequestFrontendBaseURL"] = "https://capi.envx.team/"
        dispatch(fetchRegister(params)).then((res) => {
            // @ts-ignore
            if (!res.error) {
                props.next()
            }
        })
    }

    return (
        <div className={s.wrapper}>
            <div className={s.registration} style={{backgroundImage: bg}}>
                <Title title={"Регистрация аккаунта"}/>
                <div className={s.block}>
                    <form onSubmit={handleSubmit(onRegisterClick)}>
                        <div className={s.input}>
                            <label>Ваш никнейм</label>
                            <input type="text" placeholder={"Никнейм"} {...register("registerRequestDisplayName")}/>
                        </div>
                        <div className={s.input}>
                            <label>Ваша электронная почта</label>
                            <input type="text" placeholder={"Электронная почта"} {...register("registerRequestEmail")}/>
                        </div>
                        <div className={s.input}>
                            <label>Реферальный код</label>
                            <input type="text" placeholder={"GRTEND80"} {...register("registerRequestReferrer")}/>
                        </div>
                        <div className={s.buttons}>
                            <button type={"submit"} className={s.enter}>Продолжить</button>
                            <NavLink to={"/"}>
                                <button className={s.cancel} type={"button"}>Отмена</button>
                            </NavLink>
                        </div>
                        <div className={s.forgot}>У Вас уже есть аккаунт? Войти</div>
                    </form>
                    <div className={s.img}>
                        <img src={memoji} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetInfo;
