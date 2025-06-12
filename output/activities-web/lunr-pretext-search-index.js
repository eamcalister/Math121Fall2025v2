var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "   Last Updated:       "
},
{
  "id": "activity-template",
  "level": "1",
  "url": "activity-template.html",
  "type": "Worksheet",
  "number": "",
  "title": "Activity Title",
  "body": " Activity Title   This is the introduction to the activity.     This is the first exercise.    "
},
{
  "id": "activity-template-3",
  "level": "2",
  "url": "activity-template.html#activity-template-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  This is the first exercise.   "
},
{
  "id": "Activity-title",
  "level": "1",
  "url": "Activity-title.html",
  "type": "Worksheet",
  "number": "",
  "title": "Week 2 - Section 6.1 Continued",
  "body": " Week 2 - Section 6.1 Continued  Linear and Quadratic Functions as Shifts and Stretches  The families of all linear and quadratic functions can each be built using simpler functions: (for positive values of ) and (for positive values of ), for linear and quadratic functions, respectively. What does this mean exactly? It means every linear function is a shift and\/or reflection of and every quadratic function is a shift and\/or reflection of . In this worksheet we'll explore this idea.      Consider the problem: find a linear function with slope whose -intercept is at .    Find the formula for and sketch a graph of it.                  The function you found is a vertical shift of a simpler function. Which simpler function is it? Explain in your own words and show this simpler function in your graph.      Now suppose that instead of having a -intercept at , we want a function that passes through the point . What additional transformation needs to be applied to your basic function from part (b)? Find the formula for this transformation and graph it. How else have we described this formula for a linear function?          The graph below shows the graph of and a another parabola that is the result of some sequence of transformations of .    Describe the transformations applied to , in order, to obtain . (There are three of them and the order they're performed matters.)       f(x) = x^2  g(x) = -(x-5)^2+3    \\   f(x)  g(x)            Find the formula for based on your answer to (a). What form of a quadratic function is this?      Suppose you take and reflect its graph across the -axis, then reflect it across the -axis resulting in a new function .  i  Sketch the graph of on the given axes.   ii  How can you obtain the graph of as transformations of (without going to first)?             Another way to find the vertex of a quadratic using simpler functions and shifts. Let's see it through an example. Consider the function   We can write this as a vertical shift of the function upward by units. Notice that   Notice that (from which came) has easily identified zeros at and . It's vertex lies halfway between them at . Then we can compute the -value of this vertex to be Thus, the vertex of is units higher at . So the vertex form of is  Your task: Use the idea from the above example to put the function into vertex form.     "
},
{
  "id": "Activity-title-3-1",
  "level": "2",
  "url": "Activity-title.html#Activity-title-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Consider the problem: find a linear function with slope whose -intercept is at .    Find the formula for and sketch a graph of it.                  The function you found is a vertical shift of a simpler function. Which simpler function is it? Explain in your own words and show this simpler function in your graph.      Now suppose that instead of having a -intercept at , we want a function that passes through the point . What additional transformation needs to be applied to your basic function from part (b)? Find the formula for this transformation and graph it. How else have we described this formula for a linear function?     "
},
{
  "id": "Activity-title-4-1",
  "level": "2",
  "url": "Activity-title.html#Activity-title-4-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  The graph below shows the graph of and a another parabola that is the result of some sequence of transformations of .    Describe the transformations applied to , in order, to obtain . (There are three of them and the order they're performed matters.)       f(x) = x^2  g(x) = -(x-5)^2+3    \\   f(x)  g(x)            Find the formula for based on your answer to (a). What form of a quadratic function is this?      Suppose you take and reflect its graph across the -axis, then reflect it across the -axis resulting in a new function .  i  Sketch the graph of on the given axes.   ii  How can you obtain the graph of as transformations of (without going to first)?        "
},
{
  "id": "Activity-title-5-1",
  "level": "2",
  "url": "Activity-title.html#Activity-title-5-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Another way to find the vertex of a quadratic using simpler functions and shifts. Let's see it through an example. Consider the function   We can write this as a vertical shift of the function upward by units. Notice that   Notice that (from which came) has easily identified zeros at and . It's vertex lies halfway between them at . Then we can compute the -value of this vertex to be Thus, the vertex of is units higher at . So the vertex form of is  Your task: Use the idea from the above example to put the function into vertex form.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
