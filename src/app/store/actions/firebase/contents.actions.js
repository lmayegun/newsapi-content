export function getFirebaseContents( payload ){
  return{
    type: "GET_FIREBASE_CONTENTS",
    payload
  };
};

export function setFirebaseContent( payload ){
  return{
    type: "SET_FIREBASE_CONTENT",
    payload
  };
};

export function createFirebaseContent( payload ){
  return{
    type: "CREATE_FIREBASE_CONTENT",
    payload
  };
};

export function updateFirebaseContent( payload ){
  return{
    type: "UPDATE_FIREBASE_CONTENT",
    payload
  };
};

export function deleteContent( payload ){
  return{
    type: "DELETE_FIREBASE_CONTENT",
    payload
  };
};
