var currentQuestion = {};
var score = 0,
  playing = true,
  appStarted = false;

var questions = [
  {
    multipleAnswers: false,
    question: "What is a doctype?",
    choice1: "Instruction to the browser about the version of html document",
    choice2: "Puts the browser in Quirksmode for faster load times",
    choice3: "An old tag that is no longer needed in HTML5",
    choice4: "",
    answer: "Instruction to the browser about the version of html document",
    answerExplained:
      "DOCTYPE describes the HTML that will be used in your page.Browsers also use the DOCTYPE to determine how to render a page. Not including a DOCTYPE or including an incorrect DOCTYPE can trigger quirks mode."
  },
  {
    multipleAnswers: false,
    question: "What is the use of data- attribute?",
    choice1: "Used to link web pages together,",
    choice2: "Used to store browsing history informaton",
    choice3: "Allow you to store extra information/ data in the DOM.",
    choice4: "None of the above",
    answer: "Allow you to store extra information/ data in the DOM.",
    answerExplained:
      "Allow you to store extra information/ data in the DOM. Easily access data attribute by using javascript"
  },
  {
    multipleAnswers: false,
    question: "How can u highlight text in html?",
    choice1: "<mark>..</mark>",
    choice2: "<h>..</h>",
    choice3: "<light>..</light>",
    choice4: "<highlight>..</highlight>",
    answer: "<mark>..</mark>",
    answerExplained: "use mark element <mark>highlighted</mark>"
  },
  {
    multipleAnswers: false,
    question: "What is the difference between span and div?",
    choice1: "div is inline element and span is block level",
    choice2: "No difference both are block level",
    choice3: "div is a block element and span is inline elemen",
    choice4: "No such thing as a span element",
    answer: "div is a block element and span is inline element",
    answerExplained:
      "<a> tags are used to link web pages together, they require an href attribute."
  },
  {
    multipleAnswers: false,
    question: "Do all HTML tags have a closing tag?",
    choice1: "yes",
    choice2: "no",
    choice3: "",
    choice4: "",
    answer: "no",
    answerExplained:
      "There are some HTML tags that don't need a closing tag. For example: <image> tag, <br> tag"
  },
  {
    multipleAnswers: false,
    question: "How do you insert a copyright symbol on a browser page?",
    choice1: "just put a @",
    choice2: "&copy",
    choice3: "<copy>",
    choice4: "none of the above",
    answer: "&copy",
    answerExplained:
      "You can insert a copyright symbol by using &copy; or &#169; in an HTML file."
  },
  {
    multipleAnswers: false,
    question: "If I do not put <!DOCTYPE html> will HTML 5 work?",
    choice1: "No",
    choice2: "Yes",
    choice3: "",
    choice4: "",
    answer: "No",
    answerExplained:
      "No, the browser will not be able to identify that it is an HTML document and HTML 5 tags do not function properly"
  },
  {
    multipleAnswers: false,
    question: "What does a float do?",
    choice1: "Pushes elements to the bottom of the page",
    choice2: "Romoves elements from page",
    choice3:
      "Pushes an element to the sides of a page with text wrapped around it.",
    choice4: "Pushes elements to the center of the page",
    answer:
      "Pushes an element to the sides of a page with text wrapped around it.",
    answerExplained:
      "The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow "
  },
  {
    multipleAnswers: false,
    question:
      "CSS documents should be linked in the <head> section of a website.",
    choice1: "True",
    choice2: "False",
    choice3: "",
    choice4: "",
    answer: "True",
    answerExplained:
      "CSS documents should be linked to an html page in the <head> section of the page."
  },
  {
    multipleAnswers: false,
    question: "What are pseudo elements?",
    choice1: "Pseudo elements are used to style particular parts of an element",
    choice2: "Used to style block level elements",
    choice3: "Elements that dont use closing tags",
    choice4: "",
    answer: "Pseudo elements are used to style particular parts of an element",
    answerExplained:
      "Pseudo elements are used to style particular parts of an element, rather than the whole thing. For example, you can use it to style the first line or first letter of a paragraph, text you’ve selected, or you can use it to insert text or shapes before or after an element.They always start with a double colon - although a single colon is still allowed for backwards compatibility"
  },
  {
    multipleAnswers: false,
    question: "An ID should be used only once per page.",
    choice1: "True",
    choice2: "False",
    choice3: "",
    choice4: "",
    answer: "True",
    answerExplained:
      "An ID is a unique identifier that should only be used once per page.  A single html page can have multiple IDs but each ID should only be used once per page."
  },
  {
    multipleAnswers: false,
    question: "Is it  unwise to use IDs to target specific elements?",
    choice1: "True",
    choice2: "False",
    choice3: "",
    choice4: "",
    answer: "True",
    answerExplained:
      " True because IDs are higher specificity. And using it in many places can backfire late on when you end up trying to override those styles"
  },
  {
    multipleAnswers: false,
    question: "What are pseudo classes?",
    choice1: "Apply styles when an element is in a certain state",
    choice2: "Apply styles when an element is at the bootom of the page",
    choice3: "Apply styles to buttom elements",
    choice4: "",
    answer: "Apply styles when an element is in a certain state",
    answerExplained:
      "Pseudo classes are similar to pseudo elements, but instead of styling a part of an element, they apply styles when an element is in a certain state. For example, you could style a button differently based on whether the user has their mouse pointer over it, or when they click the button."
  },
  {
    multipleAnswers: false,
    question: "What does !important do?",
    choice1: "Highlights a elements",
    choice2: "Make that particular style have the highest specificity possible",
    choice3: "Make that particular style have the lowest specificity possible",
    choice4: "Make that particular style have the medium specificity",
    answer: "Make that particular style have the highest specificity possible",
    answerExplained:
      "Make that particular style have the highest specificity possible. Nothing else can override it, apart from another !important.things can get a bit messy if you use too many"
  },
  {
    multipleAnswers: false,
    question:
      "Which of the following is not a valid value for the CSS float property?",
    choice1: "left",
    choice2: "center",
    choice3: "right",
    choice4: "none",
    answer: "center",
    answerExplained:
      "The float property can be set to left, right or none. There is no float center."
  },
  {
    multipleAnswers: false,
    question: "What doe flexbox do?",
    choice1: "Helps align content along the z-axis",
    choice2: " very useful layout tool",
    choice3: "Adds margin to elements",
    choice4: "Adds padding to elements",
    answer: " very useful layout tool",
    answerExplained:
      "Flexbox is a very useful layout tool, especially for smaller areas within the site. Its main features are to align items in horizontal or vertical axes, space them out automatically, invert the order in which they’re displayed, along with a few other layout options."
  },
  {
    multipleAnswers: false,
    question: "What is a css preprocessor?",
    choice1: "Allow you to write more concise CSS",
    choice2: "Tool to process css into html",
    choice3: "Adds some features that don't exist in pure CSS",
    choice4: "Both 1 & 3",
    answer: "Both 1 & 3",
    answerExplained:
      "Allow you to write more concise CSS, split it up into multiple files and use a large number of very useful functions and mixins, along with variables.however most CSS preprocessors will add some features that dont exist in pure CSS, such as mixin, nesting selector, inheritance selector...etc. These features make the CSS structure more readable and easier to maintain"
  },
  {
    multipleAnswers: false,
    question:
      "The element is positioned relative to its first positioned (not static) ancestor element",
    choice1: "Absolute position",
    choice2: "Relative position",
    choice3: "Static position",
    choice4: "Fixed position",
    answer: "Absolute position",
    answerExplained: "The space outside of an element is margin."
  },
  {
    multipleAnswers: false,
    question:
      "Default value. Elements render in order, as they appear in the document flow",
    choice1: "Absolute position",
    choice2: "Relative position",
    choice3: "Static position",
    choice4: "Fixed position",
    answer: "Static position",
    answerExplained:
      "Default value. Elements render in order, as they appear in the document flow."
  },
  {
    multipleAnswers: false,
    question: "The element is positioned relative to the browser window",
    choice1: "Absolute position",
    choice2: "Relative position",
    choice3: "Static position",
    choice4: "Fixed position",
    answer: "Fixed position",
    answerExplained:
      "The element is removed from the normal document flow, and no space is created for the element in the page layout. It is positioned relative to the initial containing block established by the viewport"
  },
  {
    multipleAnswers: false,
    question:
      "The element is positioned relative to its normal position, so left:20px  adds 20 pixels to the elements LEFT position",
    choice1: "Absolute position",
    choice2: "Relative position",
    choice3: "Static position",
    choice4: "Fixed position",
    answer: "Relative position",
    answerExplained:
      "The element is positioned according to the normal flow of the document, and then offset relative to itself based on the values of top, right, bottom, and left. The offset does not affect the position of any other elements;"
  },
  {
    multipleAnswers: false,
    question: "The element is positioned based on the user's scroll position",
    choice1: "Absolute position",
    choice2: "Relative position",
    choice3: "sticky position",
    choice4: "Fixed position",
    answer: "sticky position",
    answerExplained:
      "A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it sticks in place (like position:fixed)."
  },
  {
    multipleAnswers: false,
    question:
      "What css declaration makes an element factor padding and border size values in defined width and/or height?",
    choice1: "box-model: fix;",
    choice2: "box-content: full;",
    choice3: "border-box: box-full;",
    choice4: "box-sizing: border-box;",
    answer: "box-sizing: border-box;",
    answerExplained:
      "box-sizing: border-box; can be given to an element so that padding and border size are factored in a defined width."
  },
  {
    multipleAnswers: false,
    question:
      " _____ removes the element from the normal layout flow and allow other elements to fill in.",
    choice1: "display: none",
    choice2: "visibility: hidden",
    choice3: "",
    choice4: "",
    answer: "display: none",
    answerExplained:
      "Display: none means that the tag in question will not appear on the page at all (although you can still interact with it through the dom). There will be no space allocated for it between the other tags."
  },
  {
    multipleAnswers: false,
    question: "When giving an element width: 100%; it will...",
    choice1: "display: none",
    choice2: "visibility: hidden",
    choice3: "",
    choice4: "",
    answer: "visibility: hidden",
    answerExplained:
      "visibility:hidden means that unlike display:none, the tag is not visible, but space is allocated for it on the page. The tag is rendered, it just isn't seen on the page."
  },
  {
    multipleAnswers: false,
    question:
      "____elements do not break the flow of the page. You are able to set a width and a height",
    choice1: "Inline block",
    choice2: "Block",
    choice3: "inline",
    choice4: "",
    answer: "Inline block",
    answerExplained:
      "An element set to inline-block is very similar to inline in that it will set inline with the natural flow of text. The difference is that you are able to set a width and height which will be respected."
  },
  {
    multipleAnswers: false,
    question: "______ elements do not sit inline but break past them.",
    choice1: "Inline block",
    choice2: "Block",
    choice3: "inline",
    choice4: "",
    answer: "Block",
    answerExplained:
      "A number of elements are set to block by the browser UA stylesheet. They are usually container elements, like <div>, <section>, and <ul>. Also text like <p> and <h1>. Block level elements do not sit inline but break past them. By default (without setting a width) they take up as much horizontal space as they can."
  },
  {
    multipleAnswers: false,
    question:
      " _____ element will go with the flow of the page. and will take height and width.",
    choice1: "Inline block",
    choice2: "Block",
    choice3: "inline",
    choice4: "",
    answer: "inline",
    answerExplained:
      "The default value for elements. Think of elements like <span>, <em>, or <b> and how wrapping text in those elements within a string of text doesn't break the flow of the text."
  },
  {
    multipleAnswers: false,
    question:
      "In CSS what declaration can horizontally center a block level element?",
    choice1: "text-align: center;",
    choice2: "margin: auto;",
    choice3: "align: middle;",
    choice4: "please: center;",
    answer: "margin: auto;",
    answerExplained:
      "Block level elements can be horizontally centered using margin: auto; this would put automatic margin on the left and right sides of the element horizontally centering it within its parent."
  },
  {
    multipleAnswers: false,
    question: "Does overflow: hidden create a new block formatting context?",
    choice1: "Yes",
    choice2: "No",
    choice3: "",
    choice4: "",
    answer: "Yes",
    answerExplained:
      "Yes overflow property deals with the content if content size exceeds the allocated size for the content. You can make extra content visible, hidden, scroll or auto (viewport default behavior)"
  },
  {
    multipleAnswers: false,
    question:
      "What CSS declaration would change the color of text within an element to purple?",
    choice1: "text-color: purple;",
    choice2: "font-color: purple;",
    choice3: "color: purple;",
    choice4: "color-text: purple;",
    answer: "color: purple;",
    answerExplained:
      "To change the color of the text within an element you would use the css declaration color: purple;"
  },
  {
    multipleAnswers: false,
    question: " what is event delegation",
    choice1: "technique involving adding event listeners to a parent element",
    choice2: "technique involving removing event listeners to a parent element",
    choice3: "",
    choice4: "",
    answer: "technique involving adding event listeners to a parent element",
    answerExplained:
      "Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements. The listener will fire whenever the event is triggered on the descendant elements due to event bubbling up the DOM"
  },
  {
    multipleAnswers: false,
    question: "Select the correct IIFE (immediately invoked function)",
    choice1: "()function foo(){}",
    choice2: "()()function foo{}",
    choice3: "(function foo(){ }())",
    choice4: "function(foo){}",
    answer: "(function foo(){ }())",
    answerExplained:
      "An Immediately-invoked Function Expression is a way to execute functions immediately, as soon as they are created. IIFEs are very useful because they don't pollute the global object, and they are a simple way to isolate variables declarations"
  },
  {
    multipleAnswers: false,
    question:
      "Iterates through the elements in an array. Executes a callback for each element. Does not return a value",
    choice1: "map",
    choice2: "foreach",
    choice3: "",
    choice4: "",
    answer: "foreach",
    answerExplained:
      "foreach Iterates through the elements in an array. Executes a callback for each element. Does not return a value"
  },
  {
    multipleAnswers: false,
    question:
      "Iterates through the elements in an array creating a new array as a result.",
    choice1: "map",
    choice2: "foreach",
    choice3: "",
    choice4: "",
    answer: "map",
    answerExplained:
      "map Iterates through the elements in an array. 'Maps' each element to a new element by calling the function on each element, creating a new array as a result."
  },
  {
    multipleAnswers: false,
    question: "Abstract equality operator",
    choice1: "==",
    choice2: "===",
    choice3: "",
    choice4: "",
    answer: "==",
    answerExplained:
      "==  operator will compare for equality after doing any necessary type conversions"
  },
  {
    multipleAnswers: false,
    question: "Strict equality operator",
    choice1: "==",
    choice2: "===",
    choice3: "",
    choice4: "",
    answer: "===",
    answerExplained:
      "===  operator will not do type conversion, so if two values are not the same type === will simply return false."
  },
  {
    multipleAnswers: false,
    question:
      " variables are created when you assign a value to an identifier that is not previously created using var, let or const",
    choice1: "null",
    choice2: "undefined",
    choice3: "undeclared",
    choice4: "",
    answer: "undeclared",
    answerExplained:
      "A variable is undeclared when it does not use the var keyword. It gets created on the global object (that is, the window), thus it operates in a different space as the declared "
  },
  {
    multipleAnswers: false,
    question: "variable that has been declared, but not assigned a value.",
    choice1: "null",
    choice2: "undefined",
    choice3: "undeclared",
    choice4: "",
    answer: "undefined",
    answerExplained:
      "Undefined is a variable that has been declared, but not assigned a value. It is of type undefined. If a function does not return any value as the result of executing it is assigned to a variable, the variable also has the value of undefined"
  },
  {
    multipleAnswers: false,
    question:
      " It represents no value and is different from undefined in the sense that it has been explicitly assigned",
    choice1: "null",
    choice2: "undefined",
    choice3: "undeclared",
    choice4: "",
    answer: "null",
    answerExplained:
      "value null is written with a literal: null. null is not an identifier for a property of the global object, like undefined can be. Instead, null expresses a lack of identification, indicating that a variable points to no object. In APIs, null is often retrieved in a place where an object can be expected but no object is relevant. "
  },
  {
    multipleAnswers: false,
    question: "abstract equality operator",
    choice1: "==",
    choice2: "===",
    choice3: "",
    choice4: "",
    answer: "==",
    answerExplained:
      "==  operator will compare for equality after doing any necessary type conversions"
  }
];

var savedQuestions = questions.slice();

var shuffleArray = function(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

var cleanHTMLString = function(str) {
  str = str.split("");
  for (var x = 0; x < str.length; x++) {
    if (str[x] == "<") {
      str[x] = "&lt;";
    } else if (str[x] == ">") {
      str[x] = "&gt;";
    }
  }
  str = str.join("");
  return str;
};

var createEasyEl = function(elType, clsNames) {
  var ee = document.createElement(elType);
  if (Array.isArray(clsNames)) {
    for (var x = 0; x < clsNames.length; x++) {
      ee.classList.add(clsNames[x]);
    }
  } else if (typeof clsNames == "string") {
    ee.classList.add(clsNames);
  }
  return ee;
};

var listenForUserChoice = function(e) {
  if (playing) {
    if (e.target.classList.contains("chosen")) {
      e.target.classList.remove("chosen");
    } else if (e.target.classList.contains("choice")) {
      if (!currentQuestion.multipleAnswers) {
        var choiceEls = document.querySelectorAll(".choice");
        for (var x = 0; x < choiceEls.length; x++) {
          if (choiceEls[x].classList.contains("chosen")) {
            choiceEls[x].classList.remove("chosen");
          }
        }
        e.target.classList.add("chosen");
      }
    }
  } else {
    if (!document.querySelector("#main-btn").classList.contains("wiggle")) {
      document.querySelector("#main-btn").classList.add("wiggle");
      setTimeout(function() {
        document.querySelector("#main-btn").classList.remove("wiggle");
      }, 500);
    }
  }
};

var testUserSubmit = function() {
  if (playing && document.body.contains(document.querySelector(".chosen"))) {
    playing = false;

    if (!currentQuestion.multipleAnswers) {
      var choice = "";
      choice = document.querySelector(".chosen").innerHTML;

      if (choice == cleanHTMLString(currentQuestion.answer)) {
        document.querySelector(".question-feedback").innerHTML =
          "Correct! <br>";
        document
          .querySelector(".question-feedback")
          .classList.add("question-right");
        document.querySelector("#score-holder").classList.remove("red-custom");
        score++;
      } else {
        questions.push(currentQuestion);
        document.querySelector(".question-feedback").innerHTML =
          "< error > incorrect! < / error > <br> ";
        document
          .querySelector(".question-feedback")
          .classList.add("question-wrong");
        document.querySelector("#score-holder").classList.add("red-custom");
        document.querySelector(".chosen").classList.add("red-custom2");

        if (score > 0) {
          score--;
        }
      }

      document.querySelector("#score-holder").innerHTML = score;

      document.querySelector(".question-feedback").innerHTML += cleanHTMLString(
        currentQuestion.answerExplained
      );

      document.querySelector("#main-btn").innerHTML = "Next Question";
    }
  } else if (
    playing &&
    !document.body.contains(document.querySelector(".chosen"))
  ) {
    if (
      !document
        .querySelector(".question-container-choices")
        .classList.contains("wiggle")
    ) {
      document
        .querySelector(".question-container-choices")
        .classList.add("wiggle");
      setTimeout(function() {
        document
          .querySelector(".question-container-choices")
          .classList.remove("wiggle");
      }, 500);
    }
  } else if (!playing) {
    questions.shift();
    startNewQuestion();
  }
};

var createQuestion = function(obj) {
  var question, feedback, choices;
  playing = true;

  document.querySelector("#main-btn").innerHTML = "Submit Answer";
  document.querySelector("#question-container").innerHTML = "";
  question = createEasyEl("p", "question-container-question");
  question.innerHTML = cleanHTMLString(obj.question);
  document.querySelector("#question-container").appendChild(question);

  feedback = createEasyEl("div", "question-feedback");
  feedback.id = "feedback";
  document.querySelector("#question-container").appendChild(feedback);

  choices = createEasyEl("ol", "question-container-choices");
  for (var x = 0; x < 4; x++) {
    var answerEl = createEasyEl("li", "choice");
    var current = "choice" + (x + 1);
    if (obj[current] != "") {
      answerEl.innerHTML = cleanHTMLString(obj[current]);
      choices.appendChild(answerEl);
    }
  }
  choices.addEventListener("click", this.listenForUserChoice, false);
  document.querySelector("#question-container").appendChild(choices);
};

var startNewQuestion = function() {
  if (questions.length > 0) {
    currentQuestion = questions[0];
    createQuestion(currentQuestion);
  } else {
    var el = this.createEasyEl("p", "question-container-question");
    el.innerHTML = "You finished!<br>Your final score is " + score + "!";
    document.querySelector("#question-container").innerHTML = "";
    document.querySelector("#question-container").appendChild(el);
    document.querySelector("#main-btn").addEventListener("click", start, false);
    document.querySelector("#main-btn").innerHTML = "Restart";
  }
};

var start = function() {
  score = 0;
  document.querySelector("#score-holder").innerHTML = score;
  questions = savedQuestions.slice();
  document
    .querySelector("#main-btn")
    .removeEventListener("click", start, false);
  questions = shuffleArray(questions);
  document
    .querySelector("#main-btn")
    .addEventListener("click", testUserSubmit, false);
  startNewQuestion();
};

document.querySelector("#main-btn").addEventListener("click", start, false);
