// ======================================================
// 9 ЛЕТ ЗА ПАРТОЙ, 1 ГОД В СЕРДЦЕ
// Главный JavaScript
// ======================================================


// ======================================================
// ЖДЁМ, ПОКА HTML ПОЛНОСТЬЮ ЗАГРУЗИТСЯ
// ======================================================

document.addEventListener("DOMContentLoaded", () => {


    // ==================================================
    // ТЕКСТ СЦЕНЫ 1
    // ==================================================

    const titleText =
        "9 лет за партой, 1 год в сердце.";

    const messageText =
        "Знаешь, есть подарки, которые покупают в магазине. " +
        "А есть те, которые рождаются в душе. " +
        "Я написал этот код для тебя. Буквально. " +
        "Чтобы ты могла открыть его в любой точке мира. " +
        "Сейчас я рядом с тобой через экран...";


    // ==================================================
    // ТЕКСТ СЦЕНЫ 2
    // ==================================================

    const schoolText =
        "Мы просидели за партами 9 лет. " +
        "Ты — мой самый важный «одноклассник». " +
        "Я запомнил, как ты поправляла волосы, " +
        "когда волновалась на контрольных.\n\n" +

        "И даже когда нас рассаживали, " +
        "я всегда знал, где ты. " +
        "Ты была тем самым лучиком " +
        "в серых школьных буднях. " +

        "Спасибо, что терпела мои шутки 😉";


    // ==================================================
    // ТЕКСТ СЦЕНЫ 4
    // ==================================================

    const yearText =
        "Прошёл 1 год. Целых 365 дней, " +
        "как я официально самый счастливый человек. " +

        "Ты изменила меня. Сделала добрее, " +
        "сильнее и увереннее. " +

        "За этот год было столько моментов, " +
        "которые я хочу помнить всю жизнь. " +

        "И я хочу, чтобы таких дней у нас " +
        "были не сотни и не тысячи, " +
        "а целая жизнь. ❤️";


    // ==================================================
    // ЭЛЕМЕНТЫ СЦЕНЫ 1
    // ==================================================

    const titleElement =
        document.getElementById("intro-title");

    const textElement =
        document.getElementById("intro-text");

    const openButton =
        document.getElementById("open-button");
const backgroundMusic = document.getElementById("background-music");
    const musicTracks = [
    "images/music1.mp3",
    "images/music2.mp3"
];

let currentTrack = 0;
    const introScene =
        document.getElementById("scene-intro");
    function playMusicTrack(index) {
    currentTrack = index;

    backgroundMusic.src = musicTracks[currentTrack];
    backgroundMusic.volume = 0;

    backgroundMusic.play().then(() => {
        fadeInMusic();
    }).catch(error => {
        console.log("Музыка не запустилась:", error);
    });
}
function fadeInMusic() {
    let volume = 0;

    const fade = setInterval(() => {
        volume += 0.02;

        if (volume >= 0.35) {
            volume = 0.35;
            clearInterval(fade);
        }

        backgroundMusic.volume = volume;
    }, 100);
}

    // ==================================================
    // ЭЛЕМЕНТЫ СЦЕНЫ 2
    // ==================================================

    const schoolScene =
        document.getElementById("scene-school");

    const schoolTextElement =
        document.getElementById("school-text");

    const schoolPhoto =
        document.getElementById("school-photo");

    const faceLight =
        document.getElementById("face-light");

    const schoolCard =
        document.querySelector(".memory-card");

    const schoolHint =
        document.getElementById("school-hint");

    const schoolIcons =
        document.querySelectorAll(".school-icon");

    const schoolNext =
        document.getElementById("school-next");


    // ==================================================
    // ЭЛЕМЕНТЫ СЦЕНЫ 3
    // ==================================================

    const distanceScene =
        document.getElementById("scene-distance");

    const distanceMap =
        document.getElementById("distance-map");

    const distanceLine =
        document.getElementById("distance-line");

    const travelHeart =
        document.getElementById("travel-heart");

    const distanceHint =
        document.getElementById("distance-hint");

    const distanceMessage =
        document.getElementById("distance-message");

    const distanceNext =
        document.getElementById("distance-next");


    // ==================================================
    // ЭЛЕМЕНТЫ СЦЕНЫ 4
    // ==================================================

    const yearScene =
        document.getElementById("scene-year");

    const dayCounter =
        document.getElementById("day-counter");

    const yearCard =
        document.querySelector(".year-card");

    const yearPhoto =
        document.getElementById("year-photo");

    const yearMessage =
        document.getElementById("year-message");

    const videoContainer =
        document.getElementById("video-container");

    const yearNext =
        document.getElementById("year-next");


    // ==================================================
    // ЭЛЕМЕНТЫ СЦЕНЫ ВОСПОМИНАНИЙ
    // ==================================================

    const memoriesScene =
        document.getElementById("scene-memories");

    const memoriesNext =
        document.getElementById("memories-next");

    const galleryPhotos =
        document.getElementById("gallery-photos");

    const galleryTitle =
        document.getElementById("gallery-title");


    // ==================================================
    // ЭЛЕМЕНТЫ ФИНАЛА
    // ==================================================

    const finalScene =
        document.getElementById("scene-final");

    const heartStart =
        document.getElementById("heart-start");

    const heartContainer =
        document.getElementById("heart-container");

    const heartOutline =
        document.getElementById("heart-outline");

    const heartFill =
        document.getElementById("heart-fill");

    const finalMessage =
        document.getElementById("final-message");

    const heartParticles =
        document.getElementById("heart-particles");


    // ==================================================
    // ЭЛЕМЕНТЫ СЕКРЕТНОГО ОКНА
    // ==================================================

    const secretButton =
        document.getElementById("secret-button");

    const secretModal =
        document.getElementById("secret-modal");

    const secretClose =
        document.getElementById("secret-close");

    const secretCloseBottom =
        document.getElementById("secret-close-bottom");


    // ==================================================
    // ФУНКЦИЯ ПЕЧАТИ ТЕКСТА
    // ==================================================



const typingTimers = new WeakMap();

function typeText(element, text, speed, callback) {
    if (!element) {
        return;
    }

    const previousTimer = typingTimers.get(element);

    if (previousTimer) {
        clearInterval(previousTimer);
    }

    let index = 0;
    element.textContent = "";
    console.log("ПЕЧАТЬ ЗАПУЩЕНА:", element.id);

    const timer = setInterval(() => {
        element.textContent += text[index];
        index++;

        if (index >= text.length) {
            clearInterval(timer);
            typingTimers.delete(element);

            if (callback) {
                callback();
            }
        }
    }, speed);

    typingTimers.set(element, timer);
}


    // ==================================================
    // СЦЕНА 1
    // ==================================================

    function startIntroScene() {

        typeText(
            titleElement,
            titleText,
            70,
            () => {

                setTimeout(() => {

                    typeText(
                        textElement,
                        messageText,
                        30,
                        () => {

                            if (openButton) {

                                openButton.style.opacity =
                                    "1";

                                openButton.style.pointerEvents =
                                    "auto";

                            }

                        }
                    );

                }, 500);

            }
        );

    }


    // ==================================================
    // КНОПКА СЦЕНЫ 1
    // ==================================================

if (openButton) {
    openButton.addEventListener("click", () => {
        if (openButton.dataset.clicked === "true") {
            return;
        }

        openButton.dataset.clicked = "true";

        console.log("КНОПКА НАЖАТА!");

        startMusic();

        introScene.classList.add("hidden");
        schoolScene.classList.remove("hidden");

        startSchoolScene();
    });
}
        // ==========================================
        // ЗАПУСКАЕМ МУЗЫКУ
        // ==========================================

        

let activeMusic = null;
let musicFadeTimer = null;

function startMusic() {
    const music1 = document.getElementById("music-1");
    const music2 = document.getElementById("music-2");

    if (!music1 || !music2) {
        console.error("Не найдены аудиоэлементы!");
        return;
    }

    music1.src = "images/music1.mp3";
    music2.src = "images/music2.mp3";

    music1.volume = 0.35;
    music2.volume = 0;

    activeMusic = music1;

    
music1.onended = () => {
    crossfadeMusic();
};

music2.onended = () => {
    crossfadeMusic();
};

music1.play().catch(error => {
    console.error("Не удалось запустить музыку:", error);
});
}

function crossfadeMusic() {
    const music1 = document.getElementById("music-1");
    const music2 = document.getElementById("music-2");

    if (!music1 || !music2 || !activeMusic) {
        return;
    }

    const nextMusic = activeMusic === music1
        ? music2
        : music1;

    if (musicFadeTimer) {
        clearInterval(musicFadeTimer);
    }

    nextMusic.volume = 0;
    nextMusic.currentTime = 0;
    nextMusic.onended = null;

    nextMusic.play().then(() => {
        let progress = 0;
        const duration = 10;

        musicFadeTimer = setInterval(() => {
            progress++;

            const fade = Math.min(progress / duration, 1);

            nextMusic.volume = 0.35 * fade;
            activeMusic.volume = 0.35 * (1 - fade);

            if (progress >= duration) {
                clearInterval(musicFadeTimer);
                musicFadeTimer = null;

                activeMusic.pause();
                activeMusic.currentTime = 0;
                activeMusic = nextMusic;
            }
        }, 100);
    }).catch(error => {
        console.error("Не удалось переключить музыку:", error);
    });
}
function fadeOutMusic(callback) {
    let volume = backgroundMusic.volume;

    const fade = setInterval(() => {
        volume -= 0.02;

        if (volume <= 0) {
            volume = 0;
            backgroundMusic.volume = 0;

            clearInterval(fade);

            callback();
            return;
        }

        backgroundMusic.volume = volume;
    }, 100);
}


    // ==================================================
    // СЦЕНА 2
    // ==================================================

    function startSchoolScene() {
        console.log("Исходный текст:", schoolText);
        console.log("Элемент текста:", schoolTextElement);
        console.log("ШКОЛЬНАЯ СЦЕНА ЗАПУЩЕНА");
        setTimeout(() => {

            if (schoolCard) {

                schoolCard.classList.add(
                    "visible"
                );

            }


            setTimeout(() => {

                if (schoolPhoto) {

                    schoolPhoto.classList.add(
                        "photo-visible"
                    );

                }


                setTimeout(() => {

                    if (faceLight) {

                        faceLight.classList.add(
                            "visible"
                        );

                    }


                    setTimeout(() => {

                        typeText(
                            schoolTextElement,
                            schoolText,
                            25
                        );

                    }, 700);

                }, 1000);

            }, 900);

        }, 1200);

    }


    // ==================================================
    // ШКОЛЬНЫЕ ИКОНКИ
    // ==================================================

    schoolIcons.forEach((icon) => {

        function scatterSchool() {

            const randomX =
                (Math.random() - 0.5) * 500;

            const randomY =
                (Math.random() - 0.5) * 300;

            const randomRotation =
                (Math.random() - 0.5) * 100;


            icon.style.transform =
                `translate(${randomX}px, ${randomY}px)
                 rotate(${randomRotation}deg)
                 scale(0.7)`;


            icon.style.opacity =
                "0";


            if (schoolHint) {

                schoolHint.style.opacity =
                    "0";

            }


            icon.style.pointerEvents =
                "none";

        }


        // ПК

        icon.addEventListener(
            "mouseenter",
            scatterSchool
        );


        // Телефон

        icon.addEventListener(
            "touchstart",
            (event) => {

                event.preventDefault();

                scatterSchool();

            },
            {
                passive: false
            }
        );

    });


    // ==================================================
    // КНОПКА СЦЕНЫ 2
    // ==================================================

    if (schoolNext) {

        schoolNext.addEventListener(
            "click",
            () => {

                schoolScene.classList.add(
                    "hidden"
                );

                distanceScene.classList.remove(
                    "hidden"
                );

                startDistanceScene();

            }
        );

    }


    // ==================================================
    // СЦЕНА 3
    // ==================================================

    function startDistanceScene() {

        if (distanceHint) {

            distanceHint.style.opacity =
                "1";

        }

    }


    let isDrawingDistance = false;

    let distanceCompleted = false;


    function startDistance() {

        if (distanceCompleted) {
            return;
        }

        isDrawingDistance =
            true;

    }


    function moveDistance(event) {

        if (!isDrawingDistance) {
            return;
        }


        const rect =
            distanceMap.getBoundingClientRect();


        let clientX;


        if (event.touches) {

            clientX =
                event.touches[0].clientX;

        } else {

            clientX =
                event.clientX;

        }


        const x =
            clientX - rect.left;


        const percentage =
            (x / rect.width) * 100;


        if (percentage >= 80) {

            completeDistance();

        }

    }


    function stopDistance() {

        isDrawingDistance =
            false;

    }


    if (distanceMap) {

        // ПК

        distanceMap.addEventListener(
            "mousedown",
            startDistance
        );

        distanceMap.addEventListener(
            "mousemove",
            moveDistance
        );

        distanceMap.addEventListener(
            "mouseup",
            stopDistance
        );

        distanceMap.addEventListener(
            "mouseleave",
            stopDistance
        );


        // Телефон

        distanceMap.addEventListener(
            "touchstart",
            startDistance,
            {
                passive: true
            }
        );

        distanceMap.addEventListener(
            "touchmove",
            moveDistance,
            {
                passive: true
            }
        );

        distanceMap.addEventListener(
            "touchend",
            stopDistance
        );

    }


    // ==================================================
    // ЗАВЕРШЕНИЕ СЦЕНЫ 3
    // ==================================================

    function completeDistance() {

        if (distanceCompleted) {
            return;
        }


        distanceCompleted =
            true;

        isDrawingDistance =
            false;


        if (distanceLine) {

            distanceLine.classList.add(
                "active"
            );

        }


        if (distanceHint) {

            distanceHint.style.opacity =
                "0";

        }


        setTimeout(() => {

            if (travelHeart) {

                travelHeart.classList.add(
                    "active"
                );

            }

        }, 1200);


        setTimeout(() => {

            if (distanceMessage) {

                distanceMessage.classList.add(
                    "visible"
                );

            }

        }, 3500);

    }


    // ==================================================
    // КНОПКА СЦЕНЫ 3
    // ==================================================

    if (distanceNext) {

        distanceNext.addEventListener(
            "click",
            () => {

                distanceScene.classList.add(
                    "hidden"
                );

                yearScene.classList.remove(
                    "hidden"
                );

                startYearScene();

            }
        );

    }


    // ==================================================
    // СЧЁТЧИК 365 ДНЕЙ
    // ==================================================

    function animateDays() {

        if (!dayCounter) {
            return;
        }


        const targetDay =
            365;

        const duration =
            2500;

        const startTime =
            performance.now();


        function updateCounter(
            currentTime
        ) {

            const elapsed =
                currentTime - startTime;


            const progress =
                Math.min(
                    elapsed / duration,
                    1
                );


            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            const currentDay =
                Math.floor(
                    eased * targetDay
                );


            dayCounter.textContent =
                currentDay;


            if (progress < 1) {

                requestAnimationFrame(
                    updateCounter
                );

            }

        }


        requestAnimationFrame(
            updateCounter
        );

    }


    // ==================================================
    // СЦЕНА 4
    // ==================================================

    function startYearScene() {

        animateDays();


        setTimeout(() => {

            if (yearCard) {

                yearCard.classList.add(
                    "visible"
                );

            }

        }, 1000);


        setTimeout(() => {

            if (yearPhoto) {

                yearPhoto.classList.add(
                    "visible"
                );

            }

        }, 2000);


        setTimeout(() => {

            typeText(
                yearMessage,
                yearText,
                25
            );

        }, 3000);


        setTimeout(() => {

            if (videoContainer) {

                videoContainer.classList.add(
                    "visible"
                );

            }

        }, 5000);

    }


    // ==================================================
    // ФОТОГРАФИИ ПО МЕСЯЦАМ
    // ==================================================

    const memories = {

        january: [
            "images/january/1.jpg",
            "images/january/2.jpg",
            "images/january/3.jpg"
        ],

        february: [
            "images/february/photo_1_2026-10-08_21-29-30.jpg",
            "images/february/photo_2_2026-10-08_21-29-30.jpg",
            "images/february/photo_3_2026-10-08_21-29-30.jpg",
            "images/february/photo_2026-10-08_21-29-45.jpg"
        ],

        march: [
            "images/march/photo_1_2026-10-08_21-40-18.jpg",
            "images/march/photo_2_2026-10-08_21-40-18.jpg",
            "images/march/photo_3_2026-10-08_21-40-18.jpg",
            "images/march/photo_4_2026-10-08_21-40-18.jpg",
            "images/march/photo_2026-10-08_21-32-09.jpg"
        ],

        april: [
            "images/april/photo_1_2026-10-08_22-02-38.jpg",
            "images/april/photo_2_2026-10-08_21-55-59.jpg",
            "images/april/photo_3_2026-10-08_21-55-59.jpg",
            "images/april/photo_4_2026-10-08_21-55-59.jpg",
            "images/april/photo_5_2026-10-08_21-55-59.jpg",
        ],

        may: [
            "images/may/photo_1_2026-10-08_22-05-44.jpg",
            "images/may/photo_2_2026-10-08_22-02-38.jpg",
            "images/may/photo_2_2026-10-08_22-05-44.jpg",
            "images/may/photo_3_2026-10-08_22-02-38.jpg",
            "images/may/photo_4_2026-10-08_22-02-38.jpg",
            "images/may/photo_5_2026-10-08_22-02-38.jpg"
        ],

        june: [
            "images/june/photo_1_2026-10-08_22-07-50.jpg",
            "images/june/photo_2_2026-10-08_22-07-50.jpg",
            "images/june/photo_3_2026-10-08_22-07-50.jpg",
            "images/june/photo_4_2026-10-08_22-07-50.jpg",
            "images/june/photo_5_2026-10-08_22-07-50.jpg"
        ],

        july: [
            "images/july/photo_1_2026-10-08_22-11-42.jpg",
            "images/july/photo_2_2026-10-08_22-11-42.jpg",
            "images/july/photo_3_2026-10-08_22-11-42.jpg",
            "images/july/photo_4_2026-10-08_22-11-42.jpg",
            "images/july/photo_5_2026-10-08_22-11-42.jpg",
            "images/july/photo_6_2026-10-08_22-11-42.jpg"
        ],

        august: [
            "images/august/photo_1_2026-10-08_22-14-21.jpg",
            "images/august/photo_2_2026-10-08_22-14-21.jpg",
            "images/august/photo_3_2026-10-08_22-14-21.jpg",
            "images/august/photo_4_2026-10-08_22-14-21.jpg"
        ],

        september: [
            "images/september/photo_1_2026-10-08_22-17-11.jpg",
            "images/september/photo_2_2026-10-08_22-17-11.jpg",
            "images/september/photo_3_2026-10-08_22-17-11.jpg"
        ],

        october: [
            "images/october/photo_1_2026-10-08_22-22-15.jpg",
            "images/october/photo_2_2026-10-08_22-22-15.jpg",
            "images/october/photo_3_2026-10-08_22-22-15.jpg"
        ],

        november: [
            "images/november/photo_1_2026-10-08_22-26-22.jpg",
            "images/november/photo_2_2026-10-08_22-26-22.jpg",
            "images/november/photo_3_2026-10-08_22-26-22.jpg"
        ],

        december: [
            "images/december/photo_1_2026-10-08_22-29-56.jpg",
            "images/december/photo_2_2026-10-08_22-29-56.jpg",
            "images/december/photo_3_2026-10-08_22-29-56.jpg",
            "images/december/photo_4_2026-10-08_22-29-56.jpg",
            "images/december/photo_5_2026-10-08_22-29-56.jpg",
            "images/december/photo_6_2026-10-08_22-29-56.jpg"
        ]

    };


    // ==================================================
    // НАЗВАНИЯ МЕСЯЦЕВ
    // ==================================================

    const monthNames = {

        january: "Январь ❤️",

        february: "Февраль ❤️",

        march: "Март ❤️",

        april: "Апрель ❤️",

        may: "Май ❤️",

        june: "Июнь ❤️",

        july: "Июль ❤️",

        august: "Август ❤️",

        september: "Сентябрь ❤️",

        october: "Октябрь ❤️",

        november: "Ноябрь ❤️",

        december: "Декабрь ❤️"

    };


    // ==================================================
    // ПОКАЗ ФОТОГРАФИЙ
    // ==================================================

    function showMonth(month) {

        if (!galleryPhotos) {
            return;
        }


        galleryPhotos.innerHTML =
            "";


        if (galleryTitle) {

            galleryTitle.classList.remove(
                "visible"
            );

        }


        const photos =
            memories[month];


        if (galleryTitle) {

            galleryTitle.textContent =
                monthNames[month];

        }


        setTimeout(() => {

            if (galleryTitle) {

                galleryTitle.classList.add(
                    "visible"
                );

            }

        }, 100);


        if (
            !photos ||
            photos.length === 0
        ) {

            galleryPhotos.innerHTML = `

                <p style="
                    grid-column: 1 / -1;
                    opacity: 0.5;
                    padding: 40px;
                ">

                    В этом месяце
                    мы ещё не успели
                    сделать фотографии ❤️

                </p>

            `;

            return;

        }


        photos.forEach(
            (photo, index) => {

                const img =
                    document.createElement(
                        "img"
                    );


                img.src =
                    photo;


                img.className =
                    "memory-photo";


                img.alt =
                    `${monthNames[month]} — воспоминание`;


                img.style.animationDelay =
                    `${index * 0.12}s`;


                galleryPhotos.appendChild(
                    img
                
                );
                img.addEventListener(
    "click",
    () => {

        currentPhotos = photos;

        openPhoto(index);

    }
);

            }
        );

    }
    // ==========================================
// ПОЛНОЭКРАННЫЙ ПРОСМОТР ФОТО
// ==========================================

const photoModal =
    document.getElementById("photo-modal");


const modalPhoto =
    document.getElementById("modal-photo");


const photoClose =
    document.getElementById("photo-close");


const photoPrev =
    document.getElementById("photo-prev");


const photoNext =
    document.getElementById("photo-next");


const photoCounter =
    document.getElementById("photo-counter");

// ==========================================
// СВАЙП ФОТОГРАФИЙ НА ТЕЛЕФОНЕ
// ==========================================

let touchStartX = 0;

let touchStartY = 0;

let touchCurrentX = 0;

let isSwiping = false;


// ==========================================
// НАЧАЛО СВАЙПА
// ==========================================

modalPhoto.addEventListener(
    "touchstart",
    (event) => {

        if (!photoModal.classList.contains("visible")) {

            return;

        }


        const touch =
            event.touches[0];


        touchStartX =
            touch.clientX;


        touchStartY =
            touch.clientY;


        touchCurrentX =
            touchStartX;


        isSwiping = true;


        modalPhoto.classList.add(
            "swipe-moving"
        );

    },
    {
        passive: true
    }
);


// ==========================================
// ДВИЖЕНИЕ ПАЛЬЦА
// ==========================================

modalPhoto.addEventListener(
    "touchmove",
    (event) => {

        if (!isSwiping) {

            return;

        }


        const touch =
            event.touches[0];


        touchCurrentX =
            touch.clientX;


        const touchCurrentY =
            touch.clientY;


        const deltaX =
            touchCurrentX -
            touchStartX;


        const deltaY =
            touchCurrentY -
            touchStartY;


        // Если движение больше вертикальное —
        // не считаем его свайпом фотографии

        if (
            Math.abs(deltaY) >
            Math.abs(deltaX)
        ) {

            return;

        }


        // Небольшое сопротивление

        const moveX =
            deltaX * 0.8;


        // Небольшой поворот

        const rotation =
            moveX * 0.03;


        // Масштаб немного уменьшается

        const scale =
            Math.max(
                0.92,
                1 -
                Math.abs(moveX) / 1000
            );


        modalPhoto.style.transform =
            `translateX(${moveX}px)
             rotate(${rotation}deg)
             scale(${scale})`;

    },
    {
        passive: true
    }
);


// ==========================================
// ЗАВЕРШЕНИЕ СВАЙПА
// ==========================================

modalPhoto.addEventListener(
    "touchend",
    () => {

        if (!isSwiping) {

            return;

        }


        isSwiping = false;


        modalPhoto.classList.remove(
            "swipe-moving"
        );


        const deltaX =
            touchCurrentX -
            touchStartX;


        const swipeDistance =
            Math.abs(deltaX);


        // Минимальное расстояние свайпа

        const SWIPE_THRESHOLD = 80;


        // ======================================
        // СВАЙП ВЛЕВО
        // ======================================

        if (
            swipeDistance >=
                SWIPE_THRESHOLD &&
            deltaX < 0
        ) {

            modalPhoto.classList.add(
                "swipe-left"
            );


            setTimeout(() => {

                nextPhoto();


                resetPhotoAnimation(
                    "right"
                );

            }, 300);


            return;

        }


        // ======================================
        // СВАЙП ВПРАВО
        // ======================================

        if (
            swipeDistance >=
                SWIPE_THRESHOLD &&
            deltaX > 0
        ) {

            modalPhoto.classList.add(
                "swipe-right"
            );


            setTimeout(() => {

                previousPhoto();


                resetPhotoAnimation(
                    "left"
                );

            }, 300);


            return;

        }


        // ======================================
        // СЛИШКОМ МАЛЕНЬКОЕ ДВИЖЕНИЕ
        // ВОЗВРАЩАЕМ ФОТО НА МЕСТО
        // ======================================

        modalPhoto.style.transform =
            "translateX(0) rotate(0) scale(1)";

    }
);


// ==========================================
// СБРОС АНИМАЦИИ
// ==========================================

function resetPhotoAnimation(direction) {

    modalPhoto.classList.remove(
        "swipe-left",
        "swipe-right"
    );


    /*
        Сначала скрываем фото,
        затем показываем его
        с противоположной стороны.
    */

    modalPhoto.style.transition =
        "none";


    if (direction === "right") {

        modalPhoto.style.transform =
            "translateX(80vw) rotate(10deg) scale(0.8)";

    } else {

        modalPhoto.style.transform =
            "translateX(-80vw) rotate(-10deg) scale(0.8)";

    }


    modalPhoto.style.opacity =
        "0";


    // Принудительно применяем состояние

    modalPhoto.offsetHeight;


    modalPhoto.style.transition =
        "";


    modalPhoto.style.transform =
        "translateX(0) rotate(0) scale(1)";


    modalPhoto.style.opacity =
        "1";

}

// ==========================================
// ТЕКУЩИЕ ФОТОГРАФИИ
// ==========================================

let currentPhotos = [];


// ==========================================
// ТЕКУЩИЙ НОМЕР ФОТО
// ==========================================

let currentPhotoIndex = 0;


// ==========================================
// ОТКРЫТИЕ ФОТО
// ==========================================

function openPhoto(index) {

    if (!currentPhotos.length) {

        return;

    }


    currentPhotoIndex = index;


    modalPhoto.src =
        currentPhotos[currentPhotoIndex];


    photoCounter.textContent =
        `${currentPhotoIndex + 1} / ${currentPhotos.length}`;


    photoModal.classList.add(
        "visible"
    );

}


// ==========================================
// ЗАКРЫТИЕ
// ==========================================

function closePhoto() {

    photoModal.classList.remove(
        "visible"
    );

}


// ==========================================
// СЛЕДУЮЩЕЕ ФОТО
// ==========================================

function nextPhoto() {

    if (!currentPhotos.length) {

        return;

    }


    currentPhotoIndex++;


    if (
        currentPhotoIndex >=
        currentPhotos.length
    ) {

        currentPhotoIndex = 0;

    }


    modalPhoto.src =
        currentPhotos[currentPhotoIndex];


    photoCounter.textContent =
        `${currentPhotoIndex + 1} / ${currentPhotos.length}`;

}


// ==========================================
// ПРЕДЫДУЩЕЕ ФОТО
// ==========================================

function previousPhoto() {

    if (!currentPhotos.length) {

        return;

    }


    currentPhotoIndex--;


    if (currentPhotoIndex < 0) {

        currentPhotoIndex =
            currentPhotos.length - 1;

    }


    modalPhoto.src =
        currentPhotos[currentPhotoIndex];


    photoCounter.textContent =
        `${currentPhotoIndex + 1} / ${currentPhotos.length}`;

}


// ==========================================
// КНОПКИ
// ==========================================

photoClose.addEventListener(
    "click",
    closePhoto
);


photoNext.addEventListener(
    "click",
    nextPhoto
);


photoPrev.addEventListener(
    "click",
    previousPhoto
);


// ==========================================
// КЛИК ПО ЗАТЕМНЕНИЮ
// ==========================================

photoModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target.classList.contains(
                "photo-modal-overlay"
            )
        ) {

            closePhoto();

        }

    }
);


// ==========================================
// КЛАВИАТУРА
// ==========================================

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !photoModal.classList.contains(
                "visible"
            )
        ) {

            return;

        }


        if (event.key === "Escape") {

            closePhoto();

        }


        if (event.key === "ArrowRight") {

            nextPhoto();

        }


        if (event.key === "ArrowLeft") {

            previousPhoto();

        }

    }
);


    // ==================================================
    // КНОПКИ МЕСЯЦЕВ
    // ==================================================

    document
        .querySelectorAll(".month-button")
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    const month =
                        button.dataset.month;


                    document
                        .querySelectorAll(
                            ".month-button"
                        )
                        .forEach(
                            (item) => {

                                item.classList.remove(
                                    "active"
                                );

                            }
                        );


                    button.classList.add(
                        "active"
                    );


                    showMonth(month);

                }
            );

        });


    // ==================================================
    // ПЕРЕХОД ИЗ СЦЕНЫ 4
    // ==================================================

    if (yearNext) {

        yearNext.addEventListener(
            "click",
            () => {

                yearScene.classList.add(
                    "hidden"
                );


                memoriesScene.classList.remove(
                    "hidden"
                );

            }
        );

    }


    // ==================================================
    // ПЕРЕХОД ИЗ ВОСПОМИНАНИЙ
    // ==================================================

    if (memoriesNext) {

        memoriesNext.addEventListener(
            "click",
            () => {

                memoriesScene.classList.add(
                    "hidden"
                );


                finalScene.classList.remove(
                    "hidden"
                );


                startFinalScene();

            }
        );

    }


    // ==================================================
    // ВЗРЫВ СЕРДЕЧЕК
    // ==================================================

    function createHeartExplosion() {

        if (!heartParticles) {
            return;
        }


        const amount =
            120;


        heartParticles.innerHTML =
            "";


        const hearts = [
            "❤️",
            "💗",
            "💕",
            "💖",
            "💓"
        ];


        for (
            let i = 0;
            i < amount;
            i++
        ) {

            const particle =
                document.createElement(
                    "div"
                );


            particle.className =
                "heart-particle";


            particle.textContent =
                hearts[
                    Math.floor(
                        Math.random() *
                        hearts.length
                    )
                ];


            const angle =
                Math.random() *
                Math.PI *
                2;


            const distance =
                150 +
                Math.random() *
                450;


            const x =
                Math.cos(angle) *
                distance;


            const y =
                Math.sin(angle) *
                distance;


            const scale =
                0.5 +
                Math.random() *
                1.3;


            const duration =
                1.5 +
                Math.random() *
                2;


            const delay =
                Math.random() *
                0.4;


            const rotation =
                Math.random() *
                720 -
                360;


            particle.style.setProperty(
                "--x",
                `${x}px`
            );


            particle.style.setProperty(
                "--y",
                `${y}px`
            );


            particle.style.setProperty(
                "--scale",
                scale
            );


            particle.style.setProperty(
                "--duration",
                `${duration}s`
            );


            particle.style.setProperty(
                "--delay",
                `${delay}s`
            );


            particle.style.setProperty(
                "--rotation",
                `${rotation}deg`
            );


            heartParticles.appendChild(
                particle
            );

        }

    }


    // ==================================================
    // ЗАТУХАНИЕ СЕРДЕЧЕК
    // ==================================================

    function fadeHeartExplosion() {

        if (!heartParticles) {
            return;
        }


        const particles =
            document.querySelectorAll(
                ".heart-particle"
            );


        particles.forEach(
            (particle) => {

                particle.style.transition =
                    "opacity 1.5s ease";

                particle.style.opacity =
                    "0";

            }
        );

    }


    // ==================================================
    // РИСОВАНИЕ БОЛЬШОГО СЕРДЦА
    // ==================================================

    function drawHeart() {

        if (
            !heartOutline ||
            !heartFill ||
            !heartContainer
        ) {

            return;

        }


        const length =
            heartOutline.getTotalLength();


        heartOutline.style.strokeDasharray =
            length;


        heartOutline.style.strokeDashoffset =
            length;


        heartOutline.getBoundingClientRect();


        heartOutline.style.transition =
            "stroke-dashoffset 4s ease";


        heartOutline.style.strokeDashoffset =
            "0";


        // Заполняем сердце

        setTimeout(() => {

            heartFill.classList.add(
                "visible"
            );

        }, 4000);


        // Взрыв

        setTimeout(() => {

            createHeartExplosion();

        }, 5500);


        // Исчезновение маленьких сердец

        setTimeout(() => {

            fadeHeartExplosion();

        }, 8000);


        // Свечение

        setTimeout(() => {

            heartContainer.classList.add(
                "final-glow"
            );

        }, 8500);


        // Пульсация

        setTimeout(() => {

            heartContainer.classList.add(
                "pulse"
            );

            heartContainer.classList.add(
                "glow"
            );

        }, 5200);


        // Финальный текст

        setTimeout(() => {

            if (finalMessage) {

                finalMessage.classList.add(
                    "visible"
                );

            }

        }, 9500);

    }


    // ==================================================
    // ЗАПУСК ФИНАЛА
    // ==================================================

    function startFinalScene() {

        if (heartStart) {

            heartStart.classList.add(
                "visible"
            );

        }


        setTimeout(() => {

            if (heartContainer) {

                heartContainer.classList.add(
                    "visible"
                );

            }


            drawHeart();

        }, 1000);

    }


    // ==================================================
    // СЕКРЕТНОЕ ОКНО
    // ==================================================

    function closeSecretModal() {

        if (!secretModal) {
            return;
        }


        secretModal.classList.remove(
            "visible"
        );

    }


    if (secretButton) {

        secretButton.addEventListener(
            "click",
            () => {

                secretModal.classList.add(
                    "visible"
                );

            }
        );

    }


    if (secretClose) {

        secretClose.addEventListener(
            "click",
            closeSecretModal
        );

    }


    if (secretCloseBottom) {

        secretCloseBottom.addEventListener(
            "click",
            closeSecretModal
        );

    }


    if (secretModal) {

        secretModal.addEventListener(
            "click",
            (event) => {

                if (
                    event.target === secretModal ||
                    event.target.classList.contains(
                        "secret-overlay"
                    )
                ) {

                    closeSecretModal();

                }

            }
        );

    }


    // ==================================================
    // ЗАПУСКАЕМ ПЕРВУЮ СЦЕНУ
    // ==================================================

    startIntroScene();

});