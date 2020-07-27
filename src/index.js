/* globals CodeMirror, document, window */

'use strict';

import './js/CodeMirror';
import './styles/index.scss';

CodeMirror.height = '100%';

const code = document.getElementById('code');

const editor = CodeMirror.fromTextArea(code, {
    lineNumbers: true,
    theme      : 'material-darker',
    mode       : 'text/x-yaml',
    gutters    : ['CodeMirror-lint-markers'],
    lint       : {
        'onUpdateLinting': (param) => {
            const codeMirror = document.getElementsByClassName('CodeMirror')[0];

            if (param.length > 0) {
                codeMirror.classList.add('error');
            } else {
                codeMirror.classList.remove('error');
            }
        }
    }
});

editor.on('change', (codeMirror) => {
    window.localStorage.setItem('yaml-editor-code', codeMirror.getValue());

    return true;
});

const codeValue = window.localStorage.getItem('yaml-editor-code');

if (codeValue) {
    editor.setValue(codeValue);
}
