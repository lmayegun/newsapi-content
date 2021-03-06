import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import _ from '@lodash';
import database from '../../../firebase/firebase';

import {newsApiKey} from 'config/apiKeys';

function* setNewsApiContents( {payload} ){
  try{
    const query = payload.query ? payload.query : null;
    const country = payload.country ? payload.country : 'gb';
    const category = payload.category ? payload.category : 'health';

    let request = '';
    if(!query){
      request = yield axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&${newsApiKey}`)
                            .then((response)=>{
                              return response.data.articles.map((item)=>{
                                return _.assignIn(item, {category}, {country});
                              });
                            })
    }else{
      request = yield axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&q=${query}&${newsApiKey}`)
                            .then((response)=>{
                              return response.data.articles.map((item)=>{
                                return _.assignIn(item, {category}, {country});
                              });
                            })
    }
    yield put({
               type:"NEWSAPI_CONTENTS_SUCCESS",
               payload: request
              })
  }catch(e){

  }
};

function* setNewsApiContent({payload}){
  try{
    // alert(payload.title);
    payload.tags = [];
    yield put({
               type:"NEWSAPI_CONTENT_SUCCESS",
               payload
              })
  }catch(e){

  }
};

function* saveNewsApiContent({payload}){
  try{
    database.ref(`articles/${payload.category}`).push({
      ...payload
    });
    yield put({
               type:"SAVE_NEWSAPI_CONTENT_SUCCESS",
               payload
              })
  }catch(e){

  }
};

export const newsApiSagas = [
  takeLatest('SET_NEWSAPI_CONTENTS', setNewsApiContents),
  takeLatest('SET_NEWSAPI_CONTENT', setNewsApiContent),
  takeLatest('SAVE_NEWSAPI_CONTENT', saveNewsApiContent),
]
