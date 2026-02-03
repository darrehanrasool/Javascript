const operators = [
  {
    category: "🎯 Highest Priority",
    items: [
      {
        symbol: "( )",
        name: "Grouping",
        precedence: 21,
        associativity: "ltr",
        description: "Forces evaluation order, always evaluated first",
        examples: [
          {
            code: "(2 + 3) * 4",
            result: "20",
            note: "Parentheses force addition first",
          },
          {
            code: "2 + 3 * 4",
            result: "14",
            note: "Without parentheses, multiplication goes first",
          },
        ],
      },
    ],
  },
  {
    category: "Object & Function Access",
    items: [
      {
        symbol: ". []",
        name: "Member Access",
        precedence: 20,
        associativity: "ltr",
        description: "Access object properties or array elements",
        examples: [
          { code: "user.name", result: "Accesses 'name' property" },
          { code: "arr[0]", result: "Accesses first element" },
          { code: "obj['key']", result: "Accesses property by key" },
        ],
      },
      {
        symbol: "()",
        name: "Function Call",
        precedence: 19,
        associativity: "ltr",
        description: "Calls a function with arguments",
        examples: [
          { code: "alert('Hello')", result: "Calls alert function" },
          { code: "Math.max(1, 5, 3)", result: "5" },
        ],
      },
    ],
  },
  {
    category: "🔢 Arithmetic",
    items: [
      {
        symbol: "**",
        name: "Exponentiation",
        precedence: 16,
        associativity: "rtl",
        description: "Raises first number to the power of second",
        examples: [
          { code: "2 ** 3", result: "8", note: "2 × 2 × 2" },
          { code: "5 ** 2", result: "25", note: "5 × 5" },
          {
            code: "2 ** 3 ** 2",
            result: "512",
            note: "Right-to-left: 2 ** (3 ** 2) = 2 ** 9",
          },
        ],
      },
      {
        symbol: "* / %",
        name: "Multiply, Divide, Remainder",
        precedence: 15,
        associativity: "ltr",
        description: "Multiplication, division, and modulo operations",
        examples: [
          { code: "10 * 5", result: "50" },
          { code: "20 / 4", result: "5" },
          { code: "17 % 5", result: "2", note: "Remainder of 17 ÷ 5" },
          {
            code: "10 * 2 / 5",
            result: "4",
            note: "Left-to-right: (10 * 2) / 5",
          },
        ],
      },
      {
        symbol: "+ -",
        name: "Add, Subtract",
        precedence: 14,
        associativity: "ltr",
        description: "Addition and subtraction",
        examples: [
          { code: "5 + 3", result: "8" },
          { code: "10 - 7", result: "3" },
          { code: "5 + 3 * 2", result: "11", note: "Multiply first: 5 + 6" },
        ],
      },
    ],
  },
  {
    category: "🔀 Bitwise Shift",
    items: [
      {
        symbol: "<<",
        name: "Left Shift",
        precedence: 13,
        associativity: "ltr",
        description: "Shifts bits to the left (multiplies by 2^n)",
        examples: [
          { code: "5 << 1", result: "10", note: "Binary: 101 → 1010" },
          { code: "5 << 2", result: "20", note: "Binary: 101 → 10100" },
          { code: "1 << 3", result: "8", note: "Same as 1 * 2³" },
        ],
      },
      {
        symbol: ">>",
        name: "Right Shift",
        precedence: 13,
        associativity: "ltr",
        description: "Shifts bits to the right (divides by 2^n)",
        examples: [
          { code: "20 >> 1", result: "10", note: "Binary: 10100 → 1010" },
          { code: "20 >> 2", result: "5", note: "Binary: 10100 → 101" },
          { code: "8 >> 2", result: "2", note: "Same as Math.floor(8 / 4)" },
        ],
      },
      {
        symbol: ">>>",
        name: "Unsigned Right Shift",
        precedence: 13,
        associativity: "ltr",
        description: "Shifts bits right, fills with zeros",
        examples: [
          { code: "20 >>> 1", result: "10" },
          {
            code: "-5 >>> 0",
            result: "4294967291",
            note: "Converts to unsigned 32-bit",
          },
        ],
      },
    ],
  },
  {
    category: "⚖️ Comparison",
    items: [
      {
        symbol: "< <= > >=",
        name: "Relational",
        precedence: 12,
        associativity: "ltr",
        description: "Compares two values",
        examples: [
          { code: "5 > 3", result: "true" },
          { code: "10 <= 10", result: "true" },
          {
            code: "'a' < 'b'",
            result: "true",
            note: "Compares alphabetically",
          },
        ],
      },
      {
        symbol: "== != === !==",
        name: "Equality",
        precedence: 11,
        associativity: "ltr",
        description: "Checks if values are equal",
        examples: [
          { code: "5 === 5", result: "true", note: "Strict equality" },
          {
            code: "5 == '5'",
            result: "true",
            note: "Loose equality (converts types)",
          },
          { code: "5 === '5'", result: "false", note: "Different types" },
          { code: "null == undefined", result: "true" },
        ],
      },
    ],
  },
  {
    category: "🔧 Bitwise Logic",
    items: [
      {
        symbol: "&",
        name: "Bitwise AND",
        precedence: 10,
        associativity: "ltr",
        description: "Performs AND on each bit",
        examples: [
          { code: "5 & 3", result: "1", note: "Binary: 101 & 011 = 001" },
          { code: "12 & 10", result: "8", note: "Binary: 1100 & 1010 = 1000" },
        ],
      },
      {
        symbol: "^",
        name: "Bitwise XOR",
        precedence: 9,
        associativity: "ltr",
        description: "Performs XOR on each bit (exclusive OR)",
        examples: [
          { code: "5 ^ 3", result: "6", note: "Binary: 101 ^ 011 = 110" },
          { code: "12 ^ 10", result: "6", note: "Binary: 1100 ^ 1010 = 0110" },
        ],
      },
      {
        symbol: "|",
        name: "Bitwise OR",
        precedence: 8,
        associativity: "ltr",
        description: "Performs OR on each bit",
        examples: [
          { code: "5 | 3", result: "7", note: "Binary: 101 | 011 = 111" },
          { code: "12 | 10", result: "14", note: "Binary: 1100 | 1010 = 1110" },
        ],
      },
    ],
  },
  {
    category: "🧠 Logical",
    items: [
      {
        symbol: "&&",
        name: "Logical AND",
        precedence: 7,
        associativity: "ltr",
        description: "Returns true if both are true (short-circuits)",
        examples: [
          { code: "true && true", result: "true" },
          { code: "true && false", result: "false" },
          { code: "5 > 3 && 10 > 7", result: "true" },
          {
            code: "'hello' && 42",
            result: "42",
            note: "Returns last truthy value",
          },
        ],
      },
      {
        symbol: "||",
        name: "Logical OR",
        precedence: 6,
        associativity: "ltr",
        description: "Returns true if either is true (short-circuits)",
        examples: [
          { code: "false || true", result: "true" },
          { code: "false || false", result: "false" },
          {
            code: "null || 'default'",
            result: "'default'",
            note: "Returns first truthy value",
          },
          { code: "0 || 42", result: "42" },
        ],
      },
      {
        symbol: "??",
        name: "Nullish Coalescing",
        precedence: 5,
        associativity: "ltr",
        description: "Returns right side if left is null/undefined",
        examples: [
          { code: "null ?? 'default'", result: "'default'" },
          { code: "0 ?? 42", result: "0", note: "0 is not nullish" },
          {
            code: "'' ?? 'default'",
            result: "''",
            note: "Empty string is not nullish",
          },
        ],
      },
    ],
  },
  {
    category: "❓ Conditional",
    items: [
      {
        symbol: "? :",
        name: "Ternary",
        precedence: 4,
        associativity: "rtl",
        description: "Conditional expression (if-then-else)",
        examples: [
          { code: "true ? 'yes' : 'no'", result: "'yes'" },
          { code: "5 > 3 ? 'bigger' : 'smaller'", result: "'bigger'" },
          { code: "age >= 18 ? 'adult' : 'minor'", result: "Depends on age" },
        ],
      },
    ],
  },
  {
    category: "📝 Assignment",
    items: [
      {
        symbol: "=",
        name: "Assignment",
        precedence: 3,
        associativity: "rtl",
        description: "Assigns value to variable",
        examples: [
          { code: "x = 5", result: "x is now 5" },
          {
            code: "a = b = 10",
            result: "Both a and b are 10",
            note: "Right-to-left",
          },
        ],
      },
      {
        symbol: "+= -= *= /=",
        name: "Compound Assignment",
        precedence: 3,
        associativity: "rtl",
        description: "Operation + assignment combined",
        examples: [
          { code: "x += 5", result: "x = x + 5" },
          { code: "x *= 2", result: "x = x * 2" },
          { code: "x -= 3", result: "x = x - 3" },
        ],
      },
    ],
  },
  {
    category: "🎭 Special",
    items: [
      {
        symbol: "! ~ typeof",
        name: "Unary Operators",
        precedence: 17,
        associativity: "rtl",
        description: "Operators with single operand",
        examples: [
          { code: "!true", result: "false", note: "Logical NOT" },
          { code: "typeof 42", result: "'number'" },
          { code: "~5", result: "-6", note: "Bitwise NOT" },
          { code: "+'3'", result: "3", note: "Converts to number" },
        ],
      },
      {
        symbol: "++ --",
        name: "Increment/Decrement",
        precedence: "17-18",
        associativity: "both",
        description: "Adds or subtracts 1",
        examples: [
          { code: "x++", result: "Returns x, then adds 1", note: "Postfix" },
          { code: "++x", result: "Adds 1, then returns", note: "Prefix" },
          { code: "x--", result: "Returns x, then subtracts 1" },
        ],
      },
      {
        symbol: ",",
        name: "Comma",
        precedence: 1,
        associativity: "ltr",
        description: "Evaluates multiple expressions, returns last",
        examples: [
          {
            code: "x = (1, 2, 3)",
            result: "x = 3",
            note: "Returns last value",
          },
          { code: "a = 1, b = 2", result: "Declares multiple variables" },
        ],
      },
    ],
  },
];

function createOperatorCard(op) {
  return `
                <div class="operator-card" data-search="${op.name.toLowerCase()} ${op.symbol} ${op.description.toLowerCase()}">
                    <div class="operator-header">
                        <div class="operator-symbol">${op.symbol}</div>
                        <div class="precedence-badge">Level ${op.precedence}</div>
                    </div>
                    <div class="operator-name">${op.name}</div>
                    <div class="operator-description">${op.description}</div>
                    ${op.examples
                      .map(
                        (ex) => `
                        <div class="example-box">
                            <div class="code">${ex.code}</div>
                            <div class="result">→ ${ex.result}</div>
                            ${ex.note ? `<div style="margin-top: 5px; color: #666; font-size: 0.9em;">💡 ${ex.note}</div>` : ""}
                        </div>
                    `,
                      )
                      .join("")}
                    <div class="associativity ${op.associativity}">
                        ${op.associativity === "ltr" ? "➡Left-to-Right" : "Right-to-Left⬅"}
                    </div>
                </div>
            `;
}

function renderOperators() {
  const container = document.getElementById("operatorsContainer");
  let html = "";

  operators.forEach((category) => {
    html += `<h2 class="category-title">${category.category}</h2>`;
    html += '<div class="operator-grid">';
    category.items.forEach((op) => {
      html += createOperatorCard(op);
    });
    html += "</div>";
  });

  container.innerHTML = html;
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const cards = document.querySelectorAll(".operator-card");

  cards.forEach((card) => {
    const searchData = card.getAttribute("data-search");
    if (searchData.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

renderOperators();
