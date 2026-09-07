import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Like from "./components/Like";
import { useState } from "react";
import Game from "./components/Game/Game";
import ExpandableText from "./components/ExpandableText/ExpandableText";
import { Form } from "./components/Form/Form";

function App() {
  const items = [
    "apple",
    "lettuce",
    "banana peppers",
    "gluten free buns",
    "bruger patties",
    "onions",
    "mustard",
  ];

  const [alertTriggered, setAlertTriggered] = useState(false);

  const handleClick = (item: string) => console.log(item);
  const buttonClick = () => {
    setAlertTriggered(true);
  };
  const buttonClose = () => {
    setAlertTriggered(false);
  };

  return (
    <div>
      {alertTriggered && (
        <Alert onCloseClick={buttonClose}>Call me Ishamel</Alert>
      )}
      <Game></Game>
      <ListGroup
        items={items}
        heading="shopping list"
        onSelectItem={handleClick}
      ></ListGroup>{" "}
      <Button onClick={buttonClick}>That was easy</Button>
      <Like></Like>
      <ExpandableText></ExpandableText>
      <Form></Form>
    </div>
  );
}

export default App;
