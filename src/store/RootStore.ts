import { action, makeObservable, observable } from 'mobx';

export class RootStore {
  constructor() {
    makeObservable(this, {
      loading: observable,
      error: observable,
      setLoading: action,
      setError: action,
    });
  }

  @observable loading = true;
  @observable error: any | null = null;

  @action setLoading(isLoading: boolean) {
    this.loading = isLoading;
  }

  @action setError(error: any) {
    this.error = error;
  }
}
