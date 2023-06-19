import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType } from "framer";/**
 * TEXTMASK
 * By Benjamin den Boer
 * @benjaminnathan
 *
 * @framerIntrinsicWidth 260
 * @framerIntrinsicHeight 200
 * @framerDisableUnlink
 *
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any
 */
export default function TextMask(props) {
    const { textContent, image, bgSizeType, bgSize, bgPosX, bgPosY, font, padding, paddingPerSide, paddingTop, paddingRight, paddingBottom, paddingLeft } = props;
    const { color, fontSize, fontFamily, fontWeight, fontStyle, textAlign, letterSpacing, whiteSpace, lineHeight, lineHeightPixels, lineHeightType } = font;
    const backgroundSizeValue = props.bgSizeType === "cover" || props.bgSizeType === "contain" ? bgSizeType : `${bgSize}%`;
    const paddingValue = paddingPerSide ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px` : `${padding}px`;

    return /*#__PURE__*/ _jsx("h1",
        {
            style:
            {
                backgroundImage: image && `url(${image.src})`,
                backgroundSize: backgroundSizeValue,
                backgroundRepeat: "no-repeat",
                backgroundPosition: `${bgPosX}% ${bgPosY}%`,
                backgroundClip: image && "text",
                WebkitBackgroundClip: image && "text",
                WebkitTextFillColor: image && "transparent",
                textFillColor: image && "transparent",
                color,
                fontSize,
                fontFamily: `"${fontFamily}", sans-serif`,
                fontStyle,
                fontWeight,
                textAlign,
                letterSpacing,
                whiteSpace,
                lineHeight:
                    lineHeightType ? lineHeight : `${lineHeightPixels}px`,
                margin: 0, padding: paddingValue
            }, children: textContent
        });
};/* Default Properties */

TextMask.defaultProps = {
    textContent: "Hello", bgSize: 100, bgPosX: 0, bgPosY: 0, font:
        { fontSize: 100, lineHeight: 1, lineHeightType: true }
};
TextMask.displayName = "Text Mask";
/* Property Controls */

addPropertyControls(TextMask,
    {
        textContent: { type: ControlType.String, title: "Text", defaultValue: "Hello" },
        image: { type: ControlType.ResponsiveImage, title: "Image" },
        bgSizeType: {
            type: ControlType.Enum,
            options: ["cover", "contain", "percentage"],
            optionTitles: ["Cover", "Contain", "Percentage"],
            title: "Background", defaultValue: "cover"
        },
        bgSize:
        {
            type: ControlType.Number,
            min: 0,
            max: 200,
            defaultValue: 100,
            unit: "%",
            title: "Size",
            hidden: props => props.bgSizeType === "cover" || props.bgSizeType === "contain"
        },
        bgPosX: { type: ControlType.Number, min: 0, max: 100, defaultValue: 0, unit: "%", title: "Offset X" },
        bgPosY: { type: ControlType.Number, min: 0, max: 100, defaultValue: 0, unit: "%", title: "Offset Y" },
        font: {
            type: ControlType.Object, controls: {
                color: { type: ControlType.Color, defaultValue: "#888" },
                fontSize: { type: ControlType.Number, title: "Size", min: 0, displayStepper: true, step: 1, defaultValue: 100 },
                fontFamily: { type: ControlType.String, title: "Font", defaultValue: "Inter" },
                fontWeight: { type: ControlType.Enum, title: "Weight", options: [100, 200, 300, 400, 500, 600, 700, 800, 900], defaultValue: 400 },
                fontStyle: {
                    type: ControlType.Enum, title: "Style", options: ["normal", "italic", "oblique"],
                    optionTitles: ["Normal", "Italic", "Oblique"], defaultValue: "normal"
                },
                textAlign: {
                    type: ControlType.Enum, displaySegmentedControl: true, title: "Align", options: ["left", "center", "right"],
                    optionTitles: ["Left", "Center", "Right"], defaultValue: "center"
                },
                whiteSpace: {
                    type: ControlType.Enum, title: "Space", options: ["normal", "nowrap", "pre", "pre-wrap", "preline", "break-spaces",],
                    optionTitles: ["Normal", "No Wrap", "Pre", "Pre Wrap", "Preline", "Break Spaces",],
                    defaultValue: "center"
                },
                letterSpacing: {
                    type: ControlType.Number, title: "Letter", min: -100, max: 100,
                    displayStepper: true, step: .1, defaultValue: 0
                },
                lineHeight: {
                    type: ControlType.Number, title: "Line", min: -500, max: 500,
                    displayStepper: true, step: .1, defaultValue: 1, hidden: props => !props.lineHeightType
                }, lineHeightPixels: { type: ControlType.Number, title: "Line", min: -500, max: 500, displayStepper: true, step: .1, defaultValue: 100, hidden: props => props.lineHeightType }, lineHeightType: { type: ControlType.Boolean, title: " ", enabledTitle: "em", disabledTitle: "px", defaultValue: true }
            }
        },
        padding: {
            title: "Padding",
            type: ControlType.FusedNumber,
            toggleKey: "paddingPerSide",
            toggleTitles: ["Padding", "Padding per side"],
            defaultValue: 0,
            valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft",],
            valueLabels: ["T", "R", "B", "L"],
            min: 0
        }
    });