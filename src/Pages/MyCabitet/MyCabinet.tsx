import React, { FunctionComponent } from 'react';
import s from "./mycabinte.module.scss"

interface OwnProps {}

type Props = OwnProps;

const MyCabinet: FunctionComponent<Props> = (props) => {
  return (
      <div className={s.title}>Hello</div>
  );
};

export default MyCabinet;
