var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const handletextareaInput = () => __awaiter(void 0, void 0, void 0, function* () {
    const textarea = yield document.getElementsByTagName('textarea')[0];
    textarea.addEventListener('keydown', () => {
        var el = textarea;
        setTimeout(function () {
            el.style.cssText = 'height:auto; padding:0;';
            el.style.cssText = 'height:' + (el.scrollHeight + 12) + 'px';
        }, 0);
    });
});
