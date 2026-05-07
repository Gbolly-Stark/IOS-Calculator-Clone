const screen = document.getElementById("screen");
const appendValue = (input) => {
    if (screen.value === "0") {
        screen.value = input;
    } else {
        screen.value += input;
    }

};
const calculate = () => {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Error"
    }
    
};
const clearScreen = () => {
    screen.value = '0';
}