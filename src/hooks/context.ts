import { createContext } from 'react';

import { Store } from '../store';

export const StoresContext = createContext(new Store());
