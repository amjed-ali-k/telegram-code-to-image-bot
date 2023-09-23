import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

/**
 * @constructor
 * @typedef  {{ name: string; username: string | number; avatar: any; }} User
 * @param {Buffer} bgImage - PNG Image buffer.
 * @param {User} user - User info.
 *
 */
export function generateSvgComp(bgImage, user, imgSize) {
  const svgComp = _jsxs("div", {
    style: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "flex-start",
      backgroundColor: "green",
      fontSize: 18,
      fontWeight: 600,
    },
    children: [
      _jsx("img", {
        style: {
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          height: imgSize.height,
          width: imgSize.width,
        },
        src: "data:image/png;base64," + bgImage.toString("base64"),
        height: imgSize.height,
        width: imgSize.width,
      }),
      /*#__PURE__*/ _jsxs("div", {
        style: {
          display: "flex",
          backgroundColor: "#111827",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 0,
          flexDirection: "row",
        },
        children: [
          /*#__PURE__*/ _jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
            },
            children: [
              /*#__PURE__*/ _jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                id: "emoji",
                viewBox: "0 0 72 72",
                style: {
                  width: 50,
                  height: 50,
                },
                children: [
                  /*#__PURE__*/ _jsx("g", {
                    id: "color",
                    children: /*#__PURE__*/ _jsx("rect", {
                      x: "11",
                      y: "16.0833",
                      width: "50",
                      height: "39.8333",
                      fill: "#d0cfce",
                      stroke: "none",
                    }),
                  }),
                  /*#__PURE__*/ _jsx("g", {
                    id: "hair",
                  }),
                  /*#__PURE__*/ _jsx("g", {
                    id: "skin",
                  }),
                  /*#__PURE__*/ _jsx("g", {
                    id: "skin-shadow",
                  }),
                  /*#__PURE__*/ _jsxs("g", {
                    id: "line",
                    children: [
                      /*#__PURE__*/ _jsx("rect", {
                        x: "11",
                        y: "16.0009",
                        width: "50",
                        height: "39.9982",
                        fill: "none",
                        stroke: "#000000",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "2",
                      }),
                      /*#__PURE__*/ _jsx("polyline", {
                        fill: "none",
                        stroke: "#000000",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "2",
                        points:
                          "16.3287,16.4792 16.3287,20.8542 11,20.8542 61,20.8542",
                      }),
                      /*#__PURE__*/ _jsx("line", {
                        x1: "28.8333",
                        x2: "21.9062",
                        y1: "30.3947",
                        y2: "37.3218",
                        fill: "none",
                        stroke: "#000000",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "2",
                      }),
                      /*#__PURE__*/ _jsx("line", {
                        x1: "28.8333",
                        x2: "21.9062",
                        y1: "44.3166",
                        y2: "37.3895",
                        fill: "none",
                        stroke: "#000000",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "2",
                      }),
                      /*#__PURE__*/ _jsx("line", {
                        x1: "38.1836",
                        x2: "32.8086",
                        y1: "28.1523",
                        y2: "46.25",
                        fill: "none",
                        stroke: "#000000",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "2",
                      }),
                      /*#__PURE__*/ _jsx("line", {
                        x1: "42.1588",
                        x2: "49.0859",
                        y1: "44.2515",
                        y2: "37.3244",
                        fill: "none",
                        stroke: "#000000",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "2",
                      }),
                      /*#__PURE__*/ _jsx("line", {
                        x1: "42.1588",
                        x2: "49.0859",
                        y1: "30.3296",
                        y2: "37.2567",
                        fill: "none",
                        stroke: "#000000",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "2",
                      }),
                    ],
                  }),
                ],
              }),
              /*#__PURE__*/ _jsxs("div", {
                style: {
                  color: "#f472b6",
                  display: "flex",
                  fontSize: 20,
                  flexDirection: "column",
                },
                children: [
                  /*#__PURE__*/ _jsx("div", {
                    style: {
                      color: "#fed7aa",
                    },
                    children: "Code Beautifier",
                  }),
                  /*#__PURE__*/ _jsx("div", {
                    style: {
                      color: "#6b7280",
                      fontSize: 12,
                    },
                    children: "@code_beautifier_bot",
                  }),
                ],
              }),
            ],
          }),
          /*#__PURE__*/ _jsx("div", {
            style: {
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
            },
            children: /*#__PURE__*/ _jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                padding: 10,
                marginLeft: 5,
                flexDirection: "row",
              },
              children: [
                /*#__PURE__*/ _jsx("img", {
                  src: user.avatar,
                  width: "40",
                  height: "40",
                  style: {
                    width: "40px",
                    height: "40px",
                    marginRight: 5,
                    backgroundColor: "#00f000",
                    borderRadius: 1000,
                  },
                }),
                /*#__PURE__*/ _jsxs("div", {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                  },
                  children: [
                    /*#__PURE__*/ _jsx("div", {
                      style: {
                        color: "#0369a1",
                      },
                      children: user.name,
                    }),
                    /*#__PURE__*/ _jsx("div", {
                      style: {
                        fontWeight: 600,
                        fontSize: 14,
                        color: "#9ca3af",
                      },
                      children: user.username,
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });

  return svgComp;
}
