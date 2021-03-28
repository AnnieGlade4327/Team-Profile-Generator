import Employee from '../lib/Employee.js';

test('creates an employee object', () => {
    const employee = new Employee('Some One', '1234', 'doe@doe.com');

    expect(employee.name).toBe('Some One');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('doe@doe.com');
});

test("gets employee's name", () => {
    const employee = new Employee('Some One', '1234', 'doe@doe.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Some One'));
});

test("gets employee's ID", () => {
    const employee = new Employee('Some One', '1234', 'doe@doe.com');

    expect(employee.getId()).toEqual(expect.stringContaining('1234'));
});

test("gets employee's email", () => {
    const employee = new Employee('Some One', '1234', 'doe@doe.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('doe@doe.com'));
});

test("gets employee's role", () => {
    const employee = new Employee('Some One', '1234', 'doe@doe.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});