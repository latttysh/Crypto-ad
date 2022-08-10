import React, { FunctionComponent } from 'react';
import s from "./activate.module.scss"
import Title from "../../Components/Title/Title";
import BundleItem from "../../Components/BundleItem/BundleItem";

interface OwnProps {}

type Props = OwnProps;

const Activate: FunctionComponent<Props> = (props) => {
  return (
      <div className={s.activate}>
        <Title title={"Активировать связку"}/>
          <div className={s.items}>
              <BundleItem/>
              <BundleItem/>
              <BundleItem/>
              <BundleItem/>
              <BundleItem/>
              <BundleItem/>
              <BundleItem/>
              <BundleItem/>
          </div>
      </div>
  );
};

export default Activate;
