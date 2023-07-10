// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

class Shape {
    constructor() {
        this.color = ''
    }

    setColor(color) {
        this.color = color;
    }
    setTextColor(logoColor) {
        this.logoColor = logoColor;
    }
    setText(text) {
        this.logoText = this.logoText;
    }
}

class Circle extends Shape {
    constructor() {
        super()
    }

    render() {
        return `<circle cx="25" cy="75" r="20" fill="${this.color}" text="${this.logoText}"/>`
    }
}

class Triangle extends Shape {
    constructor() {
        super()
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" text="${this.logoText}"/>`
    }
}

class Square extends Shape {
    constructor() {
        super()
    }

    render() {
        return `<rect x="10" y="10" width="30" height="30" fill="${this.color}" text="${this.logoText}"/>`
    }
}


module.exports = { Circle, Triangle, Square }