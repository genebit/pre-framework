const accordionCards = document.getElementsByClassName('accordion-card')
for (let i = 0; i < accordionCards.length; i++) {
    accordionCards[i].onclick = function () {
        const icon = accordionCards[i].querySelector('.accordion-card-header > i')
        const panel = accordionCards[i].querySelector('.accordion-card-body')
        panel.className = 'accordion-card-body active'
        icon.className = 'fa fa-caret-up'

        document.addEventListener('mouseup', function (event) {
            var clickedElement = event.target
            if (!accordionCards[i].contains(clickedElement)) {
                panel.className = 'accordion-card-body'
                icon.className = 'fa fa-caret-down'
            }
        })
    }
}