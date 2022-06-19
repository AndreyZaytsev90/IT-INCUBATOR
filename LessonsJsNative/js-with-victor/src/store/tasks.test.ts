import {div, mult, sub, sum} from "./tasks";

test("sum", () => {
    // 1. Тестовыеп данные
    const salary: number = 800
    const n: number = 200
    //2. Выполнить тестируемый код:
    const result = sum(salary, n)
    //3. Проверка результата:
    expect(result).toBe(1000)
})

test("sub", () => {
    expect(sub(1200,200)).toBe(1000)
})

test("div", () => {
    expect(div(1200,2)).toBe(600)
})

test("mult", () => {
    expect(mult(1200,2)).toBe(2400)
})