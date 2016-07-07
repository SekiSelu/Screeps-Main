/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creep.Keeper');
 * mod.thing == 'a thing'; // true
 */
 
var creepCleaner = require('creep.Cleaner');
var creepTemplates = require('creep.Templates');

var roles =         ['harvester', 'upgrader', 'builder', 'repairer'];
var desiredByRole = [ 3, 6, 3, 0]; 

var creepKeeper = {
    run: function() {
        if ((Game.time % 100) == 0) {
            creepCleaner.run();
        }

        for(var i = 0; i < roles.length; i++) {
            var creepsOfRole = _.filter(Game.creeps, (creep) => creep.memory.role == roles[i]);
            if (creepsOfRole.length < desiredByRole[i]) {
                var newName = Game.spawns.Spawn1.createCreep(creepTemplates.workers[1], undefined, {role: roles[i]});
                if (!(newName<0)) {
                    console.log('Spawning new ' + roles[i] + ': ' + newName);
                }
            }
        }
        /*
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        if(harvesters.length < 2) {
            var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
            console.log('Spawning new harvester: ' + newName);
        }
        
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        if(upgraders.length < 1) {
            var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
            console.log('Spawning new upgrader: ' + newName);
        }
        
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        if(builders.length < 1) {
            var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder'});
            console.log('Spawning new builder: ' + newName);
        }
        */
    }
};

module.exports = creepKeeper;
