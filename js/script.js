/* when user scrolls, header is detached. a timeout func triggers while scrolling set to 1s to hide header, this is the default
continuously prevented by the cleartimeout func, so the header is always shown when scrolling. when scrolling stops, the header is
the timout function completes and the header is removed, because the cleartimeout func line was not executed*/
header = document.querySelector('.header');
let timerFuncId = 0;
document.addEventListener('scroll', (e) => {
    header.classList.add('hide');
    if (timerFuncId) clearTimeout(timerFuncId);
    timerFuncId = setTimeout(() => {
        header.classList.remove('hide');
    }, 400);
});