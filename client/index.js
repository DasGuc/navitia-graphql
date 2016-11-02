import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

function graphQLFetcher(graphQLParams) {
  return fetch(window.location.origin + '/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

export default class Graph extends Component {
  constructor() {
    super();
    this.state = {
      GraphiQL: null
    };
  }

  componentDidMount() {
    // Hack for serverside rendering
    const css = require('graphiql/graphiql.css');
    const GraphiQL = require('graphiql');

    this.setState({
      GraphiQL: <GraphiQL fetcher={graphQLFetcher} />
    });
  }

  render() {
    return this.state.GraphiQL;
  }
}