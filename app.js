function test(a) {
    let div = document.createElement("div");
    div.innerHTML = "La variable a vaut " + a;
    document.body.appendChild(div);
    ((a += 2) < 50) ? test(a) : null;
}
test(1);