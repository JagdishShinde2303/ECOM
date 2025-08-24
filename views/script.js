// Product Database
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "electronics",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&q=80",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
    description: "Experience premium sound quality with active noise cancellation and 30-hour battery life.",
  },
  {
    id: 2,
    name: "Designer Handbag",
    category: "fashion",
    price: 599,
    originalPrice: 799,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&q=80",
    rating: 4.9,
    reviews: 89,
    badge: "New",
    description: "Luxury leather handbag crafted with premium materials and elegant design.",
  },
  {
    id: 3,
    name: "Luxury Skincare Set",
    category: "beauty",
    price: 199,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&q=80",
    rating: 4.7,
    reviews: 156,
    badge: "Sale",
    description: "Complete skincare routine with premium ingredients for radiant, healthy skin.",
  },
  {
    id: 4,
    name: "Modern Table Lamp",
    category: "home",
    price: 149,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&q=80",
    rating: 4.6,
    reviews: 78,
    badge: "Popular",
    description: "Elegant table lamp with adjustable brightness and modern minimalist design.",
  },
  {
    id: 5,
    name: "Smart Fitness Watch",
    category: "electronics",
    price: 399,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&q=80",
    rating: 4.8,
    reviews: 92,
    badge: "Tech",
    description: "Advanced fitness tracking with heart rate monitoring and GPS functionality.",
  },
  {
    id: 6,
    name: "Casual Sneakers",
    category: "fashion",
    price: 129,
    originalPrice: 179,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&q=80",
    rating: 4.7,
    reviews: 134,
    badge: "Comfort",
    description: "Comfortable everyday sneakers with premium materials and cushioned sole.",
  },
  {
    id: 7,
    name: "Organic Face Cream",
    category: "beauty",
    price: 79,
    originalPrice: 99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&q=80",
    rating: 4.9,
    reviews: 203,
    badge: "Organic",
    description: "Natural face cream with organic ingredients for deep hydration and anti-aging.",
  },
  {
    id: 8,
    name: "Decorative Vase",
    category: "home",
    price: 89,
    originalPrice: 119,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&q=80",
    rating: 4.5,
    reviews: 67,
    badge: "Handmade",
    description: "Handcrafted ceramic vase perfect for modern home decoration and fresh flowers.",
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    category: "electronics",
    price: 199,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&q=80",
    rating: 4.6,
    reviews: 145,
    badge: "Portable",
    description: "Portable wireless speaker with 360-degree sound and waterproof design.",
  },
  {
    id: 10,
    name: "Silk Scarf",
    category: "fashion",
    price: 89,
    originalPrice: 129,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop&q=80",
    rating: 4.8,
    reviews: 98,
    badge: "Luxury",
    description: "Premium silk scarf with elegant patterns, perfect for any occasion.",
  },
  {
    id: 11,
    name: "Essential Oil Diffuser",
    category: "home",
    price: 69,
    originalPrice: 89,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop&q=80",
    rating: 4.7,
    reviews: 112,
    badge: "Wellness",
    description: "Ultrasonic aromatherapy diffuser with LED lights and timer function.",
  },
  {
    id: 12,
    name: "Makeup Brush Set",
    category: "beauty",
    price: 59,
    originalPrice: 79,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop&q=80",
    rating: 4.9,
    reviews: 187,
    badge: "Professional",
    description: "Professional makeup brush set with synthetic bristles and elegant case.",
  },
]

// Global Variables
let cart = JSON.parse(localStorage.getItem("luxe_cart")) || []
let wishlist = JSON.parse(localStorage.getItem("luxe_wishlist")) || []
let currentFilter = "all"
let currentSlide = 0
let productsDisplayed = 8

// DOM Elements
const preloader = document.getElementById("preloader")
const header = document.getElementById("header")
const searchToggle = document.getElementById("searchToggle")
const searchOverlay = document.getElementById("searchOverlay")
const searchClose = document.getElementById("searchClose")
const searchInput = document.getElementById("searchInput")
const searchSuggestions = document.getElementById("searchSuggestions")
const cartToggle = document.getElementById("cartToggle")
const cartSidebar = document.getElementById("cartSidebar")
const cartOverlay = document.getElementById("cartOverlay")
const cartClose = document.getElementById("cartClose")
const cartCount = document.getElementById("cartCount")
const cartContent = document.getElementById("cartContent")
const cartFooter = document.getElementById("cartFooter")
const cartSubtotal = document.getElementById("cartSubtotal")
const cartTotal = document.getElementById("cartTotal")
const wishlistBtn = document.getElementById("wishlistBtn")
const wishlistCount = document.getElementById("wishlistCount")
const productsGrid = document.getElementById("productsGrid")
const filterTabs = document.querySelectorAll(".filter-tab")
const loadMoreBtn = document.getElementById("loadMoreBtn")
const newsletterForm = document.getElementById("newsletterForm")
const productModal = document.getElementById("productModal")
const modalOverlay = document.getElementById("modalOverlay")
const modalClose = document.getElementById("modalClose")
const modalBody = document.getElementById("modalBody")
const toastContainer = document.getElementById("toastContainer")
const heroPrev = document.getElementById("heroPrev")
const heroNext = document.getElementById("heroNext")
const heroIndicators = document.querySelectorAll(".indicator")
const menuToggle = document.getElementById("menuToggle")
const navMenu = document.getElementById("navMenu")

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

function initializeApp() {
  initializePreloader()
  initializeCustomCursor()
  initializeHeader()
  initializeHeroSlider()
  initializeSearch()
  initializeCart()
  initializeWishlist()
  initializeProducts()
  initializeFilters()
  initializeModal()
  initializeNewsletter()
  initializeScrollAnimations()
  initializeMobileMenu()
  updateCartCount()
  updateWishlistCount()
}

// Preloader
function initializePreloader() {
  setTimeout(() => {
    preloader.style.opacity = "0"
    setTimeout(() => {
      preloader.style.display = "none"
      document.body.classList.remove("no-scroll")
    }, 500)
  }, 2500)
}

// Custom Cursor
function initializeCustomCursor() {
  const cursor = document.querySelector(".cursor")
  const follower = document.querySelector(".cursor-follower")

  if (window.innerWidth > 768) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"

      setTimeout(() => {
        follower.style.left = e.clientX + "px"
        follower.style.top = e.clientY + "px"
      }, 100)
    })

    document.addEventListener("mousedown", () => {
      cursor.style.transform = "scale(0.8)"
      follower.style.transform = "scale(0.8)"
    })

    document.addEventListener("mouseup", () => {
      cursor.style.transform = "scale(1)"
      follower.style.transform = "scale(1)"
    })
  }
}

// Header
function initializeHeader() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })
}

// Hero Slider
function initializeHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide")

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index)
      const bg = slide.getAttribute("data-bg")
      if (bg) {
        slide.style.backgroundImage = `url(${bg})`
      }
    })

    heroIndicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index)
    })
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length
    showSlide(currentSlide)
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length
    showSlide(currentSlide)
  }

  heroNext.addEventListener("click", nextSlide)
  heroPrev.addEventListener("click", prevSlide)

  heroIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentSlide = index
      showSlide(currentSlide)
    })
  })

  // Initialize first slide
  showSlide(0)

  // Auto-play slider
  setInterval(nextSlide, 5000)
}

// Search Functionality
function initializeSearch() {
  searchToggle.addEventListener("click", openSearch)
  searchClose.addEventListener("click", closeSearch)
  searchInput.addEventListener("input", handleSearch)

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSearch()
    }
  })
}

function openSearch() {
  searchOverlay.classList.add("active")
  document.body.classList.add("no-scroll")
  setTimeout(() => {
    searchInput.focus()
  }, 300)
}

function closeSearch() {
  searchOverlay.classList.remove("active")
  document.body.classList.remove("no-scroll")
  searchInput.value = ""
  searchSuggestions.innerHTML = ""
}

function handleSearch() {
  const query = searchInput.value.toLowerCase().trim()

  if (query.length > 0) {
    const suggestions = products
      .filter((product) => product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query))
      .slice(0, 5)

    displaySearchSuggestions(suggestions)
  } else {
    searchSuggestions.innerHTML = ""
  }
}

function displaySearchSuggestions(suggestions) {
  if (suggestions.length > 0) {
    searchSuggestions.innerHTML = `
      <div class="suggestions-list">
        ${suggestions
          .map(
            (product) => `
          <div class="suggestion-item" onclick="selectProduct(${product.id})">
            <img src="${product.image}" alt="${product.name}">
            <div class="suggestion-details">
              <h4>${product.name}</h4>
              <p>$${product.price}</p>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    `
  }
}

function selectProduct(productId) {
  const product = products.find((p) => p.id === productId)
  if (product) {
    openProductModal(product)
    closeSearch()
  }
}

// Cart Management
function initializeCart() {
  cartToggle.addEventListener("click", openCart)
  cartClose.addEventListener("click", closeCart)
  cartOverlay.addEventListener("click", closeCart)
  renderCart()
}

function openCart() {
  cartSidebar.classList.add("active")
  cartOverlay.classList.add("active")
  document.body.classList.add("no-scroll")
}

function closeCart() {
  cartSidebar.classList.remove("active")
  cartOverlay.classList.remove("active")
  document.body.classList.remove("no-scroll")
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId)
  if (product) {
    const existingItem = cart.find((item) => item.id === productId)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }

    localStorage.setItem("luxe_cart", JSON.stringify(cart))
    updateCartCount()
    renderCart()
    showToast("Product added to cart!", "success")
  }
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId)
  localStorage.setItem("luxe_cart", JSON.stringify(cart))
  updateCartCount()
  renderCart()
  showToast("Product removed from cart", "warning")
}

function updateCartQuantity(productId, quantity) {
  const item = cart.find((item) => item.id === productId)
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      item.quantity = quantity
      localStorage.setItem("luxe_cart", JSON.stringify(cart))
      renderCart()
    }
  }
}

function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0)
  cartCount.textContent = count
  cartCount.classList.toggle("visible", count > 0)
}

function renderCart() {
  if (cart.length === 0) {
    cartContent.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-bag"></i>
        <h4>Your cart is empty</h4>
        <p>Add some products to get started</p>
      </div>
    `
    cartFooter.style.display = "none"
  } else {
    cartContent.innerHTML = cart
      .map(
        (item) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <p class="cart-item-price">$${item.price}</p>
          <div class="quantity-controls">
            <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
            <span>${item.quantity}</span>
            <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
          </div>
        </div>
        <button class="remove-item" onclick="removeFromCart(${item.id})">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `,
      )
      .join("")

    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`
    cartTotal.textContent = `$${subtotal.toFixed(2)}`
    cartFooter.style.display = "block"
  }
}

// Wishlist Management
function initializeWishlist() {
  wishlistBtn.addEventListener("click", () => {
    showToast("Wishlist feature coming soon!", "info")
  })
}

function addToWishlist(productId) {
  const product = products.find((p) => p.id === productId)
  if (product && !wishlist.find((item) => item.id === productId)) {
    wishlist.push(product)
    localStorage.setItem("luxe_wishlist", JSON.stringify(wishlist))
    updateWishlistCount()
    showToast("Added to wishlist!", "success")
  }
}

function removeFromWishlist(productId) {
  wishlist = wishlist.filter((item) => item.id !== productId)
  localStorage.setItem("luxe_wishlist", JSON.stringify(wishlist))
  updateWishlistCount()
  showToast("Removed from wishlist", "warning")
}

function updateWishlistCount() {
  const count = wishlist.length
  wishlistCount.textContent = count
  wishlistCount.classList.toggle("visible", count > 0)
}

// Product Management
function initializeProducts() {
  renderProducts()

  loadMoreBtn.addEventListener("click", () => {
    productsDisplayed += 4
    renderProducts()
  })
}

function initializeFilters() {
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      filterTabs.forEach((t) => t.classList.remove("active"))
      e.target.classList.add("active")

      currentFilter = e.target.getAttribute("data-filter")
      productsDisplayed = 8
      renderProducts()
    })
  })
}

function renderProducts() {
  const filteredProducts = getFilteredProducts()
  const displayProducts = filteredProducts.slice(0, productsDisplayed)

  productsGrid.innerHTML = displayProducts
    .map(
      (product) => `
    <div class="product-card fade-in" data-category="${product.category}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        <div class="product-actions">
          <button class="product-action" onclick="openProductModal(${JSON.stringify(product).replace(/"/g, "&quot;")})" title="Quick View">
            <i class="fas fa-eye"></i>
          </button>
          <button class="product-action" onclick="addToWishlist(${product.id})" title="Add to Wishlist">
            <i class="fas fa-heart"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${getCategoryName(product.category)}</div>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-rating">
          <div class="stars">${generateStars(product.rating)}</div>
          <span class="rating-text">(${product.reviews})</span>
        </div>
        <div class="product-price">
          <span class="current-price">$${product.price}</span>
          ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ""}
          ${product.originalPrice ? `<span class="discount">${Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</span>` : ""}
        </div>
        <button class="add-to-cart" onclick="addToCart(${product.id})">
          <i class="fas fa-shopping-cart"></i>
          Add to Cart
        </button>
      </div>
    </div>
  `,
    )
    .join("")

  loadMoreBtn.style.display = displayProducts.length < filteredProducts.length ? "block" : "none"

  // Trigger scroll animations
  observeElements()
}

function getFilteredProducts() {
  if (currentFilter === "all") {
    return products
  }
  return products.filter((product) => product.category === currentFilter)
}

function getCategoryName(category) {
  const categoryNames = {
    fashion: "Fashion",
    electronics: "Electronics",
    beauty: "Beauty",
    home: "Home & Living",
  }
  return categoryNames[category] || category
}

function generateStars(rating) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  let stars = ""

  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>'
  }

  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>'
  }

  const emptyStars = 5 - Math.ceil(rating)
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>'
  }

  return stars
}

// Product Modal
function initializeModal() {
  modalClose.addEventListener("click", closeProductModal)
  modalOverlay.addEventListener("click", closeProductModal)
}

function openProductModal(product) {
  modalBody.innerHTML = `
    <div class="modal-product">
      <div class="modal-product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="modal-product-info">
        <div class="product-category">${getCategoryName(product.category)}</div>
        <h2>${product.name}</h2>
        <div class="product-rating">
          <div class="stars">${generateStars(product.rating)}</div>
          <span class="rating-text">(${product.reviews} reviews)</span>
        </div>
        <p class="product-description">${product.description}</p>
        <div class="product-price">
          <span class="current-price">$${product.price}</span>
          ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ""}
          ${product.originalPrice ? `<span class="discount">${Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</span>` : ""}
        </div>
        <div class="modal-actions">
          <button class="btn btn-primary" onclick="addToCart(${product.id}); closeProductModal();">
            <i class="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
          <button class="btn btn-outline" onclick="addToWishlist(${product.id})">
            <i class="fas fa-heart"></i>
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  `

  productModal.classList.add("active")
  document.body.classList.add("no-scroll")
}

function closeProductModal() {
  productModal.classList.remove("active")
  document.body.classList.remove("no-scroll")
}

// Newsletter
function initializeNewsletter() {
  newsletterForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    const emailInput = e.target.querySelector('input[type="email"]')
    const email = emailInput.value

    if (!email) {
      showToast("Please enter your email address.", "warning")
      return
    }

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        showToast(data.message || "Thank you for subscribing!", "success")
        e.target.reset()
      } else {
        showToast(data.message || "Subscription failed.", "error")
      }
    } catch (err) {
      showToast("Something went wrong. Please try again.", "error")
      console.error(err)
    }
  })
}

// Mobile Menu
function initializeMobileMenu() {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    menuToggle.classList.toggle("active")
  })
}

// Scroll Animations
function initializeScrollAnimations() {
  observeElements()
}

function observeElements() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right").forEach((el) => {
    observer.observe(el)
  })
}

// Toast Notifications
function showToast(message, type = "info") {
  const toast = document.createElement("div")
  toast.className = `toast ${type}`
  toast.innerHTML = `
    <div class="toast-content">
      <i class="fas fa-${getToastIcon(type)}"></i>
      <span>${message}</span>
    </div>
  `

  toastContainer.appendChild(toast)

  setTimeout(() => {
    toast.classList.add("show")
  }, 100)

  setTimeout(() => {
    toast.classList.remove("show")
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast)
      }
    }, 300)
  }, 3000)
}

function getToastIcon(type) {
  const icons = {
    success: "check-circle",
    error: "exclamation-circle",
    warning: "exclamation-triangle",
    info: "info-circle",
  }
  return icons[type] || "info-circle"
}

// Global Functions
window.addToCart = addToCart
window.removeFromCart = removeFromCart
window.updateCartQuantity = updateCartQuantity
window.addToWishlist = addToWishlist
window.removeFromWishlist = removeFromWishlist
window.openProductModal = openProductModal
window.closeProductModal = closeProductModal
window.selectProduct = selectProduct

// Keyboard Navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCart()
    closeProductModal()
    closeSearch()
  }
})

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

console.log("🚀 LUXE E-commerce loaded successfully!")

