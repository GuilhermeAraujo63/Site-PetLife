const questsElements = document.querySelectorAll('.duvida');

questsElements.forEach(function (duvida) {
    duvida.addEventListener('click', function() {
        duvida.classList.toggle('ativa')
    });
});