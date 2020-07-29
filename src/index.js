/* global self, document */
import * as monaco from 'monaco-editor';

self.MonacoEnvironment = {
    getWorkerUrl: function (moduleId, label) {
        if (label === 'json') {
            return './json.worker.bundle.js';
        }

        if (label === 'css') {
            return './css.worker.bundle.js';
        }

        if (label === 'html') {
            return './html.worker.bundle.js';
        }

        if (label === 'typescript' || label === 'javascript') {
            return './ts.worker.bundle.js';
        }

        return './editor.worker.bundle.js';
    }
};

monaco.editor.create(document.getElementById('container'), {
    renderValidationDecorations: 'on',
    value                      : `--- 
 doe: "a deer, a female deer"
 ray: "a drop of golden sun"
 pi: 3.14159
 xmas: true
 french-hens: 3
 calling-birds: 
   - huey
   - dewey
   - louie
   - fred
 xmas-fifth-day: 
   calling-birds: four
   french-hens: 3
   golden-rings: 5
   partridges: 
     count: 1
     location: "a pear tree"
   turtle-doves: two
    `,
    language: 'yaml '
});
