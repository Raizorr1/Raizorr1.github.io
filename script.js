
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
       
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

      
        tab.classList.add('active');

        
        const target = tab.getAttribute('data-tab');
        document.getElementById(target).classList.add('active');
    });
});









const dots = document.querySelectorAll('.dot');
const reviewGroups = document.querySelectorAll('.review-group');


let currentIndex = 0;


function activateTab(index) {
   
    dots.forEach(dot => dot.classList.remove('active'));

    
    dots[index].classList.add('active');

    
    reviewGroups.forEach((group, groupIndex) => {
        if (groupIndex === index) {
            group.style.display = 'flex';
        } else {
            group.style.display = 'none'; 
        }
    });

   
    currentIndex = index;
}


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => activateTab(index));
});


activateTab(0);







const tabsContainerMob = document.getElementById('tabs-mob');
        const leftArrowMob = document.getElementById('left-arrow-mob');
        const rightArrowMob = document.getElementById('right-arrow-mob');
        const tabsMob = document.querySelectorAll('.tab-mob');

        let activeIndexMob = 0; 

        
        const updateTabsMob = () => {
            tabsMob.forEach((tab, index) => {
                tab.classList.remove('active');
                if (index === activeIndexMob) {
                    tab.classList.add('active');
                }
            });
            updateArrowVisibilityMob();
        };

        
        const scrollTabsMob = (direction) => {
            if (direction === 'right' && activeIndexMob < tabsMob.length - 1) {
                activeIndexMob++;
            } else if (direction === 'left' && activeIndexMob > 0) {
                activeIndexMob--;
            }
            updateTabsMob();
        };

       
        leftArrowMob.addEventListener('click', () => scrollTabsMob('left'));
        rightArrowMob.addEventListener('click', () => scrollTabsMob('right'));

       
        const updateArrowVisibilityMob = () => {
            leftArrowMob.style.display = activeIndexMob > 0 ? 'flex' : 'none';
            rightArrowMob.style.display = activeIndexMob < tabsMob.length - 1 ? 'flex' : 'none';
        };

       
        updateTabsMob();



        document.addEventListener("DOMContentLoaded", () => {
            const tabButtons = document.querySelectorAll(".tab-button.mob1");
            const tabContents = document.querySelectorAll(".tab-content.mob1");
        
            tabButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    const targetTab = button.getAttribute("data-tab");
        
                    
                    tabButtons.forEach((btn) => btn.classList.remove("active"));
                    tabContents.forEach((content) => content.classList.add("hidden"));
        
                    
                    button.classList.add("active");
                    document.getElementById(`tab-${targetTab}`).classList.remove("hidden");
                });
            });
        });
        document.addEventListener("DOMContentLoaded", () => {
            const tabs = document.querySelectorAll(".tab-content.mob1");
            const dots = document.querySelectorAll(".dot.mob1");
            const leftArrow = document.querySelector(".carousel-arrow.left.mob1");
            const rightArrow = document.querySelector(".carousel-arrow.right.mob1");
            let currentIndex = 0;
        
            
            function updateCarousel() {
                tabs.forEach((tab, index) => {
                    tab.classList.toggle("hidden", index !== currentIndex);
                });
        
                dots.forEach((dot, index) => {
                    dot.classList.toggle("active", index === currentIndex);
                });
            }
        
            
            leftArrow.addEventListener("click", () => {
                currentIndex = (currentIndex - 1 + tabs.length) % tabs.length;
                updateCarousel();
            });
        
            
            rightArrow.addEventListener("click", () => {
                currentIndex = (currentIndex + 1) % tabs.length;
                updateCarousel();
            });
        
           
            dots.forEach((dot, index) => {
                dot.addEventListener("click", () => {
                    currentIndex = index;
                    updateCarousel();
                });
            });
        
            
            updateCarousel();
        });
                

       













        // Получаем все элементы вкладок и контента
const tabs1mob = document.querySelectorAll('.tab-1mob');
const contents1mob = document.querySelectorAll('.content-1mob');

// Функция для переключения вкладок
function switchTab(index) {
    // Удаляем класс "active-1mob" у всех вкладок и контента
    tabs1mob.forEach(t => t.classList.remove('active-1mob'));
    contents1mob.forEach(content => content.classList.remove('active-1mob'));

    // Выбираем вкладку и контент по индексу
    tabs1mob[index].classList.add('active-1mob');
    contents1mob[index].classList.add('active-1mob');
}

// Добавляем обработчик кликов для каждой вкладки
tabs1mob.forEach(tab => {
    tab.addEventListener('click', () => {
        let index = [...tabs1mob].indexOf(tab); // Находим индекс текущей вкладки
        switchTab(index);
    });
});

// Функция для переключения вкладок с использованием стрелок
document.getElementById('prev-tab-1mob').addEventListener('click', () => {
    let currentIndex = [...tabs1mob].findIndex(tab => tab.classList.contains('active-1mob'));
    currentIndex = (currentIndex - 1 + tabs1mob.length) % tabs1mob.length; // Переход к предыдущей вкладке
    switchTab(currentIndex);
});

document.getElementById('next-tab-1mob').addEventListener('click', () => {
    let currentIndex = [...tabs1mob].findIndex(tab => tab.classList.contains('active-1mob'));
    currentIndex = (currentIndex + 1) % tabs1mob.length; // Переход к следующей вкладке
    switchTab(currentIndex);
});

// Убедитесь, что первая вкладка отображается как активная по умолчанию
document.querySelector('.tab-3mob').classList.add('active-3mob');
document.querySelector('#tab1-1mob').classList.add('active-1mob');

        



document.addEventListener('DOMContentLoaded', function () {
    const leftArrowLol = document.querySelector('.carousel-arrow-lol.left-lol');
    const rightArrowLol = document.querySelector('.carousel-arrow-lol.right-lol');
    const itemsLol = document.querySelectorAll('.carousel-item-lol');
    const dotsLol = document.querySelectorAll('.dot-lol');
    let activeIndexLol = 0;

    function updateCarouselLol(index) {
        itemsLol.forEach((item, i) => {
            item.classList.toggle('active-lol', i === index);
        });
        dotsLol.forEach((dot, i) => {
            dot.classList.toggle('active-lol', i === index);
        });
    }

    leftArrowLol.addEventListener('click', () => {
        activeIndexLol = (activeIndexLol - 1 + itemsLol.length) % itemsLol.length;
        updateCarouselLol(activeIndexLol);
    });

    rightArrowLol.addEventListener('click', () => {
        activeIndexLol = (activeIndexLol + 1) % itemsLol.length;
        updateCarouselLol(activeIndexLol);
    });

    dotsLol.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            activeIndexLol = index;
            updateCarouselLol(activeIndexLol);
        });
    });
});






