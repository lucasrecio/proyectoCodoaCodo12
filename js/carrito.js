document.addEventListener('DOMContentLoaded', function() {
    // URL del backend en PythonAnywhere
    const backendUrl = 'https://<tu-backend-en-pythonanywhere>';

    // Obtener el carrito de compras
    fetch(`${backendUrl}/api/carrito`, {
        method: 'GET',
        credentials: 'include'  // Para incluir cookies en las peticiones
    })
    .then(response => response.json())
    .then(data => {
        mostrarCarrito(data);
    })
    .catch(error => console.error('Error:', error));

    // Mostrar el carrito de compras en la tabla
    function mostrarCarrito(carrito) {
        const carritoBody = document.getElementById('carrito-body');
        carritoBody.innerHTML = '';

        let total = 0;

        carrito.forEach(item => {
            const subtotal = item.cantidad * item.precio;
            total += subtotal;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${item.imagen}" alt="${item.nombre}"></td>
                <td class="texto-list">${item.nombre}</td>
                <td class="texto-list">$${item.precio.toFixed(2)}</td>
                <td>
                    <input type="number" value="${item.cantidad}" min="1" data-id="${item.idProducto}">
                    <button class="update-button"><i class="fa-regular fa-pen-to-square"></i></button>
                </td>
                <td class="texto-list">$${subtotal.toFixed(2)}</td>
                <td>
                    <button class="delete-button" data-id="${item.idProducto}">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </td>
            `;
            carritoBody.appendChild(row);
        });

        document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    }

    // Actualizar cantidad de producto en el carrito
    document.addEventListener('click', function(event) {
        if (event.target.closest('.update-button')) {
            const input = event.target.closest('tr').querySelector('input[type="number"]');
            const idProducto = input.getAttribute('data-id');
            const cantidad = input.value;

            fetch(`${backendUrl}/api/carrito/agregar`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ idProducto, cantidad })
            })
            .then(response => response.json())
            .then(data => {
                // Recargar el carrito
                fetch(`${backendUrl}/api/carrito`, {
                    method: 'GET',
                    credentials: 'include'
                })
                .then(response => response.json())
                .then(data => {
                    mostrarCarrito(data);
                });
            })
            .catch(error => console.error('Error:', error));
        }
    });

    // Eliminar producto del carrito
    document.addEventListener('click', function(event) {
        if (event.target.closest('.delete-button')) {
            const idProducto = event.target.closest('.delete-button').getAttribute('data-id');

            fetch(`${backendUrl}/api/carrito/eliminar`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ idProducto })
            })
            .then(response => response.json())
            .then(data => {
                // Recargar el carrito
                fetch(`${backendUrl}/api/carrito`, {
                    method: 'GET',
                    credentials: 'include'
                })
                .then(response => response.json())
                .then(data => {
                    mostrarCarrito(data);
                });
            })
            .catch(error => console.error('Error:', error));
        }
    });
});
