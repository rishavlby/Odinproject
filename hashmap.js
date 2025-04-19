class HashMap {
    constructor(startCapacity = 8, loadFactor = 0.75) {
      this.capacity = startCapacity;
      this.loadFactor = loadFactor;
      this.buckets = Array(this.capacity).fill(null).map(() => []);
    
    }
  
    hash(key) {
      let hashCode = 0;
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
      }
      return hashCode;
    }
  
    set(key, value) {
        // call hash to convert 
      const index = this.hash(key);
      // grabs the bucket
      const bucket = this.buckets[index];
        // check if key exists
      for(let i =0; i< bucket.length;i++){
        if(bucket[i][0]===key){
         bucket [i][1] = value;
         return;
        }
      }
    bucket.push([key,value])
  
     }
  
    get(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];

      for(let i =0; i< bucket.length;i++){
        if(bucket[i][0] === key){
            return bucket[i][1]
        }
      }
      return undefined;        
        }
  
    has(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      for(let i =0; i< bucket.length;i++){
        if(bucket[i][0] === key){
            return true;
        }
      }
      return false;
    }

    
    remove(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
  
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          return true;
        }
      }
      return false;
    }
  
    length() {
        const index = this.hash(key);
     const bucket = this.buckets[index];
      let size = 0;
      for (let i = 0; i < bucket.length; i++) {
        size += bucket[i].length;
      }
      return size;
    }
  
    clear() {
      this.buckets = Array(this.capacity).fill(null).map(() => []);     
    }
  
    keys() {
        const keys = [];

        for (let i = 0; i < this.buckets.length; i++) {
          for (let j = 0; j < this.buckets[i].length; j++) {

            keys.push(this.buckets[i][j][0]);  
          }
        }
        return keys;
      }
      
  
    values() {
      const values = [];

      for (let i = 0; i < this.buckets.length; i++) {
        for (let j = 0; j < this.buckets[i].length; j++){
            values.push(this.buckets[i][j][1]);
        }
    }
     
    }
  
    entries() {
      const entries = [];

      for (let i = 0; i < this.buckets.length; i++) {
        for (let j = 0; j < this.buckets[i].length; j++){
entries.push(this.buckets[i][j])
        }
    }
    return entries;
}
     
  
   
  }
  


const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')


