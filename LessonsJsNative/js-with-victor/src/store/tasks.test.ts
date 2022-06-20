import {ActionType, div, mult, salaryReducer, StateType, sub, sum} from "./tasks";

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
    expect(sub(1200, 200)).toBe(1000)
})

test("div", () => {
    expect(div(1200, 2)).toBe(600)
})

test("mult", () => {
    expect(mult(1200, 2)).toBe(2400)
})

test("case SUM of salaryReducer", ()=>{
    const salary: StateType = 800
    const action: ActionType = {
        type: "SUM",
        n: 200
    }
    const result = salaryReducer(salary, action)
    expect(result).toBe(1000)
} )

test("case SUB of salaryReducer", ()=>{
    const salary: StateType = 800
    const action: ActionType = {
        type: "SUB",
        n: 200
    }
    const result = salaryReducer(salary, action)
    expect(result).toBe(600)
} )

test("case DIV of salaryReducer", ()=>{
    const salary: StateType = 800
    const action: ActionType = {
        type: "DIV",
        n: 200
    }
    const result = salaryReducer(salary, action)
    expect(result).toBe(4)
} )

test("case MULT of salaryReducer", ()=>{
    const salary: StateType = 800
    const action: ActionType = {
        type: "MULT",
        n: 200
    }
    const result = salaryReducer(salary, action)
    expect(result).toBe(160000)
} )