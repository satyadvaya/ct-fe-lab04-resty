import React, { Component } from 'react';
import Form from '../components/controls/Form';
import Response from '../components/response/Response';
import CollectionList from '../components/collection/CollectionList';

export default class RestyContainer extends Component {
  state = {
    loading: false,
    URL: '',
    method: '',
    bodyData: {},
    response: [],
    collection: [],
  };

  render() {
    return (
      <>
        <h1>TEST</h1>
        <Form />
        <Response />
        <CollectionList />
      </>
    );
  }
}
