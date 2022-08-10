import React, { FunctionComponent } from 'react';
import s from "./subtypebundle.module.scss"

interface OwnProps {
  title: string
}

type Props = OwnProps;

const SubtypeBundle: FunctionComponent<Props> = (props) => {
  return (
      <div className={s.subtype}>{props.title}</div>
  );
};

export default SubtypeBundle;
