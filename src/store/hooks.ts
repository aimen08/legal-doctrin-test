import { createTypedHooks } from 'easy-peasy';
import { Model } from './store';

const typedHooks = createTypedHooks<Model>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
