import * as actionTypes from "../actions/actionTypes";
import { returnObject } from "../../utils";
const articlesInitialState = {
  articles: [],
  loading: false,
  error: null
};
export const articles = (state = articlesInitialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLES_START:
      return returnObject(state, { loading: true, error: null });
    case actionTypes.FETCH_ARTICLES_SUCCESS:
      return returnObject(state, { loading: false, articles: action.articles });
    case actionTypes.FETCH_ARTICLES_FAIL:
      return returnObject(state, { error: action.error, loading: false });
    default:
      return state;
  }
};

export default articles;
