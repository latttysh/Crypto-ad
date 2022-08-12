import React, {FunctionComponent} from 'react';
import s from "./referalblock.module.scss"
import avatar from "../../assets/img/MyCabinet/avatar.png";


interface OwnProps {
}

type Props = OwnProps;

const ReferalBlock: FunctionComponent<Props> = (props) => {
    return (
        <div className={s.referalblock}>
            <div className={s.avatar}>
                <div className={s.first__circle}>
                    <div className={s.second__circle}>
                        <img src={avatar} alt=""/>
                    </div>
                </div>
            </div>
          <div className={s.info}>
            <div className={s.nickname}>CryptoKit</div>
            <div className={s.email}>alex_cryptoinvestor@gmail.com</div>
          </div>
          <div className={s.stats}>
            <div className={s.item}>
              <div className={s.title}>Зарегистрирован</div>
              <div className={s.counter}>10/08/2022</div>
            </div>
            <div className={s.item}>
              <div className={s.title}>Прибыль</div>
              <div className={s.counter}>100 160,831$</div>
            </div>
            <div className={s.item}>
              <div className={s.title}>Уровень в реф.системе</div>
              <div className={s.counter}>3</div>
            </div>
          </div>

        </div>
    );
};

export default ReferalBlock;
