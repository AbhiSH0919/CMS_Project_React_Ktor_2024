<div class="admin-container question-set-outter d-flex flex-column gap-4 p-4">

    <div class="text-center my-2">
        <h2 class="fs-3">
            ${'Question Sets'}
        </h2>
    </div>


    <#include "../components/question-view-switch-buttons.ftl" />
    <#-- <#include "../components/question-view-switch-buttons.ftl" /> -->


    <div class="question-set-container grid--1-cols grid--3-cols d-grid justify-content-center gap-4">


        <#list sets as set>
            <#include "../components/question-set-card.ftl" />
        </#list>

    </div>

    <#-- Scrollable modal -->
        <div class="queSetModal question-set-outter p-3 d-flex flex-column align-items-center gap-4 overflow-y-scroll bg-dark">

        </div>

</div>