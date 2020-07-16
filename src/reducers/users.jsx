let initialState = {
  users:[
    {
      id:1,
      nama:"dewa qintoro",
      alamat:"Magetan",
      umur:21,
      Hp: "099999999"
    },
    {
      id:2,
      nama:"Ani",
      alamat:"Semarang",
      umur:21,
      Hp: "099999999"
    },
    {
      id:3,
      nama:"Kiki",
      alamat:"Solo",
      umur:21,
      Hp: "099999999"
    },
  ],
  error: false,
  title:"wadudu"
}
 
const users = (state = initialState, action)=>{
  return state
}

export default users