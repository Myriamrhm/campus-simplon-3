<template>
    <ul>
      <li v-for="(word, i) in words" :key="i">
        <span>{{ word }}</span>
        <hr>
        <ul>
          <li v-for="(letter, j) in word" :key="j">{{letter}}</li>
        </ul>
      </li>
    </ul>
</template>
<script>
export default {
    props: ["words"]
}
</script>

