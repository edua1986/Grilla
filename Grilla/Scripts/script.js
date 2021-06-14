Window.onload = function () {
    requestServer("get", "Producto/listar", mostrarProductos);
}

function requestServer(httpMethod, url, callBackMethod) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            callBackMethod(xhr.response);
        }
    }
    xhr.send();
}

function mostrarProductos(rpta) {
    if (rpta != "") {
        var lista = rpta.split("¬");
    }
    document.getElementById("divProducto").innerHTML = crearTabla(lista);
}

function crearTabla(lista) {
    var contenido = "";
    if (lista != null && lista.length > 0) {
        contenido = "<table style='width:100%'><thead><tr class='FilaCabecera'>";
        var campos = lista[0].split("|");
        var nCampos = campos.length;
        for (var j = 0; j < nCampos; j++) {
            contenido += "<th";
            contenido += campos[j];
            contenido += "</th>"
        }
        contenido += "</tr></thead><tbody>";
        var nRegistros = lista.length;
        for (var i = 1; i < nRegistros; i++) {
            campos = lista[i].split("|");
            contenido += "<tr class='FilaDatos'>";
            for (var j = 0; j < nCampos; j++) {
                contenido += "<td>";
                contenido += campos[j];
                contenido += "</td>";
            }
            contenido += "</tr>";
        }
        contenido += "</tbody></table>";
    }
    return contenido;
}