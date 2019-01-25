import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

const styles = {
  form: {
    textAlign: "center"
  },

  calendar: {
    width: "40%",
    margin: "15px auto"
  },

  name: {
    width: "100%",
    margin: "15px auto"
  },

  description: {
    width: "100%",
    margin: "15px auto"
  },

  category: {
    margin: "15px auto",
    width: "150px"
  },

  amount: {
    margin: "15px auto",
    width: "150px"
  },
  button: {
    width: "100%",
    backgroundColor: "#e17055",
    border: "#e17055"
  }
};

export class Form extends Component {
  constructor() {
    super();

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;

    this.state = {
      type: null,
      value: null,
      name: null,
      description: null,
      category: null,
      amount: null,
      visible: false,
      date: null,
      invalidDates: [today]
    };

    this.dateTemplate = this.dateTemplate.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onHide = this.onHide.bind(this);
  }

  onClick(event) {
    this.setState({ visible: true });
  }

  onHide(event) {
    this.setState({ visible: false });
  }

  toggle() {
    this.setState({ disabled: !this.state.disabled });
  }

  onCategoryChange(e) {
    this.setState({ category: e.value });
    // this.handleCategoryChange(e);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // handleCategoryChange = e => {
  //   this.setState({ [e.target.name]: this.state.category });
  // };

  loggingData = e => {
    console.log(this.state);
  };

  dateTemplate(date) {
    if (date.day > 10 && date.day < 15) {
      return (
        <div
          style={{
            backgroundColor: "#1dcbb3",
            color: "#ffffff",
            fontWeight: "bold",
            borderRadius: "50%",
            width: "2em",
            height: "2em",
            lineHeight: "2em",
            padding: 0
          }}
        >
          {date.day}
        </div>
      );
    } else {
      return date.day;
    }
  }

  render() {
    const categories = [
      { name: "Utilities" },
      { name: "Rent" },
      { name: "Car" },
      { name: "Food" },
      { name: "Personal" },
      { name: "Medical" },
      { name: "Entertainment" },
      { name: "One-time" }
    ];

    const footer = (
      <div>
        <Button label="Yes" icon="pi pi-check" onClick={this.loggingData} />
        <Button
          label="No"
          icon="pi pi-times"
          onClick={this.onHide}
          className="p-button-secondary"
        />
      </div>
    );

    return (
      <div>
        <Dialog
          header="Add New Item"
          visible={this.state.visible}
          style={{ width: "50vw" }}
          footer={footer}
          onHide={this.onHide}
          maximizable
        >
          <div style={styles.calendar} className="p-grid p-fluid">
            <div className="p-col-12 p-md-4">
              <Calendar
                value={this.state.date}
                onChange={e => this.setState({ date: e.value })}
                showIcon={true}
              />
            </div>
          </div>
          <div
            className="p-grid"
            style={{
              width: "200px",
              marginBottom: "25px"
            }}
          >
            <div className="p-col-12">
              <RadioButton
                inputId="rb1"
                name="type"
                value="Income"
                onChange={this.handleChange}
                checked={this.state.type === "Income"}
              />
              <label htmlFor="rb1" className="p-radiobutton-label">
                Income
              </label>
            </div>
            <div className="p-col-12">
              <RadioButton
                inputId="rb2"
                name="type"
                value="Expense"
                onChange={this.handleChange}
                checked={this.state.type === "Expense"}
              />
              <label htmlFor="rb2" className="p-radiobutton-label">
                Expense
              </label>
            </div>
          </div>
          <span className="p-float-label">
            <InputText
              id="float-input"
              type="text"
              name="name"
              style={styles.name}
              size="30"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <label htmlFor="float-input">Income/Expense Name</label>
          </span>
          <span className="p-float-label">
            <InputText
              id="float-input"
              type="text"
              name="description"
              style={styles.description}
              size="30"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <label htmlFor="float-input">Short description</label>
          </span>
          <div>
            <Dropdown
              name="category"
              value={this.state.category}
              options={categories}
              onChange={this.onCategoryChange}
              style={styles.category}
              placeholder="Select a Category"
              optionLabel="name"
            />
          </div>
          <div className="p-float-label">
            <InputText
              id="float-input"
              type="text"
              name="amount"
              style={styles.amount}
              keyfilter="pint"
              value={this.state.amount}
              onChange={this.handleChange}
            />
            <label htmlFor="float-input">Amount</label>
          </div>
        </Dialog>
        <Button
          label="Add new item"
          icon="pi pi-plus"
          onClick={this.onClick}
          style={styles.button}
        />
      </div>
    );
  }
}

export default Form;
