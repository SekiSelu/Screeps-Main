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
        for(var i = 0; i < roles.length; i++) {
            var creepsOfRole = _.filter(Game.creeps, (creep) => creep.memory.role == roles[i]);
            if ((creepsOfRole.length < desiredByRole[i]) && (desiredByRole[i] != 0)) {
                var newName = Game.spawns.Spawn1.createCreep(creepTemplates.workers[1], undefined, {role: roles[i]});
                if (!(newName<0)) {
                    console.log('Spawning new ' + roles[i] + ': ' + newName);
                } else if (roles[i] == 'harvester' && creepsOfRole.length == 0) {
					newName = Game.spawns.Spawn1.createCreep(creepTemplates.workers[0], undefined, {role: roles[i]});
					if (!(newName<0)) {
						console.log('Emergency spawning new baby ' + roles[i] + ': ' + newName);
					}
				}
            }
        }
    }
};

module.exports = creepKeeper;
