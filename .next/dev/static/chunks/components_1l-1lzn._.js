(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "6610a79a6b3f3de3d88de9dd5fc44736bfdc4d91b8ec7bd21daf48819454d1f7") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6610a79a6b3f3de3d88de9dd5fc44736bfdc4d91b8ec7bd21daf48819454d1f7";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] !== pathname) {
        t0 = ({
            "Navbar[isActive]": (path)=>{
                if (path === "/") {
                    return pathname === "/";
                }
                return pathname.startsWith(path);
            }
        })["Navbar[isActive]"];
        $[1] = pathname;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const isActive = t0;
    let t1;
    if ($[3] !== isActive || $[4] !== mobileMenuOpen) {
        const navLinks = [
            {
                label: "Home",
                href: "/"
            },
            {
                label: "About Us",
                href: "/about"
            },
            {
                label: "Destinations",
                href: "/destinations"
            },
            {
                label: "Transport",
                href: "/#transport"
            },
            {
                label: "Tours",
                href: "/#tours"
            },
            {
                label: "Contact Us",
                href: "/#contact"
            }
        ];
        let t2;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "flex items-center gap-3 group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-9 w-9 items-center justify-center overflow-hidden border border-gray-300 bg-white p-1 rounded-sm shadow-xs transition-transform group-hover:scale-105",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/logo.png",
                            alt: "Global Tours & Travels",
                            className: "h-full w-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 56,
                            columnNumber: 243
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 56,
                        columnNumber: 69
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-serif text-[17px] font-bold text-[#123f55] tracking-tight",
                        children: "Global Tours & Travels"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 56,
                        columnNumber: 342
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 56,
                columnNumber: 12
            }, this);
            $[6] = t2;
        } else {
            t2 = $[6];
        }
        const t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "hidden items-center gap-8 md:flex",
            children: navLinks.map({
                "Navbar[navLinks.map()]": (link)=>{
                    const active = isActive(link.href);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        className: `relative text-[15px] font-medium transition-colors duration-200 ${active ? "font-semibold text-[#123f55]" : "text-slate-600 hover:text-[#123f55]"}`,
                        children: [
                            link.label,
                            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#123f55]"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 64,
                                columnNumber: 242
                            }, this)
                        ]
                    }, link.label, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 64,
                        columnNumber: 18
                    }, this);
                }
            }["Navbar[navLinks.map()]"])
        }, void 0, false, {
            fileName: "[project]/components/Navbar.tsx",
            lineNumber: 61,
            columnNumber: 16
        }, this);
        let t4;
        if ($[7] !== mobileMenuOpen) {
            t4 = ({
                "Navbar[<button>.onClick]": ()=>setMobileMenuOpen(!mobileMenuOpen)
            })["Navbar[<button>.onClick]"];
            $[7] = mobileMenuOpen;
            $[8] = t4;
        } else {
            t4 = $[8];
        }
        const t5 = mobileMenuOpen ? "\u2715" : "\u2630";
        let t6;
        if ($[9] !== t4 || $[10] !== t5) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: t4,
                className: "p-2 text-2xl text-[#123f55] md:hidden focus:outline-none",
                "aria-label": "Toggle menu",
                children: t5
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 80,
                columnNumber: 12
            }, this);
            $[9] = t4;
            $[10] = t5;
            $[11] = t6;
        } else {
            t6 = $[11];
        }
        let t7;
        if ($[12] !== t3 || $[13] !== t6) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12",
                children: [
                    t2,
                    t3,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 89,
                columnNumber: 12
            }, this);
            $[12] = t3;
            $[13] = t6;
            $[14] = t7;
        } else {
            t7 = $[14];
        }
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "sticky top-0 z-50 w-full border-b border-gray-200/60 bg-[#faf9f5]/95 backdrop-blur-md",
            children: [
                t7,
                mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-gray-200 bg-[#faf9f5] px-6 py-4 shadow-lg md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: navLinks.map({
                            "Navbar[navLinks.map()]": (link_0)=>{
                                const active_0 = isActive(link_0.href);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link_0.href,
                                    onClick: {
                                        "Navbar[navLinks.map() > <Link>.onClick]": ()=>setMobileMenuOpen(false)
                                    }["Navbar[navLinks.map() > <Link>.onClick]"],
                                    className: `text-[16px] py-2 transition-colors ${active_0 ? "font-bold text-[#123f55]" : "text-slate-600 hover:text-[#123f55]"}`,
                                    children: link_0.label
                                }, link_0.label, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 99,
                                    columnNumber: 22
                                }, this);
                            }
                        }["Navbar[navLinks.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 96,
                        columnNumber: 224
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 96,
                    columnNumber: 139
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[3] = isActive;
        $[4] = mobileMenuOpen;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    return t1;
}
_s(Navbar, "FIkGCiZnrKK5dgKLT9oC7ZzKVWM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/tours/CustomItineraryCTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomItineraryCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.mjs [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CustomItineraryCTA() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "7415267bc5bb633ef26387075e13499a607367c099bbc8d675c47c1e3e8e40f0") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7415267bc5bb633ef26387075e13499a607367c099bbc8d675c47c1e3e8e40f0";
    }
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/5 blur-3xl"
        }, void 0, false, {
            fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-[#b04328]/20 blur-3xl"
        }, void 0, false, {
            fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-amber-300 backdrop-blur-xs mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                    lineNumber: 30,
                    columnNumber: 154
                }, this),
                "BESPOKE TRAVEL DESIGN"
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight",
            children: "Looking for a 100% Custom Travel Plan?"
        }, void 0, false, {
            fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-6 text-sm text-slate-200 leading-relaxed font-normal max-w-xl",
            children: "Whether you are planning a private family reunion, an extended spiritual circuit, or a photography excursion, our travel architects design tailor-made itineraries around your exact dates, budget, and style."
        }, void 0, false, {
            fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    className: "h-4 w-4 text-emerald-400 shrink-0"
                }, void 0, false, {
                    fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                    lineNumber: 43,
                    columnNumber: 53
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Custom pace with flexible pick-up and drop-off points"
                }, void 0, false, {
                    fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                    lineNumber: 43,
                    columnNumber: 115
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    className: "h-4 w-4 text-emerald-400 shrink-0"
                }, void 0, false, {
                    fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                    lineNumber: 50,
                    columnNumber: 53
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Choice of 4-Star, 5-Star, or Boutique Heritage stays"
                }, void 0, false, {
                    fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                    lineNumber: 50,
                    columnNumber: 115
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-6",
            children: [
                t2,
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 flex flex-col gap-3 text-xs text-slate-200",
                    children: [
                        t5,
                        t6,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "h-4 w-4 text-emerald-400 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                    lineNumber: 57,
                                    columnNumber: 169
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Dedicated private driver & multilingual historian guide"
                                }, void 0, false, {
                                    fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                    lineNumber: 57,
                                    columnNumber: 231
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                            lineNumber: 57,
                            columnNumber: 126
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                    lineNumber: 57,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] !== submitted) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative overflow-hidden bg-[#123f55] py-20 lg:py-24 text-white",
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center",
                        children: [
                            t7,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-white/15 bg-white/95 p-6 sm:p-8 text-slate-900 shadow-2xl backdrop-blur-md",
                                    children: !submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: {
                                            "CustomItineraryCTA[<form>.onSubmit]": (e)=>{
                                                e.preventDefault();
                                                setSubmitted(true);
                                            }
                                        }["CustomItineraryCTA[<form>.onSubmit]"],
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-serif text-xl font-bold text-slate-900",
                                                children: "Request a Free Custom Itinerary Quote"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                lineNumber: 69,
                                                columnNumber: 89
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1",
                                                                children: "Full Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                                lineNumber: 69,
                                                                columnNumber: 251
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                required: true,
                                                                placeholder: "e.g. Sarah Jenkins",
                                                                className: "w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-900 focus:border-[#123f55] focus:outline-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                                lineNumber: 69,
                                                                columnNumber: 360
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 246
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1",
                                                                children: "Email Address"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                                lineNumber: 69,
                                                                columnNumber: 572
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                required: true,
                                                                placeholder: "sarah@example.com",
                                                                className: "w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-900 focus:border-[#123f55] focus:outline-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                                lineNumber: 69,
                                                                columnNumber: 685
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 567
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                lineNumber: 69,
                                                columnNumber: 191
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1",
                                                                children: "Travel Dates"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                                lineNumber: 69,
                                                                columnNumber: 958
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "e.g. Mid Oct 2026 (3 Days)",
                                                                className: "w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-900 focus:border-[#123f55] focus:outline-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                                lineNumber: 69,
                                                                columnNumber: 1070
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 953
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1",
                                                                children: "Group Size"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                                lineNumber: 69,
                                                                columnNumber: 1274
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                className: "w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-900 focus:border-[#123f55] focus:outline-none cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Solo Traveler"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                                        lineNumber: 69,
                                                                        columnNumber: 1538
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Couple / 2 Persons"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                                        lineNumber: 69,
                                                                        columnNumber: 1568
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Family (3 - 5 Persons)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                                        lineNumber: 69,
                                                                        columnNumber: 1603
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Group (6+ Persons)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                                        lineNumber: 69,
                                                                        columnNumber: 1642
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                                lineNumber: 69,
                                                                columnNumber: 1384
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 1269
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                lineNumber: 69,
                                                columnNumber: 898
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1",
                                                        children: "Special Requirements / Places to Visit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 1703
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        rows: 3,
                                                        placeholder: "Tell us about your interests (e.g. Ajanta Caves, luxury SUV, specific diet)...",
                                                        className: "w-full rounded-xl border border-slate-300 p-4 text-xs text-slate-900 focus:border-[#123f55] focus:outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 1841
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                lineNumber: 69,
                                                columnNumber: 1698
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#b04328] text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all hover:bg-[#94361e] cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 2307
                                                    }, this),
                                                    "SEND ITINERARY REQUEST"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                lineNumber: 69,
                                                columnNumber: 2084
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                        lineNumber: 64,
                                        columnNumber: 406
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-8 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "h-8 w-8"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 2528
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                lineNumber: 69,
                                                columnNumber: 2410
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-serif text-2xl font-bold text-slate-900",
                                                children: "Quote Request Sent!"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                lineNumber: 69,
                                                columnNumber: 2570
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-xs text-slate-600 max-w-sm mx-auto",
                                                children: "Thank you! Our travel planner is preparing your customized itinerary proposal. We will email you shortly."
                                            }, void 0, false, {
                                                fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                lineNumber: 69,
                                                columnNumber: 2655
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: {
                                                    "CustomItineraryCTA[<button>.onClick]": ()=>setSubmitted(false)
                                                }["CustomItineraryCTA[<button>.onClick]"],
                                                className: "mt-6 inline-flex h-10 items-center justify-center rounded-xl bg-[#123f55] px-6 text-xs font-bold uppercase text-white",
                                                children: "SUBMIT ANOTHER REQUEST"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                                lineNumber: 69,
                                                columnNumber: 2824
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                        lineNumber: 69,
                                        columnNumber: 2376
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                    lineNumber: 64,
                                    columnNumber: 274
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                                lineNumber: 64,
                                columnNumber: 243
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                        lineNumber: 64,
                        columnNumber: 166
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
                    lineNumber: 64,
                    columnNumber: 103
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/CustomItineraryCTA.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[9] = submitted;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    return t8;
}
_s(CustomItineraryCTA, "S6ipnhtDax9I0+B/fnlVz3+f6e8=");
_c = CustomItineraryCTA;
var _c;
__turbopack_context__.k.register(_c, "CustomItineraryCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/tours/TourInclusionsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TourInclusionsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/car.mjs [app-client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hotel.mjs [app-client] (ecmascript) <export default as Hotel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ticket.mjs [app-client] (ecmascript) <export default as Ticket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils.mjs [app-client] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
"use client";
;
;
;
const inclusions = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"],
        title: "Chauffeur Pick & Drop",
        description: "Door-to-door AC luxury vehicles with verified, punctual, and courteous local drivers."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
        title: "Certified Historian Guides",
        description: "Deep storytelling and historical insights into 2nd-century BCE rock carvings and Mughal heritage."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__["Hotel"],
        title: "Handpicked Luxury Stays",
        description: "Carefully vetted 4-star and 5-star heritage hotels offering supreme comfort and hospitality."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"],
        title: "VIP Skip-the-Line Passes",
        description: "Pre-booked monument entry passes for Ajanta, Ellora, and Daulatabad with zero waiting time."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"],
        title: "Gourmet Regional Dining",
        description: "Curated lunch & dinner experiences featuring authentic regional thalis and continental cuisine."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        title: "24/7 Personal Concierge",
        description: "Dedicated concierge hotline for real-time itinerary modifications and travel assistance."
    }
];
function TourInclusionsSection() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "51b31ebea1d76e760db9581d14c99ee4a5e87b0287cd9d741f4754715c9ecbbb") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51b31ebea1d76e760db9581d14c99ee4a5e87b0287cd9d741f4754715c9ecbbb";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center max-w-2xl mx-auto mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-semibold uppercase tracking-[0.2em] text-[#123f55]",
                    children: "WHY TRAVEL WITH US"
                }, void 0, false, {
                    fileName: "[project]/components/tours/TourInclusionsSection.tsx",
                    lineNumber: 40,
                    columnNumber: 63
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-3 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl",
                    children: "Included in Every Package"
                }, void 0, false, {
                    fileName: "[project]/components/tours/TourInclusionsSection.tsx",
                    lineNumber: 40,
                    columnNumber: 170
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-sm text-slate-600 leading-relaxed font-normal",
                    children: "We handle every detail of your journey so you can focus entirely on enjoying unforgettable moments."
                }, void 0, false, {
                    fileName: "[project]/components/tours/TourInclusionsSection.tsx",
                    lineNumber: 40,
                    columnNumber: 293
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/TourInclusionsSection.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-white py-20 lg:py-28 border-t border-slate-200/70",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-6 lg:px-12",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
                        children: inclusions.map(_TourInclusionsSectionInclusionsMap)
                    }, void 0, false, {
                        fileName: "[project]/components/tours/TourInclusionsSection.tsx",
                        lineNumber: 47,
                        columnNumber: 137
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tours/TourInclusionsSection.tsx",
                lineNumber: 47,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/tours/TourInclusionsSection.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = TourInclusionsSection;
function _TourInclusionsSectionInclusionsMap(item, index) {
    const Icon = item.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group rounded-2xl border border-slate-200/80 bg-[#faf9f5]/60 p-8 transition-all duration-300 hover:border-[#123f55]/30 hover:bg-white hover:shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-12 w-12 items-center justify-center rounded-xl bg-[#123f55] text-white shadow-sm transition-transform duration-300 group-hover:scale-110",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/components/tours/TourInclusionsSection.tsx",
                    lineNumber: 56,
                    columnNumber: 350
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/tours/TourInclusionsSection.tsx",
                lineNumber: 56,
                columnNumber: 189
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mt-6 font-serif text-xl font-bold text-slate-900 transition-colors group-hover:text-[#123f55]",
                children: item.title
            }, void 0, false, {
                fileName: "[project]/components/tours/TourInclusionsSection.tsx",
                lineNumber: 56,
                columnNumber: 384
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-xs text-slate-600 leading-relaxed font-normal",
                children: item.description
            }, void 0, false, {
                fileName: "[project]/components/tours/TourInclusionsSection.tsx",
                lineNumber: 56,
                columnNumber: 511
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/components/tours/TourInclusionsSection.tsx",
        lineNumber: 56,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "TourInclusionsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/tours/ToursGridSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToursGridSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const tourPackages = [
    {
        id: "ajanta-ellora-deluxe",
        title: "Ajanta & Ellora Caves Deluxe Experience",
        category: "heritage",
        badge: "UNESCO Special",
        badgeColor: "gold",
        duration: "2 Days / 1 Night",
        location: "Sambhaji Nagar & Cave Monuments",
        rating: 4.9,
        reviewsCount: 142,
        priceUSD: 240,
        priceINR: "₹18,500",
        image: "/destinations/ellora-photo.png",
        shortDescription: "Witness the grandeur of the monolithic Kailasa Temple at Ellora and the breathtaking 2nd-century BCE Buddhist frescoes at Ajanta Caves.",
        highlights: [
            "Monolithic Kailasa Temple (Cave 16)",
            "Ancient Buddhist Rock Paintings",
            "Private AC Chauffeur Vehicle",
            "Official Historian Tour Guide"
        ],
        inclusions: [
            "Private AC SUV Transfer",
            "1 Night 4-Star Hotel Stay",
            "All Monument Entrance Tickets",
            "Gourmet Breakfast & Lunch"
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Ellora Caves & Fort Discovery",
                desc: "Morning pickup, explore Ellora Cave complex including Kailasa Temple, followed by afternoon visit to Daulatabad Fort."
            },
            {
                day: "Day 2",
                title: "Ajanta Caves Heritage Trail",
                desc: "Full day excursion to Ajanta Caves. Explore ancient murals, Chaityas, and Viharas with expert guide before drop-off."
            }
        ]
    },
    {
        id: "sambhaji-nagar-heritage",
        title: "Chhatrapati Sambhaji Nagar City Trail",
        category: "heritage",
        badge: "Popular",
        badgeColor: "teal",
        duration: "1 Day (8 Hours)",
        location: "Aurangabad City Landmarks",
        rating: 4.8,
        reviewsCount: 96,
        priceUSD: 95,
        priceINR: "₹7,500",
        image: "/destinations/bibi-photo.png",
        shortDescription: "Explore the Deccan's finest Mughal architecture including the stunning Bibi Ka Maqbara, Panchakki water mill, and local artisan centers.",
        highlights: [
            "Bibi Ka Maqbara (Taj of Deccan)",
            "Panchakki 17th Century Water Mill",
            "Aurangabad Rock-Cut Caves",
            "Himroo Weaving Heritage Visit"
        ],
        inclusions: [
            "Private AC Sedan/SUV",
            "Dedicated Tour Escort",
            "Monuments Entry Passes",
            "Traditional Maharashtrian Lunch"
        ],
        itinerary: [
            {
                day: "Morning",
                title: "Mughal Architecture & Panchakki",
                desc: "Visit Bibi Ka Maqbara and learn its history. Proceed to Panchakki hydraulic mill."
            },
            {
                day: "Afternoon",
                title: "Caves & Artisan Weaving",
                desc: "Explore Aurangabad Caves overlooking the city, followed by authentic Himroo shawl weaving demonstration."
            }
        ]
    },
    {
        id: "ajanta-caves-exploration",
        title: "Ajanta Caves Deep Excursion",
        category: "heritage",
        badge: "UNESCO Site",
        badgeColor: "gold",
        duration: "1 Day (10 Hours)",
        location: "Ajanta Caves Complex",
        rating: 4.9,
        reviewsCount: 118,
        priceUSD: 110,
        priceINR: "₹8,800",
        image: "/destinations/ajanta-photo.png",
        shortDescription: "Dedicated full-day journey to the horseshoe-shaped gorge of Ajanta, home to 30 rock-cut Buddhist cave monuments dating from 2nd century BCE.",
        highlights: [
            "30 Rock-Cut Buddhist Caves",
            "World-Famous Wall Paintings & Frescoes",
            "Panoramic Viewpoint Trail",
            "Comfortable Express Highway Transfer"
        ],
        inclusions: [
            "Private AC Luxury Transport",
            "Certified English Guide",
            "All Entry Pass Fees",
            "Buffet Lunch at Resort"
        ],
        itinerary: [
            {
                day: "08:00 AM",
                title: "Express Scenic Drive",
                desc: "Pick up from city hotel and drive to Ajanta gorge through scenic countryside."
            },
            {
                day: "11:00 AM - 04:00 PM",
                title: "Guided Cave Exploration",
                desc: "In-depth tour of Caves 1, 2, 9, 10, 16, 17, and 26. View Ajanta's panoramic Horseshoe cliff viewpoint."
            }
        ]
    },
    {
        id: "daulatabad-fort-hike",
        title: "Daulatabad Fort & Medieval Citadel",
        category: "forts",
        badge: "Adventure & History",
        badgeColor: "rust",
        duration: "1 Day (6 Hours)",
        location: "Daulatabad Hill Fortress",
        rating: 4.7,
        reviewsCount: 84,
        priceUSD: 80,
        priceINR: "₹6,200",
        image: "/destinations/daulatabad-photo.png",
        shortDescription: "Conquer the unbeatable 12th-century hill fortress of Devgiri/Daulatabad, featuring maze passages (Bhul Bhulaiya), Chand Minar, and moat defenses.",
        highlights: [
            "Subterranean Dark Passage (Bhul Bhulaiya)",
            "110m High Pink Minaret (Chand Minar)",
            "Citadel Cannon & Panoramic Lookout",
            "Ingenious 3-Layer Moat Defenses"
        ],
        inclusions: [
            "Private Vehicle Pick & Drop",
            "Expert Fort Trekking Escort",
            "Flashlight Gear & Monument Ticket",
            "Refreshments & Hydration"
        ],
        itinerary: [
            {
                day: "Morning",
                title: "Fort Entry & Moat Passages",
                desc: "Cross the drawbridge and enter through the triple defense walls."
            },
            {
                day: "Midday",
                title: "Citadel Climb & Dark Tunnel",
                desc: "Navigate the pitch-black maze passage (Bhul Bhulaiya) and reach the top citadel cannon point."
            }
        ]
    },
    {
        id: "grand-maharashtra-triangle",
        title: "Grand Maharashtra Golden Heritage",
        category: "luxury",
        badge: "Best Seller",
        badgeColor: "gold",
        duration: "4 Days / 3 Nights",
        location: "Complete Heritage Circuit",
        rating: 5.0,
        reviewsCount: 210,
        priceUSD: 450,
        priceINR: "₹35,000",
        image: "/Container1.png",
        shortDescription: "The definitive luxury package covering Ajanta, Ellora, Daulatabad, Bibi Ka Maqbara, and the sacred Grishneshwar Jyotirlinga temple.",
        highlights: [
            "All Major UNESCO & Heritage Sites",
            "Grishneshwar Jyotirlinga Temple Visit",
            "5-Star/Luxury Heritage Hotel Stay",
            "Dedicated Private Chauffeur & Historian"
        ],
        inclusions: [
            "Luxury SUV (Innova Crysta / Mercedes)",
            "3 Nights Luxury Hotel Accommodation",
            "All Breakfasts, Dinners & Monument VIP Passes",
            "Airport / Railway Station Transfers"
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Arrival & City Heritage",
                desc: "Pickup, check-in to luxury hotel, afternoon tour of Bibi Ka Maqbara & Panchakki."
            },
            {
                day: "Day 2",
                title: "Ajanta Caves Excursion",
                desc: "Full-day private guided tour to Ajanta Caves with fine dining lunch."
            },
            {
                day: "Day 3",
                title: "Ellora Caves & Daulatabad",
                desc: "Visit Kailasa Temple at Ellora, Grishneshwar Jyotirlinga, and Daulatabad Fortress."
            },
            {
                day: "Day 4",
                title: "Souvenir Shopping & Departure",
                desc: "Morning Himroo weaving tour, transfer to airport with lifetime memories."
            }
        ]
    },
    {
        id: "spiritual-jyotirlinga",
        title: "Sacred Caves & Pilgrimage Circuit",
        category: "spiritual",
        badge: "Spiritual",
        badgeColor: "teal",
        duration: "3 Days / 2 Nights",
        location: "Grishneshwar, Shirdi & Caves",
        rating: 4.9,
        reviewsCount: 75,
        priceUSD: 320,
        priceINR: "₹25,000",
        image: "/Container2.png",
        shortDescription: "A serene pilgrimage combining the sacred 12th Jyotirlinga of Grishneshwar, the holy town of Shirdi, and sacred rock-cut cave shrines.",
        highlights: [
            "Grishneshwar Jyotirlinga Darshan",
            "Shirdi Sai Baba Temple Excursion",
            "Ellora Sacred Cave Temples",
            "Peaceful & Well-Paced Travel Schedule"
        ],
        inclusions: [
            "Private AC Chauffeur Vehicle",
            "2 Nights Hotel Stay with Breakfast",
            "VIP Fast-Track Temple Darshan Passes",
            "Special Pilgrimage Tour Escort"
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Grishneshwar & Ellora Temples",
                desc: "Darshan at Grishneshwar Jyotirlinga followed by quiet exploration of Ellora Hindu caves."
            },
            {
                day: "Day 2",
                title: "Shirdi Pilgrimage Excursion",
                desc: "Drive to Shirdi for VIP Samadhi Mandir Darshan and spiritual ceremonies."
            },
            {
                day: "Day 3",
                title: "Peaceful Departure",
                desc: "Morning temple visit and smooth transfer back to airport/station."
            }
        ]
    }
];
function ToursGridSection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "1a44b094560269d328de29191a44225a2e1575b7756990a5ba2a524c11842fce") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1a44b094560269d328de29191a44225a2e1575b7756990a5ba2a524c11842fce";
    }
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedTour, setSelectedTour] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bookingSuccess, setBookingSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[1] !== activeTab) {
        const filteredTours = activeTab === "all" ? tourPackages : tourPackages.filter({
            "ToursGridSection[tourPackages.filter()]": (tour)=>tour.category === activeTab
        }["ToursGridSection[tourPackages.filter()]"]);
        t5 = "bg-[#faf9f5] py-20 lg:py-28";
        t2 = "mx-auto max-w-7xl px-6 lg:px-12";
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-end md:justify-between mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold uppercase tracking-[0.2em] text-[#123f55]",
                                children: "EXPLORE OUR PACKAGES"
                            }, void 0, false, {
                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                lineNumber: 215,
                                columnNumber: 98
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-3 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl",
                                children: "Curated Tour Catalog"
                            }, void 0, false, {
                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                lineNumber: 215,
                                columnNumber: 207
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                        lineNumber: 215,
                        columnNumber: 93
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 md:mt-0 text-sm text-slate-600 max-w-md",
                        children: "Choose from carefully planned single-day heritage trips to multi-day luxury luxury circuits across Maharashtra."
                    }, void 0, false, {
                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                        lineNumber: 215,
                        columnNumber: 331
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tours/ToursGridSection.tsx",
                lineNumber: 215,
                columnNumber: 12
            }, this);
            $[8] = t3;
        } else {
            t3 = $[8];
        }
        let t6;
        if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = [
                {
                    id: "all",
                    label: "All Packages"
                },
                {
                    id: "heritage",
                    label: "UNESCO Heritage"
                },
                {
                    id: "spiritual",
                    label: "Spiritual & Caves"
                },
                {
                    id: "forts",
                    label: "Forts & Treks"
                },
                {
                    id: "luxury",
                    label: "Private Luxury"
                }
            ];
            $[9] = t6;
        } else {
            t6 = $[9];
        }
        const t7 = t6.map({
            "ToursGridSection[(anonymous)()]": (tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "ToursGridSection[(anonymous)() > <button>.onClick]": ()=>setActiveTab(tab.id)
                    }["ToursGridSection[(anonymous)() > <button>.onClick]"],
                    className: `rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeTab === tab.id ? "bg-[#123f55] text-white shadow-sm" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900"}`,
                    children: tab.label
                }, tab.id, false, {
                    fileName: "[project]/components/tours/ToursGridSection.tsx",
                    lineNumber: 243,
                    columnNumber: 49
                }, this)
        }["ToursGridSection[(anonymous)()]"]);
        if ($[10] !== t7) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2 border-b border-slate-200/80 pb-6 mb-12",
                children: t7
            }, void 0, false, {
                fileName: "[project]/components/tours/ToursGridSection.tsx",
                lineNumber: 248,
                columnNumber: 12
            }, this);
            $[10] = t7;
            $[11] = t4;
        } else {
            t4 = $[11];
        }
        t0 = "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3";
        let t8;
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = ({
                "ToursGridSection[filteredTours.map()]": (tour_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-64 w-full overflow-hidden bg-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: tour_0.image,
                                                alt: tour_0.title,
                                                className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                lineNumber: 258,
                                                columnNumber: 346
                                            }, this),
                                            tour_0.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-4 top-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `inline-flex items-center rounded-md px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md shadow-xs ${tour_0.badgeColor === "gold" ? "bg-[#966b1a]/90 text-amber-50" : tour_0.badgeColor === "rust" ? "bg-[#b04328]/90 text-rose-50" : "bg-[#123f55]/90 text-sky-50"}`,
                                                    children: tour_0.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 551
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                lineNumber: 258,
                                                columnNumber: 512
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute right-4 bottom-4 rounded-xl bg-white/95 px-3.5 py-1.5 shadow-md backdrop-blur-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-500 font-medium",
                                                        children: "From "
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 976
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-serif text-lg font-bold text-[#123f55]",
                                                        children: [
                                                            "$",
                                                            tour_0.priceUSD
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 1041
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-500 font-medium ml-1",
                                                        children: [
                                                            "(",
                                                            tour_0.priceINR,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 1128
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                lineNumber: 258,
                                                columnNumber: 869
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                                        lineNumber: 258,
                                        columnNumber: 279
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-xs text-slate-500 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1.5 font-medium text-slate-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                className: "h-4 w-4 text-[#b04328]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                                lineNumber: 258,
                                                                columnNumber: 1395
                                                            }, this),
                                                            tour_0.duration
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 1324
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1 font-semibold text-amber-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                className: "h-4 w-4 fill-amber-400 text-amber-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                                lineNumber: 258,
                                                                columnNumber: 1534
                                                            }, this),
                                                            tour_0.rating,
                                                            " (",
                                                            tour_0.reviewsCount,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 1463
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                lineNumber: 258,
                                                columnNumber: 1245
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-serif text-xl font-bold text-slate-900 transition-colors group-hover:text-[#123f55]",
                                                children: tour_0.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                lineNumber: 258,
                                                columnNumber: 1644
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-xs text-slate-600 leading-relaxed font-normal line-clamp-3",
                                                children: tour_0.shortDescription
                                            }, void 0, false, {
                                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                lineNumber: 258,
                                                columnNumber: 1768
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 border-t border-slate-100 pt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2",
                                                        children: "Key Highlights"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 1934
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-1.5",
                                                        children: tour_0.highlights.slice(0, 3).map(_ToursGridSectionFilteredToursMapAnonymous)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 2036
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                lineNumber: 258,
                                                columnNumber: 1881
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                                        lineNumber: 258,
                                        columnNumber: 1224
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                lineNumber: 258,
                                columnNumber: 274
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 pt-0 flex items-center gap-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: {
                                        "ToursGridSection[filteredTours.map() > <button>.onClick]": ()=>{
                                            setSelectedTour(tour_0);
                                            setBookingSuccess(false);
                                        }
                                    }["ToursGridSection[filteredTours.map() > <button>.onClick]"],
                                    className: "w-full inline-flex h-11 items-center justify-center rounded-xl bg-[#123f55] px-4 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-[#0c2f40] hover:shadow-md cursor-pointer active:scale-[0.98]",
                                    children: "VIEW ITINERARY"
                                }, void 0, false, {
                                    fileName: "[project]/components/tours/ToursGridSection.tsx",
                                    lineNumber: 258,
                                    columnNumber: 2216
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                lineNumber: 258,
                                columnNumber: 2166
                            }, this)
                        ]
                    }, tour_0.id, true, {
                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                        lineNumber: 258,
                        columnNumber: 60
                    }, this)
            })["ToursGridSection[filteredTours.map()]"];
            $[12] = t8;
        } else {
            t8 = $[12];
        }
        t1 = filteredTours.map(t8);
        $[1] = activeTab;
        $[2] = t0;
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
    } else {
        t0 = $[2];
        t1 = $[3];
        t2 = $[4];
        t3 = $[5];
        t4 = $[6];
        t5 = $[7];
    }
    let t6;
    if ($[13] !== t0 || $[14] !== t1) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t0,
            children: t1
        }, void 0, false, {
            fileName: "[project]/components/tours/ToursGridSection.tsx",
            lineNumber: 287,
            columnNumber: 10
        }, this);
        $[13] = t0;
        $[14] = t1;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== t2 || $[17] !== t3 || $[18] !== t4 || $[19] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/ToursGridSection.tsx",
            lineNumber: 296,
            columnNumber: 10
        }, this);
        $[16] = t2;
        $[17] = t3;
        $[18] = t4;
        $[19] = t6;
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    let t8;
    if ($[21] !== bookingSuccess || $[22] !== selectedTour) {
        t8 = selectedTour && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm animate-fade-in",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 sm:p-8 shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: {
                            "ToursGridSection[<button>.onClick]": ()=>setSelectedTour(null)
                        }["ToursGridSection[<button>.onClick]"],
                        className: "absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/components/tours/ToursGridSection.tsx",
                            lineNumber: 309,
                            columnNumber: 204
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                        lineNumber: 307,
                        columnNumber: 263
                    }, this),
                    !bookingSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b04328]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                                        lineNumber: 309,
                                        columnNumber: 358
                                    }, this),
                                    selectedTour.duration,
                                    " • ",
                                    selectedTour.location
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                lineNumber: 309,
                                columnNumber: 259
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-2 font-serif text-2xl sm:text-3xl font-bold text-slate-900",
                                children: selectedTour.title
                            }, void 0, false, {
                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                lineNumber: 309,
                                columnNumber: 442
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-sm text-slate-600 leading-relaxed font-normal",
                                children: selectedTour.shortDescription
                            }, void 0, false, {
                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                lineNumber: 309,
                                columnNumber: 545
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex items-center justify-between rounded-xl bg-[#faf9f5] p-4 border border-slate-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-500 font-medium block",
                                                children: "Starting Price"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                lineNumber: 309,
                                                columnNumber: 764
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-serif text-2xl font-bold text-[#123f55]",
                                                children: [
                                                    "$",
                                                    selectedTour.priceUSD
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                lineNumber: 309,
                                                columnNumber: 844
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-500 font-medium ml-2",
                                                children: [
                                                    "(",
                                                    selectedTour.priceINR,
                                                    " per person)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                lineNumber: 309,
                                                columnNumber: 938
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                                        lineNumber: 309,
                                        columnNumber: 759
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-md bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200",
                                        children: "Instant Confirmation Available"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                                        lineNumber: 309,
                                        columnNumber: 1045
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                lineNumber: 309,
                                columnNumber: 651
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-serif text-lg font-bold text-slate-900 mb-4",
                                        children: "Detailed Itinerary Schedule"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                                        lineNumber: 309,
                                        columnNumber: 1228
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: selectedTour.itinerary.map(_ToursGridSectionSelectedTourItineraryMap)
                                    }, void 0, false, {
                                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                                        lineNumber: 309,
                                        columnNumber: 1325
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                lineNumber: 309,
                                columnNumber: 1206
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 border-t border-slate-100 pt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-serif text-lg font-bold text-slate-900 mb-3",
                                        children: "What's Included"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                                        lineNumber: 309,
                                        columnNumber: 1488
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                                        children: selectedTour.inclusions.map(_ToursGridSectionSelectedTourInclusionsMap)
                                    }, void 0, false, {
                                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                                        lineNumber: 309,
                                        columnNumber: 1573
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                lineNumber: 309,
                                columnNumber: 1435
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 border-t border-slate-100 pt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-serif text-lg font-bold text-slate-900 mb-3",
                                        children: "Request Booking / Customization"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                                        lineNumber: 309,
                                        columnNumber: 1766
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: {
                                            "ToursGridSection[<form>.onSubmit]": (e)=>{
                                                e.preventDefault();
                                                setBookingSuccess(true);
                                            }
                                        }["ToursGridSection[<form>.onSubmit]"],
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                required: true,
                                                placeholder: "Your Full Name",
                                                className: "rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-900 focus:border-[#123f55] focus:outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                lineNumber: 314,
                                                columnNumber: 103
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                required: true,
                                                placeholder: "Email Address",
                                                className: "rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-900 focus:border-[#123f55] focus:outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                lineNumber: 314,
                                                columnNumber: 293
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "tel",
                                                placeholder: "Phone / WhatsApp Number",
                                                className: "rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-900 focus:border-[#123f55] focus:outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                lineNumber: 314,
                                                columnNumber: 483
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                className: "rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-900 focus:border-[#123f55] focus:outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                lineNumber: 314,
                                                columnNumber: 665
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "sm:col-span-2 inline-flex h-12 items-center justify-center rounded-xl bg-[#b04328] text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#94361e] cursor-pointer",
                                                children: "SUBMIT BOOKING INQUIRY"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                                lineNumber: 314,
                                                columnNumber: 810
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                                        lineNumber: 309,
                                        columnNumber: 1867
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                lineNumber: 309,
                                columnNumber: 1713
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                        lineNumber: 309,
                        columnNumber: 257
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-12 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "h-10 w-10"
                                }, void 0, false, {
                                    fileName: "[project]/components/tours/ToursGridSection.tsx",
                                    lineNumber: 314,
                                    columnNumber: 1234
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                lineNumber: 314,
                                columnNumber: 1116
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-serif text-2xl font-bold text-slate-900",
                                children: "Inquiry Received!"
                            }, void 0, false, {
                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                lineNumber: 314,
                                columnNumber: 1278
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm text-slate-600 max-w-md mx-auto",
                                children: [
                                    "Thank you for your interest in ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: selectedTour.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                                        lineNumber: 314,
                                        columnNumber: 1452
                                    }, this),
                                    ". Our tour concierge will contact you within 2 hours with customized details."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                lineNumber: 314,
                                columnNumber: 1361
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "ToursGridSection[<button>.onClick]": ()=>setSelectedTour(null)
                                }["ToursGridSection[<button>.onClick]"],
                                className: "mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-[#123f55] px-6 text-xs font-bold uppercase tracking-wider text-white",
                                children: "CLOSE"
                            }, void 0, false, {
                                fileName: "[project]/components/tours/ToursGridSection.tsx",
                                lineNumber: 314,
                                columnNumber: 1570
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tours/ToursGridSection.tsx",
                        lineNumber: 314,
                        columnNumber: 1081
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tours/ToursGridSection.tsx",
                lineNumber: 307,
                columnNumber: 148
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/tours/ToursGridSection.tsx",
            lineNumber: 307,
            columnNumber: 26
        }, this);
        $[21] = bookingSuccess;
        $[22] = selectedTour;
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    let t9;
    if ($[24] !== t5 || $[25] !== t7 || $[26] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t5,
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/ToursGridSection.tsx",
            lineNumber: 325,
            columnNumber: 10
        }, this);
        $[24] = t5;
        $[25] = t7;
        $[26] = t8;
        $[27] = t9;
    } else {
        t9 = $[27];
    }
    return t9;
}
_s(ToursGridSection, "TyGKFEFK7QfiWl6qpRlqDwswLso=");
_c = ToursGridSection;
function _ToursGridSectionSelectedTourInclusionsMap(inc, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 text-xs text-slate-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                className: "h-4 w-4 text-emerald-600 shrink-0"
            }, void 0, false, {
                fileName: "[project]/components/tours/ToursGridSection.tsx",
                lineNumber: 336,
                columnNumber: 84
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: inc
            }, void 0, false, {
                fileName: "[project]/components/tours/ToursGridSection.tsx",
                lineNumber: 336,
                columnNumber: 146
            }, this)
        ]
    }, i_0, true, {
        fileName: "[project]/components/tours/ToursGridSection.tsx",
        lineNumber: 336,
        columnNumber: 10
    }, this);
}
function _ToursGridSectionSelectedTourItineraryMap(step, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-4 border-l-2 border-[#123f55] pl-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-bold uppercase text-[#b04328]",
                    children: step.day
                }, void 0, false, {
                    fileName: "[project]/components/tours/ToursGridSection.tsx",
                    lineNumber: 339,
                    columnNumber: 86
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "font-semibold text-slate-900 text-sm",
                    children: step.title
                }, void 0, false, {
                    fileName: "[project]/components/tours/ToursGridSection.tsx",
                    lineNumber: 339,
                    columnNumber: 164
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-xs text-slate-600 leading-relaxed",
                    children: step.desc
                }, void 0, false, {
                    fileName: "[project]/components/tours/ToursGridSection.tsx",
                    lineNumber: 339,
                    columnNumber: 234
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/ToursGridSection.tsx",
            lineNumber: 339,
            columnNumber: 81
        }, this)
    }, idx, false, {
        fileName: "[project]/components/tours/ToursGridSection.tsx",
        lineNumber: 339,
        columnNumber: 10
    }, this);
}
function _ToursGridSectionFilteredToursMapAnonymous(item, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-center gap-2 text-xs text-slate-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                className: "h-3.5 w-3.5 text-[#123f55] shrink-0"
            }, void 0, false, {
                fileName: "[project]/components/tours/ToursGridSection.tsx",
                lineNumber: 342,
                columnNumber: 81
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "truncate",
                children: item
            }, void 0, false, {
                fileName: "[project]/components/tours/ToursGridSection.tsx",
                lineNumber: 342,
                columnNumber: 145
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/components/tours/ToursGridSection.tsx",
        lineNumber: 342,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ToursGridSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/tours/ToursHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToursHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.mjs [app-client] (ecmascript) <export default as Compass>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ToursHero(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(42);
    if ($[0] !== "e2d5f4485543889110cc96b62264aff07333c01bb068fcb2e7f0bbff1e437d84") {
        for(let $i = 0; $i < 42; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2d5f4485543889110cc96b62264aff07333c01bb068fcb2e7f0bbff1e437d84";
    }
    const { onSearchChange } = t0;
    const [selectedDestination, setSelectedDestination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedDuration, setSelectedDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    let t1;
    if ($[1] !== onSearchChange || $[2] !== selectedCategory || $[3] !== selectedDestination || $[4] !== selectedDuration) {
        t1 = ({
            "ToursHero[handleFilterClick]": ()=>{
                if (onSearchChange) {
                    onSearchChange(selectedDestination, selectedDuration, selectedCategory);
                }
            }
        })["ToursHero[handleFilterClick]"];
        $[1] = onSearchChange;
        $[2] = selectedCategory;
        $[3] = selectedDestination;
        $[4] = selectedDuration;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const handleFilterClick = t1;
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 z-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/Frame 33.png",
                    alt: "Tours and Packages Landscape",
                    className: "h-full w-full object-cover object-top opacity-85"
                }, void 0, false, {
                    fileName: "[project]/components/tours/ToursHero.tsx",
                    lineNumber: 43,
                    columnNumber: 48
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-[#faf9f5] via-[#faf9f5]/85 to-transparent max-md:from-[#faf9f5]/95"
                }, void 0, false, {
                    fileName: "[project]/components/tours/ToursHero.tsx",
                    lineNumber: 43,
                    columnNumber: 171
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-b from-[#faf9f5]/40 via-transparent to-[#faf9f5]"
                }, void 0, false, {
                    fileName: "[project]/components/tours/ToursHero.tsx",
                    lineNumber: 43,
                    columnNumber: 296
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-[1.5px] w-8 bg-[#123f55]"
                        }, void 0, false, {
                            fileName: "[project]/components/tours/ToursHero.tsx",
                            lineNumber: 50,
                            columnNumber: 83
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold uppercase tracking-[0.25em] text-[#123f55]",
                            children: "CURATED EXPERIENCES"
                        }, void 0, false, {
                            fileName: "[project]/components/tours/ToursHero.tsx",
                            lineNumber: 50,
                            columnNumber: 130
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/tours/ToursHero.tsx",
                    lineNumber: 50,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "font-serif text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.15]",
                    children: "Tailored Journeys & Tour Packages"
                }, void 0, false, {
                    fileName: "[project]/components/tours/ToursHero.tsx",
                    lineNumber: 50,
                    columnNumber: 245
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-6 text-base text-slate-700 leading-relaxed sm:text-lg sm:leading-relaxed max-w-xl font-normal",
                    children: "Immerse yourself in carefully crafted itineraries led by expert local guides. From single-day heritage excursions to multi-day luxury tours across Maharashtra."
                }, void 0, false, {
                    fileName: "[project]/components/tours/ToursHero.tsx",
                    lineNumber: 50,
                    columnNumber: 405
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                    className: "h-3.5 w-3.5 text-[#b04328]"
                }, void 0, false, {
                    fileName: "[project]/components/tours/ToursHero.tsx",
                    lineNumber: 57,
                    columnNumber: 111
                }, this),
                "Destination"
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "ToursHero[<select>.onChange]": (e)=>setSelectedDestination(e.target.value)
        })["ToursHero[<select>.onChange]"];
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t10;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "all",
            children: "All Destinations"
        }, void 0, false, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "sambhaji-nagar",
            children: "Chhatrapati Sambhaji Nagar"
        }, void 0, false, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "ajanta",
            children: "Ajanta Caves"
        }, void 0, false, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "ellora",
            children: "Ellora Caves"
        }, void 0, false, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "daulatabad",
            children: "Daulatabad Fort"
        }, void 0, false, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 81,
            columnNumber: 11
        }, this);
        $[10] = t10;
        $[11] = t6;
        $[12] = t7;
        $[13] = t8;
        $[14] = t9;
    } else {
        t10 = $[10];
        t6 = $[11];
        t7 = $[12];
        t8 = $[13];
        t9 = $[14];
    }
    let t11;
    if ($[15] !== selectedDestination) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1.5 border-b border-slate-100 pb-3 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: selectedDestination,
                    onChange: t5,
                    className: "bg-transparent text-sm font-semibold text-slate-900 focus:outline-none cursor-pointer",
                    children: [
                        t6,
                        t7,
                        t8,
                        t9,
                        t10
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/tours/ToursHero.tsx",
                    lineNumber: 96,
                    columnNumber: 127
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 96,
            columnNumber: 11
        }, this);
        $[15] = selectedDestination;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                    className: "h-3.5 w-3.5 text-[#b04328]"
                }, void 0, false, {
                    fileName: "[project]/components/tours/ToursHero.tsx",
                    lineNumber: 104,
                    columnNumber: 112
                }, this),
                "Duration"
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 104,
            columnNumber: 11
        }, this);
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "ToursHero[<select>.onChange]": (e_0)=>setSelectedDuration(e_0.target.value)
        })["ToursHero[<select>.onChange]"];
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    let t15;
    let t16;
    let t17;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "all",
            children: "Any Duration"
        }, void 0, false, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "1day",
            children: "1 Day Excursions"
        }, void 0, false, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, this);
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "2-3days",
            children: "2 - 3 Days Circuit"
        }, void 0, false, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "4+days",
            children: "4+ Days Grand Tour"
        }, void 0, false, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[19] = t14;
        $[20] = t15;
        $[21] = t16;
        $[22] = t17;
    } else {
        t14 = $[19];
        t15 = $[20];
        t16 = $[21];
        t17 = $[22];
    }
    let t18;
    if ($[23] !== selectedDuration) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1.5 border-b border-slate-100 pb-3 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: selectedDuration,
                    onChange: t13,
                    className: "bg-transparent text-sm font-semibold text-slate-900 focus:outline-none cursor-pointer",
                    children: [
                        t14,
                        t15,
                        t16,
                        t17
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/tours/ToursHero.tsx",
                    lineNumber: 139,
                    columnNumber: 128
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[23] = selectedDuration;
        $[24] = t18;
    } else {
        t18 = $[24];
    }
    let t19;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                    className: "h-3.5 w-3.5 text-[#b04328]"
                }, void 0, false, {
                    fileName: "[project]/components/tours/ToursHero.tsx",
                    lineNumber: 147,
                    columnNumber: 112
                }, this),
                "Tour Style"
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[25] = t19;
    } else {
        t19 = $[25];
    }
    let t20;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = ({
            "ToursHero[<select>.onChange]": (e_1)=>setSelectedCategory(e_1.target.value)
        })["ToursHero[<select>.onChange]"];
        $[26] = t20;
    } else {
        t20 = $[26];
    }
    let t21;
    let t22;
    let t23;
    let t24;
    let t25;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "all",
            children: "All Tour Styles"
        }, void 0, false, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "heritage",
            children: "UNESCO Heritage"
        }, void 0, false, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "spiritual",
            children: "Spiritual & Temples"
        }, void 0, false, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "forts",
            children: "Forts & Treks"
        }, void 0, false, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "luxury",
            children: "Private Luxury"
        }, void 0, false, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[27] = t21;
        $[28] = t22;
        $[29] = t23;
        $[30] = t24;
        $[31] = t25;
    } else {
        t21 = $[27];
        t22 = $[28];
        t23 = $[29];
        t24 = $[30];
        t25 = $[31];
    }
    let t26;
    if ($[32] !== selectedCategory) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1.5 border-b border-slate-100 pb-3 sm:border-b-0 lg:border-r sm:pb-0 lg:pr-4",
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: selectedCategory,
                    onChange: t20,
                    className: "bg-transparent text-sm font-semibold text-slate-900 focus:outline-none cursor-pointer",
                    children: [
                        t21,
                        t22,
                        t23,
                        t24,
                        t25
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/tours/ToursHero.tsx",
                    lineNumber: 186,
                    columnNumber: 128
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[32] = selectedCategory;
        $[33] = t26;
    } else {
        t26 = $[33];
    }
    let t27;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[34] = t27;
    } else {
        t27 = $[34];
    }
    let t28;
    if ($[35] !== handleFilterClick) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center sm:col-span-3 lg:col-span-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: handleFilterClick,
                className: "w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#b04328] px-6 text-xs font-bold uppercase tracking-widest text-white shadow-sm transition-all duration-200 hover:bg-[#94361e] hover:shadow-md active:scale-[0.98]",
                children: [
                    t27,
                    "FIND TOURS"
                ]
            }, void 0, true, {
                fileName: "[project]/components/tours/ToursHero.tsx",
                lineNumber: 201,
                columnNumber: 74
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[35] = handleFilterClick;
        $[36] = t28;
    } else {
        t28 = $[36];
    }
    let t29;
    if ($[37] !== t11 || $[38] !== t18 || $[39] !== t26 || $[40] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative overflow-hidden bg-[#faf9f5] pt-12 pb-24 lg:pt-16 lg:pb-36",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-12",
                    children: [
                        t3,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-12 max-w-4xl rounded-2xl border border-slate-200/80 bg-white/95 p-4 sm:p-6 shadow-xl backdrop-blur-md",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4",
                                children: [
                                    t11,
                                    t18,
                                    t26,
                                    t28
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tours/ToursHero.tsx",
                                lineNumber: 209,
                                columnNumber: 293
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/tours/ToursHero.tsx",
                            lineNumber: 209,
                            columnNumber: 171
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/tours/ToursHero.tsx",
                    lineNumber: 209,
                    columnNumber: 104
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/tours/ToursHero.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[37] = t11;
        $[38] = t18;
        $[39] = t26;
        $[40] = t28;
        $[41] = t29;
    } else {
        t29 = $[41];
    }
    return t29;
}
_s(ToursHero, "qNb/nMcRxA2m/EDKGpgw3kmLN34=");
_c = ToursHero;
var _c;
__turbopack_context__.k.register(_c, "ToursHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_1l-1lzn._.js.map