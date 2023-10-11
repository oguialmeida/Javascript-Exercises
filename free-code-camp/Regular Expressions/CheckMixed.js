// Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/; 
let result = myRegex.test(myString);
