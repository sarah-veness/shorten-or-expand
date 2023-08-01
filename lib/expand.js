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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const sanitize_url_1 = require("./sanitize-url");
function expandUrl(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let urlToExpand = yield (0, sanitize_url_1.stripUrl)(url);
        yield axios_1.default.get(`https://api-ssl.bitly.com/v4/bitlinks/${urlToExpand} `, {
            headers: {
                'Authorization': `Bearer ${process.env.BITLY_ACCESS_TOKEN} `,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
            console.log(`the original url: ${res.data.long_url}`);
        })
            .catch(err => {
            console.error(err);
        });
    });
}
exports.default = expandUrl;
//# sourceMappingURL=expand.js.map