import React from 'react';
import { Fieldset } from 'primereact/fieldset';

const styles = {
  field: {
    height: '400px',
    width: '300px'
  }
}

const Summary = ({ data }) => (
  <Fieldset style={styles.field} legend="Summary">
    <h5>Current Balance: {data.currentBalance}e Ft</h5>
    <p>Expenses this month: 120e Ft</p>
    </Fieldset>
)

export default Summary;