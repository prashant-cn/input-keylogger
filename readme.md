const inputLogger = require('@prashant_cn/input-keylogger');

inputLogger.logEverything(logInput)
inputLogger.logStatements(logStatement)

function logInput({ key, isKeyUp, keyCode }) {
    console.log({ key, isKeyUp, keyCode });
}

function logStatement(statement) {
    console.log(statement, "Statement");
}