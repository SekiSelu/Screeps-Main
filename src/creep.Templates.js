/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creep.Templates');
 * mod.thing == 'a thing'; // true
 */

var workers = [[WORK, CARRY, MOVE, MOVE], [WORK, WORK, CARRY, CARRY, MOVE, MOVE]];

module.exports = {
    workers
};