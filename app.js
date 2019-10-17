// The numerical IDs of each of the formats that can be applied to a string.
const formattingCodes = {
	misc: {
		reset: 0,
		bright: 1,
		dim: 2,
		underscore: 4,
		blink: 5,
		reverse: 7,
		hidden: 8
	},
	foreground: {
		black: 30,
		red: 31,
		green: 32,
		yellow: 33,
		blue: 34,
		magenta: 35,
		cyan: 36,
		white: 37
	},
	background: {
		black: 40,
		red: 41,
		green: 42,
		yellow: 43,
		blue: 44,
		magenta: 45,
		cyan: 46,
		white: 47
	}
};

/**
 * Formats a given string by the options provided.
 * @param {string} string - The string to be formatted.
 * @param {Object} options - The options that can be given.
 * @param {string} options.foreground - The colour of the foreground.
 * @param {string} options.background - The colour of the background.
 * @param {string[]} options.misc - The miscellaneous properties that can be set.
 * @returns {string} - The formatted string.
 */
function format(string, options) {
	let formattedString = "";

	if (typeof string != "undefined") {
		if (typeof options.foreground != "undefined" && typeof formattingCodes.foreground[options.foreground] != "undefined") {
			formattedString += `\x1b[${formattingCodes.foreground[options.foreground]}m`;
		}

		if (typeof options.background != "undefined" && typeof formattingCodes.background[options.background] != "undefined") {
			formattedString += `\x1b[${formattingCodes.background[options.background]}m`;
		}

		if (typeof options.misc != "undefined" && Array.isArray(options.misc)) {
			for (option of options.misc) {
				if (typeof formattingCodes.misc[option] != "undefined") {
					formattedString += `\x1b[${formattingCodes.misc[option]}m`;
				}
			}
		}

		formattedString += `${string}\x1b[0m`;

		return formattedString;
	} else {
		throw new Error("You must supply a string that you would like to format.");
	}
}

// Export the format function so that it can be used elsewhere.
module.exports = format;