import React from 'react';

export default function Character(props: any) {

  return (
    <>
  <table>
  <tbody>
  <tr>
    <th>Feature</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Gender</td>
    <td>{props.gender}</td>
  </tr>
  <tr>
    <td>Status</td>
    <td>{props.status}</td>
  </tr>
  <tr>
    <td>Species</td>
    <td>{props.species}</td>
  </tr>
  <tr>
    <td>Origin</td>
    <td>{props.origin.name}</td>
  </tr>
  <tr>
    <td>Location</td>
    <td>{props.location.name}</td>
  </tr>
  </tbody>
</table>
<br />
    </>
  )
}


