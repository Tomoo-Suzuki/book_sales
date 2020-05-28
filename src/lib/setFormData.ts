// export default function setFormData(e, isCheckbox) {
//   if (isCheckbox) {
//     const key = e.target.id;
//     const newPurpose = {
//       ...this.state.purpose,
//     };
//     const status = this.state.purpose[key];
//     let newStatus;
//     if (status === "" || status === "0") {
//       newStatus = "1";
//     } else if (status === "1") {
//       newStatus = "0";
//     }
//     newPurpose[key] = newStatus;
//     this.setState({
//       [e.target.name]: newPurpose,
//     });
//   } else {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }
// }
