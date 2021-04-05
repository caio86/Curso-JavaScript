function tabuada() {
    var tab = Number(document.getElementById('txttab').value)
    var res = document.querySelector('div#res')
    var val = 1
    res.innerHTML = ""
    for (var c=1;c<=10;c++) {
        val = tab*c
        res.innerHTML += `${tab}x${c}=${val}<br>`
    }
}