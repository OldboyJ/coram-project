import React, { Component } from 'react';
import styles from '../App.css';
import {
  Table,
  Container,
  Row,
  Col
 } from 'reactstrap';

class TableLayout extends Component {
  render() {

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
                <tr>
                  <td>PIF-010001</td>
                  <td>Horace, Towne</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>PIF-010002</td>
                  <td>Noble, Jacobs</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>PIF-010003</td>
                  <td>Hardens, Sean</td>
                  <td>@twitter</td>
                </tr>
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
