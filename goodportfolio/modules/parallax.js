"use strict"

window.onload = function () {
    const parallax = document.querySelector('.parallax');
    if (parallax) {
        const content = document.querySelector('.parallax');
        const cloud1 = document.querySelector('.cloud1');
        const cloud2 = document.querySelector('.cloud2');
        const cloud3 = document.querySelector('.cloud3');
        const cloud4 = document.querySelector('.cloud4');
        const cloud5 = document.querySelector('.cloud5');
        const cloud6 = document.querySelector('.cloud6');
        const cloud7 = document.querySelector('.cloud7');
        // коэфф.
        const forCloud1 = 5;
        const forCloud2 = 10;
        const forCloud3 = 15;
        const forCloud4 = 20;
        const forCloud7 = 20;

        const speed = 0.5;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX; //разница в положении
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            //передаём стили
            cloud1.style.cssText = `transform: translate(${positionX / forCloud1}%,${positionY / forCloud1}%);`;
            cloud2.style.cssText = `transform: translate(${positionX / forCloud2}%,${positionY / forCloud2}%);`;
            cloud3.style.cssText = `transform: translate(${positionX / forCloud3}%,${positionY / forCloud3}%);`;
            cloud4.style.cssText = `transform: translate(${positionX / forCloud4}%,${positionY / forCloud4}%);`;
            cloud7.style.cssText = `transform: translate(${positionX / forCloud7}%,${positionY / forCloud7}%);`;

            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        parallax.addEventListener("mousemove", function (e) {
            //получение ширины и высоты блока
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;
            //ноль по середине
            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;
            //получаем проценты
            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;

        });

        let thresholdSets = [];
        for (let i = 0; i <= 1.0; i += 0.005) {
            thresholdSets.push(i);
        }

        const callback = function (entries, observer) {
            const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
            setParallaxItemsStyle(scrollTopProcent)
        };
        const observer = new IntersectionObserver(callback, { threshold: thresholdSets });

        observer.observe(document.querySelector('.content'));

        function setParallaxItemsStyle(scrollTopProcent) {
            content.style.cssText = `transform: translate (0%, -${scrollTopProcent / 24}%);`;
            cloud1.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 1}%);`;
            cloud2.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 2}%);`;
            cloud3.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 3}%);`;
            cloud4.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent /4}%);`;
            cloud5.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 5}%);`;
            cloud6.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 6}%);`;
            cloud7.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 7}%);`;
        }
    }
}