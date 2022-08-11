import React, { FunctionComponent } from 'react';
import s from "./finance.module.scss"
import Title from "../../Components/Title/Title";
interface OwnProps {}

type Props = OwnProps;

const Finance: FunctionComponent<Props> = (props) => {
  return (
      <div className={s.finance}>
          <Title title={"Финансы"}/>
          <div className={s.operations}>
              <div className={s.deposit}>
                  <div className={s.title}>Пополнение баланса</div>
                  <div className={s.input}>
                      <label>Сумма пополнения</label>
                      <input type="text" placeholder={"0,000$"}/>
                  </div>
              </div>
              <div className={s.withdraw}>
                  <div className={s.title}>Вывод средств</div>
                  <div className={s.input}>
                      <label>Сумма Вывода</label>
                      <input type="text" placeholder={"0,000$"}/>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Finance;
