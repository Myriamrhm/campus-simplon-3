<template>
    <div>
              <p>
        SQL tips :<br>
        https://dev.mysql.com/doc/refman/8.0/en/integer-types.html
      </p>
      <hr>
      <p>
        Node app:<br>  
        https://github.com/foreverjs/forever<br>
      </p>
      <hr>
      <h3 class="title">liste des dépendances</h3>
      <ul style="text-align: left;">
        <li>forever -g</li>
        <li>axios --save</li>
        <li>cors </li>
        <li>express </li>
        <li>multer </li>
      </ul>
      <hr>
      <h3 class="title">@package.json</h3>
      <pre style="text-align: left; white-space: pre-line;">
      "scripts": {
        "server": "forever --minUptime 1000 --spinSleepTime 1000 -w -v -f src/server.js",
        "serve": "vue-cli-service serve",
        "start": "npm run server &amp; npm run serve",
        "build": "vue-cli-service build",
        "lint": "vue-cli-service lint",
        "test:unit": "vue-cli-service test:unit"
      },
      </pre>
      <hr>
      <p>
        Challenger upload/download<br>
        1 / coder un composant qui récupère tous les fichiers du dossier upload et les affiche dans une liste html.<br>
        2 / à chaque upload, insérer le chemin du fichier uploadé en base.
      </p>
      <hr>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
