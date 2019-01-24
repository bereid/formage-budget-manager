import React, {Component} from 'react';
import {Panel} from 'primereact/panel';
import 'primereact/resources/primereact.min.css';

export class Card extends Component {
        
  render() {
      return (
          <div>

              <div className="content-section implementation">
                  <Panel header="Godfather I">
                      The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
                      His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
                      Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
                      kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                  </Panel>

                   <Panel header="Godfather I" style={{marginTop:'2em'}} toggleable={true}>
                      The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
                      His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
                      Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
                      kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                  </Panel>
              </div>
          </div>
      )
  }
}

export default Card;