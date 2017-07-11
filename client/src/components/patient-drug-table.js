import React, { Component } from 'react';
import styles from '../App.css';
import {
  Table,
  Container,
  Row,
  Col
 } from 'reactstrap';

class TableLayout extends Component {

  constructor () {
    super();
    this.state = { patient_data : []};
}
componentWillMount() {

  PatientList() {
    return $.getJSON('https://localuser:3000/patients')
    .then((res) => {
      this.setState({ patient_data: res.json() });
    });
  }
}

  render() {
    let patData = this.state.patient_data;
    return (
      <div className="Patient-drug-table">
       <Container>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>

            <Table hover inverse>
              <thead>
                <tr>
                  <th>Patient ID#</th>
                  <th>Patient</th>
                  <th>Approval</th>
                </tr>
              </thead>
              <tbody>
                {patData.map(detail =>
                  <tr>
                    <td>{detail.patient_id}</td>
                    <td>{detail.patient}</td>
                    <td>{detail.approved}</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default TableLayout;
