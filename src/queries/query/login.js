export const login = `query{
  user(id:"00001") {
    id,
    password,
    agree_to_terms,
    date_reception
  }
}`