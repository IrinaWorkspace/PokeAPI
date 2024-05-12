function Message() {
  const name = "Irina";

  if (name) {
    return <h1>Hello {name}</h1>;
  }
  return <h1>Hello user</h1>;
}

export default Message;
