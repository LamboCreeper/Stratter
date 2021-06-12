import FormattingOptions from "./interfaces/FormattingOptions";

export default function format(string: string, options: FormattingOptions): string {
	const {foreground, background, misc} = options;
	let formattedString = "";

	if (foreground) {
		formattedString += `\x1b[${foreground}m`;
	}

	if (background) {
		formattedString += `\x1b[${background}m`;
	}

	if (misc) {
		misc.map((format) => {
			formattedString += `\x1b[${format}m`;
		});
	}

	if (formattedString !== "") {
		formattedString += `${string}\x1b[0m`;
	}

	return formattedString || string;
}