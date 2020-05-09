//actionCreator
export const insert_account = function (object) {
  return ({
    type: 'INSERT_ACCOUNT',
    value: object
  })
};
export const select_account = (object) => ({
  type: 'SELECT_ACCOUNT',
  value: object
});
// const select_account_all = () => ({});
export const update_account = (object) => ({
  type: 'UPDATE_ACCOUNT',
  value: object
});
export const delete_account = (object) => ({
  type: 'DELETE_ACCOUNT',
  value: object
});

export const form_controll = function (object) {
  return ({
    type: 'FORM_CONTROLL',
    value: object
  })
};

export const select_genre = function (object) {
  return ({
    type: 'SELECT_GENRE',
    value: object
  })
};
export const select_list = function (object) {
  return ({
    type: 'SELECT_LIST',
    value: object
  })
};
export const select_ranking = function (object) {
  return ({
    type: 'SELECT_RANKING',
    value: object
  })
};