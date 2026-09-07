import { useState } from "react";
import styles from "./ListGroup.module.css";

interface ListGroupProps {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const get_items_element = (items: string[]) => {
    return items.length == 0 ? (
      <p> no items !</p>
    ) : (
      <ul className={[styles["list-group"], styles.container].join(" ")}>
        {items.map((item: string, index: number) => (
          <li
            key={item}
            className={
              index !== selectedIndex
                ? "list-group-item"
                : "list-group-item active"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <h1> {heading}</h1>
      {get_items_element(items)}
    </>
  );
}

export default ListGroup;
