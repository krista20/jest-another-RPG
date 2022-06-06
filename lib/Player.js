const Potion = require('../lib/Potion');
const Character = require('./Character');

class Player extends Character {
    constructor(name = '') {
        // call parent constructor here:
        super(name);
        this.inventory = [new Potion('health'), new Potion()];
    }
  
    getStats() {
      return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
      };
    }
  
    getInventory() {
      if (this.inventory.length) {
        return this.inventory;
      }
      return false;
    }
  
    addPotion(potion) {
      this.inventory.push(potion);
    }
  
    usePotion(index) {
      const potion = this.inventory.splice(index, 1)[0];
  
      switch (potion.name) {
        case 'agility':
          this.agility += potion.value;
          break;
        case 'health':
          this.health += potion.value;
          break;
        case 'strength':
          this.strength += potion.value;
          break;
      }
    }
  }




// NOTE: "this.methodname" creates new methods for each player
// // 1 way to accomplish methods using "this"
//     // returns an object with various player properties
//     this.getStats = function() {
//         return {
//             potions: this.inventory.length,
//             health: this.health,
//             strength: this.strength,
//             agility: this.agility
//         };
//     };

//     // returns the inventory array or false if empty
//     this.getInventory = function() {
//         if(this.inventory.length) {
//             return this.inventory;
//         }
//         return false;
//     };
// }

module.exports = Player;