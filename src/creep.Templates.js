/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creep.Templates');
 * mod.thing == 'a thing'; // true
 */

var workers = [[WORK, CARRY, MOVE], [WORK, WORK, CARRY, CARRY, MOVE, MOVE]];
var generic = [[WORK, CARRY, MOVE], [WORK, WORK, CARRY, CARRY, MOVE, MOVE]];
var fighter = [[MOVE,MOVE,ATTACK,ATTACK]];

module.exports = {
    workers
};