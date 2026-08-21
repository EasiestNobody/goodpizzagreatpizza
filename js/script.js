/* =======================================
   Good Pizza, Great Pizza
   Interactive Frontend Script
   ======================================= */

// ---- SVG ICON LIBRARY ----
const SVG = {
  pizza: `🍕`,
  cart: `<svg class="icon-inline" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  drink: `<svg class="icon-inline" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8H7a1 1 0 0 0-1 1l1 11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-11a1 1 0 0 0-1-1z"/><path d="M7 8V6a5 5 0 0 1 10 0v2"/></svg>`,
  check: `<svg class="icon-inline" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  star: `<svg class="icon-inline" viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" fill="#F1C40F" stroke="#D4AC0D" stroke-width="1.5"/></svg>`,
  celebrate: `<svg class="icon-inline" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" fill="#F1C40F" stroke="#D4AC0D" stroke-width="1.5"/><circle cx="12" cy="12" r="2" fill="#C0392B"/></svg>`,
  gamepad: `<svg class="icon-inline" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h.01M12 12h.01M18 12h.01"/></svg>`,
  // Promo icons as SVGs
  meat: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="8" ry="6" fill="#E8D4A8" stroke="#C0392B" stroke-width="1.8"/><ellipse cx="12" cy="12" rx="4" ry="2.5" fill="#C0392B" opacity="0.7"/><path d="M8 10c1-2 3-2 4-1s3 0 4.5-1" stroke="#962D22" stroke-width="1.2" fill="none"/></svg>`,
  cheese: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20L12 4l10 16H2z" fill="#F1C40F" stroke="#D4AC0D" stroke-width="1.5"/><circle cx="8" cy="16" r="1.5" fill="#FFF8ED"/><circle cx="13" cy="14" r="1" fill="#FFF8ED"/><circle cx="11" cy="18" r="0.8" fill="#FFF8ED"/></svg>`,
  pizzaSlice: `<span style="font-size:2.2rem">🍕</span>`,
  cup: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8H7a1 1 0 0 0-1 1l1 11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-11a1 1 0 0 0-1-1z" fill="#FFF8ED" stroke="#3498DB" stroke-width="1.8"/><path d="M7 8V6a5 5 0 0 1 10 0v2" stroke="#F1C40F" stroke-width="2" fill="none"/></svg>`,
  sparkle: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" fill="#F1C40F" stroke="#D4AC0D" stroke-width="1.5"/></svg>`,
  partyBox: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" fill="#FFF8ED" stroke="#E67E22" stroke-width="1.8"/><polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="#F1C40F" stroke-width="2"/><line x1="12" y1="22.08" x2="12" y2="12" stroke="#E67E22" stroke-width="1.8"/></svg>`,
  gift: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1" fill="#C0392B" stroke="#962D22" stroke-width="1.5"/><rect x="3" y="12" width="18" height="9" rx="1" fill="#FFF8ED" stroke="#C0392B" stroke-width="1.5"/><line x1="12" y1="8" x2="12" y2="21" stroke="#F1C40F" stroke-width="2"/><path d="M12 8c-2-3-5-3-5-1s3 1 5 1" stroke="#F1C40F" stroke-width="1.5" fill="none"/><path d="M12 8c2-3 5-3 5-1s-3 1-5 1" stroke="#F1C40F" stroke-width="1.5" fill="none"/></svg>`,
  // Drink addon SVG icons
  cola: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none"><rect x="7" y="6" width="10" height="14" rx="2" fill="#C0392B" stroke="#962D22" stroke-width="1.2"/><rect x="8" y="8" width="8" height="4" rx="1" fill="#FFF8ED" opacity="0.6"/><path d="M10 3h4v3h-4z" fill="#E8D4A8" stroke="#C0392B" stroke-width="0.8"/></svg>`,
  sundae: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none"><path d="M8 14l-1 7h10l-1-7" fill="#FFF8ED" stroke="#C0392B" stroke-width="1.2"/><ellipse cx="12" cy="14" rx="5" ry="2" fill="#F1C40F" stroke="#D4AC0D" stroke-width="1.2"/><circle cx="12" cy="10" r="4" fill="#FFF8ED" stroke="#E8D4A8" stroke-width="1.2"/><circle cx="12" cy="8" r="2.5" fill="#F4D03F"/><circle cx="12" cy="6" r="1" fill="#C0392B"/></svg>`,
  lemon: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none"><circle cx="12" cy="12" r="8" fill="#F4D03F" stroke="#D4AC0D" stroke-width="1.5"/><path d="M12 6c-1 2-1 4 0 6s1 4 0 6" stroke="#FFF8ED" stroke-width="1" fill="none"/><path d="M8 9c2 0 4 1 4 3s-2 3-4 3" stroke="#FFF8ED" stroke-width="1" fill="none"/></svg>`,
  iceTea: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none"><path d="M7 6h10l-1.5 15H8.5L7 6z" fill="#E8D4A8" stroke="#C0392B" stroke-width="1.2"/><path d="M7 6h10l-0.5 5H7.5L7 6z" fill="#D4AC0D" opacity="0.4"/><rect x="6" y="4" width="12" height="2" rx="1" fill="#C0392B"/><line x1="12" y1="2" x2="12" y2="4" stroke="#C0392B" stroke-width="1.5"/></svg>`,
  mango: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none"><ellipse cx="12" cy="13" rx="6" ry="7" fill="#F4D03F" stroke="#D4AC0D" stroke-width="1.5"/><path d="M12 6c0-2 1-3 3-4" stroke="#27AE60" stroke-width="1.5" fill="none"/><ellipse cx="14" cy="3" rx="2" ry="1" fill="#27AE60"/></svg>`,
  water: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none"><path d="M12 3c-3 5-6 8-6 12a6 6 0 1 0 12 0c0-4-3-7-6-12z" fill="#3498DB" opacity="0.3" stroke="#3498DB" stroke-width="1.5"/><path d="M10 16a2 2 0 0 0 4 0" stroke="#FFF8ED" stroke-width="1.2" fill="none"/></svg>`
};

// ---- DATA ----
const pizzaMenu = [
  {
    id: 1,
    name: "Classic Cheese Dream",
    price: 120,
    description: "A simple yet satisfying pizza loaded with melted cheese on a rich tomato sauce.",
    image: "images/pizza_cheese.png",
    tag: "Classic"
  },
  {
    id: 2,
    name: "Pepperoni Play",
    price: 150,
    description: "A crowd favorite topped with spicy pepperoni slices and gooey cheese.",
    image: "images/pizza_pepperoni.png",
    tag: "Popular"
  },
  {
    id: 3,
    name: "Hawaiian Mix-Up",
    price: 160,
    description: "A sweet and savory combination of ham and pineapple.",
    image: "images/pizza_hawaiian.png",
    tag: "Tropical"
  },
  {
    id: 4,
    name: "Veggie Garden Slice",
    price: 140,
    description: "Loaded with fresh vegetables like bell peppers, onions, and mushrooms.",
    image: "images/pizza_veggie.png",
    tag: "Healthy"
  },
  {
    id: 5,
    name: "Meat Lover's Quest",
    price: 180,
    description: "A hearty pizza packed with different meats like sausage, bacon, and pepperoni.",
    image: "images/pizza_meat_lovers.png",
    tag: "Hearty"
  },
  {
    id: 6,
    name: "Supreme Combo Level",
    price: 190,
    description: "A mix of meats and vegetables for a balanced and flavorful pizza.",
    image: "images/pizza_supreme.png",
    tag: "Best"
  },
  {
    id: 7,
    name: "Baguio Special Delight",
    price: 170,
    description: "A unique local-inspired pizza with a mix of savory toppings representing the taste of Baguio.",
    image: "images/pizza_baguio.png",
    tag: "Special"
  }
];

const drinkAddons = [
  { id: 101, name: "Classic Cola", icon: SVG.cola, price: 35 },
  { id: 102, name: "Sundae Delight", icon: SVG.sundae, price: 55 },
  { id: 103, name: "Fresh Lemonade", icon: SVG.lemon, price: 40 },
  { id: 104, name: "Iced Tea", icon: SVG.iceTea, price: 30 },
  { id: 105, name: "Mango Shake", icon: SVG.mango, price: 50 },
  { id: 106, name: "Water Bottle", icon: SVG.water, price: 20 }
];

const promos = [
  { day: "monday", name: "Meaty Monday", icon: SVG.meat, desc: "Discounts on meat-loaded pizzas" },
  { day: "tuesday", name: "Cheesy Tuesday", icon: SVG.cheese, desc: "Extra cheese on all pizzas" },
  { day: "wednesday", name: "Whopper Wednesday", icon: SVG.pizzaSlice, desc: "Bigger slices, better value" },
  { day: "thursday", name: "Thirsty Thursday", icon: SVG.cup, desc: "Free drink with every pizza order" },
  { day: "friday", name: "Flavorful Friday", icon: SVG.sparkle, desc: "Best-selling pizzas at special prices" },
  { day: "saturday", name: "Savory Saturday", icon: SVG.partyBox, desc: "Combo deals (pizza + drink)" },
  { day: "sunday", name: "Slice Sunday", icon: SVG.gift, desc: "Buy 1 Take 1 on selected pizzas" }
];

// ---- STATE ----
let cart = [];
let selectedPizza = null;

// ---- DOM READY ----
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderMenuCards();
  renderPromos();
  renderAddons();
  initOrderForm();
  initScrollAnimations();
  initFloatingPizzas();
  updateCartUI();
  highlightToday();
});

// ---- NAVBAR ----
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNav();
  });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // Close menu on click outside
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    }
  });
}

function updateActiveNav() {
  const sections = document.querySelectorAll('.section, .hero');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// ---- MENU CARDS ----
function renderMenuCards() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;

  grid.innerHTML = pizzaMenu.map(pizza => `
    <div class="pizza-card animate-on-scroll" data-id="${pizza.id}" onclick="openPizzaModal(${pizza.id})">
      <div class="pizza-card-image">
        <img src="${pizza.image}" alt="${pizza.name}" loading="lazy">
        <div class="pizza-card-badge">₱${pizza.price}</div>
      </div>
      <div class="pizza-card-body">
        <div class="pizza-card-name">${pizza.name}</div>
        <div class="pizza-card-desc">${pizza.description}</div>
        <div class="pizza-card-footer">
          <span class="pizza-card-price">₱${pizza.price}</span>
          <button class="btn-add-cart" id="add-btn-${pizza.id}" onclick="event.stopPropagation(); addToCart(${pizza.id}, 'pizza')">
            ${SVG.cart} Add
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ---- PIZZA MODAL ----
function openPizzaModal(id) {
  const pizza = pizzaMenu.find(p => p.id === id);
  if (!pizza) return;
  selectedPizza = pizza;

  const modal = document.getElementById('pizza-modal');
  const modalContent = modal.querySelector('.modal');

  modalContent.innerHTML = `
    <button class="modal-close" onclick="closeModal('pizza-modal')">✕</button>
    <img class="modal-image" src="${pizza.image}" alt="${pizza.name}">
    <div class="modal-body">
      <div class="modal-title">${pizza.name}</div>
      <div class="modal-price">₱${pizza.price}</div>
      <p class="modal-desc">${pizza.description}</p>
      <div class="modal-actions">
        <button class="btn btn-primary" onclick="addToCart(${pizza.id}, 'pizza'); closeModal('pizza-modal');">
          ${SVG.cart} Add to Cart
        </button>
        <button class="btn btn-outline" onclick="closeModal('pizza-modal')">
          Close
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay') && e.target.classList.contains('active')) {
    e.target.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Keyboard Navigation & Shortcuts
document.addEventListener('keydown', (e) => {
  // Always allow Escape to close active modals
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(m => {
      m.classList.remove('active');
    });
    document.body.style.overflow = '';
    return;
  }

  // Disable single-key shortcuts when typing in inputs or textareas
  const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
  if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') {
    return;
  }

  // Global Quick Navigation Hotkeys
  const key = e.key.toLowerCase();
  if (key === 'c' || key === 'o') {
    scrollToOrder();
  } else if (key === 'm') {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  } else if (key === 'p') {
    const el = document.getElementById('promos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  } else if (key === 'd') {
    const el = document.getElementById('addons');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  } else if (key === 'l') {
    const el = document.getElementById('location');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  } else if (key === 'h') {
    const el = document.getElementById('home');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  } else if (key === '?') {
    showToast('Shortcuts: [M]enu, [P]romos, [D]rinks, [C]art/Order, [L]ocation, [H]ome, [Esc] Close Modal');
  }
});

// ---- PROMOTIONS ----
function renderPromos() {
  const grid = document.getElementById('promos-grid');
  if (!grid) return;

  grid.innerHTML = promos.map(promo => `
    <div class="promo-card animate-on-scroll" data-day="${promo.day}">
      <span class="promo-icon">${promo.icon}</span>
      <div class="promo-day">${promo.day.charAt(0).toUpperCase() + promo.day.slice(1)}</div>
      <div class="promo-name">${promo.name}</div>
      <p class="promo-desc">${promo.desc}</p>
    </div>
  `).join('');
}

function highlightToday() {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const today = days[new Date().getDay()];
  const todayCard = document.querySelector(`.promo-card[data-day="${today}"]`);
  if (todayCard) {
    todayCard.style.background = 'linear-gradient(135deg, #FFF5E6, #FFE8CC)';
    todayCard.style.borderColor = 'var(--sauce)';
    todayCard.style.boxShadow = '0 0 0 3px var(--sauce), var(--shadow-medium)';
    const badge = document.createElement('div');
    badge.style.cssText = 'position:absolute;top:10px;right:10px;background:var(--sauce);color:white;padding:4px 12px;border-radius:50px;font-family:"Fredoka One",cursive;font-size:0.75rem;';
    badge.textContent = "TODAY!";
    todayCard.appendChild(badge);
  }
}

// ---- ADD-ONS ----
function renderAddons() {
  const list = document.getElementById('addons-list');
  if (!list) return;

  list.innerHTML = drinkAddons.map(drink => `
    <div class="addon-item" id="addon-${drink.id}">
      <div class="addon-info">
        <span class="addon-emoji">${drink.icon}</span>
        <div>
          <div class="addon-name">${drink.name}</div>
          <div class="addon-price">₱${drink.price}</div>
        </div>
      </div>
      <button class="addon-add-btn" id="addon-btn-${drink.id}" onclick="addToCart(${drink.id}, 'drink')" title="Add to cart">+</button>
    </div>
  `).join('');
}

// ---- CART ----
function addToCart(id, type) {
  let item;
  if (type === 'pizza') {
    const pizza = pizzaMenu.find(p => p.id === id);
    item = { id: pizza.id, name: pizza.name, price: pizza.price, type: 'pizza' };
  } else {
    const drink = drinkAddons.find(d => d.id === id);
    item = { id: drink.id, name: drink.name, price: drink.price, type: 'drink' };
  }

  // Add unique instance id for removal
  item.uid = Date.now() + Math.random();
  cart.push(item);
  updateCartUI();
  showToast(`${item.name} added to cart!`);

  // Button feedback
  if (type === 'pizza') {
    const btn = document.getElementById(`add-btn-${id}`);
    if (btn) {
      btn.classList.add('added');
      btn.innerHTML = `${SVG.check} Added`;
      setTimeout(() => {
        btn.classList.remove('added');
        btn.innerHTML = `${SVG.cart} Add`;
      }, 1500);
    }
  } else {
    const btn = document.getElementById(`addon-btn-${id}`);
    if (btn) {
      btn.classList.add('added');
      btn.textContent = '✓';
      setTimeout(() => {
        btn.classList.remove('added');
        btn.textContent = '+';
      }, 1500);
    }
  }
}

function removeFromCart(uid) {
  cart = cart.filter(item => item.uid !== uid);
  updateCartUI();
  showToast('Item removed from cart');
}

function clearCart() {
  cart = [];
  updateCartUI();
}

function updateCartUI() {
  // Cart counter
  const countEl = document.getElementById('cart-count');
  const cartFab = document.querySelector('.cart-fab');
  if (countEl) countEl.textContent = cart.length;
  if (cartFab) {
    cartFab.style.display = cart.length > 0 ? 'flex' : 'none';
  }

  // Cart summary in order section
  const cartList = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartEmpty = document.getElementById('cart-empty');
  const totalAmountEl = document.getElementById('total-amount');

  if (!cartList) return;

  if (cart.length === 0) {
    cartList.style.display = 'none';
    if (cartTotal) cartTotal.style.display = 'none';
    if (cartEmpty) cartEmpty.style.display = 'block';
    return;
  }

  cartList.style.display = 'block';
  if (cartTotal) cartTotal.style.display = 'flex';
  if (cartEmpty) cartEmpty.style.display = 'none';

  cartList.innerHTML = cart.map(item => `
    <li class="cart-item">
      <span class="cart-item-name">${item.type === 'pizza' ? SVG.pizza : SVG.drink} ${item.name}</span>
      <span class="cart-item-price">₱${item.price}</span>
      <button class="cart-item-remove" onclick="removeFromCart(${item.uid})" title="Remove">✕</button>
    </li>
  `).join('');

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  if (totalAmountEl) totalAmountEl.textContent = `₱${total}`;
}

// ---- ORDER FORM ----
function initOrderForm() {
  const form = document.getElementById('order-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      showToast('Your cart is empty! Add some pizza first.');
      return;
    }

    const name = document.getElementById('customer-name').value.trim();
    const address = document.getElementById('customer-address').value.trim();

    if (!name || !address) {
      showToast('Please fill in your name and address');
      return;
    }

    // Show success modal
    const modal = document.getElementById('order-success-modal');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const orderItems = cart.map(item => `${item.name} (₱${item.price})`).join(', ');

    modal.querySelector('.modal').innerHTML = `
      <button class="modal-close" onclick="closeModal('order-success-modal')">✕</button>
      <div class="order-success">
        <span class="success-icon">
          <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" fill="#FFF8ED" stroke="#27AE60" stroke-width="2"/><polyline points="8 12 11 15 16 9" stroke="#27AE60" stroke-width="2.5"/></svg>
        </span>
        <h2>Order Placed!</h2>
        <p><strong>Thank you, ${name}!</strong></p>
        <p>Your order of <strong>${orderItems}</strong> will be delivered to <strong>${address}</strong>.</p>
        <p style="font-family:'Fredoka One',cursive;color:var(--sauce);font-size:1.5rem;margin:1rem 0;">Total: ₱${total}</p>
        <button class="btn btn-primary" style="margin-top:1.5rem;" onclick="closeModal('order-success-modal'); clearCart(); document.getElementById('order-form').reset();">
          ${SVG.pizza} Awesome!
        </button>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
}

// ---- TOAST ----
function showToast(message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${SVG.pizza}</span> ${message}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('leaving');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ---- SCROLL ANIMATIONS ----
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Re-observe after dynamic content loads
  setTimeout(() => {
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }, 500);
}

// ---- FLOATING PIZZAS ----
function initFloatingPizzas() {
  const container = document.querySelector('.floating-pizzas');
  if (!container) return;

  const emojis = ['🍕', '🧀', '🍅', '🌿', '🫒', '🥓'];

  for (let i = 0; i < 12; i++) {
    const pizza = document.createElement('div');
    pizza.className = 'floating-pizza';
    pizza.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    pizza.style.left = `${Math.random() * 100}%`;
    pizza.style.animationDelay = `${Math.random() * 15}s`;
    pizza.style.animationDuration = `${12 + Math.random() * 10}s`;
    container.appendChild(pizza);
  }
}

// ---- CART FAB ----
function scrollToOrder() {
  document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
}
