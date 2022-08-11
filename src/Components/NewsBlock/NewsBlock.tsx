import React, {FunctionComponent} from 'react';
import s from "./newsblock.module.scss"
import img from "../../assets/img/News/img.png"

interface OwnProps {
}

type Props = OwnProps;

const NewsBlock: FunctionComponent<Props> = (props) => {

    const [full, setFull] = React.useState(false)

    const onMoreClick = () => {
        setFull(!full)
    }

    return (
        <div className={s.newsblock}>
            <img src={img} alt="img" className={s.img}/>
            <div className={s.title}>ЗаголовокЗаголовокЗаголовокЗаголовок</div>
            <div className={s.date}>09/08/2022 14:31</div>
            <div className={s.text} style={{maxHeight: full ? "100%" : "168px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus urna lacus porttitor facilisis. Nisl,
                facilisis pulvinar donec malesuada orci dui id est. Mauris velit eu egestas interdum. Malesuada pretium
                molestie diam sit in suspendisse magna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus urna lacus porttitor facilisis. Nisl,
                facilisis pulvinar donec malesuada orci dui id est. Mauris velit eu egestas interdum. Malesuada pretium
                molestie diam sit in suspendisse magna.
            </div>
            <div className={s.more} onClick={onMoreClick}>
                {full ? "Свернуть" : "Показать больше"}
            </div>
        </div>
    );
};

export default NewsBlock;
