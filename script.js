let display = document.getElementById('display');
let expression = 'row';


function toggleShapeButtons() {
    var shapeButtons = document.querySelector('.shape-buttons');
    shapeButtons.classList.toggle('hidden');
    if (shapeButtons.style.display === 'none') {
        shapeButtons.style.display = 'flex'; // Show the shape buttons
    } else {
        shapeButtons.style.display = 'none'; // Hide the shape buttons
    }
}

function togglemesurementButtons() {
    var MesurementButtons = document.querySelector('.Mesurement-button');
    if (MesurementButtons.style.display === 'none') {
        MesurementButtons.style.display = 'flex'; // Show the Mesurement buttons
    } else {
        MesurementButtons.style.display = 'none'; // Hide the Mesurement buttons
    }
}

function toggleweightButtons() {
    var WeightButtons = document.querySelector('.Weight-button');
    if (WeightButtons.style.display === 'none') {
        WeightButtons.style.display = 'flex'; // Show the Weight buttons
    } else {
        WeightButtons.style.display = 'none'; // Hide the Weight buttons
    }
}

function backspace() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}


// function calculate(operator) {
//     if (operator === 'sqrt') {
//         try {
//             let result = eval(expression);
//             display.value = Math.sqrt(result);
//             expression = result.toString();
//         } catch (error) {
//             display.value = 'Error';
//             expression = '';
//         }
//     } else {
//         expression += operator;
//         display.value = expression;
// }
// }


function appendToDisplay(value) {
    expression += value;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function calculate(operator) {
    if (operator === '=') {
        try {
            let result = eval(expression);
            display.value = result;
            expression = result.toString();
        } catch (error) {
            display.value = 'Error';
            expression = '';
        }
    } else if (operator === 'sqrt') {
        try {
            let srt = eval(expression); // Evaluate the expression
            let result = Math.sqrt(srt); // Calculate square root
            display.value = result; // Display the result
            
        } catch (error) {
            display.value = 'Error'; // Display error message if an error occurs
            expression = ''; // Clear expression
        }
    }
    
    
    else {
        expression += operator;
        display.value = expression;

        switch (operator) {
            case 'aoc':
                let radius = parseFloat(prompt('Enter the radius of the circle:'));
                if (!isNaN(radius)) {
                    display.value = Math.PI * radius * radius;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'aos':
                let side = parseFloat(prompt('Enter the side length of the square:'));
                if (!isNaN(side)) {
                    display.value = side * side;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'aot':
                let base = parseFloat(prompt('Enter the base of the triangle:'));
                let height = parseFloat(prompt('Enter the height of the triangle:'));
                if (!isNaN(base) && !isNaN(height)) {
                    display.value = 0.5 * base * height;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'aor':
                let length = parseFloat(prompt('Enter the length of the rectangle:'));
                let breadth = parseFloat(prompt('Enter the breadth of the rectangle:'));
                if (!isNaN(length) && !isNaN(breadth)) {
                    display.value = length * breadth;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'aotrap':
                let upperBase = parseFloat(prompt('Enter the upper base of the trapezium:'));
                let lowerBase = parseFloat(prompt('Enter the lower base of the trapezium:'));
                let trapHeight = parseFloat(prompt('Enter the height of the trapezium:'));
                if (!isNaN(upperBase) && !isNaN(lowerBase) && !isNaN(trapHeight)) {
                    display.value = 0.5 * (upperBase + lowerBase) * trapHeight;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'aop':
                let paraBase = parseFloat(prompt('Enter the base of the parallelogram:'));
                let paraHeight = parseFloat(prompt('Enter the height of the parallelogram:'));
                if (!isNaN(paraBase) && !isNaN(paraHeight)) {
                    display.value = paraBase * paraHeight;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'aoe':
                let minorAxis = parseFloat(prompt('Enter the length of Minor Axis of the Ellipse:'));
                let majorAxis = parseFloat(prompt('Enter the length of Major Axis of the Ellipse:'));
                if (!isNaN(minorAxis) && !isNaN(majorAxis)) {
                    display.value = Math.PI * minorAxis * majorAxis;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'aorhom':
                let minorDiagonal = parseFloat(prompt('Enter the length of Minor Diagonal of the Rhombus:'));
                let majorDiagonal = parseFloat(prompt('Enter the length of Major Diagonal of the Rhombus:'));
                if (!isNaN(minorDiagonal) && !isNaN(majorDiagonal)) {
                    display.value = 0.5 * minorDiagonal * majorDiagonal;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'mmcm':
                let millimeter1 = parseFloat(prompt('Enter the length of Millimeter:'));
                if (!isNaN(millimeter1)) {
                    display.value = millimeter1 / 10;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'mmin':
                let millimeter2 = parseFloat(prompt('Enter the length of Millimeter:'));
                if (!isNaN(millimeter2)) {
                    display.value = millimeter2 / 25.4;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'mmmt':
                let millimeter3 = parseFloat(prompt('Enter the length of Millimeter:'));
                if (!isNaN(millimeter3)) {
                    display.value = millimeter3 / 1000;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'mmft':
                let millimeter4 = parseFloat(prompt('Enter the length of Millimeter:'));
                if (!isNaN(millimeter4)) {
                    display.value = millimeter4 / 304.8;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'cmmm':
                let centimeter1 = parseFloat(prompt('Enter the length of Centimeter:'));
                if (!isNaN(centimeter1)) {
                    display.value = centimeter1 * 10;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'cmin':
                let centimeter2 = parseFloat(prompt('Enter the length of Centimeter:'));
                if (!isNaN(centimeter2)) {
                    display.value = centimeter2 / 2.54;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'cmmt':
                let centimeter3 = parseFloat(prompt('Enter the length of Centimeter:'));
                if (!isNaN(centimeter3)) {
                    display.value = centimeter3 / 100;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'cmft':
                let centimeter4 = parseFloat(prompt('Enter the length of Centimeter:'));
                if (!isNaN(centimeter4)) {
                    display.value = centimeter4 / 30.48;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'inmm':
                let inch1 = parseFloat(prompt('Enter the length of Inch:'));
                if (!isNaN(inch1)) {
                    display.value = inch1 * 25.4;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'incm':
                let inch2 = parseFloat(prompt('Enter the length of Inch:'));
                if (!isNaN(inch2)) {
                    display.value = inch2 * 2.54;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'inmt':
                let inch3 = parseFloat(prompt('Enter the length of Inch:'));
                if (!isNaN(inch3)) {
                    display.value = inch3 / 39.37;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'inft':
                let inch4 = parseFloat(prompt('Enter the length of Inch:'));
                if (!isNaN(inch4)) {
                    display.value = inch4 / 12;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'mtmm':
                let meter1 = parseFloat(prompt('Enter the length of Meter:'));
                if (!isNaN(meter1)) {
                    display.value = meter1 * 1000;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'mtcm':
                let meter2 = parseFloat(prompt('Enter the length of Meter:'));
                if (!isNaN(meter2)) {
                    display.value = meter2 * 100;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'mtin':
                let meter3 = parseFloat(prompt('Enter the length of Meter:'));
                if (!isNaN(meter3)) {
                    display.value = meter3 * 39.37;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'mtft':
                let meter4 = parseFloat(prompt('Enter the length of Meter:'));
                if (!isNaN(meter4)) {
                    display.value = meter4 * 3.281;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'ftmm':
                let foot1 = parseFloat(prompt('Enter the length of Foot:'));
                if (!isNaN(foot1)) {
                    display.value = foot1 * 304.8;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'ftcm':
                let foot2 = parseFloat(prompt('Enter the length of Foot:'));
                if (!isNaN(foot2)) {
                    display.value = foot2 * 30.48;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'ftin':
                let foot3 = parseFloat(prompt('Enter the length of Foot:'));
                if (!isNaN(foot3)) {
                    display.value = foot3 * 12;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'ftmt':
                let foot4 = parseFloat(prompt('Enter the length of Foot:'));
                if (!isNaN(foot4)) {
                    display.value = foot4 / 3.281;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'kmmt':
                let km1 = parseFloat(prompt('Enter the length of KiloMeter:'));
                if (!isNaN(km1)) {
                    display.value = document.getElementsByClassName("kmmt").value = km1 + " Km = " + km1 * 1000 + " Meter";
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'kmmil':
                let km2 = parseFloat(prompt('Enter the length of KiloMeter:'));
                if (!isNaN(km2)) {
                    display.value = document.getElementsByClassName("kmmil").value = km2 + " KM = " + km2 / 1.60934 + " Miles";
                    // display.value = km2 / 1.60934;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'mtkm':
                let mt1 = parseFloat(prompt('Enter the length of Meter:'));
                if (!isNaN(mt1)) {
                    display.value = document.getElementsByClassName("mtkm").value = mt1 + " Meter = " + mt1 / 1000 + " KM";
                    // display.value = mt1 / 1000;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'mtmil':
                let mt2 = parseFloat(prompt('Enter the length of Meter:'));
                if (!isNaN(mt2)) {
                    display.value = document.getElementsByClassName("mtmil").value = mt2 + " Meter = " + mt2 / 1609.34 + " Miles";
                    // display.value = mt2 / 1609.34;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'milkm':
                let mil1 = parseFloat(prompt('Enter the length of Mile:'));
                if (!isNaN(mil1)) {
                    display.value = document.getElementsByClassName("milkm").value = mil1 + " Miles = " + mil1 * 1.60934 + " KM";
                    // display.value = mil1 * 1.60934;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'milmt':
                let mil2 = parseFloat(prompt('Enter the length of Mile:'));
                if (!isNaN(mil2)) {
                    display.value = document.getElementsByClassName("milmt").value = mil2 + " Miles = " + mil2 * 1609.34 + " Meter";
                    // display.value = mil2 * 1609.34;
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'kggm':
                let kg = parseFloat(prompt('Enter the Kilogram:'));
                if (!isNaN(kg)) {
                    display.value = document.getElementsByClassName("kggm").value = kg + " Kilogram = " + kg * 1000 + " Gram";
                    expression = display.value;
                } else {
                    display.value = 'Invalid Input';
                }
                break;

            case 'bmi':
            let kg1 = parseFloat(prompt('Enter the Kilogram:'));
            let mt3 = parseFloat(prompt('Enter the Meter:'));
            if (!isNaN(kg1) && !isNaN(mt3)) {
                display.value = document.getElementsByClassName("bmi").value = kg1 + "Kg / " + mt3 + "Mts² = " + (kg1 / (mt3 * mt3)).toFixed(5) + " BMI";
                // display.value = (kg1 / (mt3 * mt3));
                expression = display.value;
            } else {
                display.value = 'Invalid Input';
            }
            break;

            case 'ftinmt':
            let foot5 = parseFloat(prompt('Enter the Foot:'));
            let inch5 = parseFloat(prompt('Enter the Inch:'));
            if (!isNaN(foot5) && !isNaN(inch5)) {
                display.value = document.getElementsByClassName("ftinmt").value = foot5 + "\' " + inch5 + "\" = " + ((foot5 / 3.281) + (inch5 / 39.37)).toFixed(5) + " Meter";
                // display.value = (foot5 / 3.281) + (inch5 / 39.37);
                expression = display.value;
            } else {
                display.value = 'Invalid Input';
            }
            break;

            default:
                display.value = expression;
        }

    }
}