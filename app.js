function test(a1) {
    let div = document.createElement("div");
    div.innerHTML = "La variable a vaut " + a1;
    document.body.appendChild(div);
    ((a += 2) < 50) ? test(a1) : null;
}
test(1);