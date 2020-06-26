import {put, takeLatest} from 'redux-saga/effects';
import _ from '@lodash';
import database from '../../../firebase/firebase';

function* getFirebaseContents({payload}){
  const {category} = payload;

  try{
    const request = yield database.ref(`articles/${category}`)
                            .once('value')
                            .then(function(snapshot) {
                              const articles = []
                              snapshot.forEach((child)=>{
                                  articles.push({
                                    id: child.key,
                                    ...child.val()
                                  })
                              })
                              return _.reverse(articles);
                            });
    yield put({type:"GET_FIREBASE_CONTENTS_SUCCESS",payload:request});
  }catch(e){

  }
}

function* deleteContent( {payload} ){
  const {category, id} = payload;

  try{
    const request = yield database.ref(`articles/${category}/${id}`)
                                  .remove()
                                  .then(()=>{
                                    return id;
                                  });
    yield put({type:"DELETE_FIREBASE_CONTENT_SUCCESS",payload:request});
  }catch(err){

  }
}

export const firebaseSagas = [
  takeLatest("GET_FIREBASE_CONTENTS", getFirebaseContents),
  takeLatest("DELETE_FIREBASE_CONTENT", deleteContent ),
]
