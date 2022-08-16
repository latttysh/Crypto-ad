import React, { FunctionComponent } from 'react';
import s from "./holdmodal.module.scss";
import Title from "../Title/Title";
import example from "../../assets/img/HoldModal/example.jpg"

interface OwnProps {
  close: ()=>void
}

type Props = OwnProps;

const HoldModal: FunctionComponent<Props> = (props) => {

    const [isExampleVisible, setIsExampleVisible] = React.useState(false)

    const onOpenExampleClick =() => {
        setIsExampleVisible(!isExampleVisible)
    }
  return (
      <div className={s.wrapper}>
        <div className={s.modal}>
            <div className={s.block}>
                <div className={s.info}>
                    <Title title={"Холд"}/>
                    <div className={s.description}>
                        Холд - это возможность заработать больше. <br/> <br/>
                        После того как ваша связка прекратила работать, вы можете положить свои средства на холд. Прибыль от прошлого удержания попадает к вам на счёт, текущий депозит будет работать и процент прибыли будет увеличиваться каждый день на 1%. <br/><br/>
                        Максимальный срок хода - 7 дней.
                    </div>
                </div>
                <div className={s.options}>
                    <div className={s.days}>
                        <div className={s.name}>Количество дней</div>
                        <div className={s.counter}>
                            <div className={s.minus}>-</div>
                            <div className={s.count}>1</div>
                            <div className={s.plus}>+</div>
                        </div>
                    </div>
                    <div className={s.profit}>
                        <div className={s.profit__title}>Итоговая прибыль</div>
                        <div className={s.profit__count}>200,000$</div>
                    </div>
                    <button className={s.hold}>Поставить на холд</button>
                    <button className={s.cancel} onClick={props.close}>Закрыть</button>
                </div>
            </div>
            <div className={s.open__example} onClick={onOpenExampleClick}>Показать пример</div>
            {isExampleVisible && <img src={example} alt=""/>}
        </div>
      </div>
  );
};

export default HoldModal;
