var roleAttacker = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        var closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
        if(closestHostile) {
            if(creep.attack(closestHostile) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestHostile);
            }
        } else if (Game.flags['attackerGo']) {
            creep.moveTo(Game.flags['attackerGo']);
        }
        
    }
};

module.exports = roleAttacker;