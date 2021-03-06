var roleBuilder = require('role.builder');
var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.depositing && creep.carry.energy < 25) {
            creep.memory.depositing = false;
        }
        if(!creep.memory.depositing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.depositing = true;
        }
        
        if (creep.memory.depositing) {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_TOWER) && (structure.energy < structure.energyCapacity);
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            } else if (creep.room.storage) {
				if(creep.transfer(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(creep.room.storage);
				}
			} else {
                creep.moveTo(Game.flags['HarvesterRally']);
            }
        } else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
    }
};

module.exports = roleHarvester;