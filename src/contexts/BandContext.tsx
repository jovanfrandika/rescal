import React, { useReducer, createContext, Dispatch, ReducerAction, ReactNode } from 'react';

export interface Props {
  children: ReactNode;
}

export interface ActionInterface {
  type: string
}

export interface BandTypeInterface extends ActionInterface {
  value: boolean;
}

export interface BandValueInterface extends ActionInterface {
  value: Array<number>;
}

export type ActionTypes = BandTypeInterface | BandValueInterface;

export interface reducerState {
  isFive: boolean,
  bands: Array<number>,
}

export interface BandContextValue {
  state: reducerState;
  dispatch: Dispatch<ReducerAction<typeof reducer>>
}

const reducer = (state: reducerState, action: ActionTypes) => {
  switch (action.type) {
    case "UPDATE_BAND":
      return {
        ...state,
        bands: action.value as Array<number>
      };
    case "UPDATE_BAND_TYPE":
      return {
        ...state,
        isFive: action.value as boolean
      }
    default:
      throw new Error();
  }

};

const initialState: reducerState = {
  isFive: false,
  bands: [0, 0, 0, 0, 0],
}

export const BandContext = createContext<BandContextValue>({ state: initialState, dispatch: () => { } });

export const BandProvider: React.FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <BandContext.Provider value={value}>
      {children}
    </BandContext.Provider>
  )

}

export default BandProvider;