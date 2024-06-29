<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Panel</title>

  

  <#-- ===============BOOTSTRAP CDN LINKS [CSS, ICONS]=============== -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

  <#-- ===============STYLE-SHEETS LINKS [GENERAL, UTILITY]=============== -->
    <link rel="stylesheet" href="static/css/general.css">
    <link rel="stylesheet" href="static/css/utils.css">

</head>

<body class="grid-body-cols w-100 mx-aut text-bg-dark">

  <#--  ===============MENU-BAR===============  -->
  <#include "../components/admin-menu-bar.ftl" />


  <main class="bg-info bg-dark" style="grid-column: content-start / content-end;">
    <#--  ===============HEADER===============  -->
      <#include "../components/admin-header.ftl" />

    <#--  ===============ADMIN-CONTAINER===============  -->
      <#include "../components/admin-container.ftl" />
  </main>



  <#--  ===============BOOTSTRAP CDN LINK [JS]===============  -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
  </script>

  <#--  ===============COMPONENTS JS SOURCE===============  -->
  <script src="static/js/admin.js"></script>
  <script src="static/js/question-view-switch-buttons.js"></script>

</body>

</html>