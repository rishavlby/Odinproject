function capitalize(string) {
    if (string === "") {
    return "";
    }
    
    const splitArray = string.split('');
    const firstLetter = splitArray[0].toUpperCase();
    return firstLetter + string.slice(1);
    }
    
    console.log(capitalize("captilazie")); 
    // testing for the above function
    
    test('First letter capitalize',() => {
    
    expect(capitalize('hello')).toMatch('Hello');
    });
    
    function reverseString(string){
    
    if (string === "") {
    return "";
    }
    return string.split('').reverse().join('');
    }
    
    console.log(reverseString('ARORA'));
    
    test('Reverse array', () => {
    expect(reverseString('Arora').toMatch('arorA'))
    }); 
    
    //Calculator
    
    function cal(input1, input2) {
    
    return {
    add: input1 + input2,
    subtract: input1 - input2,
    multiply: input1 * input2,
    division: input1 / input2
    };
    }
    
    test('addition' , () => {
    expect(cal(2+2).add).toBe(4);
    });
    
    test('Subtract' , () => {
    expect(cal(4-2).subtract).toBe(2);
    });
    
    test('Multiply' , () => {
    expect(cal(2*3).multiply).toBe(6);
    });
    
    test('Division' , () => {
    expect(cal(6/3).division).toBe(2);
    });
    
    function caesarText(str, key) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if (char >= 'a' && char <= 'z') {
    // get ASCII code
    let code = char.charCodeAt(0);
    
    let movelocation = ((code - 97 + key) % 26 + 26) % 26 + 97;
    result += String.fromCharCode(movelocation);
    
    } else if (char >= 'A' && char <= 'Z') {
    // Uppercase letter logic
    let code = char.charCodeAt(0);
    let movelocation = ((code - 65 + key) % 26 + 26) % 26 + 65;
    result += String.fromCharCode(movelocation);
    } else {
    // Non-alphabetic character, keep as-is
    result += char;
    }
    }
    
    return result;
    }
    
    test('wrapping from z to a' , () =>{
    expect(caesarText('xyz', 3)).toBe('abc')
    })
    
    test(' shifted lettercase' , () =>{
    expect(caesarText('HeLLo', 3)).toBe('KhOOr')
    })
    
    test('test punctuation' , () =>{
    expect(caesarText('Hello, World!', 3)).toBe('Khoor, Zruog!')
    })
    
    
    function analyzeArray(array) {
    const min = Math.min(...array);
    const max = Math.max(...array);
    const sum = array.reduce((acc, val) => acc + val, 0);
    const average = sum / array.length;
    const length = array.length;
    
    return { average, min, max, length };
    }
    
    test('analyze array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
    });
    });
    
    
    
    
    