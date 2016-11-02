import fs from 'fs';
import React from 'react';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import { renderToString } from 'react-dom/server';
import find from 'find';
import concat from 'concatenate-files';

// resolvers
import resolvers from './server/resolvers';

// client
import GraphiQL from './client';
import template from './client/template';

const port = 4000;
const files = find.fileSync(/\.gql/, __dirname);

if (files.length > 0) {
  const outfile = './server/out.graphql';
  concat(files.reverse(), outfile, { separator: '\n' }, (err, result) => {
    if (err)
      return err;

    const app = express();
    const schema = buildSchema(fs.readFileSync(outfile, 'utf-8'));

    app.use('/assets', express.static('./client/assets'));

    app.get('/', (req, res) => {
      const appString = renderToString(<GraphiQL />);

      res.send(template({
        body: appString,
        title: 'GraphiQL'
      }));
    });

    app.use('/graphql', graphqlHTTP({
      schema: schema,
      rootValue: resolvers,
      graphiql: true,
    }));

    app.listen(port, () => console.log('Now browse to localhost:4000/graphql'));
  });
}