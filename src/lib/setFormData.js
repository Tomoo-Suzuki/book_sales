export default function setFormData(e) {
  console.log(e.target.name)
  console.log(e.target.value)
  this.setState({
    [e.target.name]: e.target.value
  });
}