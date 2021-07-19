
export const handletextareaInput = async () => {
    const textarea = await document.getElementsByTagName('textarea')[0];
    textarea.addEventListener('keydown', () => {
        var el = textarea;
        setTimeout(function(){
            el.style.cssText = 'height:auto; padding:0;';
            el.style.cssText = 'height:' + (el.scrollHeight + 12) + 'px';
        }, 0);
    });
};