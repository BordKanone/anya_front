import { action, makeAutoObservable, makeObservable, observable } from 'mobx';

import { INCLUDE_PHRASE, INCLUDE_PHRASES } from '../components/constants/replics';
import { Store } from './index';
import { RootStore } from './RootStore';

class Bear extends RootStore {
  constructor(public root: Store) {
    super();
    this.phrase = '';

    makeObservable(this, {
      phrase: observable,
    });
  }

  phrase = '';

  @action getPhrase = (step: string) => {
    setTimeout(() => {
      this.phrase = INCLUDE_PHRASE[step];
    }, 500);
  };
}
