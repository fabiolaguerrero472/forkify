let e="https://forkify-api.herokuapp.com/api/v2/recipes/",r=async function(e){try{let r=fetch(e),t=await Promise.race([r,new Promise(function(e,r){setTimeout(function(){r(Error("Request took too long! Timeout after 5 second"))},5e3)})]),s=await t.json();if(!t.ok)throw Error(`${s.message} (${t.status})`);return s}catch(e){throw e}},t={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10}},s=async function(s){try{let i=(await r(`${e}${s}`)).data.recipe;t.recipe={id:i.id,title:i.title,publisher:i.publisher,sourceUrl:i.source_url,image:i.image_url,servings:i.servings,cookTime:i.cooking_time,ingredients:i.ingredients}}catch(e){throw console.log(`${e} 💥💥💥💥`),e}},i=async function(s){try{t.search.query=s;let i=await r(`${e}?search=${s}`);t.search.results=i.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url})),t.search.page=1}catch(e){throw console.log(`${e} 💥💥💥💥`),e}},n=function(e=t.search.page){t.search.page=e;let r=(e-1)*t.search.resultsPerPage,s=e*t.search.resultsPerPage;return t.search.results.slice(r,s)};class a{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${{}}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let r=`
      <div class="error">
        <div>
          <svg>
            <use href="${{}}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(e=this._message){let r=`
      <div class="message">
        <div>
          <svg>
            <use href="${{}}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}var c={};function l(e,r,t,s,i){var n,a,c,l;let o=[2,3,5];if(!0===i)for(let r=3;r*r<=e;r+=2)e%r==0&&o.push(r);let u=0,p=e,d=r;for(;u<=o.length;)p%o[u]==0&&d%o[u]==0?(o[u],p/=o[u],d/=o[u]):u++;return n=d,a=p,c=t,l=s,1===n&&1===a?(c=`${l}${(parseInt(c)+1).toString()}`,`${c}`):0===a?`${l}${c}`:"0"==c?`${l}${a}/${n}`:`${l}${c} ${a}/${n}`}c=function(e){var r,t,s,i,n,a,c,o;let u,p;if(e<0?(e=Math.abs(e),u="-"):u="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${u}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${u}${e}`;if(e<1e-6)return"0";let d=e.toString(),h=d.split("."),_=h[0];if("0"==p&&"0"!==_)return _;if("0"==p&&"0"==_)return"0";if("99"==(p=d.length>=17?h[1].slice(0,h[1].length-1):h[1])&&"0"!==_)return`${_} 99/100`;if("99"==p&&"0"==_)return"99/100";if(1-parseFloat(`.${p}`)<.0011&&(p="999"),void 0==p)return _;let g=p.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!g||!(p.length>2)){return r=p,t=_,s=u,l(parseInt(r,10),Math.pow(10,r.length),t,s,!1)}{let e,r,t,s,d=g[0].split("").reverse().join(""),h=g[1].split("").reverse().join("");if(h.length>1){let e=h.split(""),r=1;for(let t=0;t<e.length;t++)r/=e[0]/e[t];1===r&&(h=e[0])}return h.length>1&&h.length%2==0&&(h=parseInt(h.slice(0,h.length/2),10)-parseInt(h.slice(h.length/2,h.length),10)==0?h.slice(0,h.length/2):h),i=p,n=h,a=d,c=_,o=u,r=Math.pow(10,e=i.length-a.length>=1?i.length-a.length:1),l(Math.round(((t=parseFloat(`0.${i}`))*(s=Math.pow(10,n.length))-t)*Math.pow(10,e)),(s-1)*r,c,o,!0)}};var o=new class extends a{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(r=>window.addEventListener(r,e))}_generateMarkup(){return`
      <figure class="recipe__fig">
        <img
          src="${this._data.image}"
          alt="${this._data.title}"
          class="recipe__img"
        />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${{}}#icon-clock"></use>
          </svg>

          <span class="recipe__info-data recipe__info-data--minutes">
            ${this._data.cookTime}
          </span>

          <span class="recipe__info-text">minutes</span>
        </div>

        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${{}}#icon-users"></use>
          </svg>

          <span class="recipe__info-data recipe__info-data--people">
            ${this._data.servings}
          </span>

          <span class="recipe__info-text">servings</span>
        </div>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>

        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(e=>{var r;return`
                <li class="recipe__ingredient">
                  <svg class="recipe__icon">
                    <use href="${{}}#icon-check"></use>
                  </svg>

                  <div class="recipe__quantity">
                    ${e.quantity?((r=c)&&r.__esModule?r.default:r)(e.quantity):""}
                  </div>

                  <div class="recipe__description">
                    <span class="recipe__unit">
                      ${e.unit}
                    </span>

                    ${e.description}
                  </div>
                </li>
              `}).join("")}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>

        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">
            ${this._data.publisher}
          </span>.
          Please check out directions at their website.
        </p>

        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>

          <svg class="search__icon">
            <use href="${{}}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}},u=new class{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value.trim();return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(r){r.preventDefault(),e()})}},p=new class extends a{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){return`
      <li class="preview">
        <a class="preview__link" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.image}" alt="${e.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${{}}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `}},d=new class extends a{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(r){let t=r.target.closest(".btn--inline");if(!t)return;let s=Number(t.dataset.goto);console.log(s),e(s)})}_generateMarkup(){let e=this._data.page,r=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&r>1?`
        <button
          data-goto="${e+1}"
          class="btn--inline pagination__btn--next"
        >
          <span>Page ${e+1}</span>

          <svg class="search__icon">
            <use href="${{}}#icon-arrow-right"></use>
          </svg>
        </button>
      `:e===r&&r>1?`
        <button
          data-goto="${e-1}"
          class="btn--inline pagination__btn--prev"
        >
          <svg class="search__icon">
            <use href="${{}}#icon-arrow-left"></use>
          </svg>

          <span>Page ${e-1}</span>
        </button>
      `:e<r?`
        <button
          data-goto="${e-1}"
          class="btn--inline pagination__btn--prev"
        >
          <svg class="search__icon">
            <use href="${{}}#icon-arrow-left"></use>
          </svg>

          <span>Page ${e-1}</span>
        </button>

        <button
          data-goto="${e+1}"
          class="btn--inline pagination__btn--next"
        >
          <span>Page ${e+1}</span>

          <svg class="search__icon">
            <use href="${{}}#icon-arrow-right"></use>
          </svg>
        </button>
      `:""}};o.addHandlerRender(async function(){try{let e=window.location.hash.slice(1);if(!e)return;o.renderSpinner(),await s(e),o.render(t.recipe)}catch(e){o.renderError()}}),u.addHandlerSearch(async function(){try{let e=u.getQuery();if(!e)return;p.renderSpinner(),await i(e),p.render(n()),d.render(t.search)}catch(e){p.renderError(),console.error(e)}}),d.addHandlerClick(function(e){p.render(n(e)),d.render(t.search)});
//# sourceMappingURL=forkify.9cb665cd.js.map
