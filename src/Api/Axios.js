const users = [{ _id: 'u-osama-1', name: 'Osama', email: 'osama@gmail.com', password: '123456' }]
const tokens = {}

// Function to ensure default user is available
const ensureDefaultUser = () => {
  if (!localStorage.getItem('user')) {
    const defaultUser = users[0]; // Use first user as default
    localStorage.setItem('user', JSON.stringify(defaultUser));
    localStorage.setItem('token', 'mock-jwt-osama');
    // Also set up the token mapping
    tokens['mock-jwt-osama'] = defaultUser._id;
  }
};

// Function to auto-login default user
const autoLoginDefaultUser = () => {
  const defaultUser = users[0];
  const token = 'mock-jwt-osama';
  
  // Set up user data
  localStorage.setItem('user', JSON.stringify({
    _id: defaultUser._id,
    name: defaultUser.name,
    email: defaultUser.email
  }));
  localStorage.setItem('token', token);
  
  // Set up token mapping
  tokens[token] = defaultUser._id;
  
  console.log('Auto-logged in default user:', defaultUser.name);
};

// Call this function when the module loads
ensureDefaultUser();
autoLoginDefaultUser();
const categories = [
  { _id: 'c-men', name: 'Men', image: 'https://images.unsplash.com/photo-1551029506-0804b1b5035f?w=800&q=80' },
  { _id: 'c-women', name: 'Women', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80' },
  { _id: 'c-kids', name: 'Kids', image: 'https://images.unsplash.com/photo-1497636571219-73f1e39d48bb?w=800&q=80' },
  { _id: 'c-shoes', name: 'Shoes', image: 'https://images.unsplash.com/photo-1520975954732-35dd22872165?w=800&q=80' },
  { _id: 'c-accessories', name: 'Accessories', image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288751?w=800&q=80' },
  { _id: 'c-electronics', name: 'Electronics', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80' }
]
const brands = [
  { _id: 'b-zara', name: 'Zara', image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg' },
  { _id: 'b-hm', name: 'H&M', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/H%26M-Logo.svg' },
  { _id: 'b-nike', name: 'Nike', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
  { _id: 'b-adidas', name: 'Adidas', image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' },
  { _id: 'b-levis', name: "Levi's", image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Levi%27s_logo.svg' },
  { _id: 'b-gucci', name: 'Gucci', image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Gucci_logo.svg' }
]
const products = [
  {
    _id: 'p-1',
    title: 'Nike Air Max 270',
    price: 120,
    ratingsQuantity: 34,
    imageCover: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'
    ],
    description: 'Comfortable running shoes with breathable mesh and cushioned sole.',
    category: 'Shoes',
    size: '42',
    condition: 'New',
    colors: ['#000000', '#16a085', '#E52C2C'],
    brand: 'Nike'
  },
  {
    _id: 'p-2',
    title: 'Adidas Ultraboost',
    price: 140,
    ratingsQuantity: 18,
    imageCover: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'
    ],
    description: 'High-performance sneakers designed for comfort and speed.',
    category: 'Shoes',
    size: '43',
    condition: 'Good',
    colors: ['#2c3e50', '#8e44ad', '#16a085']
  },
  {
    _id: 'p-3',
    title: 'Classic Denim Jacket',
    price: 90,
    ratingsQuantity: 57,
    imageCover: 'https://images.unsplash.com/photo-1520975954732-35dd22872165?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1520975954732-35dd22872165?w=800&q=80'
    ],
    description: 'Classic denim jacket in perfect condition.',
    category: 'Men',
    size: 'L',
    condition: 'Excellent',
    colors: ['#2980b9', '#34495e', '#95a5a6'],
    brand: "Levi's"
  },
  {
    _id: 'p-4',
    title: 'Zara Summer Dress',
    price: 65,
    ratingsQuantity: 32,
    imageCover: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80'
    ],
    description: 'Lightweight summer dress perfect for warm weather.',
    category: 'Women',
    size: 'M',
    condition: 'Very Good',
    colors: ['#8e44ad', '#f1c40f', '#e67e22'],
    brand: 'Zara'
  },
  {
    _id: 'p-5',
    title: 'Converse Chuck Taylor',
    price: 75,
    ratingsQuantity: 89,
    imageCover: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80'
    ],
    description: 'Classic canvas sneakers, perfect casual footwear.',
    category: 'Shoes',
    size: '42',
    condition: 'New',
    colors: ['#000000', '#2ecc71', '#3498db'],
    brand: 'Converse'
  },
  {
    _id: 'p-6',
    title: 'Women Summer Dress',
    price: 65,
    ratingsQuantity: 23,
    imageCover: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80'
    ],
    description: 'Lightweight dress perfect for summer.',
    category: 'Women',
    size: 'M',
    condition: 'Good',
    colors: ['#c0392b', '#f39c12', '#1abc9c']
  },
  {
    _id: 'p-7',
    title: 'Vans Old Skool',
    price: 65,
    ratingsQuantity: 45,
    imageCover: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80'
    ],
    description: 'Classic skate shoes with iconic side stripe.',
    category: 'Shoes',
    size: '42',
    condition: 'Good',
    colors: ['#27ae60', '#2980b9', '#8e44ad'],
    brand: 'Vans'
  },
  {
    _id: 'p-8',
    title: 'H&M Cotton T-Shirt',
    price: 25,
    ratingsQuantity: 42,
    imageCover: 'https://images.unsplash.com/photo-1520975652441-e1e2d6e60000?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1520975652441-e1e2d6e60000?w=800&q=80'
    ],
    description: 'Premium cotton T-shirt with modern fit.',
    category: 'Men',
    size: 'M',
    condition: 'Good',
    colors: ['#2c3e50', '#e74c3c', '#f1c40f'],
    brand: 'H&M'
  },
  {
    _id: 'p-9',
    title: 'Nike Air Force 1',
    price: 90,
    ratingsQuantity: 68,
    imageCover: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'
    ],
    description: 'Iconic basketball shoes with timeless design.',
    category: 'Shoes',
    size: '43',
    condition: 'New',
    colors: ['#ffffff', '#000000', '#2c3e50'],
    brand: 'Nike'
  },
  {
    _id: 'p-10',
    title: 'Running Shorts',
    price: 30,
    ratingsQuantity: 17,
    imageCover: 'https://picsum.photos/id/1011/800/800',
    images: [
      'https://picsum.photos/id/1011/800/800'
    ],
    description: 'Lightweight breathable shorts ideal for running.',
    category: 'Men',
    size: 'M',
    condition: 'Good',
    colors: ['#3498db', '#2ecc71', '#34495e']
  },
  {
    _id: 'p-11',
    title: 'Leather Wallet',
    price: 45,
    ratingsQuantity: 22,
    imageCover: 'https://picsum.photos/id/1060/800/800',
    images: [
      'https://picsum.photos/id/1060/800/800'
    ],
    description: 'Compact leather wallet with multiple card slots.',
    category: 'Accessories',
    size: 'One Size',
    condition: 'Excellent',
    colors: ['#8e44ad', '#2c3e50', '#7f8c8d']
  },
  {
    _id: 'p-12',
    title: 'Women Sneakers',
    price: 85,
    ratingsQuantity: 31,
    imageCover: 'https://picsum.photos/id/1080/800/800',
    images: [
      'https://picsum.photos/id/1080/800/800'
    ],
    description: 'Comfortable sneakers suitable for everyday wear.',
    category: 'Shoes',
    size: '39',
    condition: 'Very Good',
    colors: ['#e67e22', '#f1c40f', '#2c3e50']
  },
  {
    _id: 'p-13',
    title: 'Kids Sneakers',
    price: 40,
    ratingsQuantity: 19,
    imageCover: 'https://picsum.photos/id/1025/800/800',
    images: [
      'https://picsum.photos/id/1025/800/800'
    ],
    description: 'Durable sneakers designed for kids.',
    category: 'Kids',
    size: 'XS',
    condition: 'Good',
    colors: ['#27ae60', '#2980b9', '#8e44ad']
  },
  {
    _id: 'p-14',
    title: 'Smartwatch Pro',
    price: 199,
    ratingsQuantity: 54,
    imageCover: 'https://picsum.photos/id/1044/800/800',
    images: [
      'https://picsum.photos/id/1044/800/800'
    ],
    description: 'Smartwatch with fitness tracking and notifications.',
    category: 'Electronics',
    size: 'One Size',
    condition: 'New',
    colors: ['#000000', '#16a085', '#3498db']
  },
  {
    _id: 'p-15',
    title: 'Formal Shirt',
    price: 55,
    ratingsQuantity: 26,
    imageCover: 'https://picsum.photos/id/1027/800/800',
    images: [
      'https://picsum.photos/id/1027/800/800'
    ],
    description: 'Classic formal shirt suitable for office wear.',
    category: 'Men',
    size: 'XL',
    condition: 'Excellent',
    colors: ['#ffffff', '#2c3e50', '#95a5a6']
  },
  {
    _id: 'p-16',
    title: 'Women Handbag',
    price: 150,
    ratingsQuantity: 37,
    imageCover: 'https://picsum.photos/id/1050/800/800',
    images: [
      'https://picsum.photos/id/1050/800/800'
    ],
    description: 'Elegant handbag with spacious compartments.',
    category: 'Accessories',
    size: 'One Size',
    condition: 'Very Good',
    colors: ['#8e44ad', '#f1c40f', '#e67e22']
  },
  {
    _id: 'p-17',
    title: 'Adidas Hoodie',
    price: 70,
    ratingsQuantity: 33,
    imageCover: 'https://picsum.photos/id/1035/800/800',
    images: [
      'https://picsum.photos/id/1035/800/800'
    ],
    description: 'Warm hoodie perfect for casual wear.',
    category: 'Men',
    size: 'L',
    condition: 'Good',
    colors: ['#2c3e50', '#8e44ad', '#1abc9c']
  },
  {
    _id: 'p-18',
    title: 'Nike Joggers',
    price: 65,
    ratingsQuantity: 29,
    imageCover: 'https://picsum.photos/id/1033/800/800',
    images: [
      'https://picsum.photos/id/1033/800/800'
    ],
    description: 'Comfortable joggers for workouts and daily wear.',
    category: 'Men',
    size: 'M',
    condition: 'Excellent',
    colors: ['#000000', '#95a5a6', '#16a085']
  },
  {
    _id: 'p-19',
    title: 'Summer Hat',
    price: 25,
    ratingsQuantity: 14,
    imageCover: 'https://picsum.photos/id/1032/800/800',
    images: [
      'https://picsum.photos/id/1032/800/800'
    ],
    description: 'Lightweight hat for sunny days.',
    category: 'Accessories',
    size: 'One Size',
    condition: 'New',
    colors: ['#f1c40f', '#e67e22', '#2c3e50']
  },
  {
    _id: 'p-20',
    title: 'Bluetooth Earbuds',
    price: 89,
    ratingsQuantity: 45,
    imageCover: 'https://picsum.photos/id/1062/800/800',
    images: [
      'https://picsum.photos/id/1062/800/800'
    ],
    description: 'Wireless earbuds with noise cancellation.',
    category: 'Electronics',
    size: 'One Size',
    condition: 'New',
    colors: ['#000000', '#2ecc71', '#3498db']
  }
]
const reviews = {
  'p-1': [
    { _id: 'r-1', user: { name: 'Ahmed' }, ratings: 5, title: 'Excellent shoes!', description: 'Very comfortable and stylish. Perfect for running.' },
    { _id: 'r-2', user: { name: 'Sara' }, ratings: 4, title: 'Good quality', description: 'Nice design but runs a bit small.' },
    { _id: 'r-3', user: { name: 'Mohamed' }, ratings: 5, title: 'Love them!', description: 'Best running shoes I ever had.' }
  ],
  'p-2': [
    { _id: 'r-4', user: { name: 'Laila' }, ratings: 5, title: 'Amazing!', description: 'Super comfortable and great for workouts.' },
    { _id: 'r-5', user: { name: 'Omar' }, ratings: 4, title: 'Good value', description: 'Quality is great for the price.' }
  ],
  'p-3': [
    { _id: 'r-6', user: { name: 'Fatma' }, ratings: 5, title: 'Perfect fit', description: 'True to size and very comfortable.' },
    { _id: 'r-7', user: { name: 'Hassan' }, ratings: 3, title: 'Average', description: 'Decent jeans but nothing special.' }
  ]
}
const favoritesByUser = {}
const cartsByUser = {
  'u-osama-1': {
    items: [
      { _id: 'p-1', title: 'Nike Air Max', price: 120, quantity: 2, color: '#000000', imageCover: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80' },
      { _id: 'p-2', title: 'Adidas Ultraboost', price: 140, quantity: 1, color: '#2c3e50', imageCover: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80' },
      { _id: 'p-3', title: 'Classic T-Shirt', price: 25, quantity: 3, color: '#000000', imageCover: 'https://images.unsplash.com/photo-1520975954732-35dd22872165?w=800&q=80' }
    ],
    coupon: null
  },
  'u-ahmed-2': {
    items: [
      { _id: 'p-4', title: 'Smartphone XYZ', price: 500, quantity: 1, color: '#000000', imageCover: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80' },
      { _id: 'p-5', title: 'Women Summer Dress', price: 65, quantity: 2, color: '#c0392b', imageCover: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80' }
    ],
    coupon: { _id: 'cp-1', code: 'SAVE10', type: 'percent', value: 10 }
  }
}
const coupons = [
  { _id: 'cp-1', code: 'SAVE10', type: 'percent', value: 10, image: 'https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/coupon1.png', description: 'Save 10% on your order', expiry: '2024-12-31' },
  { _id: 'cp-2', code: 'NEW15', type: 'percent', value: 15, image: 'https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/coupon2.png', description: '15% off for new customers', expiry: '2024-12-25' },
  { _id: 'cp-3', code: 'FLAT50', type: 'flat', value: 50, image: 'https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/coupon3.png', description: '50 EGP off on orders above 200', expiry: '2024-12-20' },
  { _id: 'cp-4', code: 'WELCOME20', type: 'percent', value: 20, image: 'https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/coupon4.png', description: 'Welcome offer - 20% off', expiry: '2024-12-15' }
]
const orders = [
  {
    _id: 'ord-1',
    orderNumber: '#32982',
    user: { name: 'Ahmed Mohamed', email: 'ahmed@gmail.com' },
    items: [
      { title: 'Nike Air Max', price: 120, quantity: 2, color: '#000000', imageCover: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80' },
      { title: 'Classic T-Shirt', price: 25, quantity: 1, color: '#000000', imageCover: 'https://images.unsplash.com/photo-1520975652441-e1e2d6e60000?w=800&q=80' }
    ],
    totalPrice: 265,
    status: 'pending',
    createdAt: '2024-12-01T10:30:00Z'
  },
  {
    _id: 'ord-2',
    orderNumber: '#32983',
    user: { name: 'Sara Ali', email: 'sara@gmail.com' },
    items: [
      { title: 'Adidas Ultraboost', price: 140, quantity: 1, color: '#2c3e50', imageCover: 'https://images.unsplash.com/photo-1528701800489-20be3c546a76?w=800&q=80' }
    ],
    totalPrice: 140,
    status: 'delivered',
    createdAt: '2024-12-02T14:15:00Z'
  },
  {
    _id: 'ord-3',
    orderNumber: '#32984',
    user: { name: 'Mohamed Hassan', email: 'mohamed@gmail.com' },
    items: [
      { title: 'Women Summer Dress', price: 65, quantity: 2, color: '#c0392b', imageCover: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80' }
    ],
    totalPrice: 130,
    status: 'processing',
    createdAt: '2024-12-03T09:45:00Z'
  }
]
function normalize(url) {
  const u = url.replace(/^https?:\/\/[^/]+/, '')
  return u.startsWith('/') ? u.slice(1) : u
}
function getTokenUserId(config) {
  const auth = config && config.headers && config.headers.Authorization
  if (!auth) return 'u-osama-1'
  const t = auth.replace('Bearer ', '')
  return tokens[t] || 'u-osama-1'
}
function calcTotal(items) {
  return items.reduce((s, it) => s + (it.price || 0) * (it.quantity || 1), 0)
}
function success(data) {
  return Promise.resolve({ data })
}
const BaseUrl = {
  get(url, config) {
    const path = normalize(url)
    if (path.startsWith('api/v1/category')) {
      const q = path.split('?')[1] || ''
      const params = new URLSearchParams(q)
      const limit = parseInt(params.get('limit') || '6')
      const page = parseInt(params.get('page') || '1')
      const start = (page - 1) * limit
      const slice = categories.slice(start, start + limit)
      const totalPages = Math.max(1, Math.ceil(categories.length / limit))
      return success({ Data: slice, PaginationCategory: { totalPages } })
    }
    if (path === 'api/v1/brand') {
      return success({ data: brands })
    }
    if (path === 'api/v1/prouduct') {
      return success({ Data: products })
    }
    if (path.startsWith('api/v1/prouduct/')) {
      const parts = path.split('/')
      if (parts[2] === 'category') {
        const cat = decodeURIComponent(parts[3])
        const list = products.filter(p => String(p.category) === String(cat))
        return success({ products: list })
      }
      const id = parts[2]
      const p = products.find(i => i._id === id)
      return success({ Data: p || null })
    }
    if (path.startsWith('api/v1/prouduct') && path.endsWith('/reviews')) {
      const id = path.split('/')[2]
      const list = reviews[id] || []
      return success({ data: { Data: list } })
    }
    if (path.startsWith('api/v1/favorite/favorites/')) {
      const userId = path.split('/').pop()
      const favs = favoritesByUser[userId] || []
      return success({ favorites: favs })
    }
    if (path.startsWith('api/v1/Carts/cart/')) {
      const userId = path.split('/').pop()
      const cart = cartsByUser[userId] || { items: [], coupon: null }
      const total = calcTotal(cart.items)
      const cp = cart.coupon
      let totalAfter = total
      if (cp) {
        if (cp.type === 'percent') totalAfter = Math.max(0, Math.round(total * (1 - cp.value / 100)))
        else totalAfter = Math.max(0, total - cp.value)
      }
      return success({ data: { cartItems: cart.items, totalCartPrice: total, totalPriceAfterDiscount: totalAfter } })
    }
    if (path === 'api/v1/Coupons') {
      return success({ data: coupons })
    }
    if (path === 'api/v1/orders/admin') {
      return success({ data: orders })
    }
    if (path.startsWith('api/v1/orders/')) {
      const orderId = path.split('/').pop()
      const order = orders.find(o => o._id === orderId)
      return success({ data: order || null })
    }
    return success({})
  },
  post(url, body, config) {
    const path = normalize(url)
    if (path === 'api/v1/userSecurity/login') {
      const { email, password } = body || {}
      const u = users.find(x => x.email === email && x.password === password)
      if (!u) return success({ message: 'invalid' })
      const jwt = 'mock-jwt-osama'
      tokens[jwt] = u._id
      return success({ jwt, user: { _id: u._id, name: u.name, email: u.email } })
    }
    if (path === 'api/v1/userSecurity/signup') {
      const { email, password, name } = body || {}
      const exists = users.find(x => x.email === email)
      if (exists) return success({ message: 'exists' })
      const id = 'u-' + Math.random().toString(36).slice(2)
      users.push({ _id: id, email, password, name: name || 'User' })
      return success({ user: { _id: id, email, name: name || 'User' } })
    }
    if (path === 'api/v1/favorite/favorites/add') {
      const { userId, productId } = body || {}
      const favs = favoritesByUser[userId] || []
      const p = products.find(x => x._id === productId)
      if (p) favs.push({ productId: p })
      favoritesByUser[userId] = favs
      return success({ favorites: favs })
    }
    if (path.startsWith('api/v1/Review/') && path.endsWith('/review')) {
      const id = path.split('/')[2]
      const list = reviews[id] || []
      const token = config?.headers?.Authorization?.replace('Bearer ', '')
      const userId = tokens[token]
      const user = users.find(u => u._id === userId)
      const newReview = {
        _id: `r-${Date.now()}`,
        user: { name: user?.name || body.user?.name || 'Anonymous' },
        ratings: body.ratings || 0,
        title: body.title || '',
        description: body.description || body.title || '',
        createdAt: body.createdAt || new Date().toISOString()
      }
      list.push(newReview)
      reviews[id] = list
      return success({ data: list })
    }
    if (path.startsWith('api/v1/Carts/cart/')) {
      const productId = path.split('/').pop()
      const userId = getTokenUserId(config)
      const cart = cartsByUser[userId] || { items: [], coupon: null }
      const p = products.find(x => x._id === productId)
      if (p) {
        const existing = cart.items.find(i => i._id === p._id)
        if (existing) existing.quantity = (existing.quantity || 1) + 1
        else cart.items.push({ ...p, quantity: 1, color: body && body.color ? body.color : '#000000' })
      }
      cartsByUser[userId] = cart
      return success({ cartItems: cart.items })
    }
    if (path === 'api/v1/Carts/applyCoupon') {
      const userId = getTokenUserId(config)
      const cart = cartsByUser[userId] || { items: [], coupon: null }
      const code = body && body.coupon
      const cp = coupons.find(c => c.code.toUpperCase() === String(code || '').toUpperCase())
      cart.coupon = cp || null
      cartsByUser[userId] = cart
      const total = calcTotal(cart.items)
      let totalAfter = total
      if (cart.coupon) {
        if (cart.coupon.type === 'percent') totalAfter = Math.max(0, Math.round(total * (1 - cart.coupon.value / 100)))
        else totalAfter = Math.max(0, total - cart.coupon.value)
      }
      return success({ totalCartPrice: total, totalPriceAfterDiscount: totalAfter })
    }
    if (path === 'api/v1/Coupons') {
      const tokenUserId = getTokenUserId(config)
      return success({ data: coupons, user: tokenUserId })
    }
    if (path === 'api/v1/categories') {
      return success({ data: categories })
    }
    if (path === 'api/v1/prouduct') {
      return success({ Data: products })
    }
    return success({})
  },
  patch(url, body, config) {
    const path = normalize(url)
    if (path.startsWith('api/v1/Carts/cart/deleteupdate/')) {
      const id = path.split('/').pop()
      const userId = getTokenUserId(config)
      const cart = cartsByUser[userId] || { items: [], coupon: null }
      const it = cart.items.find(i => i._id === id)
      if (it && body && typeof body.quantity !== 'undefined') it.quantity = Math.max(1, Number(body.quantity))
      cartsByUser[userId] = cart
      return success({ data: { cartItems: cart.items } })
    }
    if (path === 'api/v1/Coupons') {
      const newCoupon = {
        _id: `cp-${Date.now()}`,
        code: body.name?.toUpperCase() || 'NEWCOUPON',
        type: 'percent',
        value: Number(body.discount) || 10,
        expire: body.expire || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        image: 'https://raw.githubusercontent.com/bakrgit/08-ecommerce-design-only/refs/heads/master/src/images/coupon-default.png',
        description: `Discount ${body.discount || 10}% off`
      }
      coupons.push(newCoupon)
      return success({ data: newCoupon, message: 'Coupon created successfully' })
    }
    if (path.startsWith('api/v1/Coupons/')) {
      return success({ data: coupons })
    }
    return success({})
  },
  delete(url, config) {
    const path = normalize(url)
    if (path.startsWith('api/v1/Review/')) {
      const id = path.split('/').pop()
      Object.keys(reviews).forEach(pid => {
        reviews[pid] = (reviews[pid] || []).filter((r, idx) => String(idx) !== String(id))
      })
      return success({})
    }
    if (path.startsWith('api/v1/favorite/favorites/remove')) {
      const data = config && config.data
      if (data && data.userId && data.productId) {
        const favs = favoritesByUser[data.userId] || []
        favoritesByUser[data.userId] = favs.filter(f => f.productId && f.productId._id !== data.productId)
        return success({ favorites: favoritesByUser[data.userId] })
      }
      return success({})
    }
    if (path.startsWith('api/v1/Carts/cart/deleteupdate/')) {
      const id = path.split('/').pop()
      const userId = getTokenUserId(config)
      const cart = cartsByUser[userId] || { items: [], coupon: null }
      cart.items = cart.items.filter(i => i._id !== id)
      cartsByUser[userId] = cart
      return success({})
    }
    if (path === 'api/v1/Carts/delete/all') {
      const userId = getTokenUserId(config)
      cartsByUser[userId] = { items: [], coupon: null }
      return success({})
    }
    if (path.startsWith('api/v1/Coupons/')) {
      return success({ data: coupons })
    }
    return success({})
  }
}
export default BaseUrl
