import HealthIndication from "../health";

test.each([
    [{ name: 'мечник', health: 14 }, "critical"],
    [{ name: 'маг', health: 51 }, "healthy"],
    [{ name: 'лучник', health: 50 }, "wounded"],
    [{ name: 'лучник', health: 15 }, "wounded"],

])('testing healht indication function ', (hero, expected) => {
    const result = HealthIndication(hero);
    expect(result).toBe(expected);
});
