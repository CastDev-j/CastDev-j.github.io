---
title: "Power Series Application for Algorithm Runtime Analysis"
summary: "This project demonstrates the application of power series to model the runtime of algorithms based on input size, using Taylor series expansion."
date: "Nov 28 2024"
draft: false
tags:
  - HTML
  - CSS
  - JavaScript
  - Tailwind
demoUrl: https://castdev-j.github.io/ejercicio-calculo/
repoUrl: https://github.com/CastDev-j/ejercicio-calculo
---

### About the Project  
This project involves modeling the runtime of an algorithm based on input size using power series. The runtime can be expressed as a Taylor series.

### Key Steps  
1. **Determine the Runtime Function**: Assume the runtime has the form \( T(n) = a_0 + a_1 n + a_2 n^2 + a_3 n^3 + \ldots \).
2. **Determine Coefficients via Derivatives**: Coefficients are obtained from the derivatives of \( T(n) \) evaluated at \( n = 0 \).
     - **First Term**: \( T(0) = 2 \) ms.
     - **Second Term**: \( T'(0) = 3 \).
     - **Third Term**: \( T''(0) = 2 \).
     - **Fourth Term**: \( T'''(0) = 1.5 \).

### Power Series Expansion  
Substitute the coefficients into the Taylor series:
\[ T(n) = 2 + 3n + \frac{1}{2} n^2 + \frac{1}{6} n^3 \]

### Approximate Runtime for \( n = 5 \)  
\[ T(5) = 2 + 3(5) + \frac{1}{2}(5^2) + \frac{1}{6}(5^3) \]
\[ T(5) \approx 39.92 \text{ ms} \]

### Conclusion  
Using power series, we can approximate the runtime of an algorithm based on input size. This method provides an effective approximation for analyzing and optimizing algorithms in computer engineering.

### Contributions
Contributions are welcome. If you have any ideas to improve the application or find any bugs, please open an **issue** or send a **pull request** in the GitHub repository.

---

Thank you for exploring this project! If you have any questions or suggestions, feel free to open an **issue** or contact directly.
