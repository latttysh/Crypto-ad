import React, {FunctionComponent} from 'react';
import s from "./referal.module.scss"
import Title from "../../Components/Title/Title";

interface OwnProps {
}

type Props = OwnProps;

const Referal: FunctionComponent<Props> = (props) => {
    return (
        <div className={s.referal}>
            <Title title={"Реферальная программа"}/>
            <div className={s.block}>
                <div className={s.refgrid}>
                    <div className={s.title}>Моя реферальная сетка</div>
                    <div className={s.stats}>
                        <div className={s.refcount}>
                            <div className={s.reftitle}>Привлечено рефералов</div>
                            <div className={s.count}>20</div>
                        </div>
                        <div className={s.refpay}>
                            <div className={s.refpay__title}>
                              Заработано с рефералов всего
                            </div>
                          <div className={s.counter}>16 531,655$</div>
                          <div className={s.valute}>394 381,33₽</div>
                        </div>
                    </div>
                  <div className={s.reflink}>
                    <div className={s.reflink__title}>Ваша реферальная ссылка</div>
                    <div className={s.link}>www.cryptoarbit.com/ref=135413887</div>
                  </div>
                  <div className={s.refcode}>
                    <div className={s.refcode__title}>Реферальный код</div>
                    <div className={s.code}>GRTEND80</div>
                  </div>
                </div>
              <div className={s.refback}>
                <div className={s.title}>Реф-бек</div>
                <form>
                  <div className={s.input}>
                    <label>Никнейм или электронная почта пользователя</label>
                    <input type="text" placeholder={"Nickname / email@gmail.com"}/>
                  </div>
                  <div className={s.input}>
                    <label>Сумма реф-бека</label>
                    <input type="text" placeholder={"0,000$"}/>
                  </div>
                  <button className={s.button}>Сделать реф-бек</button>
                </form>
                <div className={s.switchblock}>
                  <label className={s.switch}>
                    <input type="checkbox"/>
                      <span className={s.slider}></span>
                  </label>
                  <div className={s.switchblock__title}>Производить реф-бек автоматически</div>
                </div>
              </div>
            </div>
          <div className={s.myreferals}>
            <div className={s.title}>Мои рефералы</div>
          </div>
        </div>
    );
};

export default Referal;
