<script setup>
import Footer from './components/Footer.vue';
import Jumbotron from './components/JumboTron.vue';
import SkillTree from './components/SkillTree.vue';
import Test from './components/Test.vue'
import Projects from './components/Projects.vue';
import DarkToggle from './components/DarkToggle.vue';
import Header from './components/Header.vue';
</script>

<template>
<DarkToggle/>
<Jumbotron/>
<Test/>
<SkillTree/>
<Projects/>
<Footer class="sticky bottom-0 p-1"/>
</template>

