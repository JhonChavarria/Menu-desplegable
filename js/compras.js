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
    
    for (let index = 0; index < codPodr.length; index++) {
        let precio_total = Number(cantidad[index].value) * Number(precio[index].value);
        if (codProd[index].value !== "") {
            let auxData = {
                id_categoria_fk: 1,
                id_repuesto_fk: Number(codProd[index].value),
                cantidad: Number(cantidad[index].value),
                precio_unitario: Number(precio[index].value),
                subtotal: precio_total
            };
            data.push(auxData);
        }
    }

    console.log(data);

    const url = 'http://localhost:9000/api/compras/12';

    const response = await fetch(url, {
        method: "POST", // DELETE // PUT // POST
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // CON DELETE SE QUITA ESTA LINEA
    });

    //Ejemplo GET
    //const response2 = await fetch(url);    
    

    console.log(response);
}