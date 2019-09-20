import path from 'path';

export default (input, output) => new Promise(resolve => {
  if (output && path.extname(output)) {
    return resolve(output);
  }

  if (output) {
    return resolve(path.join(output, input.split('/').slice(1).join('/')));
  }

  resolve(input);
});
