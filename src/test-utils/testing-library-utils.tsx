import { QueryClient } from '@tanstack/react-query';
import { ReactElement } from 'react';

const queryClient = new QueryClient();

const render = (ui: ReactElement, {...renderOptions} = {}) => {
    const wrapper = ({children}: QueryProviderWrapperProps)
}
