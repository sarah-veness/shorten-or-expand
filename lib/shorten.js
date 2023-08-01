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
function shorten(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let urlToShorten = yield (0, sanitize_url_1.sanitizeUrl)(url);
        const data = {
            "domain": "bit.ly",
            "long_url": urlToShorten
        };
        yield axios_1.default.post('https://api-ssl.bitly.com/v4/shorten', data, {
            headers: {
                'Authorization': `Bearer ${process.env.BITLY_ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
            console.log(`your shortened link: ${response.data.link}`);
        })
            .catch(err => {
            console.error(`something went wrong: ${err}`);
        });
    });
}
exports.default = shorten;
//# sourceMappingURL=shorten.js.map