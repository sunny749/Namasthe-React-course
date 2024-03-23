import {sum} from '../sum'
test('testing sum function', () => { 
    let result=sum(3,4)

    // assertion 
    expect(result).toBe(7)
 })