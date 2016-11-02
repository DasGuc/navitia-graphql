export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <style>
          html, body {
            margin: 0;
            padding: 0;
          }

          body {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: auto;
            height: auto;
          }
        </style>
      </head>

      <body>
        ${body}
      </body>

      <script src="/assets/bundle.js"></script>
    </html>
  `;
};