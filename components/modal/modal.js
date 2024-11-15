function openModal(query) {
    document.querySelector(query).classList.add('open')
}

function closeModal(query) {
    document.querySelector(query).classList.remove('open')
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.modal:not(.force)').forEach((el) => {
        el.addEventListener('click', () => closeModal("#" + el.id));
    });

})