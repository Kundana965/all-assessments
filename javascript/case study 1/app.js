// // ---- CONSTANT KEYS ----
// const USERS_KEY = 'sr_users';
// const CURRENT_USER_KEY = 'sr_current_user';
// const CART_KEY = 'sr_cart';

// // ---- UTILITIES ----
// function getStoredArray(key) {
//   const raw = localStorage.getItem(key);
//   return raw ? JSON.parse(raw) : [];
// }

// function setStoredArray(key, arr) {
//   localStorage.setItem(key, JSON.stringify(arr));
// }

// // ---- AUTH ----
// function getCurrentUser() {
//   return localStorage.getItem(CURRENT_USER_KEY);
// }

// function setCurrentUser(email) {
//   if (email) localStorage.setItem(CURRENT_USER_KEY, email);
//   else localStorage.removeItem(CURRENT_USER_KEY);
// }

// function signupUser(name, email, password) {
//   const users = getStoredArray(USERS_KEY);
//   if (users.find(u => u.email === email)) {
//     throw new Error('Email already registered');
//   }
//   users.push({ name, email, password });
//   setStoredArray(USERS_KEY, users);
// }

// function loginUser(email, password) {
//   const users = getStoredArray(USERS_KEY);
//   const user = users.find(u => u.email === email && u.password === password);
//   if (!user) throw new Error('Invalid credentials');
//   setCurrentUser(email);
// }

// // ---- NAVBAR + AUTH UI ----
// function initNavbar(activePage) {
//   const links = document.querySelectorAll('nav a[data-page]');
//   links.forEach(link => {
//     const page = link.getAttribute('data-page');
//     if (page === activePage) link.classList.add('active');
//   });

//   const loginLink = document.getElementById('loginLink');
//   const signupLink = document.getElementById('signupLink');
//   const logoutBtn = document.getElementById('logoutBtn');
//   const user = getCurrentUser();

//   if (user) {
//     loginLink && loginLink.classList.add('hidden');
//     signupLink && signupLink.classList.add('hidden');
//     logoutBtn && logoutBtn.classList.remove('hidden');
//   } else {
//     loginLink && loginLink.classList.remove('hidden');
//     signupLink && signupLink.classList.remove('hidden');
//     logoutBtn && logoutBtn.classList.add('hidden');
//   }

//   if (logoutBtn) {
//     logoutBtn.addEventListener('click', () => {
//       setCurrentUser(null);
//       window.location.href = 'login.html';
//     });
//   }
// }

// // ---- PRODUCTS DATA ----
// const PRODUCTS = [
//   { id: 1, name: 'Apple', category: 'Fruits', price: 120, stock: true, image: 'apple.jpg', weights: ['500g', '1kg'] },
//   { id: 2, name: 'Banana', category: 'Fruits', price: 60, stock: true, image: 'banana.jpg', weights: ['1kg'] },
//   { id: 3, name: 'Tomato', category: 'Vegetables', price: 40, stock: false, image: 'tomato.jpg', weights: ['500g', '1kg'] },
//   { id: 4, name: 'Red Chilli Powder', category: 'Spices', price: 200, stock: true, image: 'chilli.jpg', weights: ['500g', '1kg'] },
//   { id: 5, name: 'Foxtail Millet', category: 'Millets', price: 150, stock: true, image: 'millet.jpg', weights: ['1kg', '2kg'] }
// ];

// // ---- CART LOGIC ----
// function getCart() {
//   return getStoredArray(CART_KEY);
// }

// function setCart(cart) {
//   setStoredArray(CART_KEY, cart);
// }

// function addToCart(productId, weight) {
//   const cart = getCart();
//   const item = cart.find(i => i.id === productId && i.weight === weight);
//   if (item) item.qty += 1;
//   else cart.push({ id: productId, weight, qty: 1 });
//   setCart(cart);
//   alert('Product added to cart');
// }

// function updateCartQty(productId, weight, qty) {
//   const cart = getCart();
//   const item = cart.find(i => i.id === productId && i.weight === weight);
//   if (item) {
//     item.qty = qty;
//     if (item.qty <= 0) {
//       const idx = cart.indexOf(item);
//       cart.splice(idx, 1);
//     }
//   }
//   setCart(cart);
// }

// function removeCartItem(productId, weight) {
//   const cart = getCart().filter(i => !(i.id === productId && i.weight === weight));
//   setCart(cart);
// }

// // ---- RENDER PRODUCTS PAGE ----
// function initProductsPage() {
//   initNavbar('products');

//   const searchInput = document.getElementById('searchInput');
//   const categorySelect = document.getElementById('categorySelect');
//   const productsContainer = document.getElementById('productsContainer');

//   function renderProducts(list) {
//     productsContainer.innerHTML = '';
//     list.forEach(p => {
//       const card = document.createElement('div');
//       card.className = 'product-card';

//       card.innerHTML = `
//         <img src="${p.image}" alt="${p.name}" />
//         <h3>${p.name}</h3>
//         <p>Category: ${p.category}</p>
//         <p>Price: ₹${p.price}</p>
//         <p>${p.stock ? 'In Stock' : 'Out of Stock'}</p>
//         <label>Weight:
//           <select class="weightSelect">
//             ${p.weights.map(w => `<option value="${w}">${w}</option>`).join('')}
//           </select>
//         </label>
//         <button class="btn addCartBtn" ${!p.stock ? 'disabled' : ''}>Add to Cart</button>
//         <button class="btn secondary wishlistBtn">Wishlist</button>
//       `;
//       productsContainer.appendChild(card);

//       const weightSelect = card.querySelector('.weightSelect');
//       const addBtn = card.querySelector('.addCartBtn');
//       addBtn.addEventListener('click', () => {
//         const user = getCurrentUser();
//         if (!user) {
//           alert('Please login to add to cart');
//           window.location.href = 'login.html';
//           return;
//         }
//         addToCart(p.id, weightSelect.value);
//       });
//     });
//   }

//   function filterProducts() {
//     const search = searchInput.value.toLowerCase();
//     const cat = categorySelect.value;

//     let list = PRODUCTS.filter(p =>
//       p.name.toLowerCase().includes(search) ||
//       p.category.toLowerCase().includes(search)
//     );
//     if (cat) list = list.filter(p => p.category === cat);
//     renderProducts(list);
//   }

//   searchInput.addEventListener('input', filterProducts);
//   categorySelect.addEventListener('change', filterProducts);

//   renderProducts(PRODUCTS);
// }

// // ---- RENDER CART PAGE ----
// function initCartPage() {
//   initNavbar('cart');
//   const tableBody = document.querySelector('#cartTableBody');
//   const subtotalEl = document.getElementById('subtotal');
//   const taxEl = document.getElementById('tax');
//   const totalEl = document.getElementById('total');

//   function calculateTotals(cart) {
//     let subtotal = 0;
//     cart.forEach(item => {
//       const product = PRODUCTS.find(p => p.id === item.id);
//       if (product) subtotal += product.price * item.qty;
//     });
//     const tax = subtotal * 0.05;
//     const total = subtotal + tax;
//     return { subtotal, tax, total };
//   }

//   function renderCart() {
//     const cart = getCart();
//     tableBody.innerHTML = '';
//     cart.forEach(item => {
//       const product = PRODUCTS.find(p => p.id === item.id);
//       if (!product) return;
//       const tr = document.createElement('tr');
//       tr.innerHTML = `
//         <td>${product.name}</td>
//         <td>${item.weight}</td>
//         <td>₹${product.price}</td>
//         <td><input type="number" min="1" value="${item.qty}" class="qtyInput" style="width:60px" /></td>
//         <td>₹${product.price * item.qty}</td>
//         <td><button class="btn secondary removeBtn">Remove</button></td>
//       `;
//       tableBody.appendChild(tr);

//       const qtyInput = tr.querySelector('.qtyInput');
//       const removeBtn = tr.querySelector('.removeBtn');

//       qtyInput.addEventListener('change', () => {
//         const newQty = parseInt(qtyInput.value, 10);
//         updateCartQty(item.id, item.weight, newQty);
//         renderCart();
//       });

//       removeBtn.addEventListener('click', () => {
//         removeCartItem(item.id, item.weight);
//         renderCart();
//       });
//     });

//     const totals = calculateTotals(getCart());
//     subtotalEl.textContent = `₹${totals.subtotal.toFixed(2)}`;
//     taxEl.textContent = `₹${totals.tax.toFixed(2)}`;
//     totalEl.textContent = `₹${totals.total.toFixed(2)}`;
//   }

//   const checkoutBtn = document.getElementById('checkoutBtn');
//   checkoutBtn.addEventListener('click', () => {
//     window.location.href = 'billing.html';
//   });

//   renderCart();
// }

// // ---- BILLING PAGE ----
// function initBillingPage() {
//   initNavbar('cart');
//   const summaryEl = document.getElementById('billSummary');
//   const cart = getCart();
//   let html = '<h2>Order Summary</h2><ul>';
//   let subtotal = 0;
//   cart.forEach(item => {
//     const product = PRODUCTS.find(p => p.id === item.id);
//     if (!product) return;
//     subtotal += product.price * item.qty;
//     html += `<li>${product.name} (${item.weight}) x ${item.qty} = ₹${product.price * item.qty}</li>`;
//   });
//   html += '</ul>';
//   const tax = subtotal * 0.05;
//   const total = subtotal + tax;
//   html += `<p>Subtotal: ₹${subtotal.toFixed(2)}</p>`;
//   html += `<p>Tax (5%): ₹${tax.toFixed(2)}</p>`;
//   html += `<h3>Total: ₹${total.toFixed(2)}</h3>`;
//   summaryEl.innerHTML = html;

//   document.getElementById('printBtn').addEventListener('click', () => {
//     window.print();
//   });
// }

// // ---- SIGNUP PAGE ----
// function initSignupPage() {
//   initNavbar(null);
//   const form = document.getElementById('signupForm');
//   const msg = document.getElementById('signupMsg');

//   form.addEventListener('submit', e => {
//     e.preventDefault();
//     msg.textContent = '';
//     msg.className = 'message';

//     const name = form.fullName.value.trim();
//     const email = form.email.value.trim();
//     const password = form.password.value.trim();
//     const confirm = form.confirmPassword.value.trim();

//     if (!name || !email || !password || !confirm) {
//       msg.textContent = 'All fields are required';
//       msg.classList.add('error');
//       return;
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       msg.textContent = 'Invalid email format';
//       msg.classList.add('error');
//       return;
//     }
//     if (password !== confirm) {
//       msg.textContent = 'Passwords do not match';
//       msg.classList.add('error');
//       return;
//     }

//     try {
//       signupUser(name, email, password);
//       msg.textContent = 'Signup successful. You can login now.';
//       msg.classList.add('success');
//       form.reset();
//     } catch (err) {
//       msg.textContent = err.message;
//       msg.classList.add('error');
//     }
//   });
// }

// // ---- LOGIN PAGE ----
// function initLoginPage() {
//   initNavbar(null);
//   const form = document.getElementById('loginForm');
//   const msg = document.getElementById('loginMsg');

//   form.addEventListener('submit', e => {
//     e.preventDefault();
//     msg.textContent = '';
//     msg.className = 'message';

//     const email = form.email.value.trim();
//     const password = form.password.value.trim();

//     if (!email || !password) {
//       msg.textContent = 'Email and password required';
//       msg.classList.add('error');
//       return;
//     }

//     try {
//       loginUser(email, password);
//       window.location.href = 'index.html';
//     } catch (err) {
//       msg.textContent = err.message;
//       msg.classList.add('error');
//     }
//   });
// }

// // ---- CONTACT PAGE ----
// function initContactPage() {
//   initNavbar('contact');
//   const form = document.getElementById('contactForm');
//   const msg = document.getElementById('contactMsg');

//   form.addEventListener('submit', e => {
//     e.preventDefault();
//     msg.textContent = '';
//     msg.className = 'message';

//     const name = form.name.value.trim();
//     const email = form.email.value.trim();
//     const message = form.message.value.trim();

//     if (!name || !email || !message) {
//       msg.textContent = 'All fields are required';
//       msg.classList.add('error');
//       return;
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       msg.textContent = 'Invalid email format';
//       msg.classList.add('error');
//       return;
//     }

//     msg.textContent = 'Message sent successfully.';
//     msg.classList.add('success');
//     form.reset();
//   });
// }

// // ---- SIMPLE ROUTER PER PAGE ----
// document.addEventListener('DOMContentLoaded', () => {
//   const page = document.body.getAttribute('data-page');
//   switch (page) {
//     case 'home':
//       initNavbar('home');
//       break;
//     case 'signup':
//       initSignupPage();
//       break;
//     case 'login':
//       initLoginPage();
//       break;
//     case 'products':
//       initProductsPage();
//       break;
//     case 'cart':
//       initCartPage();
//       break;
//     case 'billing':
//       initBillingPage();
//       break;
//     case 'contact':
//       initContactPage();
//       break;
//     case 'about':
//       initNavbar('about');
//       break;
//     default:
//       initNavbar(null);
//   }
// });
