// Same as @apiparam
var apiParam = require("./parser_param.js");

function parse(content, source)
{
	return apiParam.parse(content, source, "Query Parameter");
}

function pushTo()
{
	return "local.success.fields." + apiParam.getGroup();
}

/**
 * Exports.
 */
module.exports = {
	parse: parse,
	pushTo: pushTo
};
