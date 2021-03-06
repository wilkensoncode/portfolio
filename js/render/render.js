import {
  works
} from '../data/data.js';

const projects = document.querySelector('.allProjects');

showProjects();

function showProjects() {
  works.map(function (work) {
    const html = `         
      <div class="mb-1 mx-auto">
        <a href="${work.url}" target="_blank">
          <div class="card mr-1 p-hover" style="width: 15rem;">
            <img src="img/project${work.id}.png" class="card-img-top" alt="project"/>
          <div class="card-body ">        
          <a href="${work.link}" target="_blank" class="btn-c btn btn-primary bg-dark rounded-pill col-6 mb-1"><i
            class="bi bi-github"></i>Code
          </a>
          <a href="${work.url}" target="_blank" 
                class="btn-c btn btn-primary bg-dark rounded-pill mb-1">
                <i class="bi bi-eye"></i>
                Live
          </a>         
          <p class="card-text text-dark d-flex justify-content-center pb-1">
            ${work.stack}    
          </p>
          <p class="card-text text-dark d-flex justify-content-center pb-1">
            ${work.description}    
          </p>
        </a>
      </div>   
  `;
    projects.insertAdjacentHTML('beforeend', html);
  });
}