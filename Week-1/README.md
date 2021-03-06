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

![This is an image](https://github.com/pesto-students/p3-pratik-sumithalder/blob/week1/Week-1/assets/Browser-components.png)


# Step-by-Step Working of Browser

Whenever we click on a link or enter a URL, the browser sends and receives information or data to and from other parts of the web. The information it receives is rendered by the rendering engine and translated into an easily understandable format. It is then displayed in the user interface.

It involves a multi-step process including **DNS resolution**, **HTTP exchange** between browser and web server, **rendering**, and so on, as follows:

![This is an image](https://github.com/pesto-students/p3-pratik-sumithalder/blob/week1/Week-1/assets/Hand-drawing-explaing-browser.png)
Credits: HackerNoon

* You enter a URL in the web browser.
* The browser finds the IP address for the domain using DNS.
* The browser initiates a connection with the server.
* Next, it sends an HTTP request to the webserver.
* The server handles the request and sends out an HTTP response.
* The browser renders and displays the HTML content, i.e., the web page.

> ***An important thing to note here is that in web browsers such as Google Chrome each tab runs in a separate process(multiple instances of rendering engine).***


# Let’s Focus on the Rendering Engine

The rendering engine has a very important job as it displays what you see on your screen. It communicates with the networking layer of the browser to grab HTML code and other items passed from a remote server. By default the rendering engine can display HTML and XML documents and images. It can display other types of data via plug-ins or extensions, for example displaying PDF documents.

Different browsers use different rendering engines: Internet Explorer uses Trident, Firefox uses Gecko, Safari uses WebKit, Opera and Chrome uses Blink, which is a fork of WebKit.

## Main flow of Rendering

The main flow is always the same - the rendering engine start getting content of the requested document from the networking layer. After that this is the basic flow of the rendering engine:

![This is an image](https://github.com/pesto-students/p3-pratik-sumithalder/blob/week1/Week-1/assets/Flow-of-rendering.png)

## 1. Parsing HTML and creating the DOM Tree

HTML is a hierarchal structure that begins with a <html> tag, usually contains a <head> and <body> tag, and elements can be nested within elements. These HTML elements are parsed and turned into a “DOM tree” by the rendering engine. It is a tree like structure made out of the HTML, where each tag is a branch starting at the root element.

![This is an image](https://github.com/pesto-students/p3-pratik-sumithalder/blob/week1/Week-1/assets/Dom-tree.png)

## 2. Render Tree Construction

CSS attributes (style attributes) are also parsed and combined with the DOM tree to create a **“render tree”**. This is a tree of visual elements such as height/width and color ordered in the hierarchy in which they are to be displayed in the browser.

![This is an image](https://github.com/pesto-students/p3-pratik-sumithalder/blob/week1/Week-1/assets/CSSDOM.png)

## 3. Layout Process

After the construction of the render tree, it goes through a **“layout process”** of the render tree. When the renderer is created and added to the tree, it does not have a position and size. The process of calculating these values is called layout or reflow. This means giving each node the exact coordinates where it should appear on the screen. The position of the root renderer is 0,0 and its dimensions are the viewport–the visible part of the browser window. All renderers have a “layout” or “reflow” method, each renderer invokes the layout method of its children that need layout.

## 4. Painting

The next stage is **painting**. In the painting stage, the render tree is traversed and the renderer’s “paint()” method is called to display content on the screen. Painting uses the UI backend layer.


The rendering engine always tries to display the contents on the screen as soon as possible for better user experience. It does not wait for the HTML parsing to complete before starting to build and layout the render tree. It parses and displays the content it has received from the network, while rest of the contents stills keeps coming from the network.

# Script Processors & Order of Script Processing

When the parser finds non-blocking resources, such as an image, the browser will request those resources and continue parsing. Parsing can continue when a CSS file is encountered, but 'script' tags—particularly those without an async or defer attribute... block rendering, and pause the parsing of HTML. Though the browser's preload scanner hastens this process, excessive scripts can still be a significant bottleneck.

Javascript execution will be halted until CSSOM is ready. All scripts are parsed & processed sequentially by default. Parsing of a (HTML/CSS)document halts until the encountered script has been executed. Parsing also halts until an external script is fetched.

If 'defer' attribute is used on a script, then the parser will not halt (document parsing) until this deferred script is loaded completely. This deferred script is parsed after parsing the document. If a script is has "async" attribute, it will be parsed and executed by a different thread.

References:
1. [How browsers work](https://web.dev/howbrowserswork/#The_main_flow)
2. [Journey of a web page 🛣️ - How browsers work](https://dev.to/gitpaulo/journey-of-a-web-page-how-browsers-work-10co)
3. [How Do Web Browsers Work?](https://hackernoon.com/how-do-web-browsers-work-40cefd2cb1e1)

