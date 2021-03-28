const Intern = require('../lib/Intern.js');

test ('creates an intern object', () => {
    const intern = new Intern('Some One', '1234', 'doe@doe.com', 'School/Program');
    expect(intern.name).toBe('Some One');
    expect(intern.id).toBe('1234');
    expect(intern.email).toBe('doe@doe.com');
    expect(intern.school).toBe('School/Program');
});

test("gets intern's school", () => {
    const intern = new Intern('Some One', '1234', 'doe@doe.com', 'School/Program');
    expect(intern.getSchool()).toEqual(expect.stringContaining('School/Program'));
});

test("gets intern's role", () => {
    const intern = new Intern('Some One', '1234', 'doe@doe.com', 'School/Program');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});