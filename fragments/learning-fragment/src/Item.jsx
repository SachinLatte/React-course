import styles from "./Item.module.css";

function Item({ data }) {
  return <li className={`${styles["kg-item"]} list-group-item`}>{data}</li>;
}

export default Item;
