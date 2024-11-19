/*
The Singleton pattern ensures that a class has only one instance and provides a global point of access to it. 
In Node.js, where modules can be cached and shared across the application, 
using the Singleton pattern can help manage resources effectively. 
For instance, a database connection pool can be implemented as a singleton to prevent resource wastage.
*/

namespace SingletonPattern {
  export class Singleton {
    // A variable which stores the singleton object. Initially,
    // the variable acts like a placeholder.
    private static singleton: Singleton;

    // private constructor so that no instance is created
    private constructor() {}

    // This is how we create a singleton object
    public static getInstance(): Singleton {
      // check if an instance of the class is already created
      if (!Singleton.singleton) {
        // If not created, then create a new instance of the class
        // store the instance in the variable
        Singleton.singleton = new Singleton();
      }
      // return the singleton object
      return Singleton.singleton;
    }
  }
}
