import { createReducer } from '../../app/common/util/reducerUtils';
import {
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_ERROR,
} from './asyncConstants';

const initialState = {
  loading: false,
  elementName: null,
};

const asyncActonStarted = (state, payload) => {
  return {
    ...state,
    loading: true,
    elementName: payload
  };
};

const asyncActonFinished = (state) => {
  return {
    ...state,
    loading: false,
    elementName: null
  };
};

const asyncActonError = (state) => {
  return {
    ...state,
    loading: false,
    elementName: null
  };
};

export default createReducer(initialState, {
  [ASYNC_ACTION_START]: asyncActonStarted,
  [ASYNC_ACTION_FINISH]: asyncActonFinished,
  [ASYNC_ACTION_ERROR]: asyncActonError,
});
