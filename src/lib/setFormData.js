export default function setFormData(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
}