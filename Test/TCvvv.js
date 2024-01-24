function longestValidParentheses(s) {
    let maxLen = 0;
    const stack = [-1];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLen;
}

// ทดสอบ
console.log(longestValidParentheses("(()"));        // 2
console.log(longestValidParentheses(")(0))"));      // 4
console.log(longestValidParentheses("()))))(()())(")); // 6
