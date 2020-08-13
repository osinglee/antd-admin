import React from 'react';
import { LoginStore } from './login';

export const storesContext = React.createContext({
	loginStore: new LoginStore(),
});
