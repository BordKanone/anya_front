export type PhrasesType =
  | 'INCLUDE_MESSAGE_1'
  | 'INCLUDE_MESSAGE_2'
  | 'INCLUDE_MESSAGE_3'
  | 'INCLUDE_MESSAGE_4'
  | 'INCLUDE_MESSAGE_5'
  | 'INCLUDE_MESSAGE_6'
  | 'INCLUDE_MESSAGE_7'
  | 'INCLUDE_MESSAGE_8'
  | 'INCLUDE_MESSAGE_9'
  | 'INCLUDE_MESSAGE_10'
  | 'INCLUDE_MESSAGE_11'
  | 'INCLUDE_MESSAGE_12';
export const INCLUDE_PHRASE: { [key: string]: string } = {
  INCLUDE_MESSAGE_1: `Кажется это Аннушка Мышек пожаловала в наш волшебный медвежий лес`,
  INCLUDE_MESSAGE_2: `Мы очень ждали вас и вместе с волшебной мышкой припасли вам небольшой подарок`,
  INCLUDE_MESSAGE_3: `Ой, я не представился, извините пожалуйста`,
  INCLUDE_MESSAGE_4: `Меня зовут Михал Потапыч. Я Самый младший брат Лаврентия Медвежего`,
  INCLUDE_MESSAGE_5: `Вот теперь мы познакомились и мне следует проводить вас до нашей берлоги, где вам предстоит выполнить небольшое испытание`,
  INCLUDE_MESSAGE_6: `Оно не сложное и очень понравится вам`,
  INCLUDE_MESSAGE_7: `Я косолапый, так что пока мы будем ехать до берлоги, будет немного качать`,
  INCLUDE_MESSAGE_8: 'Ну что, пошлепаем ?',
  INCLUDE_MESSAGE_9: 'Вы справилсь!',
  INCLUDE_MESSAGE_10:
    'Только тот, кто истинно любит Лавра Мишентьева и весь наш волшебный мишаче-медвежий лес - выполнит этот тест',
  INCLUDE_MESSAGE_11: 'Чтож, теперь нам нужно прощаться! До скорой встречи',
  INCLUDE_MESSAGE_12: 'А вот и твой подарок!',
};

export enum INCLUDE_PHRASES {
  INCLUDE_MESSAGE_1 = 'INCLUDE_MESSAGE_1',
  INCLUDE_MESSAGE_2 = 'INCLUDE_MESSAGE_2',
  INCLUDE_MESSAGE_3 = 'INCLUDE_MESSAGE_3',
  INCLUDE_MESSAGE_4 = 'INCLUDE_MESSAGE_4',
  INCLUDE_MESSAGE_5 = 'INCLUDE_MESSAGE_5',
  INCLUDE_MESSAGE_6 = 'INCLUDE_MESSAGE_6',
  INCLUDE_MESSAGE_7 = 'INCLUDE_MESSAGE_7',
  INCLUDE_MESSAGE_8 = 'INCLUDE_MESSAGE_8',
  INCLUDE_MESSAGE_9 = 'INCLUDE_MESSAGE_9',
  INCLUDE_MESSAGE_10 = 'INCLUDE_MESSAGE_10',
  INCLUDE_MESSAGE_11 = 'INCLUDE_MESSAGE_11',
  INCLUDE_MESSAGE_12 = 'INCLUDE_MESSAGE_12',
}
