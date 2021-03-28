const Engineer = require('../lib/Engineer.js')

test('creates an engineer object', () => {
    const engineer = new Engineer ('Some One', '1234', 'doe@doe.com', '@github')
    
    expect(engineer.name).toBe('Some One');
    expect(engineer.id).toBe('1234');
    expect(engineer.email).toBe('doe@doe.com');
    expect(engineer.github).toBe('@github');
});

test ("gets engineer's github username", () => {
    const engineer = new Engineer ('Some One', '1234', 'doe@doe.com', '@github')

    expect(engineer.getGithub()).toEqual(expect.stringContaining('@github'));
});

test("gets engineer's role", () => {
    const engineer = new Engineer ('Some One', '1234', 'doe@doe.com', '@github')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});