import React from 'react';
import './Qna.css'

const Qna = () => {
    return (
        <div className='qna'>
            <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        How useState Works  ?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">As stated previously, useState enables you to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component.

       Whereas the state in a class is always an object, with Hooks, the state can be any type. Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type you can imagine.

       So when should you use the useState Hook? It’s especially useful for local component state, but larger projects might require additional state management solutions.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        How React Works ?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">One of the biggest benifit of using React is that you can infuse HTML code with JavaScript.

        Users can create a representation of a DOM node by declaring the Element function in React. The code below contains a combination of HTML and JavaScript . You may have noticed that the syntax of the HTML code above is similar to XML. That said, instead of using the traditional DOM class, React uses className</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Qna;