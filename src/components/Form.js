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
    width: '100%',
    backgroundColor: '#e17055',
    border: '#e17055'
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
      category: null,
      visible: false,
      date1: null,
      date2: null,
      date3: null,
      date4: null,
      date5: null,
      date6: null,
      date7: null,
      date8: null,
      date9: null,
      date10: null,
      date11: null,
      date12: null,
      date13: null,
      dates1: null,
      dates2: null,
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
  }

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
        <Button label="Yes" icon="pi pi-check" onClick={this.onHide} />
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
                value={this.state.date3}
                onChange={e => this.setState({ date3: e.value })}
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
                onChange={e => this.setState({ city: e.value })}
                checked={this.state.city === "Income"}
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
                onChange={e => this.setState({ city: e.value })}
                checked={this.state.city === "Expense"}
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
              style={styles.name}
              size="30"
              value={this.state.value2}
              onChange={e => this.setState({ value2: e.target.value })}
            />
            <label htmlFor="float-input">Income/Expense Name</label>
          </span>
          <span className="p-float-label">
            <InputText
              id="float-input"
              type="text"
              style={styles.description}
              size="30"
              value={this.state.value3}
              onChange={e => this.setState({ value3: e.target.value })}
            />
            <label htmlFor="float-input">Short description</label>
          </span>
          <div>
            <Dropdown
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
              style={styles.amount}
              keyfilter="pint"
              value={this.state.value4}
              onChange={e => this.setState({ value4: e.target.value })}
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
