# Input Keylogger
const inputLogger = require('@prashant_cn/input-keylogger');

inputLogger.logEverything(logInput)\
inputLogger.logStatements(logStatement)

function logInput({ key, isKeyUp, keyCode }) {\
    &emsp;console.log({ key, isKeyUp, keyCode });\
}

function logStatement(statement) {\
    &emsp;console.log(statement, "Statement");\
}