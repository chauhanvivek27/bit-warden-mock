import React, { useState } from "react";
import filterStyles from "../styles/filter.module.scss";
import Modal from "./components/modal";
import AddFolder from "./components/Folder";

export default function About() {
  const [search, setSearchText] = useState("");
  const [placeholder, setPlaceholder] = useState("Search Vault");
  const [show, setShow] = useState(false);

  const OnHandleChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
  };

  const onFilterClick = (event) => {
    const { name } = event.currentTarget;
    setPlaceholder(name);
  };

  const onAddClick = () => {
    setShow(true);
  };

  return (
    <div className={filterStyles.row}>
      <div className={filterStyles.filter}>
        <div className={filterStyles.header}>Filter</div>
        <div className={filterStyles.body}>
          <input
            type="search"
            id="search"
            className={filterStyles.formControl}
            value={search}
            onChange={OnHandleChange}
            placeholder={placeholder}
          />
          <ul className={filterStyles.card_ul}>
            <li>
              <a href="#" onClick={onFilterClick} name="Search Vault">
                <span className={filterStyles.card_item}> All Items</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={onFilterClick} name="Search Favorites">
                <span className={filterStyles.card_fav}> Favorties</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={onFilterClick} name="Search Favorites">
                <span className={filterStyles.card_bin}> Bin</span>
              </a>
            </li>
          </ul>
          <h3>TYPES</h3>
          <ul className={filterStyles.card_ul}>
            <li>
              <a href="#" onClick={onFilterClick} name="Login">
                <span className={filterStyles.card_login}>Login</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={onFilterClick} name="Card">
                <span className={filterStyles.card_card}>Card</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={onFilterClick} name="Identity">
                <span className={filterStyles.card_ident}>Identity</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={onFilterClick} name="Secure note">
                <span className={filterStyles.card_note}>Secure note</span>
              </a>
            </li>
          </ul>
          <h3>
            folder
            <a href="#" className={filterStyles.folder} onClick={onAddClick}>
              <span className={filterStyles.card_add} />
            </a>
          </h3>
        </div>
      </div>
      <div className={filterStyles.vault}>My Vault</div>
      {show && (
        <Modal onClose={() => setShow(false)}>
          <AddFolder />
        </Modal>
      )}
    </div>
  );
}
