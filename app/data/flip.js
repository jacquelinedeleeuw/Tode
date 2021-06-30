const flip = [
  {
    type: 'flip',
    question: 'What is CSS?',
    answer: 'CSS stands for Cascading Style Sheets. CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes. CSS was intended to allow web professionals to separate the content and structure of a website\'s code from the visual design.'
  },
  {
    type: 'flip',
    question: 'What is Git?',
    answer: 'Git is a Distributed Version Control system (DVCS). It can track changes to a file and allows you to revert back to any particular change. Its distributed architecture provides many advantages over other Version Control Systems (VCS) like SVN one major advantage is that it does not rely on a central server to store all the versions of a project’s files.'
  },
  {
    type: 'flip',
    question: 'What is Node.js?',
    answer: 'Node.js is a web application framework built on Google Chrome\'s JavaScript Engine (V8 Engine). Node.js comes with runtime environment on which a Javascript based script can be interpreted and executed (It is analogus to JVM to JAVA byte code). This runtime allows to execute a JavaScript code on any machine outside a browser. Because of this runtime of Node.js, JavaScript is now can be executed on server as well.'
  },
  {
    type: 'flip',
    question: 'What is a closure?',
    answer: 'A closure is when an inner function has access to the arguments and variables that are within the scope of the outer function, even once the outer function has finished executing and those values are no longer available outside that function. Closures are frequently used in JavaScript for object data privacy, in event handlers and callback functions, and in partial applications, currying, and other functional programming patterns.'
  },
  {
    type: 'flip',
    question: 'What is a linked list?',
    answer: 'A linked list is a dynamic data structure where each element (called a node) is made up of two items: the data and a reference (or pointer), which points to the next node. A linked list is a collection of nodes where each node is connected to the next node through a pointer.'
  },
  {
    type: 'flip',
    question: 'What is functional programming?',
    answer: 'Functional programming (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects. Functional programming is declarative rather than imperative, and application state flows through pure functions. Contrast with object oriented programming, where application state is usually shared and colocated with methods in objects.'
  },
  {
    type: 'flip',
    question: 'What is shared state?',
    answer: 'Shared state is any variable, object, or memory space that exists in a shared scope, or as the property of an object being passed between scopes. A shared scope can include global scope or closure scopes. Often, in object oriented programming, objects are shared between scopes by adding properties to other objects.'
  },
  {
    type: 'flip',
    question: 'What is immutability?',
    answer: 'An immutable object is an object that can’t be modified after it’s created. Conversely, a mutable object is any object which can be modified after it’s created. Immutability is a central concept of functional programming because without it, the data flow in your program is lossy. State history is abandoned, and strange bugs can creep into your software. '
  },
  {
    type: 'flip',
    question: 'Can you name all JavaScript data types?',
    answer: 'In JavaScript, there are 6 primitive data types: string, number, boolean, null, undefined, symbol'
  },
  {
    type: 'flip',
    question: 'Can you enumerate JavaScript data types?',
    answer: 'Strictly speaking no, enumeration is not something that is built into Javascript. But, you can mirror the functionality of it by using an object.'
  },
  {
    type: 'flip',
    question: 'What is CI/CD?',
    answer: 'In software engineering, CI/CD or CICD is the combined practices of continuous integration and either continuous delivery or continuous deployment. CI/CD bridges the gaps between development and operation activities and teams by enforcing automation in building, testing and deployment of applications.'
  },
  {
    type: 'flip',
    question: 'What is jQuery & what is it commonly used for?',
    answer: 'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.'
  },
  {
    type: 'flip',
    question: 'What is a callback function in JavaScript and when would you use one?',
    answer: 'A callback is a function that is to be executed after another function has finished executing — hence the name call back. More complexly put: In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions.'
  },
  {
    type: 'flip',
    question: 'What does JSON stand for? What is it used for?',
    answer: 'JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).'
  },
  {
    type: 'flip',
    question: 'Explain the notion of responsive design & how it works?',
    answer: 'Responsive design is a way of developing web properties so that the device they are used on determines the way that the site will be displayed. It\'s normally done using the principle “mobile first” – i.e. the experience is defined on mobile platforms such as smartphones and tablets and then scaled up to larger screens.'
  },
  {
    type: 'flip',
    question: 'How would you explain an API request?',
    answer: 'An API request allows you to retrieve data from a data source, or to send data. APIs run on web servers, and expose endpoints to support the operations client applications use to provide their functionality. '
  },
  {
    type: 'flip',
    question: 'What is the difference between == & === in JS?',
    answer: 'In JavaScript == checks to see if two variables have the same value, === checks to see if they also have the same type'
  },
  {
    type: 'flip',
    question: 'What are promises?',
    answer: 'A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous actions eventual success value or failure reason. A pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promises then method are called.'
  },
  {
    type: 'flip',
    question: 'What are the new functionalities in ES6?',
    answer: 'Arrows, classes, enhanced object literals, template strings, destructuring, default + rest + spread, let + const, iterators + for..of, generators, unicode, modules, module loaders,  map + set + weakmap + weakset, proxies, symbols, subclassable built-ins, promises, math + number + string + array + object APIs, binary and octal literals, reflect api, tail calls'
  },
  {
    type: 'flip',
    question: 'What are the advantages of one-way binding (e.g React or Vue)?',
    answer: 'The advantage of one-way binding is that it can correspondingly bring about one-way data flow. The advantage of this is that all state changes can be recorded and tracked. The state changes can be notified by manual calls.'
  },
  {
    type: 'flip',
    question: 'What are the differences between functional programming & object-oriented programming?',
    answer: 'OOP or the Object-Oriented Programs are the conceptual programming techniques that uses objects as the key. The programming model used in functional programming is a declarative programming model, while object-oriented programming uses the imperative programming model. In functional programs, variables and functions are the main elements of the code, while in object-oriented programs, objects and methods are the key elements.'
  },
  {
    type: 'flip',
    question: 'What are the new functionalities in HTML5?',
    answer: 'Intro of audio and video: Audio and Video tags are the two major addition to HTML5. , Nav tag: The <nav> tag defines a set of navigation links. ..., Progress tag, Placeholder Attribute, Email attribute, Storage, Ease of use'
  },
  {
    type: 'flip',
    question: 'What’s the difference between let, var and const?',
    answer: 'Var declarations are globally scoped or function scoped while let and const are block scoped. var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared. They are all hoisted to the top of their scope.'
  },
  {
    type: 'flip',
    question: 'What is destructuring?',
    answer: 'Destructuring Assignment is a JavaScript expression that allows to unpack values from arrays, or properties from objects, into distinct variables data can be extracted from arrays, objects, nested objects and assigning to variables.'
  },
  {
    type: 'flip',
    question: 'What is Flexbox? How have you used it?',
    answer: 'CSS Flexible Box Layout, commonly known as Flexbox, is a CSS 3 web layout model. It is in the W3Cs candidate recommendation stage. The flex layout allows responsive elements within a container to be automatically arranged depending upon screen'
  },
  {
    type: 'flip',
    question: 'What is TDD? What’s the benefits of using it?',
    answer: 'Test-driven development is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases. TDD allows you to unit test small segments of a software as it is built helping to prevent errors later on in production'
  },
  {
    type: 'flip',
    question: 'What’s the difference between TDD & BDD?',
    answer: 'The key difference is the scope. TDD is a development practice while BDD is a team methodology. In TDD, the developers write the tests while in BDD the automated specifications are created by users or testers (with developers wiring them to the code under test.)'
  },
  {
    type: 'flip',
    question: 'What is the BEM CSS methodology?',
    answer: 'The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS. '
  },
  {
    type: 'flip',
    question: 'What is a function?',
    answer: 'Functions are "self contained" modules of code that accomplish a specific task. Functions usually "take in" data, process it, and "return" a result. Once a function is written, it can be used over and over and over again. Functions can be "called" from the inside of other functions.'
  },
  {
    type: 'flip',
    question: 'What does the dependency array in useEffect() do?',
    answer: 'The useEffect hook takes a second parameter, a “dependencies” array, that will only re-run the effect when the values within the array change across re-renders. This allows us to optimize how many times the effect is run. This works perfectly fine when we\'re using primitive values like booleans, numbers, and strings.'
  },
  {
    type: 'flip',
    question: 'What\'s the fastest way to find the middle of a Linked List?',
    answer: 'answer'
  },
  {
    type: 'flip',
    question: 'What does it mean when a function is idempotent?',
    answer: 'In computing, an idempotent operation is one that has no additional effect if it is called more than once with the same input parameters. For example, removing an item from a set can be considered an idempotent operation on the set. In mathematics, an idempotent operation is one where f(f(x)) = f(x).'
  },
  {
    type: 'flip',
    question: 'What is a pure function?',
    answer: 'A pure function is a function which: Given the same input, will always return the same output and produces no side effects.'
  },
  {
    type: 'flip',
    question: 'What was a major change in React around 16.8?',
    answer: 'Hooks!'
  },
  {
    type: 'flip',
    question: 'What\'s the difference between white/black box testing?',
    answer: 'Black Box Testing is a software testing method in which the internal structure/ design/ implementation of the item being tested is not known to the tester. White Box Testing is a software testing method in which the internal structure/ design/ implementation of the item being tested is known to the tester.'
  },
  {
    type: 'flip',
    question: 'What\'s the difference between unit, integration, and e2e testing?',
    answer: 'E2E tests help verify high-value paths in your application. Integration tests can tell you if your code works cohesively with other functions. Unit tests help verify the business logic of functions. Unit tests are the most basic form of testing, and they ensure the business logic is correct.'
  },
  {
    type: 'flip',
    question: 'What is batching in React?',
    answer: 'Batch updating is a React\'s interesting feature, that combines state updates. The main idea is that no matter how many setState calls you make inside a React event handler or synchronous lifecycle method, it will be batched into a single update. That is only one single re-render will eventually happen.'
  },
  {
    type: 'flip',
    question: 'What is the difference between props and state in React?',
    answer: '"props" (short for "properties") is an object of arbitrary inputs a React function component accepts as the first argument. "state" is data that changes over the lifetime of a specific instance of a React component.'
  },
  {
    type: 'flip',
    question: 'What\'s the difference between classical and prototypal inheritance?',
    answer: 'Classical inheritance is limited to classes inheriting from other classes. However prototypal inheritance includes not only prototypes inheriting from other prototypes but also objects inheriting from prototypes.'
  },
  {
    type: 'flip',
    question: 'What are styled-components?',
    answer: 'It is the meant to be a successor to CSS Modules, a way to write CSS \'s scoped to a single component, and not leak to any other element in the page. Styled Components allow you to write plain CSS in your components without worrying about class name collisions.'
  },
  {
    type: 'flip',
    question: 'What are the status codes for REST API calls?',
    answer: 'The status codes are divided into the five categories. 1xx: Informational – Communicates transfer protocol-level information. 2xx: Success – Indicates that the client\'s request was accepted successfully. 3xx: Redirection – Indicates that the client must take some additional action in order to complete their request. 4xx: Client Error – This category of error status codes points the finger at clients. 5xx: Server Error – The server takes responsibility for these error status codes.'
  },
  {
    type: 'flip',
    question: 'What are Jest/Enzyme used for?',
    answer: 'In contrast, Enzyme can be used within Jest to render components, to access the DOM of these components, and to make assertions based on the DOM. Enzyme adds up perfectly to Jest, because it can cover unit and integration tests, whereas Jest is mainly used for snapshot tests.'
  },
  {
    type: 'flip',
    question: 'What is shallow rendering?',
    answer: 'Shallow rendering lets you render a component “one level deep” and assert facts about what its render method returns, without worrying about the behavior of child components, which are not instantiated or rendered. This does not require a DOM.'
  },
  {
    type: 'flip',
    question: 'What is technical debt?',
    answer: 'Technical debt (also known as design debt or code debt, but can be also related to other technical endeavors) is a concept in software development that reflects the implied cost of additional rework caused by choosing an easy (limited) solution now instead of using a better approach that would take longer.'
  },
  {
    type: 'flip',
    question: 'How could you clear technical debt?',
    answer: 'By building discovery tests, through human insight software, businesses can ensure they\'re prioritizing development work by fully understanding the pertinent needs of the customer. From needs discovery to concept validation, the opportunity for minimizing tech debt is clear.'
  },
  {
    type: 'flip',
    question: 'What is hoisting?',
    answer: 'Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.'
  },
  {
    type: 'flip',
    question: 'What are higher-order components?',
    answer: 'A higher-order component (HOC) is an advanced technique in React for reusing component logic. They are a pattern that emerges from React\'s compositional nature. Concretely, a higher-order component is a function that takes a component and returns a new component.'
  },
  {
    type: 'flip',
    question: 'What are higher-order functions?',
    answer: 'A function that accepts and/or returns another function is called a higher-order function. It\'s higher-order because instead of strings, numbers, or booleans, it goes higher to operate on functions.'
  },
  {
    type: 'flip',
    question: 'What are the benefits of styled components over traditional minified one CSS file.',
    answer: 'Styled-components make it easy for you to publish a React component to NPM. These components can be customised through props and/or extending via styled(Component) and no clashing with CSS selectors.'
  },
  {
    type: 'flip',
    question: 'What is snapshot testing?',
    answer: 'Snapshot testing is a type of “output comparison” or “golden master” testing. These tests prevent regressions by comparing the current characteristics of an application or component with stored “good” values for those characteristics. Snapshot tests are fundamentally different from unit and functional tests.'
  },
  {
    type: 'flip',
    question: 'What\'s the difference between a normal function declaration and an arrow function?',
    answer: 'Regular functions created using function declarations or expressions are constructible and callable. Since regular functions are constructible, they can be called using the new keyword. However, the arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions.'
  },
  {
    type: 'flip',
    question: 'What are hooks in React?',
    answer: 'Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.'
  },
  {
    type: 'flip',
    question: 'What are the different hooks in React?',
    answer: 'useEffect(), useState(), useContext(), useReducer(), useCallback(), useMemo(), useRef(), useImperativeHandle(), useLayoutEffect(), useDebugValue()'
  },
  {
    type: 'flip',
    question: 'What is useState()?',
    answer: 'useState() returns a stateful value, and a function to update it. During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState). The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.'
  },
  {
    type: 'flip',
    question: 'What is useEffect()?',
    answer: 'useEffect() accepts a function that contains imperative, possibly effectful code. The function passed to useEffect will run after the render is committed to the screen. Think of effects as an escape hatch from React’s purely functional world into the imperative world.'
  },
  {
    type: 'flip',
    question: 'What is useContext()?',
    answer: 'Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree. When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider. Even if an ancestor uses React.memo or shouldComponentUpdate, a rerender will still happen starting at the component itself using useContext.'
  },
  {
    type: 'flip',
    question: 'What is useReducer()?',
    answer: 'An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.) useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.'
  },
  {
    type: 'flip',
    question: 'What is useCallback()?',
    answer: 'useCallback() returns a memoized callback. Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).'
  },
  {
    type: 'flip',
    question: 'What is useMemo()?',
    answer: 'useMemo() returns a memoized value. Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render. Remember that the function passed to useMemo runs during rendering. Don’t do anything there that you wouldn’t normally do while rendering. For example, side effects belong in useEffect, not useMemo.'
  },
  {
    type: 'flip',
    question: 'What is useRef()?',
    answer: 'useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.'
  },
  {
    type: 'flip',
    question: 'What is useImperativeHandle()?',
    answer: 'useImperativeHandle customizes the instance value that is exposed to parent components when using ref. As always, imperative code using refs should be avoided in most cases. useImperativeHandle should be used with forwardRef:'
  },
  {
    type: 'flip',
    question: 'What is useLayoutEffect()?',
    answer: 'The signature is identical to useEffect, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.'
  },
  {
    type: 'flip',
    question: 'What is useDebugValue()?',
    answer: 'useDebugValue can be used to display a label for custom hooks in React DevTools.'
  },
  {
    type: 'flip',
    question: 'What is the CallStack?',
    answer: 'In computer science, a call stack is a stack data structure that stores information about the active subroutines of a computer program. This kind of stack is also known as an execution stack, program stack, control stack, run-time stack, or machine stack, and is often shortened to just "the stack". '
  },
  {
    type: 'flip',
    question: 'What is a Constructor function?',
    answer: 'A constructor is a function that creates an instance of a class which is typically called an “object”. In JavaScript, a constructor gets called when you declare an object using the new keyword, The purpose of a constructor is to create an object and set values if there are any object properties present. It’s a neat way to create an object because you do not need to explicitly state what to return as the constructor function, by default, returns the object that gets created within it.'
  }
  // {
  //   type: 'flip',
  //   question: 'question',
  //   answer: 'answer'
  // },
  // {
  //   type: 'flip',
  //   question: 'question',
  //   answer: 'answer'
  // }
]

export default flip