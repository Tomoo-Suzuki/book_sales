export const addAccount = (
  hash
) => {
  return (
    `mutation{
  addAccount(id:"` + hash.id + `",
          last_name:"` + hash.last_name + `",
          first_name:"` + hash.first_name + `",
          last_name_kana:"` + hash.last_name_kana + `",
          first_name_kana:"` + hash.first_name_kana + `",
          birthday:"` + hash.birthday + `",
          zip:"` + hash.zip + `",
          prefecture:"` + hash.prefecture + `",
          city:"` + hash.city + `",
          address3:"` + hash.address3 + `",
          building:"` + hash.building + `",
          purpose:"` + hash.purpose + `",
          ){
          id,
          last_name,
          first_name,
          last_name_kana,
          first_name_kana,
          birthday,
          zip,
          prefecture,
          city,
          address3,
          building,
          purpose
  }
}`)
};