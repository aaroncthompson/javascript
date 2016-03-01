for (var i=-10; i<11; i++) {
    if (i % 15 == 0)
        document.writeln("FizzBuzz");
    else if (i % 3 == 0)
        document.writeln("Fizz");
    else if (i % 5 == 0)
        document.writeln("Buzz");
    else
        document.writeln(i);
}
