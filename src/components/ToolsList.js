const ToolsList = () => {
	const data = [
		{
			title: "Background",
			content: [
				"Background Color",
				"Linear Gradient",
				"Radial Gradient",
			],
		},
		{
			title: "Text",
			content: [
				"Font-size",
				"Text-color",
				"Line-Height",
				"Letter-Spacing",
				"Text-Transform",
				"Text-align",
				"Font-weight",
				"Text-decoration",
			],
		},
		{
			title: "Box Model",
			content: [
				"Padding",
				"Margin",
				"Border",
				"Outline",
				"Border-radius",
				"Box-shadow",
				"Opacity",
			],
		},
		{
			title: "Filter",
			content: [
				"Sepia",
				"Blur",
				"Constrast",
				"Saturate",
				"Drop-shadow",
				"Grayscale",
				"Brightness",
				"Hue-Rotate",
				"Invert",
			],
		},
		{
			title: "Flexbox",
			content: ["Flexbox"],
		},
		{
			title: "Grid",
			content: ["Grid"],
		},
		{
			title: "Transform",
			content: ["Rotate", "Translate", "Skew"]
		}
	];
	return data;
};

export default ToolsList;
