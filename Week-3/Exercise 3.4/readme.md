# Week 3 : JavaScript

## Exercise 3.4

Refactor the above stack implementation, using the concept of closure, such that there is noway to access items array outside of createStack() function scope: (2-3 hours)

```
functioncreateStack() {
 return{
  items:[],
  push(item) {
   this.items.push(item);
   },
   pop() {
    returnthis.items.pop();
      }
     };
    }
    
const stack=createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
stack.items;// => [10]
stack.items= [10,100,1000];//Encapsulation broken!


functioncreateStack() {
    // Write your code here...
}
conststack=createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
stack.items;// => undefined

```

### Guidelines:
1. The candidate should be able to refactor the code and get the desired output.
2. The candidate should be able to explain the code why it was not working before.
3. The candidate should be able to explain the code why it is working now.

## Outcomes:
1. The candidates will understand how ‘closure’ works in JS.
2. The candidates will understand how ‘encapsulation’ works in JS.