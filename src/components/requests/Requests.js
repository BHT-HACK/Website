import React, { useState } from "react";
import styles from "./request.module.css";
import {
  TextareaAutosize,
  Input,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@material-ui/core";

const Requests = () => {
  const [categories, setCategories] = useState("🌮");
  const [listCategory, setListCategory] = useState([
    "Fruits/Vegetables",
    "Packed Food",
    "Drinks",
    "Water",
  ]);
  const [textValue, setTextValue] = useState("Grocery");
  const [event, setEvent] = useState("");
  const [host, setHost] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const changeEvent = (e) => {
    setEvent(e.target.value);
  };

  const handleHost = (e) => {
    setHost(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const changeHandler = (e) => {
    const category = e.target.value;
    setCategories(category);
    setTextValue(category);
  };

  return (
    <div className={styles.offset}>
      <div className={styles.requests}>
        <h1>Create a new request</h1>
        <div className={styles.requestDescriptionContainer}>
          <FormControl className={styles.form1}>
            <InputLabel htmlFor="my-input">Event Name</InputLabel>
            <Input
              onChange={changeEvent}
              value={event}
              type="text"
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>

          <FormControl className={styles.form1}>
            <InputLabel htmlFor="my-input">Host User Name</InputLabel>
            <Input
              onChange={handleHost}
              value={host}
              type="text"
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl className={styles.form1}>
            <Select
              variant="outlined"
              value={categories}
              onChange={changeHandler}
            >
              <MenuItem value={"🌮"}>{"🌮"}</MenuItem>
              {listCategory.map((category) => (
                <MenuItem value={category}>{category}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextareaAutosize
            className={styles.description}
            rowsMax={5}
            onChange={handleDesc}
            aria-label="maximum height"
            placeholder={`Describe your ${textValue} in details`}
            value={desc}
          />

          <form noValidate="noValidate">
            <TextField
              id="date"
              value={date}
              label="Deadline"
              type="date"
              onChange={handleDate}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>

          <FormControl className={styles.form1}>
            <InputLabel htmlFor="my-input">Location</InputLabel>
            <Input
              onChange={handleLocation}
              value={location}
              type="text"
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>

          <Button className={styles.ReqBtn} onSubmit={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Requests;
