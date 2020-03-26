import {expect} from "chai";

import format from "../src/format";
import ForegroundColour from "../src/enums/ForegroundColour";
import BackgroundColour from "../src/enums/BackgroundColour";
import MiscFormattingOption from "../src/enums/MiscFormattingOption";

describe("format()", () => {
	it("returns the original string if no formatting options are given", () => {
		const expected = "Hello World!";
		const actual = format("Hello World!", {});

		expect(expected).to.equal(actual);
	});

	it("returns a string with a black text colour if black is supplied as the foreground colour", () => {
		const expected = "\x1b[30mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			foreground: ForegroundColour.Black
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with red text colour if red is supplied as the foreground colour", () => {
		const expected = "\x1b[31mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			foreground: ForegroundColour.Red
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with green text colour if green is supplied as the foreground colour", () => {
		const expected = "\x1b[32mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			foreground: ForegroundColour.Green
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with yellow text colour if yellow is supplied as the foreground colour", () => {
		const expected = "\x1b[33mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			foreground: ForegroundColour.Yellow
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with blue text colour if blue is supplied as the foreground colour", () => {
		const expected = "\x1b[34mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			foreground: ForegroundColour.Blue
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with magenta text colour if magenta is supplied as the foreground colour", () => {
		const expected = "\x1b[35mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			foreground: ForegroundColour.Magenta
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with cyan text colour if cyan is supplied as the foreground colour", () => {
		const expected = "\x1b[36mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			foreground: ForegroundColour.Cyan
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with white text colour if white is supplied as the foreground colour", () => {
		const expected = "\x1b[37mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			foreground: ForegroundColour.White
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with black background colour if white is supplied as the background colour", () => {
		const expected = "\x1b[40mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			background: BackgroundColour.Black
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with red background colour if red is supplied as the background colour", () => {
		const expected = "\x1b[41mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			background: BackgroundColour.Red
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with green background colour if green is supplied as the background colour", () => {
		const expected = "\x1b[42mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			background: BackgroundColour.Green
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with yellow background colour if yellow is supplied as the background colour", () => {
		const expected = "\x1b[43mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			background: BackgroundColour.Yellow
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with blue background colour if blue is supplied as the background colour", () => {
		const expected = "\x1b[44mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			background: BackgroundColour.Blue
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with magenta background colour if magenta is supplied as the background colour", () => {
		const expected = "\x1b[45mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			background: BackgroundColour.Magenta
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with cyan background colour if cyan is supplied as the background colour", () => {
		const expected = "\x1b[46mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			background: BackgroundColour.Cyan
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with white background colour if white is supplied as the background colour", () => {
		const expected = "\x1b[47mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			background: BackgroundColour.White
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string that has been reset if reset is provided as misc", () => {
		const expected = "\x1b[0mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			misc: [MiscFormattingOption.Reset]
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string that has is bright if bright is provided as misc", () => {
		const expected = "\x1b[1mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			misc: [MiscFormattingOption.Bright]
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string that has is dim if dim is provided as misc", () => {
		const expected = "\x1b[2mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			misc: [MiscFormattingOption.Dim]
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string that has is underlined if underlined is provided as misc", () => {
		const expected = "\x1b[4mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			misc: [MiscFormattingOption.Underlined]
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string that blinks if blink is provided as misc", () => {
		const expected = "\x1b[5mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			misc: [MiscFormattingOption.Blink]
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string that is underlined and bright if underlined and bright is provided as misc", () => {
		const expected = "\x1b[4m\x1b[1mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			misc: [
				MiscFormattingOption.Underlined,
				MiscFormattingOption.Bright
			]
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string that is underlined and dim if underlined and dim is provided as misc", () => {
		const expected = "\x1b[4m\x1b[2mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			misc: [
				MiscFormattingOption.Underlined,
				MiscFormattingOption.Dim
			]
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string that is bright and blinking if bright and blink is provided as misc", () => {
		const expected = "\x1b[1m\x1b[5mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			misc: [
				MiscFormattingOption.Bright,
				MiscFormattingOption.Blink
			]
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string that is dim and blinking if dim and blink is provided as misc", () => {
		const expected = "\x1b[2m\x1b[5mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			misc: [
				MiscFormattingOption.Dim,
				MiscFormattingOption.Blink
			]
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string that is dim and blinking if dim and blink is provided as misc", () => {
		const expected = "\x1b[2m\x1b[5mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			misc: [
				MiscFormattingOption.Dim,
				MiscFormattingOption.Blink
			]
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with a foreground and background if a foreground and background is provided", () => {
		const expected = "\x1b[30m\x1b[41mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			foreground: ForegroundColour.Black,
			background: BackgroundColour.Red
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with a foreground and misc if a foreground and misc is provided", () => {
		const expected = "\x1b[30m\x1b[1mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			foreground: ForegroundColour.Black,
			misc: [MiscFormattingOption.Bright]
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with a background and misc if a background and misc is provided", () => {
		const expected = "\x1b[40m\x1b[1mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			background: BackgroundColour.Black,
			misc: [MiscFormattingOption.Bright]
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with a foreground, background and misc if a foreground, background and misc is provided", () => {
		const expected = "\x1b[31m\x1b[40m\x1b[1mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			foreground: ForegroundColour.Red,
			background: BackgroundColour.Black,
			misc: [MiscFormattingOption.Bright]
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with a foreground and two miscs if a foreground and two miscs is provided", () => {
		const expected = "\x1b[30m\x1b[1m\x1b[4mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			foreground: ForegroundColour.Black,
			misc: [
				MiscFormattingOption.Bright,
				MiscFormattingOption.Underlined
			]
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with a background and two miscs if a background and two miscs is provided", () => {
		const expected = "\x1b[40m\x1b[1m\x1b[4mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			background: BackgroundColour.Black,
			misc: [
				MiscFormattingOption.Bright,
				MiscFormattingOption.Underlined
			]
		});

		expect(expected).to.equal(actual);
	});

	it("returns a string with a foreground, background and two miscs if a foreground and two miscs is provided", () => {
		const expected = "\x1b[30m\x1b[41m\x1b[1m\x1b[4mHello World!\x1b[0m";
		const actual = format("Hello World!", {
			foreground: ForegroundColour.Black,
			background: BackgroundColour.Red,
			misc: [
				MiscFormattingOption.Bright,
				MiscFormattingOption.Underlined
			]
		});

		expect(expected).to.equal(actual);
	});
});