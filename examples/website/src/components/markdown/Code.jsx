import React from 'react';
import CodePreview from '@uiw/react-code-preview';

export default function Code({ dependencies, codeSandbox, codePen, ...other }) {
  const props = { ...other };
  if (codeSandbox) {
    props.codeSandboxOption = {
      files: {
        'sandbox.config.json': {
          content: `{
        "template": "node",
        "container": {
          "startScript": "start",
          "node": "14"
        }
      }`,
        },
        'public/index.html': {
          content: `<div id="container"></div>`,
        },
        'src/index.js': {
          content: props.code.replace(
            '_mount_',
            'document.getElementById("container")',
          ),
        },
        '.kktrc.js': {
          content: `import webpack from "webpack";\nimport lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};`,
        },
        'package.json': {
          content: {
            name: 'antdp',
            description: `antdp react component - demo`,
            dependencies: {
              antdp: 'latest',
              react: 'latest',
              'react-dom': 'latest',
            },
            devDependencies: {
              '@kkt/less-modules': '6.11.0',
              kkt: '6.11.0',
              typescript: '4.3.5',
            },
            license: 'MIT',
            scripts: {
              start: 'kkt start',
              build: 'kkt build',
              test: 'kkt test --env=jsdom',
            },
            browserslist: [
              '>0.2%',
              'not dead',
              'not ie <= 11',
              'not op_mini all',
            ],
          },
        },
      },
    };
  }
  return (
    <CodePreview
      {...props}
      dependencies={{ ...dependencies, React, ...React }}
      style={{ marginBottom: 0 }}
    />
  );
}
