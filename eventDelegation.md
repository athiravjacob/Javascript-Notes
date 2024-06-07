# What is Event Delegation?
Event delegation is a design pattern in which a single event listener is attached to a common ancestor, rather than attaching listeners to multiple individual elements. This pattern takes advantage of event propagation, specifically the "bubbling" phase, where an event travels up the DOM hierarchy from the target element to the root.
# Why Use Event Delegation?
Efficiency: Imagine you have a list of items, each requiring a click event. Instead of attaching a click handler to each item, event delegation allows you to attach a single listener to the parent container. This results in less code and better performance, especially for large sets of elements.
Dynamism: Event delegation is particularly useful when dealing with dynamic content. As new elements are added or removed, the event listener remains attached to the parent, reducing the need for constant reattachment.

# Event propagation
 is a mechanism where events propagate from the target element to its ancestors.
When it happens from the target to the ancestors this is known as bubbling. But you can also happen in inverse order from the last ancestor to the target element, known as capturing.
The purpose of event propagation is to allow multiple events to be registered on a target element and its ancestors.
 When an event occurs in one element, all the event listeners on that element and its ancestors are triggered in order. During the propagation, each ancestor element can potentially handle the event before it reaches the topmost element.

# Prevent Default
You can prevent the default action associated with the event using event.preventDefault(). 

# Stop Propagation
You can prevent an event from bubbling up (or capturing down) the DOM tree using event.stopPropagation().

