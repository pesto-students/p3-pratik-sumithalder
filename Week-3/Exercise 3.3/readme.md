# Week 3 : JavaScript

## Exercise 3.3

What is the output of the below problem and why:

```
functioncreateIncrement() {
    letcount=0;
    functionincrement() {
        count++;
    }
    letmessage=`Count is${count}`;
    functionlog() {
        console.log(message);
    }
    return[increment,log];
}
const[increment,log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?

```

### Guidelines:
1. The candidate should be able to explain the code with the desired output.

## Outcomes:
1. The candidates will understand how ‘closure’ works in JS.
2. The candidates will understand how ‘encapsulation’ works in JS.