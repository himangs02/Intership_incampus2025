const apiUrl = '/api/products';

const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');

async function fetchProducts() {
  const res = await axios.get(apiUrl);
  const products = res.data;

  productList.innerHTML = '';
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = "bg-white p-4 rounded shadow";

    div.innerHTML = `
      <h2 class="text-xl font-semibold">${product.name}</h2>
      <p>💲 ${product.price}</p>
      <p>${product.description}</p>
      ${product.imageUrl ? `<img src="${product.imageUrl}" class="w-full mt-2 rounded" />` : ''}
      <button onclick="deleteProduct('${product._id}')" class="mt-2 bg-red-500 text-white px-2 py-1 rounded">Delete</button>
    `;

    productList.appendChild(div);
  });
}

productForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const newProduct = {
    name: document.getElementById('name').value,
    price: parseFloat(document.getElementById('price').value),
    description: document.getElementById('description').value,
    imageUrl: document.getElementById('imageUrl').value
  };

  await axios.post(apiUrl, newProduct);
  productForm.reset();
  fetchProducts();
});

async function deleteProduct(id) {
  await axios.delete(`${apiUrl}/${id}`);
  fetchProducts();
}

// Initial load
fetchProducts();
