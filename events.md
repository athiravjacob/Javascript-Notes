# Events 
are essentially the actions that occur on a web app due to user interaction, such as clicking a button. In JavaScript, when an event occurs, the app fires the event, which is kind of a signal that an event has occurred. The app then automatically responds to the user in the form of output, thanks to event handlers in JavaScript. An event handler is essentially a function with a block of code that is executed or triggered when a specific event fires. Sometimes, when an event occurs, it triggers multiple events. This is because web elements in an app are often nested. This is where event propagation comes in. Event propagation involves capturing and bubbling phases as the event travels across the DOM hierarchy. We’ll discuss these phases later in the article. There are common types of events:
        Keyboard/touch events: Occur when a user presses or releases a key on the keyboard or performs an action with a touch-enabled smartphone, laptop or tablet.
        Click events: Fires when a user clicks on a button or other such web element.
        Mouse hover events: These events are fired when a user performs an action with the mouse, such as scrolling a page or moving the cursor.
        Form/submit events: Triggered when a user submits a form, modifies it, or resets it.
        Drag and drop events: Occurs when a user drags and drops an element on the web page, such as dragging and dropping an image on a file uploader.
# Event Listeners
An event listener is essentially a JavaScript function that waits for a specific event to occur and then executes a callback function to respond to that event. Event listeners and event handlers are often considered the same thing. However, in essence, they work together to respond to an event. As the name suggests, the listener listens for the event, and the handler is the code that is executed in response to that event.
There are two common built-in event listener methods in JavaScript: 
    addEventListener and removeEventListener. 

* The addEventListener() method enables us to attach an event handler to an element. We can also add multiple event handlers to an element.
* removeEventListener() allows us to remove an event listener/handler from a specific element.
# Event Object
When an event occurs, it belongs to a specific event object. The event object is essentially the argument passed into the callback/event handler function. It provides information about the event, such as the target element, the type of event, etc. It also contains additional properties for the specific event type. Here are common event properties:
        target: Represents the element that fired the event.
        type: Tells about the specific type of the event, such as click or submit
        keyCode: Used for keyboard events. It contains the Unicode value of the key pressed by the user
