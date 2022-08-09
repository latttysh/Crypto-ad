import React, {FunctionComponent} from 'react';
import s from "./mycabinte.module.scss"
import Title from "../../Components/Title/Title";
import StatsBlock from "../../Components/StatsBlock/StatsBlock";
import FinanceBlock from "../../Components/FinanceBlock/FinanceBlock";
import avatar from "../../assets/img/MyCabinet/avatar.png"

interface OwnProps {
}

type Props = OwnProps;

const MyCabinet: FunctionComponent<Props> = (props) => {
    return (
        <div className={s.cabinet}>
            <Title title={"Информация пользователя"}/>
            <div className={s.user}>
                <div className={s.info}>
                    <div className={s.avatar}>
                        <div className={s.first__circle}>
                            <div className={s.second__circle}>
                                <img src={avatar} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={s.nickname}>Administrator</div>
                    <button className={s.edit}>Редактировать</button>
                </div>
                <div className={s.data}>
                    <div className={s.balance}>
                        <div className={s.block}>
                            <div className={s.header}>
                                <div className={s.title}>Ваш баланс:</div>
                                <div className={s.manage}>Управление балансом</div>
                            </div>
                            <div className={s.count}>1 000,000$</div>
                            <div className={s.valute}>60 727,27 RUB</div>
                        </div>
                    </div>
                    <div className={s.email__block}>
                        <div className={s.block}>
                            <div className={s.title}>Ваша электронная почта:</div>
                            <div className={s.email}>admin@cryptoarbit.com</div>
                        </div>
                    </div>
                    <div className={s.referal}>
                        <div className={s.block}>
                            <div className={s.title}>Ваша реферальная ссылка:</div>
                            <div className={s.link}>https://www.cryptoarbit.com/ref=135413887</div>
                        </div>
                    </div>
                    <div className={s.referal}>
                        <div className={s.block}>
                            <div className={s.title}>Ваша реферальная ссылка:</div>
                            <div className={s.link}>https://www.cryptoarbit.com/ref=135413887</div>
                        </div>
                    </div>
                    <div className={s.ip_address}>
                        <div className={s.block}>
                            <div className={s.title}>IP при регистрации:</div>
                            <div className={s.ip}>178.172.246.1</div>
                        </div>
                    </div>
                    <div className={s.auth}>
                        <div className={s.block}>
                            <div className={s.title}>Журналы авторизации:</div>
                            <div className={s.ip}>178.172.246.1</div>
                            <div className={s.ip}>178.172.246.1</div>
                            <div className={s.ip}>178.172.246.1</div>
                            <div className={s.ip}>178.172.246.1</div>
                            <div className={s.ip}>178.172.246.1</div>
                        </div>
                    </div>

                </div>
            </div>
            <Title title={"Общая статистика"}/>
            <div className={s.stats}>
                <StatsBlock/>
                <StatsBlock/>
                <StatsBlock/>
                <StatsBlock/>
            </div>
            <Title title={"Финансовая статистика"}/>
            <div className={s.finance}>
                <FinanceBlock/>
                <FinanceBlock/>
                <FinanceBlock/>
                <FinanceBlock/>
                <FinanceBlock/>
                <FinanceBlock/>
            </div>
        </div>
    );
};

export default MyCabinet;
