import React, { FunctionComponent } from 'react';
import s from "./financeblock.module.scss"
import {ReactComponent as Btc} from "../../assets/img/MyCabinet/btc.svg"


interface OwnProps {}

type Props = OwnProps;

const FinanceBlock: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.financeblock}>
          <Btc/>
          <div className={s.block}>
              <div className={s.title}>
                  Bitcoin (BTC)
              </div>
              <div className={s.deposit}>
                  Депозитов: 0,000 BTC
              </div>
              <div className={s.earned}>Заработано: 0,000 BTC</div>
              <div className={s.count}>0,000</div>
          </div>
      </div>
  );
};

export default FinanceBlock;
