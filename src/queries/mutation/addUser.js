const addUser = `mutation {
  addUser(id: "00007", password: "txt90876", user_type: 0, magazine: true, agree_to_terms: true, date_reception: "2019-11-24") {
    id,
    password,
    user_type,
    magazine,
    agree_to_terms,
    date_reception
  }
}`