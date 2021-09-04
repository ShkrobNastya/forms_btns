document.addEventListener('DOMContentLoaded', () => {
    let  tab = document.querySelectorAll('.tab'),
         tabForm = document.querySelectorAll('.tab-form');

    tab.forEach((t,i) => {
        t.addEventListener('click', () => {
            tab.forEach(tab => {
                tab.classList.remove('active');
            });
            tabForm.forEach(tF => {
                tF.classList.remove('active');
            })
            t.classList.add('active');
            tabForm[i].classList.add('active');
        }); 
    });
});
