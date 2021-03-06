"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasCategory = void 0;
const Category_1 = require("../Category");
class CanvasCategory extends Category_1.Category {
    constructor() {
        super("canvas");
        this.add("gay", ["avatar"], true);
        this.add("glass", ["avatar"], true);
        this.add("wasted", ["avatar"], true);
        this.add("triggered", ["avatar"], true);
        this.add("greyscale", ["avatar"], true);
        this.add("invert", ["avatar"], true);
        this.add("invertgreyscale", ["avatar"], true);
        this.add("brightness", ["avatar"], true);
        this.add("threshold", ["avatar"], true);
        this.add("sepia", ["avatar"], true);
        this.add("red", ["avatar"], true);
        this.add("green", ["avatar"], true);
        this.add("blue", ["avatar"], true);
        this.add("color", ["avatar", "color"], true);
        this.add("pixelate", ["avatar"], true);
        this.add("youtube-comment", ["avatar", "comment", "username"], true);
        this.add("colorviewer", ["hex"], true);
        this.add("hex", ["rgb"]);
        this.add("rgb", ["hex"]);
        this.initializeMethods();
    }
}
exports.CanvasCategory = CanvasCategory;
//# sourceMappingURL=Canvas.js.map