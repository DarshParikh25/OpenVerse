export const blogData = [
  {
    id: 1,
    title: "Future of Web Development: Trends to Watch in 2025",
    slug: "future-web-development-trends-2025",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b048?w=150&h=150&fit=crop&crop=face",
      bio: "Senior Frontend Developer with 8 years of experience in modern web technologies",
      social: {
        twitter: "@sarahchen_dev",
        github: "sarahchen",
        linkedin: "sarahchen-dev"
      }
    },
    publishedAt: "2025-01-15T10:00:00Z",
    updatedAt: "2025-01-15T10:00:00Z",
    category: "Technology",
    tags: ["web development", "frontend", "trends", "2025"],
    readTime: "8 min read",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    excerpt: "Explore the cutting-edge technologies and methodologies that will shape web development in 2025, from AI-powered tools to advanced frameworks.",
    content: `# The Future of Web Development: Trends to Watch in 2025

Web development continues to evolve at a breakneck pace, and 2025 promises to be a transformative year for developers and the industry as a whole. As we stand on the cusp of new technological breakthroughs, let's explore the trends that will define the future of web development.

## 1. AI-Powered Development Tools

Artificial Intelligence is revolutionizing how we write code. Tools like GitHub Copilot and ChatGPT have already changed the development landscape, but 2025 will see even more sophisticated AI assistants that can:

- Generate entire application architectures
- Automatically optimize performance
- Suggest security improvements
- Create responsive designs from simple sketches

The integration of AI into IDEs will become seamless, making developers more productive than ever before.

## 2. WebAssembly (WASM) Goes Mainstream

WebAssembly is finally reaching its full potential. In 2025, we'll see:

- More languages compiling to WASM
- Better debugging tools
- Improved performance for complex applications
- Desktop-quality applications running in browsers

This technology will bridge the gap between web and native applications, offering near-native performance for web-based software.

## 3. Serverless Architecture Evolution

The serverless paradigm is maturing, with new patterns emerging:

- **Edge Functions**: Processing at the network edge for ultra-low latency
- **Hybrid Serverless**: Combining serverless with traditional infrastructure
- **Serverless Databases**: Fully managed, auto-scaling database solutions

## 4. Progressive Web Apps (PWAs) 2.0

PWAs are getting significant upgrades:

- Better offline capabilities
- Enhanced push notifications
- Improved app-like experiences
- Better integration with device features

## 5. Micro-frontends Architecture

Large applications are being broken down into smaller, manageable pieces:

- Independent team workflows
- Technology diversity within single applications
- Easier maintenance and updates
- Better scalability

## Conclusion

The web development landscape in 2025 will be characterized by increased automation, better performance, and more sophisticated architectures. Developers who embrace these trends will build faster, more reliable, and more user-friendly applications.

Stay curious, keep learning, and remember that the best developers are those who adapt to change while maintaining a solid foundation in core principles.`,
    likes: 245,
    views: 3420,
    comments: 18,
    status: "published"
  },
  {
    id: 2,
    title: "Building Scalable APIs with Node.js and Express",
    slug: "building-scalable-apis-nodejs-express",
    author: {
      name: "Michael Rodriguez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bio: "Backend Engineer specializing in Node.js and distributed systems",
      social: {
        twitter: "@mikeDev",
        github: "mrodriguez",
        linkedin: "michael-rodriguez-dev"
      }
    },
    publishedAt: "2025-01-10T14:30:00Z",
    updatedAt: "2025-01-12T09:15:00Z",
    category: "Backend",
    tags: ["nodejs", "express", "api", "scalability"],
    readTime: "12 min read",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    excerpt: "Learn how to build robust, scalable APIs using Node.js and Express with best practices for performance, security, and maintainability.",
    content: `# Building Scalable APIs with Node.js and Express

Creating scalable APIs is crucial for modern web applications. In this comprehensive guide, we'll explore how to build robust, performant APIs using Node.js and Express framework.

## Setting Up Your Project Structure

A well-organized project structure is the foundation of scalable applications:

\`\`\`
project/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   └── utils/
├── tests/
├── config/
└── docs/
\`\`\`

## Essential Middleware for Scalability

### 1. Rate Limiting

Implement rate limiting to prevent abuse:

\`\`\`javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

app.use('/api/', limiter);
\`\`\`

### 2. Request Validation

Use libraries like Joi or express-validator:

\`\`\`javascript
const { body, validationResult } = require('express-validator');

app.post('/users', [
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Process valid request
});
\`\`\`

## Database Optimization

### Connection Pooling

Use connection pooling for database efficiency:

\`\`\`javascript
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
\`\`\`

### Caching Strategy

Implement Redis for caching:

\`\`\`javascript
const redis = require('redis');
const client = redis.createClient();

const cacheMiddleware = async (req, res, next) => {
  const key = req.originalUrl;
  const cached = await client.get(key);
  
  if (cached) {
    return res.json(JSON.parse(cached));
  }
  
  res.sendResponse = res.json;
  res.json = (body) => {
    client.setex(key, 3600, JSON.stringify(body));
    res.sendResponse(body);
  };
  
  next();
};
\`\`\`

## Error Handling

Implement centralized error handling:

\`\`\`javascript
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: 'Validation failed' });
  }
  
  res.status(500).json({ error: 'Internal server error' });
};

app.use(errorHandler);
\`\`\`

## Performance Monitoring

Use tools like New Relic or custom monitoring:

\`\`\`javascript
const responseTime = require('response-time');

app.use(responseTime((req, res, time) => {
  console.log(\`\${req.method} \${req.url} - \${time}ms\`);
}));
\`\`\`

## Security Best Practices

1. **Helmet.js** for security headers
2. **CORS** configuration
3. **JWT** for authentication
4. **Input sanitization**
5. **HTTPS** enforcement

## Testing Strategy

Implement comprehensive testing:

\`\`\`javascript
const request = require('supertest');
const app = require('../app');

describe('GET /api/users', () => {
  it('should return all users', async () => {
    const res = await request(app)
      .get('/api/users')
      .expect(200);
    
    expect(res.body).toHaveProperty('users');
  });
});
\`\`\`

## Conclusion

Building scalable APIs requires careful planning, proper architecture, and attention to performance. By following these best practices and implementing robust error handling, caching, and monitoring, you can create APIs that handle growth gracefully.

Remember to continuously monitor your API's performance and optimize based on real-world usage patterns.`,
    likes: 189,
    views: 2847,
    comments: 23,
    status: "published"
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Each",
    slug: "css-grid-vs-flexbox-when-to-use",
    author: {
      name: "Emily Johnson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      bio: "UI/UX Designer and Frontend Developer with expertise in modern CSS",
      social: {
        twitter: "@emilydesigns",
        github: "emilyjohnson",
        linkedin: "emily-johnson-design"
      }
    },
    publishedAt: "2025-01-08T09:00:00Z",
    updatedAt: "2025-01-08T09:00:00Z",
    category: "CSS",
    tags: ["css", "grid", "flexbox", "layout"],
    readTime: "6 min read",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    excerpt: "Understanding the differences between CSS Grid and Flexbox will help you choose the right layout method for your projects.",
    content: `# CSS Grid vs Flexbox: When to Use Each

CSS Grid and Flexbox are two powerful layout systems that have revolutionized web design. While they can sometimes achieve similar results, understanding their strengths and ideal use cases will make you a more effective developer.

## Understanding the Fundamentals

### Flexbox: One-Dimensional Layout

Flexbox is designed for one-dimensional layouts - either rows or columns. It excels at:

- Distributing space along a single axis
- Aligning items within a container
- Creating flexible, responsive components

### CSS Grid: Two-Dimensional Layout

CSS Grid handles two-dimensional layouts - both rows and columns simultaneously. It's perfect for:

- Complex page layouts
- Overlapping elements
- Precise positioning control

## When to Use Flexbox

### 1. Navigation Bars

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 2rem;
}
\`\`\`

### 2. Card Components

\`\`\`css
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-content {
  flex: 1;
}

.card-actions {
  margin-top: auto;
}
\`\`\`

### 3. Centering Content

\`\`\`css
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
\`\`\`

## When to Use CSS Grid

### 1. Page Layouts

\`\`\`css
.page-layout {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

### 2. Image Galleries

\`\`\`css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
\`\`\`

### 3. Complex Forms

\`\`\`css
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.full-width {
  grid-column: 1 / -1;
}
\`\`\`

## Combining Both: The Power Duo

Often, the best approach is using both together:

\`\`\`css
/* Grid for overall layout */
.page {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
}

/* Flexbox for component internals */
.article-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

## Decision Framework

### Choose Flexbox When:
- Working with a single dimension (row or column)
- Creating flexible components
- Aligning items within containers
- Building navigation menus
- Centering content

### Choose CSS Grid When:
- Creating complex two-dimensional layouts
- Designing page-level structures
- Overlapping elements are needed
- Precise positioning is required
- Building responsive grids

## Browser Support and Fallbacks

Both technologies have excellent browser support, but consider fallbacks for older browsers:

\`\`\`css
.layout {
  /* Fallback */
  display: block;
  
  /* Modern browsers */
  display: grid;
  grid-template-columns: 1fr 1fr;
}
\`\`\`

## Conclusion

CSS Grid and Flexbox are complementary technologies, not competitors. Grid excels at page-level layouts and two-dimensional designs, while Flexbox shines for component-level layouts and one-dimensional arrangements.

The key is understanding their strengths and using them appropriately. Start with Grid for your overall page structure, then use Flexbox for the components within that structure.

Master both, and you'll have the tools to create any layout you can imagine!`,
    likes: 312,
    views: 4521,
    comments: 34,
    status: "published"
  },
  {
    id: 4,
    title: "Getting Started with React Hooks: A Comprehensive Guide",
    slug: "getting-started-react-hooks-guide",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "React Developer and Technical Writer passionate about modern JavaScript",
      social: {
        twitter: "@davidkim_js",
        github: "davidkim",
        linkedin: "david-kim-react"
      }
    },
    publishedAt: "2025-01-05T16:45:00Z",
    updatedAt: "2025-01-06T10:30:00Z",
    category: "React",
    tags: ["react", "hooks", "javascript", "frontend"],
    readTime: "10 min read",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    excerpt: "Master React Hooks with this comprehensive guide covering useState, useEffect, and advanced patterns for modern React development.",
    content: `# Getting Started with React Hooks: A Comprehensive Guide

React Hooks revolutionized how we write React components, making functional components more powerful and eliminating the need for class components in most cases. This guide will take you through everything you need to know about React Hooks.

## What Are React Hooks?

Hooks are functions that let you "hook into" React features from functional components. They allow you to use state and other React features without writing a class component.

## Rules of Hooks

Before diving in, remember these essential rules:

1. **Only call Hooks at the top level** - Don't call Hooks inside loops, conditions, or nested functions
2. **Only call Hooks from React functions** - Call them from React functional components or custom Hooks

## useState: Managing State

The most fundamental Hook for managing component state:

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### Working with Objects and Arrays

\`\`\`javascript
function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });

  const updateUser = (field, value) => {
    setUser(prevUser => ({
      ...prevUser,
      [field]: value
    }));
  };

  return (
    <form>
      <input
        value={user.name}
        onChange={(e) => updateUser('name', e.target.value)}
        placeholder="Name"
      />
      <input
        value={user.email}
        onChange={(e) => updateUser('email', e.target.value)}
        placeholder="Email"
      />
    </form>
  );
}
\`\`\`

## useEffect: Side Effects

useEffect handles side effects in functional components:

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users');
        const userData = await response.json();
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

### Cleanup with useEffect

\`\`\`javascript
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []);

  return <div>Timer: {seconds} seconds</div>;
}
\`\`\`

## useContext: Consuming Context

useContext provides a clean way to consume context:

\`\`\`javascript
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff'
      }}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Toggle Theme
    </button>
  );
}
\`\`\`

## Custom Hooks: Reusable Logic

Create custom Hooks to share logic between components:

\`\`\`javascript
// Custom Hook for API calls
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Using the custom Hook
function UserProfile({ userId }) {
  const { data: user, loading, error } = useApi(\`/api/users/\${userId}\`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
\`\`\`

## Advanced Hooks

### useReducer: Complex State Logic

\`\`\`javascript
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
\`\`\`

### useMemo: Performance Optimization

\`\`\`javascript
import React, { useMemo, useState } from 'react';

function ExpensiveComponent({ items }) {
  const [filter, setFilter] = useState('');

  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  return (
    <div>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter items..."
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

## Best Practices

1. **Keep Hooks at the top level** - Always call Hooks at the top level of your components
2. **Use custom Hooks for reusable logic** - Extract complex logic into custom Hooks
3. **Optimize dependencies** - Be careful with useEffect dependencies to avoid infinite loops
4. **Use useCallback and useMemo judiciously** - Only optimize when you have performance issues
5. **Test your Hooks** - Write tests for custom Hooks to ensure they work correctly

## Common Pitfalls

1. **Stale closures** - Be aware of closure issues with useEffect
2. **Missing dependencies** - Always include all dependencies in useEffect
3. **Infinite loops** - Avoid creating new objects/functions in render without proper memoization

## Conclusion

React Hooks provide a powerful and elegant way to add state and lifecycle features to functional components. They promote code reuse, make components easier to test, and lead to more maintainable applications.

Start with useState and useEffect, then gradually explore more advanced Hooks as your needs grow. Remember to follow the rules of Hooks, and don't hesitate to create custom Hooks when you find yourself repeating logic.

Happy coding with React Hooks!`,
    likes: 428,
    views: 6234,
    comments: 52,
    status: "published"
}]  