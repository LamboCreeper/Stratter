import ForegroundColour from "../enums/ForegroundColour";
import BackgroundColour from "../enums/BackgroundColour";
import MiscFormattingOption from "../enums/MiscFormattingOption";

interface FormattingOptions {
	foreground?: ForegroundColour;
	background?: BackgroundColour;
	misc?: MiscFormattingOption[];
}

export default FormattingOptions;