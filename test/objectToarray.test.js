var expect = require('chai').expect;
var objectToarray = require('../src/objectToarray')
var utils = require('../src/utils')
describe('objectToarray', () => {
  // mocha -g bubbleSort
  it('getProp', () => {
    var getProp = objectToarray.getProp
    var testObj = {
      a: {
        b: {
          c: {
            d: 'h',
            j: 'l',
            o: {
              p: 'q',
              r: 's'
            },
            t: 'u'
          }
        },
        v: {
          w: {
            x: {
              y: 'z'
            }
          }
        }
      },
      e: {
        f: {
          i: 'k'
        },
        m: 'n'
      }
    }
    let arr = getProp(testObj)
    expect(JSON.stringify(arr)).to.equal(JSON.stringify([["a","e"],["b","v","f","m"],["c","w","i"],["d","j","o","t","x"],["p","r","y"]]))
  })
})