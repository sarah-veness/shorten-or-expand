"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripUrl = exports.sanitizeUrl = void 0;
function sanitizeUrl(url) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(/^[^:]+(?=:\/\/)/).test(url)) {
            return "https://" + url;
        }
        else {
            return url;
        }
    });
}
exports.sanitizeUrl = sanitizeUrl;
;
function stripUrl(url) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((/^[^:]+(?=:\/\/)/).test(url)) {
            let strippedUrl = url.split('//');
            return strippedUrl[1];
        }
        else if ((/www./).test(url)) {
            let strippedUrl = url.split('www.');
            return strippedUrl[1];
        }
        else {
            return url;
        }
    });
}
exports.stripUrl = stripUrl;
;
//# sourceMappingURL=sanitize-url.js.map