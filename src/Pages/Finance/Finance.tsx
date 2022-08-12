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
                  <div className={s.choose}>
                      <div className={s.choose__title}>Способ оплаты</div>
                      <div className={s.choose__block}>Bitcoin (BTC)</div>
                  </div>
                  <button className={s.button}>Пополнить</button>
              </div>
              <div className={s.withdraw}>
                  <div className={s.title}>Вывод средств</div>
                  <div className={s.input}>
                      <label>Сумма Вывода</label>
                      <input type="text" placeholder={"0,000$"}/>
                  </div>
                  <div className={s.choose}>
                      <div className={s.choose__title}>Валюта вывода</div>
                      <div className={s.choose__block}>Bitcoin (BTC)</div>
                  </div>
                  <button className={s.button}>Вывести средства</button>
              </div>
          </div>
          <div className={s.history}>
              <div className={s.title}>История транзакций</div>
              <table>
                  <thead>
                  <tr>
                      <th>Сумма</th>
                      <th>Тип транзакции</th>
                      <th>Дата</th>
                      <th>Статус</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td>1 000,000$</td>
                      <td>Вывод</td>
                      <td>10:13 <br/>
                          09/08/2022</td>
                      <td>В процессе</td>
                  </tr>
                  <tr>
                      <td>2 000,000$</td>
                      <td>Вывод</td>
                      <td>10:13 <br/>
                          09/08/2022</td>
                      <td>Ошибка</td>
                  </tr>
                  <tr>
                      <td>2 000,000$</td>
                      <td>Вывод</td>
                      <td>10:13 <br/>
                          09/08/2022</td>
                      <td>Ошибка</td>
                  </tr>
                  </tbody>
              </table>
          </div>
      </div>
  );
};

export default Finance;
