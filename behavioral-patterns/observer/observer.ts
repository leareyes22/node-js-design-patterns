/* Node.js’s event-driven nature aligns well with the Observer pattern.
 This pattern involves a subject that maintains a list of its dependents, called observers, 
 and notifies them of any state changes. 
 In the context of Node.js, this can be leveraged to build event-driven systems, 
 such as real-time applications and chat applications.
*/

class Subject {
  observers: Observer[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notify(data: string) {
    this.observers.forEach((o) => o.update(data));
  }
}

class Observer {
  name: string;
    
  constructor(name: string) {
    this.name = name;
  }

  update(data: string) {
    console.log(`${this.name} received ${data}`);
  }
}

const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("Hello World");
// Observer 1 received Hello World
// Observer 2 received Hello World

subject.unsubscribe(observer2);

subject.notify("Hello Again");
// Observer 1 received Hello Again
