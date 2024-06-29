"use-strict";

// const questionsContainer = document.querySelector(".question-set-container");

// =====QUESTION-SET-VIEW-SWITCHING=====
const questionView = function (e) {
	const questionView = e.closest(".question-view");
	const listView = questionView.querySelector(".list-view");
	const gridView = questionView.querySelector(".grid-view");
	const questionsContainer = questionView
		.closest(".question-set-outter")
		.querySelector(".grid--1-cols");

	questionView.addEventListener("click", function (e) {
		if (e.target.closest(".list-view")) {
			questionsContainer?.classList.remove("grid--3-cols");
			gridView.classList.remove("active");
			listView.classList.add("active");
		} else if (e.target.closest(".grid-view")) {
			questionsContainer?.classList.add("grid--3-cols");
			gridView.classList.add("active");
			listView.classList.remove("active");
		}
	});
};
