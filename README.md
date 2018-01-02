# rx-stresstest
A simple stress test to see overhead difference when using observables vs. standard arrays

# Installation
`npm install`

# How to run tests
1. Open the file `test.js` and configure `arraySize` and `arrays` to values you wish to test it on.
2. Using a Terminal or command prompt, run `node test` to check results for imperative (standard arrays).
3. Run `node test rx` for rxjs implementation (observables).
4. Record heap usage as array size or arrays increase/decrease.
5. Plot it over a graph.

# What now?
Supposedly by increasing `arrays` into the thousands or hundred thousands, and limiting `arraySize` to say 20,
we can distinctly see the overhead of the observable wrapper.

# Initial results

These were [the results that I found](https://docs.google.com/spreadsheets/d/100raYuBePxn9cJvfbRNmqJbyElw1_e3Ru2Evg5vnftQ/edit?usp=sharing).

So based on the results, I'm assuming that when dealing with a million (1e6) observable sequences with an average of 20 emissions 
(or elements), I actually introduced 47 Mb of overhead for the observable wrapper, holding a total of 270 Mb (223 Mb if imperative).
