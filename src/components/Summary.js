import React from 'react';
import { Fieldset } from 'primereact/fieldset';

const styles = {
  field: {
    height: '400px'
  }
}

const Summary = ({ data }) => (
  <Fieldset style={styles.field} legend="Summary">
    {console.log(data)}
    <h5>Current Balance: {data.user.currentBalance} Ft</h5>
    </Fieldset>
)

export default Summary;