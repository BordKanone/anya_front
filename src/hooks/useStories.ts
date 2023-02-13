import { useContext } from 'react';

import { Store } from '../store';
import { StoresContext } from './context';

export const useStores = (): Store => useContext(StoresContext);
