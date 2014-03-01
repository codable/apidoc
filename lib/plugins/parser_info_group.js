var apiParser = require("./parser_group.js");

function parse(content, source)
{
	return apiParser.parse(content, source);
} // parse

function pushTo()
{
	return "global.infoTitle";
}

/**
 * Exports.
 */
module.exports = {
	parse: parse,
	pushTo: pushTo,
	getGroup: apiParser.getGroup,
	allowMultiple: true
};
