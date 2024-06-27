// Making a Function.
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " print on shirt"));
}
// Calling a Function with by default values.
make_shirt();
// Calling a function now with Medium size and default message.
make_shirt("Medium");
// Calling a function now with Small size and also different Print Message.
make_shirt("small", "I Love Javascript");
