import { Timeline } from "../ui/timieline";

export function TimelineComp() {
  const data = [
    {
      title: "Week 1",
      content: (
        <div className="max-w-3xl mx-auto shadow-lg rounded-2xl p-6 space-y-6 border">
          <h2 className="text-2xl font-bold">
            Module 1: Introduction to Web Development
          </h2>
          <h3 className="text-xl font-semibold">Topics Covered:</h3>
          <ul className="list-disc list-inside space-y-2 text-cyan-100">
            <li>What is Web Development? (Frontend, Backend, Full Stack)</li>
            <li>
              Web Technologies Overview (HTML, CSS, JavaScript, Frameworks)
            </li>
            <li>
              Understanding the Web (Client-Server Model, HTTP/HTTPS, DNS, IP)
            </li>
            <li>
              Setting Up the Development Environment (VS Code, Git, Terminal)
            </li>
            <li>Introduction to Developer Tools (Chrome DevTools)</li>
            <li>Version Control (Git & GitHub Basics)</li>
          </ul>
          <h3 className="text-xl font-semibold">Assignments:</h3>
          <ul className="space-y-2 text-cyan-100">
            <li>
              ✅ Research the differences between frontend and backend
              development.
            </li>
            <li>✅ Install VS Code, Git, and create a basic HTML page.</li>
            <li>✅ Push a simple HTML file to GitHub.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Weeks 2-3",
      content: (
        <div className="max-w-3xl mx-auto shadow-lg rounded-2xl p-6 space-y-6 border">
          <h2 className="text-2xl font-bold">
            Module 2: HTML & CSS (With Portfolio Project) (Weeks 2-3)
          </h2>
          <h3 className="text-xl font-semibold">Topics Covered:</h3>
          <ul className="list-disc list-inside space-y-2 text-cyan-100">
            <li>HTML Basics: Structure, Text Formatting, Lists, Tables</li>
            <li>Semantic HTML: div, span, section, article, header, footer</li>
            <li>Forms & Inputs: Input types, Validation, Form Design</li>
            <li>Multimedia: Images, Videos, iframes</li>
            <li>CSS Basics: Selectors, Box Model, Colors, Backgrounds</li>
            <li>Layout Techniques: Positioning, Flexbox, Grid</li>
            <li>Styling & Effects: Transitions, Animations, Pseudo-classes</li>
            <li>Responsive Design: Media Queries, Mobile-first Approach</li>
          </ul>
          <h3 className="text-xl font-semibold">Assignments:</h3>
          <ul className="space-y-2 text-cyan-100">
            <li>✅ Build a blog layout using semantic HTML.</li>
            <li>✅ Create a registration form with validation.</li>
            <li>✅ Design a responsive webpage using Flexbox and Grid.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Weeks 4",
      content: (
        <div className="max-w-3xl mx-auto shadow-lg rounded-2xl p-6 space-y-6 border">
  <h2 className="text-2xl font-bold">Module 3: Tailwind CSS & DaisyUI (Flower Shop UI) (Week 4)</h2>
  <h3 className="text-xl font-semibold">Topics Covered:</h3>
  <ul className="list-disc list-inside space-y-2 text-cyan-100">
    <li>Introduction to Tailwind CSS (Utility-First Approach)</li>
    <li>Installing & Configuring Tailwind CSS</li>
    <li>Core Concepts: Spacing, Flexbox, Grid, Components</li>
    <li>DaisyUI Components & Customization</li>
    <li>Building a Responsive UI using Tailwind & DaisyUI</li>
  </ul>
  <h3 className="text-xl font-semibold">Assignments:</h3>
  <ul className="space-y-2 text-cyan-100">
    <li>✅ Recreate a webpage using Tailwind CSS.</li>
    <li>✅ Build a landing page using DaisyUI components.</li>
  </ul>
</div>

      ),
    },
    {
      title: "Weeks 5-7",
      content: (
        <div className="max-w-3xl mx-auto shadow-lg rounded-2xl p-6 space-y-6 border">
  <h2 className="text-2xl font-bold">Module 4: JavaScript Fundamentals (Weeks 5-7)</h2>
  <h3 className="text-xl font-semibold">Topics Covered:</h3>
  <ul className="list-disc list-inside space-y-2 text-cyan-100">
    <li>Introduction to JavaScript: Role in Web Development</li>
    <li>JavaScript Syntax & Basics: Variables, Data Types, Operators</li>
    <li>Functions & Scope: Arrow Functions, Hoisting</li>
    <li>Control Flow: If-Else, Loops, Switch Statements</li>
    <li>Arrays & Objects: Manipulation, JSON</li>
    <li>DOM Manipulation: Selecting Elements, Event Handling</li>
    <li>ES6+ Features: Template Literals, Destructuring, Spread Operator</li>
    <li>Asynchronous JavaScript: Promises, Fetch API, Async/Await</li>
    <li>Debugging & Best Practices</li>
  </ul>
  <h3 className="text-xl font-semibold">Assignments:</h3>
  <ul className="space-y-2 text-cyan-100">
    <li>✅ Write a "FizzBuzz" program.</li>
    <li>✅ Create a button that changes background color dynamically.</li>
    <li>✅ Fetch data from a public API and display it.</li>
  </ul>
</div>

      ),
    },
    {
      title: "Weeks 8-10",
      content: (
        <div className="max-w-3xl mx-auto shadow-lg rounded-2xl p-6 space-y-6 border">
  <h2 className="text-2xl font-bold">Module 5: Frontend Development with Vite (React) [Flower Shop - Full Stack] (Weeks 8-10)</h2>
  <h3 className="text-xl font-semibold">Topics Covered:</h3>
  <ul className="list-disc list-inside space-y-2 text-cyan-100">
    <li>Introduction to React & Vite</li>
    <li>Components, Props, State, Events Handling</li>
    <li>React Hooks: useState, useEffect</li>
    <li>Routing with React Router</li>
    <li>Fetching Data from APIs in React</li>
    <li>Forms & Validation in React</li>
    <li>State Management: Context API, Local Storage</li>
    <li>Building Reusable UI Components</li>
    <li>Integrating Tailwind CSS with React</li>
  </ul>
  <h3 className="text-xl font-semibold">Assignments:</h3>
  <ul className="space-y-2 text-cyan-100">
    <li>✅ Build a simple React app using components and state.</li>
    <li>✅ Create a dynamic product list using API data.</li>
    <li>✅ Develop a multi-page UI for the Flower Shop project.</li>
  </ul>
</div>

      ),
    },
    {
      title: "Weeks 11-12",
      content: (
        <div className="max-w-3xl mx-auto shadow-lg rounded-2xl p-6 space-y-6 border">
  <h2 className="text-2xl font-bold">Module 6: Backend Development with Node.js & Express.js [Flower Shop - Full Stack] (Weeks 11-12)</h2>
  <h3 className="text-xl font-semibold">Topics Covered:</h3>
  <ul className="list-disc list-inside space-y-2 text-cyan-100">
    <li>Introduction to Backend Development</li>
    <li>Setting Up Node.js & Express.js</li>
    <li>Core Node.js Modules (fs, path, http)</li>
    <li>Introduction to Express.js (Routing, Middleware)</li>
    <li>Building REST APIs (CRUD Operations, Status Codes)</li>
    <li>Connecting to MongoDB (Mongoose, Models, Schemas)</li>
    <li>Authentication & Authorization (JWT, bcrypt)</li>
    <li>Deploying Node.js Applications (Vercel, Heroku)</li>
  </ul>
  <h3 className="text-xl font-semibold">Assignments:</h3>
  <ul className="space-y-2 text-cyan-100">
    <li>✅ Build a REST API with CRUD operations.</li>
    <li>✅ Implement user authentication using JWT.</li>
  </ul>
</div>

      ),
    },
    {
      title: "Weeks 13-14",
      content: (
        <div className="max-w-3xl mx-auto shadow-lg rounded-2xl p-6 space-y-6 border">
  <h2 className="text-2xl font-bold">Module 7: Database Management with MongoDB (Weeks 13-14)</h2>
  <h3 className="text-xl font-semibold">Topics Covered:</h3>
  <ul className="list-disc list-inside space-y-2 text-cyan-100">
    <li>SQL vs NoSQL: Database Comparisons</li>
    <li>Setting Up MongoDB (Local & Cloud - MongoDB Atlas)</li>
    <li>CRUD Operations in MongoDB</li>
    <li>Introduction to Mongoose (Models, Schemas, Validations)</li>
    <li>Advanced Queries: Filtering, Sorting, Pagination</li>
    <li>Authentication with MongoDB: Hashing, JWT</li>
    <li>Deploying MongoDB with Express.js</li>
  </ul>
  <h3 className="text-xl font-semibold">Assignments:</h3>
  <ul className="space-y-2 text-cyan-100">
    <li>✅ Perform CRUD operations on a "users" collection.</li>
    <li>✅ Implement a user authentication system.</li>
    <li>✅ Deploy a MongoDB-based Express.js API.</li>
  </ul>
</div>

      ),
    },
    {
      title: "Final Week",
      content: (
        <div className="max-w-3xl mx-auto shadow-lg rounded-2xl p-6 space-y-6 border">
        <h2 className="text-2xl font-bold">Final Project: Full Stack MERN Application (Flower Shop) (Weeks 15-16)</h2>
        <h3 className="text-xl font-semibold">Topics Covered:</h3>
        <ul className="list-disc list-inside space-y-2 text-cyan-100">
          <li>Project Planning & Setup</li>
          <li>Frontend & Backend Integration</li>
          <li>Building User Authentication System</li>
          <li>Product Management (CRUD)</li>
          <li>Checkout & Payment System (Optional)</li>
          <li>Deploying Full Stack Application (Vercel/Heroku/MongoDB Atlas)</li>
        </ul>
        <h3 className="text-xl font-semibold">Final Assignment:</h3>
        <ul className="space-y-2 text-cyan-100">
          <li>✅ Complete the Full Stack Flower Shop Application and deploy it online.</li>
        </ul>
      </div>
      

      ),
    },
  ];
  return (
    <div className="w-full" id="Outline">
      <Timeline data={data} />
    </div>
  );
}
