import React, { FunctionComponent } from 'react';
import s from "./mycabinte.module.scss"
import Title from "../../Components/Title/Title";

interface OwnProps {}

type Props = OwnProps;

const MyCabinet: FunctionComponent<Props> = (props) => {
  return (
      <div className={s.cabinet}>
          <Title/>
      </div>
  );
};

export default MyCabinet;
