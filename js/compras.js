function saveInfo(id_compra, precio_final,) {
    document.getElementById("cod_prod_edit").value = id_compra;
    document.getElementById("precio_edit").value = precio_final;
}

async function getInfo() {
    const url = 'http://localhost:9000/api/compras';
    const response = await fetch(url);
    const jsonData = await response.json();

    const tableBody = document.getElementById("list-compras");

    jsonData.forEach(compra => {
        tableBody.innerHTML += `
            <tr>
                <td scope="col">${compra.id_compra}</td>
                <td scope="col">${compra.precio_final}</td>
                <td scope="col">${compra.fecha_compra}</td>
                <td scope="col">
                    <a href="#" class="Editar" data-bs-toggle="modal" data-bs-target="#exampleModal2" onclick="saveInfo(${compra.id_compra}, ${compra.precio_final});">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </a>
                    <i class="fa-solid fa-power-off" style="cursor: pointer" onclick="eliminarDato(${compra.id_compra});"></i>
                </td>
            </tr>
        `;
    });
}

getInfo();

async function editarInfo() {

    const codProd = document.getElementById("cod_prod_edit").value;
    const precio = document.getElementById("precio_edit").value;
    console.log("Hola!!")

    const data = {
        precio_final: precio,
    };

    const url = `http://localhost:9000/api/compras/${codProd}`;

    const response = await fetch(url, {
        method: "PUT", // DELETE // PUT // POST
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // CON DELETE SE QUITA ESTA LINEA
    });
}

async function eliminarDato(id) {
    console.log(id);
    const url = `http://localhost:9000/api/compras/${id}`;

    const response = await fetch(url, {
        method: "DELETE", // DELETE // PUT // POST
    });
}

function agregarProducto() {
    const form = document.getElementById("AgregarProducto");
    const newContent = document.createElement('div');
    newContent.classList.add('d-flex', 'flex-wrap');
    newContent.innerHTML += `
        <div class="input-box" style="width: 24%;">
            <span class="details">cod producto</span><br>
            <input type="text" name="cod_prod" placeholder="Ingrese el cod producto" required>
        </div>
        <div class="input-box" style="width: 24%;">
            <span class="details">Cantidad</span><br>
            <input name="cantidad" type="number" placeholder="Ingrese cantidad"
                required>
        </div>
        <div class="input-box" style="width: 24%;"> 
            <span class="details">Precio</span><br>
            <input name="precio" type="number" placeholder="Ingrese precio"
                required>
        </div>
        <div style="width: 24%;">
            <button type="button" class="btn-close" aria-label="Close" onclick="quitarProducto(this);"></button>
        </div>`;
    form.appendChild(newContent);
}

function quitarProducto(e) {
    e.parentElement.parentElement.innerHTML = '';
}

async function crearCompra () {
    const data = [];
    const codProd = [...document.getElementsByName("cod_prod")];
    const cantidad = [...document.getElementsByName("cantidad")];
    const precio = [...document.getElementsByName("precio")];
    
    for (let index = 0; index < codProd.length; index++) {
        let precio_total = Number(cantidad[index].value) * Number(precio[index].value);
        if (codProd[index].value !== "") {
            let auxData = {
                id_categoria_fk: 1,
                id_repuesto_fk: Number(codProd[index].value),
                cantidad: Number(cantidad[index].value),
                precio_unitario: Number(precio[index].value),
                subtotal: precio_total
            };
            data.push(auxData); //manda los datos a un json
            window.location.href = 'compras.html'
           
        }
    }

    const url = 'http://localhost:9000/api/compras';

    const response = await fetch(url, {
        method: "POST", // DELETE // PUT // POST
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // CON DELETE SE QUITA ESTA LINEA
    });
}