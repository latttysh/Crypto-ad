import React, { FunctionComponent } from 'react';
import s from "./news.module.scss"
import Title from "../../Components/Title/Title";
import NewsBlock from "../../Components/NewsBlock/NewsBlock";

interface OwnProps {}

type Props = OwnProps;

const News: FunctionComponent<Props> = (props) => {
  return (
      <div className={s.news}>
          <Title title={"Новости"}/>
          <div className={s.block}>
              <NewsBlock/>
              <NewsBlock/>
              <NewsBlock/>
              <NewsBlock/>
              <NewsBlock/>
              <NewsBlock/>
              <NewsBlock/>
          </div>
      </div>
  );
};

export default News;
