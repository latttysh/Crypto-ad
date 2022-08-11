import React, { FunctionComponent } from 'react';
import SetInfo from "../../Components/Registration/SetInfo/SetInfo";
import SetAvatar from "../../Components/Registration/SetAvatar/SetAvatar";
import Final from "../../Components/Registration/Final/Final";
interface OwnProps {}

type Props = OwnProps;

const Registration: FunctionComponent<Props> = (props) => {
    const [step, setStep] = React.useState(0)
    console.log(step)
  return (<div>
      {step === 0 && <SetInfo next={()=> setStep(step+1)}/>}
      {step === 1 && <SetAvatar next={()=> setStep(step+1)}/>}
      {step === 2 && <Final/>}
  </div>);
};

export default Registration;
