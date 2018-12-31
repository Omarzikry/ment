import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchArticlesSuccess = (articlesArray) => {
    return{
        type: actionTypes.FETCH_ARTICLES_SUCCESS,
        articles: articlesArray
    };
};
export const fetchArticlesFail = (error) => {
    return{
        type: actionTypes.FETCH_ARTICLES_FAIL,
        error: error
    };
};
export const fetchArticlesStart = () => {
    return{
        type: actionTypes.FETCH_ARTICLES_START
    };
};
export const fetchArticles = () => {
    fetchArticlesStart();
    return dispatch => {
        axios.get('/articles.json')
            .then(res => {
                dispatch(fetchArticlesSuccess(res.data))
            })
            .catch(error => {
                dispatch(fetchArticlesFail(error))
            })
    }
};