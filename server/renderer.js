import React from 'react';
import ReactDOM from 'react-dom';

import { StaticRouter } from 'react-router-dom';

const renderer = (html, path, context) => {
  const serverHtml = ReactDOM.renderToString(
    <StaticRouter location={path} context={context}>
      <Layout />
    </StaticRouter>
  );

  const regex = /(<div id="root">)(<\/div>)/;

  return html.replace(regex, function(original, div1, div2) {
    return div1 + serverHtml + div2;
  });
};

export default renderer;
