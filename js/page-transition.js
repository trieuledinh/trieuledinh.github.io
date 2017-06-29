// the number of slices
02
slicesCountX: 6,
03
slicesCountY: 5,
04
 
05
// perspective
06
perspective: '2000px',
07
 
08
// rotate speed
09
speed: 500,
10
 
11
// duation type, defines the time of different slices starts to
12
// rotate according to their x and y coodiates
13
duration: function(x, y) {
14
    return (x + y) * 150;
15
},
16
 
17
// the orientation of the slices, h for horizontal and v for vertical
18
orientation: 'v',
19
 
20
// the element selector of the pages
21
el: 'section',
22
 
23
// the hook functions
24
beforeTurn: function() {
25
    console.log("before turn");
26
},
27
afterTurn: function() {
28
    console.log("after turn");
29
}
