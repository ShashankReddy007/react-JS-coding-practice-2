const Button = (props) => {
  //  Write your code here.
  const { className, name } = props;
  return <button className={`${className} button1`}>{name}</button>;
};

const element = (
  <div className="container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
      <Button className="yellow" name="Like" />
      <Button className="white" name="Comment" />
      <Button className="blue" name="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
