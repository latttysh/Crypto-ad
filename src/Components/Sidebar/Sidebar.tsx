import React, { FunctionComponent } from 'react';
import s from "./sidebar.module.scss"

import {ReactComponent as ReactLogo} from "../../assets/img/Sidebar/logo.svg"
import {ReactComponent as MainPage} from "../../assets/img/Sidebar/main-page.svg";
import {ReactComponent as MyCabinet} from "../../assets/img/Sidebar/my-cabinet.svg";
import {ReactComponent as Cart} from "../../assets/img/Sidebar/cart.svg";
import {ReactComponent as MyCart} from "../../assets/img/Sidebar/my-cart.svg";
import {ReactComponent as Wallet} from "../../assets/img/Sidebar/wallet.svg";
import {ReactComponent as Referal} from "../../assets/img/Sidebar/referal.svg";
import {ReactComponent as News} from "../../assets/img/Sidebar/news.svg";
import {ReactComponent as Ad} from "../../assets/img/Sidebar/ad.svg";
import {ReactComponent as Support} from "../../assets/img/Sidebar/support.svg";

interface OwnProps {}

type Props = OwnProps;

const Sidebar: FunctionComponent<Props> = (props) => {
  return (
      <div className={s.sidebar}>
          <div className={s.logo}>
              <ReactLogo/>
          </div>
          <div className={s.sidebar__items}>
              <div className={(s.item, s.active)} style={{marginBottom: "30px"}}>
                  <MainPage/>
                  <span className={s.title}>Главная страница</span>
              </div>
              <div className={s.divider}>
                  <span className={s.title}>Управление аккаунтом</span>
                  <div className={s.line}></div>
              </div>
              <div className={s.item}>
                  <MyCabinet/>
                  <span className={s.title}>Мой кабинет</span>
              </div>
              <div className={s.item}>
                  <Cart/>
                  <span className={s.title}>Активировать связку</span>
              </div>
              <div className={s.item}>
                  <MyCart/>
                  <span className={s.title}>Мои связки</span>
              </div>
              <div className={s.item}>
                  <Wallet/>
                  <span className={s.title}>Финансы</span>
              </div>
              <div className={s.item}>
                  <Referal/>
                  <span className={s.title}>Реферальная программа</span>
              </div>
              <div className={s.divider}>
                  <span className={s.title}>Прочее</span>
                  <div className={s.line}></div>
              </div>
              <div className={s.item}>
                  <News/>
                  <span className={s.title}>Новости</span>
              </div>
              <div className={s.item}>
                  <Ad/>
                  <span className={s.title}>Рекламные материалы</span>
              </div>
              <div className={s.item}>
                  <Support/>
                  <span className={s.title}>Поддержка</span>
              </div>
          </div>
          <button className={s.button}>Выйти</button>
      </div>
  );
};

export default Sidebar;
