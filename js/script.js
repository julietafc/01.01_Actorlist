/* <article>
<h2 class="fullname"></h2>
<p class="movie"></p>
</article> */

const url = "json/actors.json";

fetch(url)
  .then(function (rest) {
    return rest.json();
  })
  .then(function (data) {
    handleActorList(data);
  });

function handleActorList(data) {
  console.log(data);
  data.forEach(showActor);
}

function showActor(actor) {
  //grab the template
  const template = document.querySelector("#actorCard").content;
  // clone it
  const copy = template.cloneNode(true);
  // change content
  copy.querySelector(".fullname").textContent = `${actor.fullname}`;
  copy.querySelector(".movie").textContent = `${actor.movie}`;
  copy.querySelector(".actor").addEventListener("click", openModal);
  // grab parent
  const parent = document.querySelector("#actorsList");
  // append
  parent.appendChild(copy);
}
