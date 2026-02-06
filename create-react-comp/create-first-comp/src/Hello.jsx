function Hello() {
  let name = "Prashant";
  let Fullname = () => {
    return "Prashant Kumar Jain";
  };
  return <h3>Hello, I am your tutor {Fullname()}</h3>;
}

export default Hello;
