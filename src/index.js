module.exports = function toReadable(number) {
    const digit = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const tensDigit = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let numberString = number.toString();

    if (numberString == 0) {
        return "zero";
    }

    if (numberString < 20) {
        return digit[numberString];
    }

    if (numberString < 100) {
        return `${tensDigit[numberString[0]]} ${digit[numberString[1]]}`.trim();
    }

    if (numberString >= 100) {
        let numberMoreTenString =
            numberString[1] + numberString[2] >= 10
                ? numberString[1] + numberString[2]
                : numberString[2];

        let numberLessTwentyString =
            numberMoreTenString < 20
                ? `${digit[numberMoreTenString]}`
                : `${tensDigit[numberMoreTenString[0]]} ${
                      digit[numberMoreTenString[1]]
                  }`;

        return numberString[1] === 0 && numberString[2] === 0
            ? `${digit[numberString[0]]}hundred`.trim()
            : `${digit[numberString[0]]} hundred ${numberLessTwentyString}`.trim();
    }
};
