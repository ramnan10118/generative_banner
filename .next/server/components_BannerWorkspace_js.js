"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_BannerWorkspace_js";
exports.ids = ["components_BannerWorkspace_js"];
exports.modules = {

/***/ "./components/BannerWorkspace.js":
/*!***************************************!*\
  !*** ./components/BannerWorkspace.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ \"react-konva\");\n/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _use_gesture_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @use-gesture/react */ \"@use-gesture/react\");\n/* harmony import */ var _use_gesture_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_use_gesture_react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst BannerWorkspace = ()=>{\n    const [scale, setScale] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [dimensions, setDimensions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        width: 0,\n        height: 0\n    });\n    const [rectangles, setRectangles] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedId, setSelectedId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const stageRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const transformerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const isDragging = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);\n    // Update dimensions and center stage\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"BannerWorkspace.useEffect\": ()=>{\n            const updateDimensions = {\n                \"BannerWorkspace.useEffect.updateDimensions\": ()=>{\n                    if (false) {}\n                }\n            }[\"BannerWorkspace.useEffect.updateDimensions\"];\n            updateDimensions();\n            window.addEventListener('resize', updateDimensions);\n            return ({\n                \"BannerWorkspace.useEffect\": ()=>window.removeEventListener('resize', updateDimensions)\n            })[\"BannerWorkspace.useEffect\"];\n        }\n    }[\"BannerWorkspace.useEffect\"], []);\n    // Handle keyboard events\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"BannerWorkspace.useEffect\": ()=>{\n            const handleKeyDown = {\n                \"BannerWorkspace.useEffect.handleKeyDown\": (e)=>{\n                    if ((e.key === 'Delete' || e.key === 'Backspace') && selectedId) {\n                        setRectangles(rectangles.filter({\n                            \"BannerWorkspace.useEffect.handleKeyDown\": (rect)=>rect.id !== selectedId\n                        }[\"BannerWorkspace.useEffect.handleKeyDown\"]));\n                        setSelectedId(null);\n                    }\n                }\n            }[\"BannerWorkspace.useEffect.handleKeyDown\"];\n            window.addEventListener('keydown', handleKeyDown);\n            return ({\n                \"BannerWorkspace.useEffect\": ()=>window.removeEventListener('keydown', handleKeyDown)\n            })[\"BannerWorkspace.useEffect\"];\n        }\n    }[\"BannerWorkspace.useEffect\"], [\n        selectedId,\n        rectangles\n    ]);\n    // Update transformer on selection\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"BannerWorkspace.useEffect\": ()=>{\n            if (selectedId && transformerRef.current) {\n                const stage = stageRef.current;\n                const selectedNode = stage.findOne('#rect-' + selectedId);\n                if (selectedNode) {\n                    transformerRef.current.nodes([\n                        selectedNode\n                    ]);\n                    transformerRef.current.getLayer().batchDraw();\n                }\n            } else if (transformerRef.current) {\n                transformerRef.current.nodes([]);\n                transformerRef.current.getLayer().batchDraw();\n            }\n        }\n    }[\"BannerWorkspace.useEffect\"], [\n        selectedId\n    ]);\n    const addRectangle = ()=>{\n        if (!stageRef.current) return;\n        const stageBox = stageRef.current.container().getBoundingClientRect();\n        const centerX = (-position.x + stageBox.width / 2) / scale;\n        const centerY = (-position.y + stageBox.height / 2) / scale;\n        const newRect = {\n            id: Date.now(),\n            x: centerX - 150,\n            y: centerY - 125,\n            width: 300,\n            height: 250,\n            fill: 'white',\n            stroke: '#0096ff',\n            strokeWidth: 2,\n            draggable: true\n        };\n        setRectangles([\n            ...rectangles,\n            newRect\n        ]);\n        setSelectedId(newRect.id);\n    };\n    const bind = (0,_use_gesture_react__WEBPACK_IMPORTED_MODULE_3__.useGesture)({\n        onDragStart: {\n            \"BannerWorkspace.useGesture[bind]\": ()=>{\n                if (!selectedId) {\n                    isDragging.current = true;\n                    const container = stageRef.current?.container();\n                    if (container) {\n                        container.style.cursor = 'grabbing';\n                    }\n                }\n            }\n        }[\"BannerWorkspace.useGesture[bind]\"],\n        onDrag: {\n            \"BannerWorkspace.useGesture[bind]\": ({ delta: [dx, dy], event })=>{\n                if (!selectedId) {\n                    event?.preventDefault();\n                    requestAnimationFrame({\n                        \"BannerWorkspace.useGesture[bind]\": ()=>{\n                            setPosition({\n                                \"BannerWorkspace.useGesture[bind]\": (pos)=>({\n                                        x: pos.x + dx * 2,\n                                        y: pos.y + dy * 2\n                                    })\n                            }[\"BannerWorkspace.useGesture[bind]\"]);\n                        }\n                    }[\"BannerWorkspace.useGesture[bind]\"]);\n                }\n            }\n        }[\"BannerWorkspace.useGesture[bind]\"],\n        onDragEnd: {\n            \"BannerWorkspace.useGesture[bind]\": ()=>{\n                isDragging.current = false;\n                const container = stageRef.current?.container();\n                if (container) {\n                    container.style.cursor = 'grab';\n                }\n            }\n        }[\"BannerWorkspace.useGesture[bind]\"],\n        onWheel: {\n            \"BannerWorkspace.useGesture[bind]\": ({ delta: [dx, dy], event })=>{\n                event?.preventDefault();\n                const isTrackpad = Math.abs(event.deltaY) < 50;\n                if (isTrackpad && !event.ctrlKey) {\n                    requestAnimationFrame({\n                        \"BannerWorkspace.useGesture[bind]\": ()=>{\n                            setPosition({\n                                \"BannerWorkspace.useGesture[bind]\": (pos)=>({\n                                        x: pos.x - dx * 2,\n                                        y: pos.y - dy * 2\n                                    })\n                            }[\"BannerWorkspace.useGesture[bind]\"]);\n                        }\n                    }[\"BannerWorkspace.useGesture[bind]\"]);\n                } else {\n                    requestAnimationFrame({\n                        \"BannerWorkspace.useGesture[bind]\": ()=>{\n                            const scaleBy = 1.1;\n                            const newScale = dy > 0 ? scale * (1 / scaleBy) : scale * scaleBy;\n                            const boundedScale = Math.min(Math.max(newScale, 0.1), 5);\n                            const pointer = stageRef.current?.getPointerPosition();\n                            if (!pointer) return;\n                            const mousePointTo = {\n                                x: (pointer.x - position.x) / scale,\n                                y: (pointer.y - position.y) / scale\n                            };\n                            setPosition({\n                                x: pointer.x - mousePointTo.x * boundedScale,\n                                y: pointer.y - mousePointTo.y * boundedScale\n                            });\n                            setScale(boundedScale);\n                        }\n                    }[\"BannerWorkspace.useGesture[bind]\"]);\n                }\n            }\n        }[\"BannerWorkspace.useGesture[bind]\"]\n    }, {\n        drag: {\n            filterTaps: true,\n            threshold: 1\n        }\n    });\n    const handleRectChange = (index, changes)=>{\n        const newRects = [\n            ...rectangles\n        ];\n        newRects[index] = {\n            ...rectangles[index],\n            ...changes\n        };\n        setRectangles(newRects);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: '100vw',\n            height: '100vh',\n            position: 'relative',\n            overflow: 'hidden',\n            background: '#fafafa'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ...bind(),\n                style: {\n                    position: 'absolute',\n                    top: 0,\n                    left: 0,\n                    right: 0,\n                    bottom: 100,\n                    overflow: 'hidden',\n                    touchAction: 'none',\n                    cursor: isDragging.current ? 'grabbing' : 'grab'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_konva__WEBPACK_IMPORTED_MODULE_1__.Stage, {\n                    ref: stageRef,\n                    width: dimensions.width,\n                    height: dimensions.height,\n                    scale: {\n                        x: scale,\n                        y: scale\n                    },\n                    position: position,\n                    draggable: false,\n                    onClick: (e)=>e.target === e.target.getStage() && setSelectedId(null),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_konva__WEBPACK_IMPORTED_MODULE_1__.Layer, {\n                        clipFunc: null,\n                        children: [\n                            rectangles.map((rect, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_konva__WEBPACK_IMPORTED_MODULE_1__.Rect, {\n                                    ...rect,\n                                    id: `rect-${rect.id}`,\n                                    onClick: ()=>setSelectedId(rect.id),\n                                    onTap: ()=>setSelectedId(rect.id),\n                                    onDragStart: ()=>setSelectedId(rect.id),\n                                    onDragEnd: (e)=>{\n                                        handleRectChange(i, {\n                                            x: e.target.x(),\n                                            y: e.target.y()\n                                        });\n                                    },\n                                    onTransformEnd: (e)=>{\n                                        const node = e.target;\n                                        handleRectChange(i, {\n                                            x: node.x(),\n                                            y: node.y(),\n                                            width: Math.abs(node.width() * node.scaleX()),\n                                            height: Math.abs(node.height() * node.scaleY())\n                                        });\n                                    }\n                                }, rect.id, false, {\n                                    fileName: \"/Users/ramnan/Documents/generative_banner/components/BannerWorkspace.js\",\n                                    lineNumber: 183,\n                                    columnNumber: 15\n                                }, undefined)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_konva__WEBPACK_IMPORTED_MODULE_1__.Transformer, {\n                                ref: transformerRef,\n                                boundBoxFunc: (oldBox, newBox)=>{\n                                    return newBox.width < 50 || newBox.height < 50 || newBox.width > 800 || newBox.height > 600 ? oldBox : newBox;\n                                },\n                                rotateEnabled: true,\n                                keepRatio: false\n                            }, void 0, false, {\n                                fileName: \"/Users/ramnan/Documents/generative_banner/components/BannerWorkspace.js\",\n                                lineNumber: 207,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ramnan/Documents/generative_banner/components/BannerWorkspace.js\",\n                        lineNumber: 181,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ramnan/Documents/generative_banner/components/BannerWorkspace.js\",\n                    lineNumber: 172,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ramnan/Documents/generative_banner/components/BannerWorkspace.js\",\n                lineNumber: 162,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: addRectangle,\n                style: {\n                    position: 'fixed',\n                    top: 20,\n                    left: 20,\n                    padding: '10px 20px',\n                    background: '#0096ff',\n                    color: 'white',\n                    border: 'none',\n                    borderRadius: 4,\n                    cursor: 'pointer',\n                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',\n                    zIndex: 1000\n                },\n                children: \"Add Rectangle\"\n            }, void 0, false, {\n                fileName: \"/Users/ramnan/Documents/generative_banner/components/BannerWorkspace.js\",\n                lineNumber: 222,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ramnan/Documents/generative_banner/components/BannerWorkspace.js\",\n        lineNumber: 161,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerWorkspace);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUc7NENBQ2xCN0YsR0FBR2dHLEtBQUtoRyxDQUFDOzRDQUNUQyxHQUFHK0YsS0FBSy9GLENBQUM7NENBQ1RHLE9BQU93RCxLQUFLQyxHQUFHLENBQUNtQyxLQUFLNUYsS0FBSyxLQUFLNEYsS0FBS0MsTUFBTTs0Q0FDMUM1RixRQUFRdUQsS0FBS0MsR0FBRyxDQUFDbUMsS0FBSzNGLE1BQU0sS0FBSzJGLEtBQUtFLE1BQU07d0NBQzlDO29DQUNGO21DQXBCSzNFLEtBQUtDLEVBQUU7Ozs7OzBDQXVCaEIsOERBQUNsQyxvREFBV0E7Z0NBQ1ZpRyxLQUFLNUU7Z0NBQ0x3RixjQUFjLENBQUNDLFFBQVFDO29DQUNyQixPQUFPLE9BQ0VqRyxLQUFLLEdBQUcsTUFBTWlHLE9BQU9oRyxNQUFNLEdBQUcsTUFDckNnRyxPQUFPakcsS0FBSyxHQUFHLE9BQU9pRyxPQUFPaEcsTUFBTSxHQUFHLE1BQ3BDK0YsU0FBU0M7Z0NBQ2Y7Z0NBQ0FDLGVBQWU7Z0NBQ2ZDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTW5CLDhEQUFDQztnQkFDQ2hCLFNBQVN4RDtnQkFDVGUsT0FBTztvQkFDTGpELFVBQVU7b0JBQ1ZvRixLQUFLO29CQUNMQyxNQUFNO29CQUNOc0IsU0FBUztvQkFDVHhCLFlBQVk7b0JBQ1p5QixPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxjQUFjO29CQUNkNUQsUUFBUTtvQkFDUjZELFdBQVc7b0JBQ1hDLFFBQVE7Z0JBQ1Y7MEJBQ0Q7Ozs7Ozs7Ozs7OztBQUtQO0FBRUEsaUVBQWVuSCxlQUFlQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvcmFtbmFuL0RvY3VtZW50cy9nZW5lcmF0aXZlX2Jhbm5lci9jb21wb25lbnRzL0Jhbm5lcldvcmtzcGFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFnZSwgTGF5ZXIsIFJlY3QsIFRyYW5zZm9ybWVyIH0gZnJvbSAncmVhY3Qta29udmEnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlR2VzdHVyZSB9IGZyb20gJ0B1c2UtZ2VzdHVyZS9yZWFjdCc7XG5cbmNvbnN0IEJhbm5lcldvcmtzcGFjZSA9ICgpID0+IHtcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XG4gIGNvbnN0IFtkaW1lbnNpb25zLCBzZXREaW1lbnNpb25zXSA9IHVzZVN0YXRlKHsgd2lkdGg6IDAsIGhlaWdodDogMCB9KTtcbiAgY29uc3QgW3JlY3RhbmdsZXMsIHNldFJlY3RhbmdsZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgc3RhZ2VSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHRyYW5zZm9ybWVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBpc0RyYWdnaW5nID0gdXNlUmVmKGZhbHNlKTtcblxuICAvLyBVcGRhdGUgZGltZW5zaW9ucyBhbmQgY2VudGVyIHN0YWdlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlRGltZW5zaW9ucyA9ICgpID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZXREaW1lbnNpb25zKHtcbiAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGggKiAyLFxuICAgICAgICAgIGhlaWdodDogKHdpbmRvdy5pbm5lckhlaWdodCAtIDEwMCkgKiAyXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRQb3NpdGlvbih7XG4gICAgICAgICAgeDogLXdpbmRvdy5pbm5lcldpZHRoIC8gMixcbiAgICAgICAgICB5OiAtKHdpbmRvdy5pbm5lckhlaWdodCAtIDEwMCkgLyAyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB1cGRhdGVEaW1lbnNpb25zKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZURpbWVuc2lvbnMpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlRGltZW5zaW9ucyk7XG4gIH0sIFtdKTtcblxuICAvLyBIYW5kbGUga2V5Ym9hcmQgZXZlbnRzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlKSA9PiB7XG4gICAgICBpZiAoKGUua2V5ID09PSAnRGVsZXRlJyB8fCBlLmtleSA9PT0gJ0JhY2tzcGFjZScpICYmIHNlbGVjdGVkSWQpIHtcbiAgICAgICAgc2V0UmVjdGFuZ2xlcyhyZWN0YW5nbGVzLmZpbHRlcihyZWN0ID0+IHJlY3QuaWQgIT09IHNlbGVjdGVkSWQpKTtcbiAgICAgICAgc2V0U2VsZWN0ZWRJZChudWxsKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgfSwgW3NlbGVjdGVkSWQsIHJlY3RhbmdsZXNdKTtcblxuICAvLyBVcGRhdGUgdHJhbnNmb3JtZXIgb24gc2VsZWN0aW9uXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkSWQgJiYgdHJhbnNmb3JtZXJSZWYuY3VycmVudCkge1xuICAgICAgY29uc3Qgc3RhZ2UgPSBzdGFnZVJlZi5jdXJyZW50O1xuICAgICAgY29uc3Qgc2VsZWN0ZWROb2RlID0gc3RhZ2UuZmluZE9uZSgnI3JlY3QtJyArIHNlbGVjdGVkSWQpO1xuICAgICAgaWYgKHNlbGVjdGVkTm9kZSkge1xuICAgICAgICB0cmFuc2Zvcm1lclJlZi5jdXJyZW50Lm5vZGVzKFtzZWxlY3RlZE5vZGVdKTtcbiAgICAgICAgdHJhbnNmb3JtZXJSZWYuY3VycmVudC5nZXRMYXllcigpLmJhdGNoRHJhdygpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHJhbnNmb3JtZXJSZWYuY3VycmVudCkge1xuICAgICAgdHJhbnNmb3JtZXJSZWYuY3VycmVudC5ub2RlcyhbXSk7XG4gICAgICB0cmFuc2Zvcm1lclJlZi5jdXJyZW50LmdldExheWVyKCkuYmF0Y2hEcmF3KCk7XG4gICAgfVxuICB9LCBbc2VsZWN0ZWRJZF0pO1xuXG4gIGNvbnN0IGFkZFJlY3RhbmdsZSA9ICgpID0+IHtcbiAgICBpZiAoIXN0YWdlUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBzdGFnZUJveCA9IHN0YWdlUmVmLmN1cnJlbnQuY29udGFpbmVyKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY2VudGVyWCA9ICgtcG9zaXRpb24ueCArIHN0YWdlQm94LndpZHRoIC8gMikgLyBzY2FsZTtcbiAgICBjb25zdCBjZW50ZXJZID0gKC1wb3NpdGlvbi55ICsgc3RhZ2VCb3guaGVpZ2h0IC8gMikgLyBzY2FsZTtcbiAgICBcbiAgICBjb25zdCBuZXdSZWN0ID0ge1xuICAgICAgaWQ6IERhdGUubm93KCksXG4gICAgICB4OiBjZW50ZXJYIC0gMTUwLFxuICAgICAgeTogY2VudGVyWSAtIDEyNSxcbiAgICAgIHdpZHRoOiAzMDAsXG4gICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICBzdHJva2U6ICcjMDA5NmZmJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAyLFxuICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gICAgfTtcblxuICAgIHNldFJlY3RhbmdsZXMoWy4uLnJlY3RhbmdsZXMsIG5ld1JlY3RdKTtcbiAgICBzZXRTZWxlY3RlZElkKG5ld1JlY3QuaWQpO1xuICB9O1xuXG4gIGNvbnN0IGJpbmQgPSB1c2VHZXN0dXJlKHtcbiAgICBvbkRyYWdTdGFydDogKCkgPT4ge1xuICAgICAgaWYgKCFzZWxlY3RlZElkKSB7XG4gICAgICAgIGlzRHJhZ2dpbmcuY3VycmVudCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHN0YWdlUmVmLmN1cnJlbnQ/LmNvbnRhaW5lcigpO1xuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgY29udGFpbmVyLnN0eWxlLmN1cnNvciA9ICdncmFiYmluZyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uRHJhZzogKHsgZGVsdGE6IFtkeCwgZHldLCBldmVudCB9KSA9PiB7XG4gICAgICBpZiAoIXNlbGVjdGVkSWQpIHtcbiAgICAgICAgZXZlbnQ/LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgc2V0UG9zaXRpb24ocG9zID0+ICh7XG4gICAgICAgICAgICB4OiBwb3MueCArIGR4ICogMixcbiAgICAgICAgICAgIHk6IHBvcy55ICsgZHkgKiAyXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uRHJhZ0VuZDogKCkgPT4ge1xuICAgICAgaXNEcmFnZ2luZy5jdXJyZW50ID0gZmFsc2U7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBzdGFnZVJlZi5jdXJyZW50Py5jb250YWluZXIoKTtcbiAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmN1cnNvciA9ICdncmFiJztcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uV2hlZWw6ICh7IGRlbHRhOiBbZHgsIGR5XSwgZXZlbnQgfSkgPT4ge1xuICAgICAgZXZlbnQ/LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBcbiAgICAgIGNvbnN0IGlzVHJhY2twYWQgPSBNYXRoLmFicyhldmVudC5kZWx0YVkpIDwgNTA7XG5cbiAgICAgIGlmIChpc1RyYWNrcGFkICYmICFldmVudC5jdHJsS2V5KSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgc2V0UG9zaXRpb24ocG9zID0+ICh7XG4gICAgICAgICAgICB4OiBwb3MueCAtIGR4ICogMixcbiAgICAgICAgICAgIHk6IHBvcy55IC0gZHkgKiAyXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc2NhbGVCeSA9IDEuMTtcbiAgICAgICAgICBjb25zdCBuZXdTY2FsZSA9IGR5ID4gMCBcbiAgICAgICAgICAgID8gc2NhbGUgKiAoMSAvIHNjYWxlQnkpXG4gICAgICAgICAgICA6IHNjYWxlICogc2NhbGVCeTtcblxuICAgICAgICAgIGNvbnN0IGJvdW5kZWRTY2FsZSA9IE1hdGgubWluKE1hdGgubWF4KG5ld1NjYWxlLCAwLjEpLCA1KTtcbiAgICAgICAgICBjb25zdCBwb2ludGVyID0gc3RhZ2VSZWYuY3VycmVudD8uZ2V0UG9pbnRlclBvc2l0aW9uKCk7XG4gICAgICAgICAgaWYgKCFwb2ludGVyKSByZXR1cm47XG5cbiAgICAgICAgICBjb25zdCBtb3VzZVBvaW50VG8gPSB7XG4gICAgICAgICAgICB4OiAocG9pbnRlci54IC0gcG9zaXRpb24ueCkgLyBzY2FsZSxcbiAgICAgICAgICAgIHk6IChwb2ludGVyLnkgLSBwb3NpdGlvbi55KSAvIHNjYWxlLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBzZXRQb3NpdGlvbih7XG4gICAgICAgICAgICB4OiBwb2ludGVyLnggLSBtb3VzZVBvaW50VG8ueCAqIGJvdW5kZWRTY2FsZSxcbiAgICAgICAgICAgIHk6IHBvaW50ZXIueSAtIG1vdXNlUG9pbnRUby55ICogYm91bmRlZFNjYWxlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldFNjYWxlKGJvdW5kZWRTY2FsZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGRyYWc6IHsgZmlsdGVyVGFwczogdHJ1ZSwgdGhyZXNob2xkOiAxIH1cbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlUmVjdENoYW5nZSA9IChpbmRleCwgY2hhbmdlcykgPT4ge1xuICAgIGNvbnN0IG5ld1JlY3RzID0gWy4uLnJlY3RhbmdsZXNdO1xuICAgIG5ld1JlY3RzW2luZGV4XSA9IHsgLi4ucmVjdGFuZ2xlc1tpbmRleF0sIC4uLmNoYW5nZXMgfTtcbiAgICBzZXRSZWN0YW5nbGVzKG5ld1JlY3RzKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDB2dycsIGhlaWdodDogJzEwMHZoJywgcG9zaXRpb246ICdyZWxhdGl2ZScsIG92ZXJmbG93OiAnaGlkZGVuJywgYmFja2dyb3VuZDogJyNmYWZhZmEnIH19PlxuICAgICAgPGRpdiB7Li4uYmluZCgpfSBzdHlsZT17eyBcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJvdHRvbTogMTAwLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsIFxuICAgICAgICB0b3VjaEFjdGlvbjogJ25vbmUnLFxuICAgICAgICBjdXJzb3I6IGlzRHJhZ2dpbmcuY3VycmVudCA/ICdncmFiYmluZycgOiAnZ3JhYicsXG4gICAgICB9fT5cbiAgICAgICAgPFN0YWdlXG4gICAgICAgICAgcmVmPXtzdGFnZVJlZn1cbiAgICAgICAgICB3aWR0aD17ZGltZW5zaW9ucy53aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2RpbWVuc2lvbnMuaGVpZ2h0fVxuICAgICAgICAgIHNjYWxlPXt7IHg6IHNjYWxlLCB5OiBzY2FsZSB9fVxuICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gZS50YXJnZXQgPT09IGUudGFyZ2V0LmdldFN0YWdlKCkgJiYgc2V0U2VsZWN0ZWRJZChudWxsKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxMYXllciBjbGlwRnVuYz17bnVsbH0+XG4gICAgICAgICAgICB7cmVjdGFuZ2xlcy5tYXAoKHJlY3QsIGkpID0+IChcbiAgICAgICAgICAgICAgPFJlY3RcbiAgICAgICAgICAgICAgICBrZXk9e3JlY3QuaWR9XG4gICAgICAgICAgICAgICAgey4uLnJlY3R9XG4gICAgICAgICAgICAgICAgaWQ9e2ByZWN0LSR7cmVjdC5pZH1gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkSWQocmVjdC5pZCl9XG4gICAgICAgICAgICAgICAgb25UYXA9eygpID0+IHNldFNlbGVjdGVkSWQocmVjdC5pZCl9XG4gICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9eygpID0+IHNldFNlbGVjdGVkSWQocmVjdC5pZCl9XG4gICAgICAgICAgICAgICAgb25EcmFnRW5kPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgIGhhbmRsZVJlY3RDaGFuZ2UoaSwge1xuICAgICAgICAgICAgICAgICAgICB4OiBlLnRhcmdldC54KCksXG4gICAgICAgICAgICAgICAgICAgIHk6IGUudGFyZ2V0LnkoKVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvblRyYW5zZm9ybUVuZD17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVSZWN0Q2hhbmdlKGksIHtcbiAgICAgICAgICAgICAgICAgICAgeDogbm9kZS54KCksXG4gICAgICAgICAgICAgICAgICAgIHk6IG5vZGUueSgpLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogTWF0aC5hYnMobm9kZS53aWR0aCgpICogbm9kZS5zY2FsZVgoKSksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogTWF0aC5hYnMobm9kZS5oZWlnaHQoKSAqIG5vZGUuc2NhbGVZKCkpXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8VHJhbnNmb3JtZXJcbiAgICAgICAgICAgICAgcmVmPXt0cmFuc2Zvcm1lclJlZn1cbiAgICAgICAgICAgICAgYm91bmRCb3hGdW5jPXsob2xkQm94LCBuZXdCb3gpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgbmV3Qm94LndpZHRoIDwgNTAgfHwgbmV3Qm94LmhlaWdodCA8IDUwIHx8XG4gICAgICAgICAgICAgICAgICBuZXdCb3gud2lkdGggPiA4MDAgfHwgbmV3Qm94LmhlaWdodCA+IDYwMFxuICAgICAgICAgICAgICAgICkgPyBvbGRCb3ggOiBuZXdCb3g7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHJvdGF0ZUVuYWJsZWQ9e3RydWV9XG4gICAgICAgICAgICAgIGtlZXBSYXRpbz17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGF5ZXI+XG4gICAgICAgIDwvU3RhZ2U+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXthZGRSZWN0YW5nbGV9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgdG9wOiAyMCxcbiAgICAgICAgICBsZWZ0OiAyMCxcbiAgICAgICAgICBwYWRkaW5nOiAnMTBweCAyMHB4JyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzAwOTZmZicsXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMSknLFxuICAgICAgICAgIHpJbmRleDogMTAwMFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBBZGQgUmVjdGFuZ2xlXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lcldvcmtzcGFjZTsgIl0sIm5hbWVzIjpbIlN0YWdlIiwiTGF5ZXIiLCJSZWN0IiwiVHJhbnNmb3JtZXIiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsInVzZUdlc3R1cmUiLCJCYW5uZXJXb3Jrc3BhY2UiLCJzY2FsZSIsInNldFNjYWxlIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsIngiLCJ5IiwiZGltZW5zaW9ucyIsInNldERpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsInJlY3RhbmdsZXMiLCJzZXRSZWN0YW5nbGVzIiwic2VsZWN0ZWRJZCIsInNldFNlbGVjdGVkSWQiLCJzdGFnZVJlZiIsInRyYW5zZm9ybWVyUmVmIiwiaXNEcmFnZ2luZyIsInVwZGF0ZURpbWVuc2lvbnMiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleURvd24iLCJlIiwia2V5IiwiZmlsdGVyIiwicmVjdCIsImlkIiwiY3VycmVudCIsInN0YWdlIiwic2VsZWN0ZWROb2RlIiwiZmluZE9uZSIsIm5vZGVzIiwiZ2V0TGF5ZXIiLCJiYXRjaERyYXciLCJhZGRSZWN0YW5nbGUiLCJzdGFnZUJveCIsImNvbnRhaW5lciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNlbnRlclgiLCJjZW50ZXJZIiwibmV3UmVjdCIsIkRhdGUiLCJub3ciLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJkcmFnZ2FibGUiLCJiaW5kIiwib25EcmFnU3RhcnQiLCJzdHlsZSIsImN1cnNvciIsIm9uRHJhZyIsImRlbHRhIiwiZHgiLCJkeSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwb3MiLCJvbkRyYWdFbmQiLCJvbldoZWVsIiwiaXNUcmFja3BhZCIsIk1hdGgiLCJhYnMiLCJkZWx0YVkiLCJjdHJsS2V5Iiwic2NhbGVCeSIsIm5ld1NjYWxlIiwiYm91bmRlZFNjYWxlIiwibWluIiwibWF4IiwicG9pbnRlciIsImdldFBvaW50ZXJQb3NpdGlvbiIsIm1vdXNlUG9pbnRUbyIsImRyYWciLCJmaWx0ZXJUYXBzIiwidGhyZXNob2xkIiwiaGFuZGxlUmVjdENoYW5nZSIsImluZGV4IiwiY2hhbmdlcyIsIm5ld1JlY3RzIiwiZGl2Iiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwidG91Y2hBY3Rpb24iLCJyZWYiLCJvbkNsaWNrIiwidGFyZ2V0IiwiZ2V0U3RhZ2UiLCJjbGlwRnVuYyIsIm1hcCIsImkiLCJvblRhcCIsIm9uVHJhbnNmb3JtRW5kIiwibm9kZSIsInNjYWxlWCIsInNjYWxlWSIsImJvdW5kQm94RnVuYyIsIm9sZEJveCIsIm5ld0JveCIsInJvdGF0ZUVuYWJsZWQiLCJrZWVwUmF0aW8iLCJidXR0b24iLCJwYWRkaW5nIiwiY29sb3IiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJ6SW5kZXgiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BannerWorkspace.js\n");

/***/ })

};
;