export function getNewsApiContents( payload ){
  return{
    type: "SET_NEWSAPI_CONTENTS",
    payload
  };
};

export function setNewsApiContent( payload ){
  return{
    type: "SET_NEWSAPI_CONTENT",
    payload
  };
};
