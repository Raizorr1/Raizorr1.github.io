
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