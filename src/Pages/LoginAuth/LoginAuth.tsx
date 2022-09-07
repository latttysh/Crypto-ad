import React, { FunctionComponent } from 'react';
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {useAppDispatch} from '../../redux/store';
import {fetchLogin, fetchLoginReq} from "../../redux/Slice/asyncActions";

interface OwnProps {}

type Props = OwnProps;

const LoginAuth: FunctionComponent<Props> = (props) => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const params = useParams()
  React.useEffect(()=> {
    dispatch(fetchLogin(params.id as string)).then((res:any)=> {
      if (!res.error){
        navigate("/")
      }
    })
  },[])
  return (
      <div>LOADING</div>
  );
};

export default LoginAuth;
