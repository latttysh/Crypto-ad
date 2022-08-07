import React, {FunctionComponent} from 'react';
import s from "./title.module.scss"

interface OwnProps {
    title: string
}

type Props = OwnProps;

const Title: FunctionComponent<Props> = (props) => {

    return (
        <div className={s.block}>
            <div className={s.line}></div>
            <div className={s.title}>{props.title}</div>
        </div>
    );
};

export default Title;
