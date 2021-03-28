const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Some One', '1234', 'doe@doe.com', '----');
    
    expect(manager.name).toBe('Some One');
    expect(manager.id).toBe('1234');
    expect(manager.email).toBe('doe@doe.com');
    expect(manager.office).toBe('----');
});

test("gets employee's role", () => {
    const manager = new Manager('Some One', '1234', 'doe@doe.com', '----');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});