import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { RadioButton } from "primereact/radiobutton";

export class NewTransForm extends Component {
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
  }

  toggle() {
    this.setState({ disabled: !this.state.disabled });
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
    return (
      <div>
        <div className="content-section implementation">
          <div
            className="p-grid"
            style={{ width: "250px", marginBottom: "10px" }}
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
          <div className="p-grid p-fluid">
            <div className="p-col-12 p-md-4">
              <Calendar
                value={this.state.date3}
                onChange={e => this.setState({ date3: e.value })}
                showIcon={true}
              />
            </div>
          </div>
          <span className="p-float-label">
            <h4>What did you buy again?</h4>
            <InputText
              id="float-input"
              type="text"
              size="30"
              value={this.state.value2}
              onChange={e => this.setState({ value2: e.target.value })}
            />
            <label htmlFor="float-input">Expense Name</label>
          </span>

          <InputText
            type="text"
            keyfilter="pint"
            value={this.state.value3}
            onChange={e => this.setState({ value3: e.target.value })}
          />
        </div>
      </div>
    );
  }
}

export default NewTransForm;
