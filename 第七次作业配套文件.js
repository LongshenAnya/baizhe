Function.prototype.Mycall = function (context) {
    var args = []
    var result
    for (var i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']')
    }
    context.fn = this
    result = eval('context.fn(' + ages + ')')
    delete context.fn
    return result
}