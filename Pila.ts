class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    apilar(element: T): void {
        this.items.push(element);
    }

    tope(): T | undefined {
        return this.items.pop();
    }

    desapilar(): T | undefined {
        return this.items[this.items.length - 1];
    }

    pilavacia(): boolean {
        return this.items.length === 0;
    }

    tamano(): number {
        return this.items.length;
    }

    vaciar(): void {
        this.items = [];
    }
}

// Ejemplo de uso
const stack = new Stack<number>();
stack.apilar(5);
stack.apilar(10);
stack.apilar(15);
console.log(stack.tamano()); // 3
console.log(stack.tope()); // 15
console.log(stack.desapilar()); // 15
console.log(stack.tamano()); // 2
stack.vaciar();
console.log(stack.tamano()); // 0
