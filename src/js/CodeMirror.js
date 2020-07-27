/* global window */

'use strict';

// Most of the code from this file comes from:
// https://github.com/codemirror/CodeMirror/blob/master/addon/mode/loadmode.js
import * as CodeMirror from 'codemirror';
import * as YAMLLint from 'js-yaml';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/theme/material-darker.css';

// Make CodeMirror available globally so the modes' can register themselves.
window.CodeMirror = CodeMirror;
window.jsyaml = YAMLLint;

require('codemirror/mode/yaml/yaml');
require('codemirror/addon/lint/lint');
require('codemirror/addon/lint/yaml-lint');

CodeMirror.autoLoadMode = function (instance, mode) {
    if (Object.prototype.hasOwnProperty.call(CodeMirror.modes,mode)) return;

    CodeMirror.requireMode(mode, function () {
        instance.setOption('mode', instance.getOption('mode'));
    });
};

export default CodeMirror;
