import React, {FunctionComponent} from 'react';
import s from "./statsblock.module.scss"
import {ReactComponent as Clock} from "../../assets/img/MyCabinet/clock.svg"

interface OwnProps {
}

type Props = OwnProps;

const StatsBlock: FunctionComponent<Props> = (props) => {
    return (
        <div className={s.statsblock}>
            <div className={s.circle}>
                <Clock/>
            </div>
            <div className={s.content}>
                <div className={s.title}>Вы на проекте</div>
                <div className={s.count}>5 дней</div>
            </div>
        </div>
    );
};

export default StatsBlock;
