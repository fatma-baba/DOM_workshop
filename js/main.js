var carte = [
    { name: "banana", prix: 3.5, qt: 0, fav: false },
    { name: "orange", prix: 2.5, qt: 0, fav: false },
    { name: "apple", prix: 4, qt: 0, fav: false },
    { name: "grape", prix: 3.8, qt: 0, fav: false },
    { name: "limon", prix: 5.2, qt: 0, fav: false }
]

function ajouter_qte(item_index) {
    carte[item_index].qt++;
    const qte = document.getElementById(`qt_${item_index}`)
    qte.value = carte[item_index].qt
    calc_prix_totale()
}

function diminuer_qte(item_index) {
    const qte = document.getElementById(`qt_${item_index}`)
    if (qte.value > 0) {
        carte[item_index].qt--;
        qte.value = carte[item_index].qt
    }
    calc_prix_totale()
}

function calc_prix_totale() {
    let prix_total = 0
    const total = document.getElementById('total')
    for (let index = 0; index < carte.length; index++) {
        let element = carte[index];
        let prix_element = element.qt * element.prix
        prix_total += prix_element
    }
    total.innerHTML = `${prix_total} DT`
}

function delete_item(item_index) {
    // hide from html
    const item = document.getElementById(`item_${item_index}`)
    item.style.display = "none"
        // logic
    carte[item_index].qt = 0
    calc_prix_totale()
}

function fav(item_index) {
    carte[item_index].fav = !carte[item_index].fav
    const fav_elm = document.getElementById(`fav_${item_index}`)
    if (carte[item_index].fav) {
        fav_elm.classList.remove('far')
        fav_elm.classList.add('fas')
    } else {
        fav_elm.classList.add('far')
        fav_elm.classList.remove('fas')
    }
}