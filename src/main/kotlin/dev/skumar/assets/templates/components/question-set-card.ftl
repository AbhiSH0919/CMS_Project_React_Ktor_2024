<#-- <div class="card" style="flex: 1; min-width: 15rem; max-width: 20rem; height: auto;">
    <div class="card-body">
        <h5 class="card-title">${set.title}</h5>
        <p class="card-text">${set.description}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div> -->



    <div class="card-color card border-2 border-secondary">
        <div class="card-body">
            <#assign title="${set.title}">

                <h5 class="card-title">${title}</h5>
                <p class="card-text">${set.description}</p>
                <button class="btn btn-primary" onclick='showModalQueSet(`${title}`)'>Open now</button>
        </div>
    </div>