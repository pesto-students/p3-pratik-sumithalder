# How Does a Web Browser Work?

Front-end technologies are sky rocketing in popularity in the last few years. The holy trinity of Front-End - HTML, CSS and JavaScript, are used across different devices and environments - from games, through desktop applications, to robotics. But when we talk about front-end development, one thing always comes to mind first and that is web browsers.

All of us use browsers, but few know how they actually work. We are so used to them, that we take them for granted, but behind every browser lie millions of lines of code. In the next few paragraphs, I will try to show you how exactly browsers work.

Before we start with how a web browser works, let’s have a brief look at the components of a browser that play an important role in its functioning. Post which, we’ll see the step-by-step working of a web browser.

## Components of a Web Browser

Any web browser has two elements- front-end and back-end. The front-end is the interface we interact with, which looks fairly simple. However, it’s the complex back-end that facilitates the core functioning of a browser. At a high-level, all web browsers are composed of 7 parts:

![This is an image](https://github.com/pesto-students/p3-pratik-sumithalder/blob/week1/Week-1/assets/Browser-Working.png)

### 1. User Interface

The interface is the space where you interact with the browser. It includes the address bar, on-screen controls like home, back, forward, and refresh, followed by the part where the web page is displayed, bookmarks button, and all other options on the browser screen.

### 2. Browser Engine

The browser engine works as a bridge between the User interface and the rendering engine. According to the inputs from various user interfaces, it queries and manipulates the rendering engine.

### 3. Rendering Engine

The rendering engine, as the name suggests is responsible for rendering the requested web page on the browser screen. The rendering engine interprets the HTML, XML documents and images that are formatted using CSS and generates the layout that is displayed in the User Interface. However, using plugins or extensions, it can display other types data also. Different browsers user different rendering engines:
* Internet Explorer: Trident
* Firefox & other Mozilla browsers: Gecko
* Chrome & Opera 15+: Blink
* Chrome (iPhone) & Safari: Webkit

### 4. Networking

Component of the browser which retrieves the URLs using the common internet protocols of HTTP or FTP. The networking component handles all aspects of Internet communication and security. The network component may implement a cache of retrieved documents in order to reduce network traffic.

### 5. UI Backend

UI Backend helps to draw basic widgets like a select box, an input box, a window, a check box, etc. It uses the underlying operating system user interface methods for the same.

### 6. JavaScript Interpreter

The JavaScript Interpreter, as the name suggests, interprets and executes the JavaScript code embedded in a website. The results then are sent to the rendering engine for display.

### 7. Data Storage

It is a uniform layer that the browser uses to store all its data including Cookies, Local Storage, Session Storage, IndexedDB, WebSQL, and FileSystem.

![This is an image](/assets/Browser-components.png)