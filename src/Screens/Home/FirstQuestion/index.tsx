import c from 'classnames';
import { useEffect, useState } from 'react';

import classes from './FirstQuestion.module.css';

export const FirstQuestion = () => {
  const questions = [
    {
      title: 'Каким бы супом ты накормила медведя ?',
      questions: ['Грибной суп', 'Гороховый суп', 'Сырный суп', 'Тыквенный суп', 'Борщ'],
    },
    {
      title: 'Каким спортом занимается медведь ?',
      questions: [
        'Качается как качок',
        'Спит',
        'Бегает вокруг астрадамской улицы',
        'Бегает от мобилизации',
        'Качает пальчики на клавиатуре',
      ],
    },
    {
      title: 'Какой бы подарок хотел получить медведь ?',
      questions: [
        'Банку мёда',
        'Мышку',
        'Зубной вибратор',
        'Супиркомпутер',
        'Чехол для пихеля',
      ],
    },
    {
      title: 'Чем занимается медведь с мышью ?',
      questions: ['Спит', 'Кушоит', 'Играет', 'Бегает за ней', 'Бегает от неё'],
    },
    {
      title: 'Где бы стал жить медведь ?',
      questions: [
        'На астрадамской',
        'На дмитровском шоссе',
        'На 1 Мая',
        'В комзяковской берлоге',
        'Уснул бы на Механизаторов 113',
      ],
    },
    {
      title: 'Чем увлекается медведь ?',
      questions: [
        'Писать свой глупый код',
        'Читать новости',
        'Кататься на машинке с Мышей Анюшей',
        'Готовит с мышкой сюрприз Анюше',
        'Ест',
      ],
    },
  ];
  const [currentStep, setCurrentStep] = useState<number>(0);

  const currentQuestion = questions[currentStep];
  return (
    <div className={classes.firstModule}>
      <div className={classes.title}>{currentQuestion.title}</div>
      {currentQuestion.questions.map((question) => {
        return (
          <div key={question} className={classes.item}>
            <input
              type={'checkbox'}
              aria-checked={true}
              className={classes.itemCheckbox}
            />
            <div className={classes.itemTitle}>{question}</div>
          </div>
        );
      })}
      <div className={classes.emailButtonsContainer}>
        <div
          className={classes.emailButtonSucces}
          onKeyDown={() => {
            console.log('currentStep', currentStep, questions.length);
            currentStep + 1 < questions.length
              ? setCurrentStep(currentStep + 1)
              : currentStep;
          }}
          onClick={() => {
            console.log('currentStep', currentStep, questions.length);
            currentStep + 1 < questions.length
              ? setCurrentStep(currentStep + 1)
              : location.assign('/last');
          }}
          role={'button'}
          tabIndex={0}
        >
          Ответила
        </div>
        <div
          className={classes.emailButtonError}
          onKeyDown={() => {
            currentStep ? setCurrentStep(currentStep - 1) : currentStep;
          }}
          onClick={() => {
            currentStep ? setCurrentStep(currentStep - 1) : currentStep;
          }}
          role={'button'}
          tabIndex={0}
        >
          Мышка не принесла
        </div>
      </div>
    </div>
  );
};
