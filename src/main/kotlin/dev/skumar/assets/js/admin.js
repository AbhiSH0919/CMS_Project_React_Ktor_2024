"use-strict";

const queSetModal = document.querySelector(".queSetModal");

// =====QUESTION-SET-OPEN-IN-MODAL-WINDOW=====
const showModalQueSet = function (title) {
	//===FETCH-QUESTION-SET-OBJECT===
	const obj = [
		{
			title: "MS-Excel01",
			desc: "With supporting text below as a natural lead-in to additional content01",
			setQuestions: [
				{
					q: "question-01",
					opOne: "Op-01",
					opTwo: "Op-02",
					opTree: "Op-03",
					opFour: "Op-04",
				},
				{
					q: "question-02",
					opOne: "Op-01",
					opTwo: "Op-02",
					opTree: "Op-03",
					opFour: "Op-04",
				},
				{
					q: "question-03",
					opOne: "Op-01",
					opTwo: "Op-02",
					opTree: "Op-03",
					opFour: "Op-04",
				},
				{
					q: "question-04",
					opOne: "Op-01",
					opTwo: "Op-02",
					opTree: "Op-03",
					opFour: "Op-04",
				},
			],
		},

		{
			title: "MS-Excel02",
			desc: "With supporting text below as a natural lead-in to additional content02",
			setQuestions: [
				{
					q: "question-01",
					opOne: "Op-01",
					opTwo: "Op-02",
					opTree: "Op-03",
					opFour: "Op-04",
				},
				{
					q: "question-02",
					opOne: "Op-01",
					opTwo: "Op-02",
					opTree: "Op-03",
					opFour: "Op-04",
				},
				{
					q: "question-03",
					opOne: "Op-01",
					opTwo: "Op-02",
					opTree: "Op-03",
					opFour: "Op-04",
				},
				{
					q: "question-04",
					opOne: "Op-01",
					opTwo: "Op-02",
					opTree: "Op-03",
					opFour: "Op-04",
				},
			],
		},
	];

	const objData = obj.find((item) => item?.title === title); //===GET-CLICKED-SET-OBJECT===

	let html = ``;
	let card = "";

	if (!objData) html = "No Question set...!";
	else {
		//===LOOP-ON-QUESTION-SET-OBJECT===
		for (const item of objData?.setQuestions) {
			card += `
            <div class="card-color card p-4 border-2 border-secondary">
                <h5 class="card-title">${item.q}</h5>
                <ol class="d-flex flex-wrap my-3" start="1" type="A">
                    <li class="col-6">${item.opOne}</li>
                    <li class="col-6">${item.opTwo}</li>
                    <li class="col-6">${item.opTree}</li>
                    <li class="col-6">${item.opFour}</li>
                </ol>				        
            </div>			
            `;
		}

		html += `		
		<div class="text-center mb-3">
			<h3 class="fs-4">${objData.title}</h3>
			<p class="card-text">${objData.desc}</p>
		</div>

		<div class="question-set-container grid--1-cols grid--3-cols d-grid justify-content-center gap-4 w-100">
			${card}
			${card}
			${card}
			${card}
		</div>
		`;
	}

	queSetModal.innerHTML = `
	<button title="close" class="btn btn-secondary rounded-circle p-2 lh-1 fs-5 position-absolute end-0 top-0 mt-3 me-3" 		
		onclick="queSetModal.classList.remove('queSetModal-active'); queSetModal.innerHTML = '';">
		<i class="bi bi-x-lg"></i>
  	</button> ${html}`;

	queSetModal.classList.add("queSetModal-active");
};
